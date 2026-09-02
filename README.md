# ATELIER NORD — Architecture Website

Одностраничный сайт-визитка архитектурного бюро на Vue 3 + TypeScript + Vite.

## Стек

- Vue 3
- TypeScript
- Vite
- CSS scoped styles inside Vue components
- IntersectionObserver для scroll-reveal эффектов
- адаптивная верстка без UI-библиотеки

Backend намеренно отсутствует: для сайта-визитки он не нужен.

## Запуск

Локально:

```bash
npm install
npm run dev
```

Через Docker:

```bash
docker compose up --build
```

После запуска через Docker: `http://localhost`

Production build:

```bash
npm run build
npm run preview
```

## Структура

```text
src/
├── components/
├── composables/
├── data/
├── App.vue
└── main.ts
```

Фотографии в демо подтягиваются с Unsplash.
