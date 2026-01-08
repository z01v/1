# 📚 Arabic Manga/Manhwa Platform - SwatApp

A comprehensive manga/manhwa platform with Arabic language support, built with Next.js, NestJS, and PostgreSQL.

## 🛠️ Tech Stack

- **Frontend:** Next.js 14+ (App Router), TypeScript, Tailwind CSS
- **Backend:** NestJS, Prisma ORM
- **Database:** PostgreSQL
- **Storage:** Cloudinary
- **Authentication:** JWT + Emergent Google OAuth

## 📋 Development Progress

### ✅ Phase 1: Project Foundation
- [ ] Create monorepo structure (apps/manga-frontend, apps/manga-backend)
- [ ] Initialize NestJS backend with TypeScript
- [ ] Set up PostgreSQL with Docker Compose
- [ ] Design complete Prisma schema (12 tables)
- [ ] Implement JWT authentication module
- [ ] Create role-based guards & decorators
- [ ] Integrate Emergent Google OAuth
- [ ] Set up Cloudinary configuration

### ⏳ Phase 2: Core Backend APIs
- [ ] **Manga Module:** CRUD operations with slug generation
- [ ] **Chapters Module:** CRUD with scheduling
- [ ] **Genres Module:** Genre management & relations
- [ ] **Image Upload Service:** Cloudinary integration
- [ ] Public APIs: List manga with filters & search
- [ ] Public APIs: Get manga details
- [ ] Public APIs: Get chapter with pages

### ⏳ Phase 3: User Features Backend
- [ ] Favorites API (add/remove/list)
- [ ] Reading history tracking API
- [ ] Issue reports submission API
- [ ] Profile APIs (get/update)
- [ ] Comments API (optional)

### ⏳ Phase 4: Frontend Public Pages
- [ ] Initialize Next.js with App Router
- [ ] Configure Tailwind CSS + Cairo font
- [ ] Create public layout (navbar, footer)
- [ ] Home page (featured, most viewed, latest)
- [ ] Manga list page with filters & pagination
- [ ] Manga details page with chapter list
- [ ] Reader page with vertical scroll
- [ ] Implement lazy loading for images

### ⏳ Phase 5: Frontend Auth & User Features
- [ ] Login/Register pages
- [ ] Emergent OAuth integration
- [ ] Profile page (favorites, history tabs)
- [ ] Reader history auto-save
- [ ] Issue report modal in reader
- [ ] Favorite button component

### ⏳ Phase 6: Admin Panel
- [ ] Admin layout with sidebar
- [ ] Dashboard with statistics
- [ ] Manga management (create, edit, delete, publish)
- [ ] Chapter management CRUD
- [ ] Multi-image upload for chapter pages
- [ ] Drag-drop page reordering
- [ ] User management (roles, activation)
- [ ] Issue reports management
- [ ] Site settings configuration
- [ ] Team articles/blog management

### ⏳ Phase 7: Testing & Polish
- [ ] Backend API testing with curl
- [ ] Frontend E2E testing with testing agent
- [ ] Performance optimization
- [ ] SEO metadata & sitemap
- [ ] Final bug fixes
- [ ] Documentation

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Docker & Docker Compose
- Cloudinary account

### Installation

1. **Clone and install dependencies:**
```bash
# Backend
cd apps/manga-backend
npm install

# Frontend
cd apps/manga-frontend
npm install
```

2. **Set up environment variables:**
```bash
# Backend (.env)
DATABASE_URL="postgresql://manga_user:manga_pass@localhost:5432/manga_db"
JWT_SECRET="your-super-secret-jwt-key"
CLOUDINARY_URL="cloudinary://api_key:api_secret@cloud_name"

# Frontend (.env.local)
NEXT_PUBLIC_API_URL="http://localhost:3001/api"
```

3. **Start PostgreSQL:**
```bash
docker-compose up -d
```

4. **Run database migrations:**
```bash
cd apps/manga-backend
npx prisma migrate dev
npx prisma db seed
```

5. **Start development servers:**
```bash
# Backend (port 3001)
cd apps/manga-backend
npm run start:dev

# Frontend (port 3000)
cd apps/manga-frontend
npm run dev
```

## 📚 API Documentation

### Public Endpoints
- `GET /api/manga` - List manga with filters
- `GET /api/manga/:slug` - Get manga details
- `GET /api/manga/:slug/chapters/:chapterSlug` - Get chapter with pages

### Protected Endpoints (Auth Required)
- `POST /api/favorites/:mangaId` - Add to favorites
- `GET /api/user/favorites` - Get user favorites
- `POST /api/user/history` - Update reading history

### Admin Endpoints (Admin Role Required)
- `POST /api/admin/manga` - Create manga
- `PATCH /api/admin/manga/:id` - Update manga
- `POST /api/admin/chapters/:chapterId/pages/upload-batch` - Upload chapter pages

## 🎨 Design Guidelines

- **Primary Font:** Cairo (Arabic), Inter (English)
- **Theme:** Dark mode default with light mode option
- **Colors:** Purple/Blue gradient theme
- **Layout:** RTL for Arabic content

## 🔐 Default Admin Credentials

After running seed:
- Email: `admin@swatapp.com`
- Password: `Admin123!`

## 📝 License

MIT

---

**Last Updated:** 2025-01-08
