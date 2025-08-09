/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Stefans Kasm Repository',
    description: 'Store for Stefans Kasm Workspaces.',
    icon: '/img/logo.svg',
    listUrl: ' https://slewantoski.github.io/kasm-registry/',
    contactUrl: 'https://github.com/slewantoski/kasm-registry/issues',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
