<script setup lang="ts">
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { getAllPosts } from "../utils/blogLoader";
import {
  PhClock,
  PhTag,
  PhArrowRight,
  PhCalendar,
  PhUser,
} from "@phosphor-icons/vue";

const router = useRouter();
const posts = computed(() => getAllPosts());

// Search and filter state
const searchQuery = ref("");
const selectedCategory = ref("Всі");

// Extract unique categories dynamically from loaded posts
const categories = computed(() => {
  const allCats = posts.value.map((post) => post.category).filter(Boolean);
  const uniqueCats = Array.from(new Set(allCats));
  return ["Всі", ...uniqueCats.sort()];
});

// Filter posts by search query and selected category
const filteredPosts = computed(() => {
  return posts.value.filter((post) => {
    // Category filter
    const matchesCategory =
      selectedCategory.value === "Всі" ||
      post.category === selectedCategory.value;

    // Search query filter
    const query = searchQuery.value.trim().toLowerCase();
    if (!query) return matchesCategory;

    const matchesSearch =
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query) ||
      (post.tags &&
        post.tags.some((tag) => tag.toLowerCase().includes(query))) ||
      post.category.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });
});

function goToPost(slug: string) {
  router.push(`/blog/${slug}`);
}

function selectCategory(category: string) {
  selectedCategory.value = category;
}

function resetFilters() {
  searchQuery.value = "";
  selectedCategory.value = "Всі";
}

// Helper to get correct Ukrainian plural form for articles
function getPostWord(count: number) {
  const lastDigit = count % 10;
  const lastTwoDigits = count % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
    return "статей";
  }
  if (lastDigit === 1) {
    return "стаття";
  }
  if (lastDigit >= 2 && lastDigit <= 4) {
    return "статті";
  }
  return "статей";
}
</script>

<template>
  <div class="blog-list-page">
    <!-- Hero -->
    <section class="blog-hero">
      <div class="blog-hero__inner">
        <h1 class="blog-hero__title">
          Корисні статті про <span class="text-gradient">розумні покупки</span>
        </h1>
        <p class="blog-hero__subtitle">
          Поради щодо економії, фінансової грамотності та того, як відстежувати
          ціни без зусиль
        </p>
      </div>
    </section>

    <!-- Posts grid -->
    <section class="blog-section">
      <div class="blog-section__inner">
        <!-- Animate filter/search changes -->
        <TransitionGroup
          name="post-fade"
          tag="div"
          class="blog-grid"
          v-if="filteredPosts.length"
        >
          <article
            v-for="post in filteredPosts"
            :key="post.slug"
            class="blog-card"
            @click="goToPost(post.slug)"
            :tabindex="0"
            @keydown.enter="goToPost(post.slug)"
          >
            <!-- Image Wrap -->
            <div class="blog-card__image-wrap">
              <img
                :src="post.image"
                :alt="post.imageAlt"
                class="blog-card__image"
                loading="lazy"
              />
              <div class="blog-card__category-badge">{{ post.category }}</div>
            </div>

            <!-- Body Content -->
            <div class="blog-card__body">
              <div class="blog-card__meta">
                <span class="blog-card__meta-item">
                  <PhCalendar :size="14" class="blog-card__icon" />
                  {{ post.formattedDate }}
                </span>
                <span class="blog-card__dot">·</span>
                <span class="blog-card__meta-item">
                  <PhClock :size="14" class="blog-card__icon" />
                  {{ post.readTime }} хв читання
                </span>
                <span class="blog-card__dot" v-if="post.author">·</span>
                <span class="blog-card__meta-item" v-if="post.author">
                  <PhUser :size="14" class="blog-card__icon" />
                  {{ post.author }}
                </span>
              </div>

              <h2 class="blog-card__title">{{ post.title }}</h2>
              <p class="blog-card__excerpt">{{ post.excerpt }}</p>

              <!-- Tags -->
              <div class="blog-card__tags">
                <span
                  v-for="tag in post.tags.slice(0, 3)"
                  :key="tag"
                  class="blog-card__tag"
                >
                  <PhTag :size="11" />
                  {{ tag }}
                </span>
              </div>

              <!-- CTA -->
              <div class="blog-card__cta">
                Читати статтю
                <PhArrowRight :size="16" class="blog-card__cta-icon" />
              </div>
            </div>
          </article>
        </TransitionGroup>

        <!-- Empty state -->
        <div v-else class="blog-empty">
          <div class="blog-empty__icon">🔍</div>
          <h2 class="blog-empty__title">Нічого не знайдено</h2>
          <p class="blog-empty__subtitle">
            Не вдалося знайти статті за вашим запитом. Спробуйте змінити ключові
            слова або обрати іншу категорію.
          </p>
          <button @click="resetFilters" class="btn-primary blog-empty__btn">
            Скинути фільтри
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* ── Page ── */
.blog-list-page {
  min-height: 100vh;
  padding-top: 80px;
  background-color: var(--bg-main);
}

