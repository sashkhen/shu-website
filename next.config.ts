import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  sassOptions: {
    modernCompiler: true,
    silenceDeprecations: ["legacy-js-api"],
  },
};

export default nextConfig;
