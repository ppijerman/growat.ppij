import type { NextConfig } from "next"

const config: NextConfig = {
  images: {
    remotePatterns: [new URL(`${process.env.BACKEND_API_URL}/uploads/**`)],
  },
}

export default config
