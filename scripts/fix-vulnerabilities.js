const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Fixing vulnerabilities in project dependencies...');

try {
  // First install the correct dependencies
  console.log('\nInstalling dependencies...');
  try {
    execSync('npm install', { stdio: 'inherit' });
    console.log('Dependencies installed successfully.');
  } catch (installError) {
    console.error('Error installing dependencies:', installError.message);
    console.log('Attempting to fix package.json issues and continue...');
    
    // Check if package.json exists
    const packageJsonPath = path.join(process.cwd(), 'package.json');
    if (fs.existsSync(packageJsonPath)) {
      try {
        // Read and fix package.json
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
        
        // Replace formspree with @formspree/react if it exists
        if (packageJson.dependencies && packageJson.dependencies.formspree) {
          console.log('Replacing formspree with @formspree/react in package.json');
          packageJson.dependencies['@formspree/react'] = packageJson.dependencies.formspree;
          delete packageJson.dependencies.formspree;
          
          // Save the fixed package.json
          fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
          
          // Try installing again
          console.log('Trying to install dependencies again...');
          execSync('npm install', { stdio: 'inherit' });
          console.log('Dependencies installed successfully after fixing package.json.');
        }
      } catch (fixError) {
        console.error('Failed to fix package.json and install dependencies:', fixError.message);
        console.log('Please manually fix your package.json file and try again.');
        process.exit(1);
      }
    }
  }
  
  // Run npm audit fix
  console.log('\nRunning npm audit fix...');
  try {
    execSync('npm audit fix', { stdio: 'inherit' });
  } catch (auditError) {
    console.log('Some issues could not be automatically fixed, continuing with updates...');
  }
  
  // Update specific packages
  console.log('\nUpdating potentially vulnerable packages...');
  const packagesToUpdate = [
    'postcss',
    'react-scripts',
    'terser',
    'nth-check',
    'semver',
    'json5',
    'loader-utils',
    'minimatch'
  ];
  
  console.log(`Updating packages: ${packagesToUpdate.join(', ')}`);
  try {
    execSync(`npm update ${packagesToUpdate.join(' ')}`, { stdio: 'inherit' });
  } catch (updateError) {
    console.log('Some packages could not be updated, but we can continue.');
  }
  
  // Final audit
  console.log('\nRunning final npm audit to check remaining issues...');
  try {
    execSync('npm audit', { stdio: 'inherit' });
  } catch (finalAuditError) {
    console.log('Audit completed with some issues remaining.');
  }
  
  console.log('\nVulnerability fixing process completed.');
  console.log('\nNOTE: Some vulnerabilities might remain if they are in development dependencies');
  console.log('or if they require major version updates that could break compatibility.');
  console.log('For production deployment, consider running: npm audit fix --force');
} catch (error) {
  console.error('Error while fixing vulnerabilities:', error.message);
  process.exit(1);
}
