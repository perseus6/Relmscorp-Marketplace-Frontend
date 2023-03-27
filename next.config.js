/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  env: {
    PINATA_URL: process.env.PINATA_URL,
  },
}

module.exports = nextConfig