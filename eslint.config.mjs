import { type NextConfig } from "next";

const nextConfig: NextConfig = [
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      "no-unused-vars": "error",
    },
  },
];

export default nextConfig;
