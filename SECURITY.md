# Security Policy

## Reporting Security Issues

Please do not report security vulnerabilities through public GitHub issues. 
Instead use our secure contact form on the website:
[Security Contact Form](https://princeaiautomation.netlify.app/contact)

## Handling Dependencies & Vulnerabilities

This project includes tools and procedures to manage security vulnerabilities in dependencies.

### Checking for Vulnerabilities

To check for vulnerabilities in the project:

```bash
npm run security-check
```

### Fixing Vulnerabilities

To automatically fix vulnerabilities when possible:

```bash
npm run security-fix
```

This script will:
1. Run `npm audit fix` to automatically fix issues when possible
2. Update specific packages known to have vulnerabilities
3. Regenerate package-lock.json for better dependency resolution
4. Show a final audit report

### Handling Persistent Vulnerabilities

Some vulnerabilities may persist because:
- They exist in development dependencies only
- Fixing them requires breaking changes
- They are in nested dependencies that can't be directly updated

For production deployment, you may need to run:

```bash
npm audit fix --force
```

⚠️ **Note:** This may cause breaking changes. Always test thoroughly after running this command.

### Security Best Practices

1. **Data Protection**:
   - End-to-end encryption for sensitive data
   - Regular security audits
   - Access control implementation
   - Secure data handling

2. **Development Security**:
   - Regular dependency updates
   - Security scanning in CI/CD
   - Code signing for deployments
   - Protected branch policies

3. **Keep dependencies updated**:
   ```bash
   npm update
   ```

4. **Regularly check for vulnerabilities**:
   ```bash
   npm audit
   ```

5. **Use package lockfiles**:
   Our project is configured to always use package-lock.json

6. **Pin dependency versions**:
   We use exact versions for dependencies to avoid unexpected updates
