# Security Policy

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

1. **Keep dependencies updated**:
   ```bash
   npm update
   ```

2. **Regularly check for vulnerabilities**:
   ```bash
   npm audit
   ```

3. **Use package lockfiles**:
   Our project is configured to always use package-lock.json

4. **Pin dependency versions**:
   We use exact versions for dependencies to avoid unexpected updates

## Reporting Security Issues

If you discover a security vulnerability within this project, please send an email to uwagboe.o.p@gmail.com. All security vulnerabilities will be promptly addressed.
