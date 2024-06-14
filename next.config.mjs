import dotenv from "dotenv"
dotenv.config()

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    trailingSlash: true,
    basePath: ""
}

export default nextConfig
