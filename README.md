# Optima Smart

Інтернет-магазин техніки для розумного дому: каталог з цінами, кошик, новини, логін.

**Стек:** Next.js 16 · React 19 · TypeScript · Tailwind CSS 4

## Запуск

```bash
cd shoping-optima
npm install
npm run dev
```

Відкрийте [http://localhost:3000](http://localhost:3000).

## Тести

```bash
npm test          # Vitest (логіка каталогу, ціни, паролі)
npm run test:e2e  # Playwright (каталог, кошик, новини, реєстрація)
```

Один раз для e2e: `npx playwright install chromium`.

Ручний чеклист: [qa/MANUAL.md](qa/MANUAL.md).

## Що всередині

- Каталог з категоріями, пошуком і пагінацією
- Кошик у `localStorage`
- Реєстрація / вхід (SQLite, хеш пароля, httpOnly cookie)
- Новини, акції, доставка, гарантія, контакти
