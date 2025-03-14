// vercel-build.js
const { execSync } = require('child_process');

try {
  // Install all dependencies first
  console.log('Installing dependencies...');
  execSync('npm install', { stdio: 'inherit' });
  
  // Ensure vite is installed globally (for the CLI command)
  console.log('Installing vite globally...');
  execSync('npm install -g vite', { stdio: 'inherit' });
  
  // Install terser specifically (since it's needed for the build)
  console.log('Installing terser...');
  execSync('npm install terser --save-dev', { stdio: 'inherit' });
  
  // Run the build
  console.log('Building the application...');
  execSync('npm run build', { stdio: 'inherit' });
  
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}
