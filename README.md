# core. — сайт

Лендинг CRM core. для фитнес-залов и студий, RU/EN.

Вся страница — `public/site.html`, картинки и видео — `public/assets/`. Next.js нужен только чтобы отдать её
по адресу `/` (см. `next.config.mjs`), поэтому проект без настроек открывается в v0 и Vercel.

- Кнопки «Войти» и «Подключить зал» ведут в кабинет: адрес — `APP_URL` в конце `public/site.html`.
- Локально: `npm install && npm run dev` → http://localhost:3000
