# Luma

**Natural living, made simple.**

Luma is a calm, editorial ecommerce storefront for sustainable everyday essentials. It is built with the Next.js App Router and ships a complete shopping experience: browsing, product detail, cart, checkout, account and a journal, all backed by a REST style API layer that is ready to swap onto a real backend.

## Highlights

* Editorial landing page with hero, category, story, featured product and philosophy sections
* Shop catalog with category filters, price range slider, search and sorting
* Product detail pages with gallery, specifications and quantity selector
* Persistent cart with slide over drawer, quantity controls and checkout summary
* Checkout flow with shipping form and order confirmation reference
* Sign in and sign up with session handling
* Journal with article listing and detail pages
* About and contact pages
* Consistent white background studio product photography and optimized HD imagery via `next/image`
* Single typeface (Outfit) applied across the whole site

## Tech Stack

| Area | Choice |
| :--- | :--- |
| Framework | Next.js 16 (App Router, Turbopack) |
| UI | React 19 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 |
| Icons | Lucide React |
| Fonts | Outfit and Cormorant Garamond via `next/font` |

## Getting Started

Requirements: Node.js 20 or newer.

```bash
git clone https://github.com/Maheenlaghari/luma-.git
cd luma-
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

### Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Start the development server |
| `npm run build` | Create an optimized production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Project Structure

```
app/
  api/            REST route handlers (products, categories, checkout, auth)
  about/ contact/ journal/ shop/ checkout/ login/    Route pages
  layout.tsx      Root layout, fonts and providers
  globals.css     Design tokens and global styles
components/
  home/           Landing page sections
  ...             Navbar, Footer, CartDrawer, ProductCard, ProductDetailClient
context/          Cart and auth providers
lib/
  data.ts         Static catalog, categories and articles
  types.ts        Shared TypeScript types
public/assets/    Optimized site and product imagery
```

## API Reference

All data is served from static fixtures in `lib/data.ts`, shaped like a real API so a backend can replace it without touching the UI.

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| GET | `/api/products` | List products, supports `category` and `q` query params |
| GET | `/api/products/[id]` | Single product by id or slug |
| GET | `/api/categories` | All categories with counts and descriptions |
| POST | `/api/checkout` | Place an order and receive a confirmation reference |
| POST | `/api/auth` | Sign in or sign up a member |

## Customization

* **Catalog and content:** edit `lib/data.ts`
* **Colors, fonts and tokens:** edit `app/globals.css` and `app/layout.tsx`
* **Images:** place files in `public/assets/` and reference them as `/assets/<name>`

## License

This project is provided for personal and educational use.
