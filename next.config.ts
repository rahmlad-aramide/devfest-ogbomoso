import type { NextConfig } from "next";

const nextConfig: NextConfig = {
        eslint: {
                ignoreDuringBuilds: true,
        },
        images: {
                formats: ['image/webp', 'image/avif'],
                deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                minimumCacheTTL: 31536000, // 1 year
                dangerouslyAllowSVG: true,
                contentDispositionType: 'attachment',
                contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
        },
        experimental: {
                optimizePackageImports: ['lucide-react'],
        },
};

export default nextConfig;
