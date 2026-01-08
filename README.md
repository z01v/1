# 📚 Arabic Manga/Manhwa Platform - SwatApp

A comprehensive manga/manhwa platform with Arabic language support, built with Next.js, NestJS, and PostgreSQL.

## 🛠️ Tech Stack

- **Frontend:** Next.js 14+ (App Router), TypeScript, Tailwind CSS
- **Backend:** NestJS, Prisma ORM
- **Database:** PostgreSQL
- **Storage:** Cloudinary
- **Authentication:** JWT + Emergent Google OAuth

## 📋 Development Progress

### ✅ Phase 1: Project Foundation (COMPLETED)
- [x] ✅ Create monorepo structure (apps/manga-frontend, apps/manga-backend)
- [x] ✅ Initialize NestJS backend with TypeScript
- [x] ✅ Set up PostgreSQL database
- [x] ✅ Design complete Prisma schema (12 tables)
- [x] ✅ Database migrations created and applied
- [x] ✅ Seed script with sample data (3 manga, 12 genres, admin user)
- [ ] ⏳ Implement JWT authentication module
- [ ] ⏳ Create role-based guards & decorators
- [ ] ⏳ Integrate Emergent Google OAuth
- [ ] ⏳ Set up Cloudinary configuration (pending API keys)

### ⏳ Phase 2: Core Backend APIs (NOT STARTED)
- [ ] **Manga Module:** CRUD operations with slug generation
- [ ] **Chapters Module:** CRUD with scheduling
- [ ] **Genres Module:** Genre management & relations
- [ ] **Image Upload Service:** Cloudinary integration
- [ ] Public APIs: List manga with filters & search
- [ ] Public APIs: Get manga details
- [ ] Public APIs: Get chapter with pages

### ⏳ Phase 3: User Features Backend (NOT STARTED)
- [ ] Favorites API (add/remove/list)
- [ ] Reading history tracking API
- [ ] Issue reports submission API
- [ ] Profile APIs (get/update)
- [ ] Comments API (optional)

### ⏳ Phase 4: Frontend Public Pages (NOT STARTED)
- [ ] Initialize Next.js with App Router
- [ ] Configure Tailwind CSS + Cairo font
- [ ] Create public layout (navbar, footer)
- [ ] Home page (featured, most viewed, latest)
- [ ] Manga list page with filters & pagination
- [ ] Manga details page with chapter list
- [ ] Reader page with vertical scroll
- [ ] Implement lazy loading for images

### ⏳ Phase 5: Frontend Auth & User Features (NOT STARTED)
- [ ] Login/Register pages
- [ ] Emergent OAuth integration
- [ ] Profile page (favorites, history tabs)
- [ ] Reader history auto-save
- [ ] Issue report modal in reader
- [ ] Favorite button component

### ⏳ Phase 6: Admin Panel (NOT STARTED)
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

### ⏳ Phase 7: Testing & Polish (NOT STARTED)
- [ ] Backend API testing with curl
- [ ] Frontend E2E testing with testing agent
- [ ] Performance optimization
- [ ] SEO metadata & sitemap
- [ ] Final bug fixes
- [ ] Documentation

---

## 📁 Finished Files & Features

### ✅ Backend Files Created
```
/app/apps/manga-backend/
├── package.json                 ✅ NestJS dependencies configured
├── tsconfig.json               ✅ TypeScript configuration
├── nest-cli.json               ✅ Nest CLI configuration
├── .env                        ✅ Environment variables (needs Cloudinary keys)
└── prisma/
    ├── schema.prisma           ✅ Complete database schema (12 models)
    └── seed.ts                 ✅ Database seeding with sample data
```

### ✅ Database Schema (PostgreSQL)
- **users** - User accounts with roles (USER, TRANSLATOR, EDITOR, ADMIN, SUPER_ADMIN)
- **manga** - Manga/Manhwa metadata with status, ratings, views
- **genres** - Genre categories
- **manga_genres** - Many-to-many relationship
- **chapters** - Chapter information with scheduling support
- **chapter_pages** - Individual manga pages with image URLs
- **favorites** - User favorite manga
- **reading_history** - User reading progress tracking
- **comments** - Comments on manga/chapters
- **issue_reports** - User-reported issues (missing pages, broken images, etc.)
- **team_articles** - Blog/news articles
- **site_settings** - Global site configuration

### ✅ Infrastructure
- PostgreSQL 15 installed and running
- Database `manga_db` created with user `manga_user`
- Prisma migrations applied successfully
- Sample data seeded:
  - 2 users (admin@swatapp.com, user@test.com)
  - 12 genres (Action, Adventure, Comedy, etc.)
  - 3 sample manga with chapters
  - Chapter pages with placeholder images

### ✅ Configuration Files
```
/app/
├── docker-compose.yml          ✅ PostgreSQL service definition
├── .gitignore                  ✅ Ignore patterns for node_modules, .env, etc.
├── .env.example                ✅ Environment variables template
├── README.md                   ✅ This file with full documentation
└── auth_testing.md             ✅ Testing playbook for authentication
```

---

## 📝 Pending Files & Features

### ⏳ Backend (Not Started)
```
/app/apps/manga-backend/src/
├── main.ts                     ⏳ NestJS application bootstrap
├── app.module.ts               ⏳ Root application module
├── prisma/
│   ├── prisma.module.ts        ⏳ Prisma service module
│   └── prisma.service.ts       ⏳ Prisma client service
├── common/
│   ├── guards/
│   │   ├── jwt-auth.guard.ts   ⏳ JWT authentication guard
│   │   └── roles.guard.ts      ⏳ Role-based authorization guard
│   ├── decorators/
│   │   ├── user.decorator.ts   ⏳ Current user decorator
│   │   └── roles.decorator.ts  ⏳ Roles decorator
│   └── utils/
│       └── slugify.ts          ⏳ Slug generation utility
└── modules/
    ├── auth/                   ⏳ Authentication module (JWT + OAuth)
    ├── users/                  ⏳ User management module
    ├── manga/                  ⏳ Manga CRUD module
    ├── chapters/               ⏳ Chapter management module
    ├── genres/                 ⏳ Genre management module
    ├── favorites/              ⏳ Favorites module
    ├── profile/                ⏳ User profile module
    └── uploads/                ⏳ Cloudinary upload service
```

### ⏳ Frontend (Not Started)
```
/app/apps/manga-frontend/
├── package.json                ⏳ Next.js dependencies
├── next.config.ts              ⏳ Next.js configuration
├── tailwind.config.ts          ⏳ Tailwind CSS configuration
├── .env.local                  ⏳ Frontend environment variables
└── src/
    ├── app/                    ⏳ Next.js App Router pages
    ├── components/             ⏳ React components
    ├── lib/                    ⏳ API client & utilities
    └── hooks/                  ⏳ Custom React hooks
```

### ⏳ Integration Dependencies
- Cloudinary configuration (waiting for API keys)
- JWT authentication implementation
- Emergent Google OAuth integration
- File upload service with Cloudinary
- All backend API endpoints
- Complete frontend application

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
