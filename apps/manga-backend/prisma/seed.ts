import { PrismaClient, UserRole, MangaStatus } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seeding...');

  // Create Super Admin User
  const adminPassword = await bcrypt.hash('Admin123!', 10);
  const admin = await prisma.user.upsert({
    where: { email: 'admin@swatapp.com' },
    update: {},
    create: {
      username: 'admin',
      email: 'admin@swatapp.com',
      passwordHash: adminPassword,
      role: UserRole.SUPER_ADMIN,
      avatarUrl: 'https://ui-avatars.com/api/?name=Admin&background=6366f1&color=fff',
    },
  });
  console.log('✅ Admin user created:', admin.email);

  // Create Test User
  const userPassword = await bcrypt.hash('User123!', 10);
  const testUser = await prisma.user.upsert({
    where: { email: 'user@test.com' },
    update: {},
    create: {
      username: 'testuser',
      email: 'user@test.com',
      passwordHash: userPassword,
      role: UserRole.USER,
      avatarUrl: 'https://ui-avatars.com/api/?name=Test+User&background=8b5cf6&color=fff',
    },
  });
  console.log('✅ Test user created:', testUser.email);

  // Create Genres
  const genres = [
    { name: 'أكشن', slug: 'action' },
    { name: 'مغامرة', slug: 'adventure' },
    { name: 'كوميديا', slug: 'comedy' },
    { name: 'دراما', slug: 'drama' },
    { name: 'فانتازيا', slug: 'fantasy' },
    { name: 'رومانسي', slug: 'romance' },
    { name: 'خيال علمي', slug: 'sci-fi' },
    { name: 'إثارة', slug: 'thriller' },
    { name: 'رعب', slug: 'horror' },
    { name: 'غموض', slug: 'mystery' },
    { name: 'رياضة', slug: 'sports' },
    { name: 'شريحة من الحياة', slug: 'slice-of-life' },
  ];

  for (const genre of genres) {
    await prisma.genre.upsert({
      where: { slug: genre.slug },
      update: {},
      create: genre,
    });
  }
  console.log('✅ Genres created:', genres.length);

  // Create Sample Manga
  const manga1 = await prisma.manga.create({
    data: {
      slug: 'solo-leveling-ar',
      titleAr: 'سولو ليفلينغ',
      titleEn: 'Solo Leveling',
      description: 'في عالم حيث يمتلك الصيادون قوى خارقة، سونج جين وو هو أضعفهم جميعاً. لكن بعد نجاته من محنة مميتة، يحصل على قدرة فريدة تسمح له بالمستوى الأعلى بلا حدود.',
      coverImageUrl: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=400',
      author: 'Chugong',
      artist: 'DUBU',
      status: MangaStatus.ONGOING,
      year: 2018,
      isPublished: true,
      totalViews: 15000,
      ratingAvg: 4.8,
    },
  });

  const manga2 = await prisma.manga.create({
    data: {
      slug: 'tower-of-god-ar',
      titleAr: 'برج الإله',
      titleEn: 'Tower of God',
      description: 'يتبع بام، وهو صبي دخل برجاً ضخماً وغامضاً سعياً وراء صديقته الوحيدة راحيل. وفي هذا البرج، يواجه تحديات قاسية ومخلوقات خطيرة.',
      coverImageUrl: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400',
      author: 'SIU',
      artist: 'SIU',
      status: MangaStatus.ONGOING,
      year: 2010,
      isPublished: true,
      totalViews: 12000,
      ratingAvg: 4.6,
    },
  });

  const manga3 = await prisma.manga.create({
    data: {
      slug: 'the-beginning-after-the-end',
      titleAr: 'البداية بعد النهاية',
      titleEn: 'The Beginning After the End',
      description: 'ملك قوي يولد من جديد في عالم مليء بالسحر والوحوش. مع ذكرياته من حياته السابقة، يسعى لحماية أحبائه وتجنب أخطاء ماضيه.',
      coverImageUrl: 'https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=400',
      author: 'TurtleMe',
      artist: 'Fuyuki23',
      status: MangaStatus.ONGOING,
      year: 2018,
      isPublished: true,
      totalViews: 9500,
      ratingAvg: 4.7,
    },
  });

  console.log('✅ Sample manga created:', 3);

  // Link genres to manga
  const actionGenre = await prisma.genre.findUnique({ where: { slug: 'action' } });
  const fantasyGenre = await prisma.genre.findUnique({ where: { slug: 'fantasy' } });
  const adventureGenre = await prisma.genre.findUnique({ where: { slug: 'adventure' } });

  await prisma.mangaGenre.createMany({
    data: [
      { mangaId: manga1.id, genreId: actionGenre.id },
      { mangaId: manga1.id, genreId: fantasyGenre.id },
      { mangaId: manga2.id, genreId: actionGenre.id },
      { mangaId: manga2.id, genreId: adventureGenre.id },
      { mangaId: manga3.id, genreId: fantasyGenre.id },
      { mangaId: manga3.id, genreId: adventureGenre.id },
    ],
  });
  console.log('✅ Manga-Genre relations created');

  // Create sample chapters for manga1
  const chapter1 = await prisma.chapter.create({
    data: {
      mangaId: manga1.id,
      number: '1',
      title: 'أضعف صياد في العالم',
      slug: 'solo-leveling-ar-chapter-1',
      isPublished: true,
      publishedAt: new Date(),
      viewCount: 5000,
    },
  });

  const chapter2 = await prisma.chapter.create({
    data: {
      mangaId: manga1.id,
      number: '2',
      title: 'النظام',
      slug: 'solo-leveling-ar-chapter-2',
      isPublished: true,
      publishedAt: new Date(),
      viewCount: 4500,
    },
  });

  console.log('✅ Sample chapters created:', 2);

  // Create sample pages for chapter1
  await prisma.chapterPage.createMany({
    data: [
      {
        chapterId: chapter1.id,
        pageIndex: 0,
        imageUrl: 'https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=800',
        width: 800,
        height: 1200,
      },
      {
        chapterId: chapter1.id,
        pageIndex: 1,
        imageUrl: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=800',
        width: 800,
        height: 1200,
      },
      {
        chapterId: chapter1.id,
        pageIndex: 2,
        imageUrl: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800',
        width: 800,
        height: 1200,
      },
    ],
  });

  console.log('✅ Sample chapter pages created');

  // Create Site Settings
  await prisma.siteSetting.upsert({
    where: { id: 1 },
    update: {},
    create: {
      siteName: 'SwatApp Manga',
      registrationOpen: true,
      commentsEnabled: true,
      defaultTheme: 'DARK',
    },
  });
  console.log('✅ Site settings initialized');

  console.log('🎉 Seeding completed successfully!');
  console.log('\n📝 Login credentials:');
  console.log('Admin: admin@swatapp.com / Admin123!');
  console.log('User: user@test.com / User123!');
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