/* ── Hero ── */
.blog-hero {
  border-bottom: 1px solid var(--border-subtle);
  padding: 4.5rem 1.5rem 4rem;
  position: relative;
}

.blog-hero__inner {
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
}

.blog-hero__badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--brand);
  color: white;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.4rem 1.1rem;
  border-radius: 9999px;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 12px rgba(139, 92, 246, 0.25);
}

.blog-hero__title {
  font-size: clamp(2rem, 5vw, 3.25rem);
  font-weight: 800;
  line-height: 1.15;
  margin-bottom: 1.25rem;
  letter-spacing: -0.03em;
  color: var(--text-heading);
}

.blog-hero__subtitle {
  font-size: 1.125rem;
  color: var(--text-body);
  line-height: 1.6;
  margin: 0 auto;
}

/* ── Controls (Search & Filters) ── */
.blog-controls-section {
  margin-top: -2.5rem;
  padding: 0 1.5rem;
  position: relative;
  z-index: 10;
}

.blog-controls-inner {
  max-width: 1100px;
  margin: 0 auto;
}

.blog-controls-card {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.7);
  box-shadow:
    0 20px 40px -15px rgba(15, 23, 42, 0.08),
    0 0 0 1px rgba(139, 92, 246, 0.05);
  border-radius: 1.5rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.blog-search-wrap {
  position: relative;
  width: 100%;
}

.blog-search-icon {
  position: absolute;
  left: 1.25rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-body);
  opacity: 0.6;
  pointer-events: none;
}

.blog-search-input {
  width: 100%;
  padding: 1rem 1rem 1rem 3.25rem;
  font-size: 0.95rem;
  font-family: inherit;
  color: var(--text-heading);
  background: var(--bg-main);
  border: 1px solid var(--border-subtle);
  border-radius: 9999px;
  outline: none;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.blog-search-input:focus {
  border-color: var(--brand);
  background: white;
  box-shadow: 0 0 0 4px rgba(139, 92, 246, 0.12);
}

.blog-search-clear {
  position: absolute;
  right: 1.25rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: var(--text-body);
  opacity: 0.5;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: 50%;
  transition: all 0.2s;
}

.blog-search-clear:hover {
  opacity: 1;
  background: rgba(15, 23, 42, 0.05);
}

.blog-categories-wrap {
  width: 100%;
  overflow: hidden;
}

.blog-categories {
  display: flex;
  gap: 0.625rem;
  overflow-x: auto;
  padding-bottom: 4px;
  scrollbar-width: none; /* Firefox */
}

.blog-categories::-webkit-scrollbar {
  display: none; /* Chrome/Safari */
}

.blog-category-btn {
  white-space: nowrap;
  padding: 0.55rem 1.35rem;
  font-size: 0.875rem;
  font-weight: 600;
  font-family: inherit;
  color: var(--text-body);
  background: white;
  border: 1px solid var(--border-subtle);
  border-radius: 9999px;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.blog-category-btn:hover {
  color: var(--brand);
  border-color: var(--brand-light);
  background: rgba(139, 92, 246, 0.02);
}

.blog-category-btn--active {
  color: white !important;
  background: var(--brand-gradient) !important;
  border-color: transparent !important;
  box-shadow: 0 8px 16px -4px rgba(139, 92, 246, 0.35);
}

/* ── Section ── */
.blog-section {
  padding: 3rem 1.5rem 6rem;
}

.blog-section__inner {
  max-width: 1100px;
  margin: 0 auto;
}

.blog-results-meta {
  margin-bottom: 1.75rem;
  animation: fadeIn 0.4s ease;
}

.blog-results-count {
  font-size: 0.95rem;
  color: var(--text-body);
}

.blog-results-count strong {
  color: var(--text-heading);
}

/* ── Grid ── */
.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
  position: relative;
}

/* ── Card ── */
.blog-card {
  background: var(--bg-card);
  border-radius: 1.5rem;
  border: 1px solid var(--border-subtle);
  overflow: hidden;
  cursor: pointer;
  transition:
    transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1),
    box-shadow 0.35s cubic-bezier(0.2, 0.8, 0.2, 1),
    border-color 0.35s cubic-bezier(0.2, 0.8, 0.2, 1);
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 30px -15px rgba(15, 23, 42, 0.04);
  outline: none;
  height: 100%;
}

