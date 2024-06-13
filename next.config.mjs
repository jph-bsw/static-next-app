import dotenv from "dotenv"
dotenv.config()

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    trailingSlash: true,
    basePath:
        process.env.NODE_ENV === "production"
            ? "/projects/static-next-app/out"
            : ""
}

export default nextConfig
