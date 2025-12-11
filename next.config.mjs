/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Ensure .node files are handled properly
    config.module.rules.push({
      test: /\.node$/,
      loader: "node-loader",
    });

    // Native modules should not be bundled by Webpack
    config.externals.push("nodejs-polars");

    return config;
  },
  turbopack: {
    
  }
};


export default nextConfig;
