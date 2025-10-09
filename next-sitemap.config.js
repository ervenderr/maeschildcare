/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.maeschildcare.com', // your live domain
  generateRobotsTxt: true, // also creates robots.txt
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.8,
  exclude: ['/404'], // skip 404 page
};
