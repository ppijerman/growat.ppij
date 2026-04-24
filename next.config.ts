import type { NextConfig } from "next";// 1. Define a fallback to prevent the "Invalid URL" crash

const backendUrl = process.env.BACKEND_API_URL || "http://localhost:3000";

// 2. Parse the URL safely outside the config object
const url = new URL(backendUrl);

const config: NextConfig = {
    images: {
        remotePatterns: [
            {
                // 3. Use the parsed parts of the URL (protocol and hostname)
                protocol: url.protocol.replace(":", "") as "http" | "https",
                hostname: url.hostname,
                port: url.port, // Include port if your backend runs on a specific port (e.g. 8000)
                pathname: "/uploads/**",
            },
        ],
    },
};

export default config
