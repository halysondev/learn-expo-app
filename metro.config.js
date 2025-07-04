// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');
const path = require('path');
const fs = require('fs');

/** @type {import('expo/metro-config').MetroConfig} */

// Detect if we're in a CI environment
const isCI = process.env.CI === 'true' || process.env.GITHUB_ACTIONS === 'true';

const config = getDefaultConfig(__dirname);

// Helper function to check if a directory exists
function dirExists(dirPath) {
  try {
    return fs.statSync(dirPath).isDirectory();
  } catch {
    return false;
  }
}

// Only apply custom configuration in local development
if (!isCI) {
  // Configure resolver to handle pnpm's node_modules structure
  const nodeModulesPaths = [path.resolve(__dirname, 'node_modules')];
  const watchFolders = [path.resolve(__dirname, 'node_modules')];

  // Add pnpm workspace node_modules if it exists
  const workspaceNodeModules = path.resolve(__dirname, '../../node_modules');
  if (dirExists(workspaceNodeModules)) {
    nodeModulesPaths.push(workspaceNodeModules);
    watchFolders.push(workspaceNodeModules);
  }

  config.resolver.nodeModulesPaths = nodeModulesPaths;
  config.resolver.resolverMainFields = ['react-native', 'browser', 'main'];
  config.watchFolders = watchFolders;

  // Configure transformer to handle web exports better
  if (process.env.NODE_ENV === 'production') {
    config.transformer.minifierConfig = {
      mangle: {
        keep_fnames: true,
      },
      output: {
        ascii_only: true,
        quote_style: 3,
        wrap_iife: true,
      },
      sourceMap: {
        includeSources: false,
      },
      toplevel: false,
      compress: {
        reduce_funcs: false,
      },
    };
  }
}

module.exports = withNativeWind(config, { input: './global.css' });
