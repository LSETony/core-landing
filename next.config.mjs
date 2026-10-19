/** Сайт — один статический файл public/site.html; корень отдаёт его без перенаправления, /en и /ru — с нужным языком */
export default {
  async rewrites() {
    return {
      beforeFiles: [
        { source: "/", destination: "/site.html" },
        { source: "/en", destination: "/site.html" },
        { source: "/ru", destination: "/site.html" },
      ],
    };
  },
};
