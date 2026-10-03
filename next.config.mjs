/** Сайт — один статический файл public/site.html; корень сайта отдаёт его без перенаправления */
export default {
  async rewrites() {
    return { beforeFiles: [{ source: "/", destination: "/site.html" }] };
  },
};
