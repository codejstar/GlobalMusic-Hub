/** @type {import('next').NextConfig} */
const nextConfig = {
    images:
    {
      domains: ['images.unsplash.com','res.cloudinary.com']
    }
};

export default nextConfig;

// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'www.pexels.com',
//         port: '',
//         pathname: '/photo/**',
//       },
//     ],
//   },
// }
