// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');
const path = require('path');

/** @type {import('expo/metro-config').MetroConfig} */

const config = getDefaultConfig(__dirname);

// Configure resolver to handle pnpm's node_modules structure
config.resolver.nodeModulesPaths = [
  path.resolve(__dirname, 'node_modules'),
  path.resolve(__dirname, '../../node_modules'), // for pnpm workspaces
];

// Enable symlinks for pnpm compatibility
config.resolver.resolverMainFields = ['react-native', 'browser', 'main'];

// Add watch folders to include node_modules
config.watchFolders = [
  path.resolve(__dirname, 'node_modules'),
  path.resolve(__dirname, '../../node_modules'), // for pnpm workspaces
];

// Configure transformer to handle web exports better
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

module.exports = withNativeWind(config, { input: './global.css' });
