# SEO Оптимизация - Рекомендации

## ✅ Что уже реализовано:

### 1. Мета-теги и Open Graph
- ✅ Полный набор мета-тегов (description, keywords, author, robots)
- ✅ Open Graph теги для социальных сетей
- ✅ Twitter Card теги
- ✅ Canonical URL
- ✅ Lang атрибут на HTML

### 2. Структурированные данные (JSON-LD)
- ✅ Schema.org Organization
- ✅ Schema.org WebSite с SearchAction

### 3. Семантика и доступность
- ✅ Правильные HTML5 семантические теги (header, section, nav)
- ✅ Заголовки h2 вместо p для навигации
- ✅ ARIA labels для улучшения доступности
- ✅ Alt теги с описательным текстом
- ✅ Width и height атрибуты для изображений

### 4. Оптимизация изображений
- ✅ Lazy loading для изображений в sidebar
- ✅ Оптимизированные alt теги
- ✅ Picture теги с srcset для адаптивности

## 📋 Дополнительные рекомендации:

### 1. Обязательно обновите:
- **siteUrl** в `app/pages/index.vue` - замените `'https://yourdomain.com'` на реальный домен
- **Open Graph изображение** - добавьте og:image тег:
  ```typescript
  { property: 'og:image', content: `${siteUrl}/og-image.jpg` },
  { property: 'og:image:width', content: '1200' },
  { property: 'og:image:height', content: '630' },
  ```
- **Twitter изображение**:
  ```typescript
  { name: 'twitter:image', content: `${siteUrl}/twitter-image.jpg` },
  ```

### 2. Добавьте контактную информацию:
В JSON-LD Organization добавьте:
```typescript
contactPoint: {
  '@type': 'ContactPoint',
  contactType: 'Customer Service',
  email: 'info@bonnymoon.com', // ваш email
  telephone: '+1-XXX-XXX-XXXX', // ваш телефон
  areaServed: 'US', // или другая страна
  availableLanguage: ['English']
}
```

### 3. Добавьте ссылки на соцсети:
В `sameAs` массив добавьте:
```typescript
sameAs: [
  'https://www.facebook.com/yourpage',
  'https://www.instagram.com/yourpage',
  'https://twitter.com/yourpage'
]
```

### 4. Создайте sitemap.xml:
Создайте файл `public/sitemap.xml` или используйте модуль `@nuxtjs/sitemap`

### 5. Добавьте favicon и apple-touch-icon:
В `app.vue` или через `useHead`:
```typescript
link: [
  { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
  { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }
]
```

### 6. Оптимизируйте robots.txt:
Добавьте ссылку на sitemap:
```
User-Agent: *
Disallow:

Sitemap: https://yourdomain.com/sitemap.xml
```

### 7. Добавьте BreadcrumbList schema:
Если у вас будут подстраницы, добавьте BreadcrumbList структурированные данные

### 8. Производительность:
- ✅ Видео уже оптимизировано (WebM + MP4)
- ✅ Изображения оптимизированы (WebP + JPEG fallback)
- ✅ Lazy loading для изображений
- ⚠️ Рассмотрите добавление preconnect для внешних ресурсов

### 9. Дополнительные мета-теги:
```typescript
// Для мобильных приложений
{ name: 'apple-mobile-web-app-capable', content: 'yes' },
{ name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
{ name: 'apple-mobile-web-app-title', content: siteName },

// Для безопасности
{ 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
{ 'http-equiv': 'Content-Security-Policy', content: "default-src 'self'" }
```

### 10. Добавьте hreflang для мультиязычности:
Если планируете несколько языков:
```typescript
link: [
  { rel: 'alternate', hreflang: 'en', href: `${siteUrl}/en` },
  { rel: 'alternate', hreflang: 'ru', href: `${siteUrl}/ru` },
  { rel: 'alternate', hreflang: 'x-default', href: siteUrl }
]
```

## 🔍 Проверка SEO:

1. **Google Search Console** - добавьте сайт и проверьте индексацию
2. **Google Rich Results Test** - проверьте структурированные данные
3. **PageSpeed Insights** - проверьте производительность
4. **Lighthouse** - проверьте SEO score
5. **Schema Markup Validator** - проверьте JSON-LD

## 📊 Метрики для отслеживания:

- Core Web Vitals (LCP, FID, CLS)
- Индексация страниц
- Позиции в поисковой выдаче
- Органический трафик
- Конверсии с органического трафика

