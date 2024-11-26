import type { NextConfig } from "next";
import css from "styled-jsx/css";

const nextConfig: NextConfig = {
  /* config options here */
  sassOptions: {
    implementation: "sass-embedded",
    modernCompiler: true,
    silenceDeprecations: ["legacy-js-api"],
  },
};

export default nextConfig;