.blog-card:hover,
.blog-card:focus-visible {
  transform: translateY(-6px);
  box-shadow:
    0 25px 45px -12px rgba(139, 92, 246, 0.15),
    0 0 0 1px rgba(139, 92, 246, 0.05);
  border-color: rgba(139, 92, 246, 0.25);
}

/* ── Image wrap ── */
.blog-card__image-wrap {
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  flex-shrink: 0;
  background: #f1f5f9;
}

.blog-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.blog-card:hover .blog-card__image {
  transform: scale(1.05);
}

.blog-card__category-badge {
  position: absolute;
  top: 1.25rem;
  left: 1.25rem;
  background: rgba(139, 92, 246, 0.88);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  color: white;
  font-size: 0.7rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 0.35rem 0.85rem;
  border-radius: 9999px;
  box-shadow: 0 4px 10px rgba(15, 23, 42, 0.15);
}

/* ── Card body ── */
.blog-card__body {
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

/* ── Meta ── */
.blog-card__meta {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
  font-size: 0.78rem;
  color: var(--text-body);
  margin-bottom: 0.875rem;
  opacity: 0.85;
}

.blog-card__meta-item {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.blog-card__dot {
  color: var(--text-body);
  opacity: 0.4;
}

.blog-card__icon {
  color: var(--brand);
  opacity: 0.8;
}

/* ── Title ── */
.blog-card__title {
  font-size: 1.2rem;
  font-weight: 800;
  line-height: 1.35;
  color: var(--text-heading);
  margin-bottom: 0.75rem;
  letter-spacing: -0.01em;
  transition: color 0.25s ease;
}

.blog-card:hover .blog-card__title {
  color: var(--brand-dark);
}

/* ── Excerpt ── */
.blog-card__excerpt {
  font-size: 0.875rem;
  color: var(--text-body);
  line-height: 1.6;
  margin-bottom: 1.25rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
}

/* ── Tags ── */
.blog-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 1.5rem;
  margin-top: auto;
}

.blog-card__tag {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background: var(--bg-main);
  color: var(--text-body);
  font-size: 0.72rem;
  font-weight: 600;
  padding: 0.25rem 0.65rem;
  border-radius: 9999px;
  border: 1px solid var(--border-subtle);
  transition: all 0.2s;
}

.blog-card:hover .blog-card__tag {
  border-color: rgba(139, 92, 246, 0.1);
  background: rgba(139, 92, 246, 0.02);
}

/* ── CTA ── */
.blog-card__cta {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.875rem;
  font-weight: 800;
  color: var(--brand);
  transition: gap 0.25s ease;
  padding-top: 0.5rem;
  border-top: 1px solid var(--border-subtle);
  width: 100%;
}

.blog-card:hover .blog-card__cta {
  gap: 10px;
}

.blog-card__cta-icon {
  transition: transform 0.25s ease;
}

.blog-card:hover .blog-card__cta-icon {
  transform: translateX(3px);
}

/* ── Empty State ── */
.blog-empty {
  text-align: center;
  padding: 5rem 2rem;
  background: var(--bg-card);
  border-radius: 2rem;
  border: 1px solid var(--border-subtle);
  box-shadow: var(--card-shadow);
  max-width: 600px;
  margin: 2rem auto;
  animation: scaleUp 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.blog-empty__icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.blog-empty__title {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--text-heading);
  margin-bottom: 0.75rem;
}

.blog-empty__subtitle {
  font-size: 0.95rem;
  color: var(--text-body);
  line-height: 1.6;
  margin-bottom: 1.75rem;
}

.blog-empty__btn {
  margin: 0 auto;
}

/* ── Vue Transitions & Animations ── */
.post-fade-item {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.post-fade-enter-active {
  transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.post-fade-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 1, 1);
  position: absolute; /* for smooth grid layout moving */
  width: 100%;
}

.post-fade-enter-from {
  opacity: 0;
  transform: translateY(15px) scale(0.98);
}

.post-fade-leave-to {
  opacity: 0;
  transform: translateY(-15px) scale(0.98);
}

.post-fade-move {
  transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scaleUp {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Responsive Grid fixes */
@media (max-width: 639px) {
  .blog-controls-card {
    padding: 1rem;
    border-radius: 1.25rem;
  }
  .blog-search-input {
    font-size: 0.875rem;
    padding: 0.85rem 1rem 0.85rem 2.75rem;
  }
  .blog-search-icon {
    left: 1rem;
  }
}
</style>
