const { getDefaultConfig } = require("expo/metro-config");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// Add support for SVG imports
config.transformer = {
  ...config.transformer,
  babelTransformerPath: require.resolve("react-native-svg-transformer"),
};

config.resolver = {
  ...config.resolver,
  assetExts: config.resolver.assetExts.filter((ext) => ext !== "svg"), // Exclude .svg from being treated as an asset
  sourceExts: [...config.resolver.sourceExts, "svg"], // Include .svg as a source file
};

// thirdweb config
config.resolver.unstable_enablePackageExports = true;
config.resolver.unstable_conditionNames = [
  "react-native",
  "browser",
  "require",
];

module.exports = config;