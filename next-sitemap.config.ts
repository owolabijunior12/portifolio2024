/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://iboytech123.vercel.app', // ✅ Use your live domain
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};
