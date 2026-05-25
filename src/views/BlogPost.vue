<script setup lang="ts">
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getPostBySlug, getAllPosts } from "../utils/blogLoader";
import {
  PhClock,
  PhTag,
  PhArrowLeft,
  PhUser,
  PhShare,
} from "@phosphor-icons/vue";

const route = useRoute();
const router = useRouter();

const slug = computed(() => route.params.slug as string);
const post = computed(() => getPostBySlug(slug.value));
const relatedPosts = computed(() =>
  getAllPosts()
    .filter((p) => p.slug !== slug.value)
    .slice(0, 2),
);

const copied = ref(false);

function goBack() {
  router.push("/blog");
}

function goToPost(s: string) {
  router.push(`/blog/${s}`);
}

function share() {
  if (navigator.share && post.value) {
    navigator
      .share({
        title: post.value.title,
        text: post.value.excerpt,
        url: window.location.href,
      })
      .catch(() => {});
  } else {
    navigator.clipboard.writeText(window.location.href).then(() => {
      copied.value = true;
      setTimeout(() => {
        copied.value = false;
      }, 2000);
    });
  }
}
</script>

<template>
  <div class="post-page">
    <!-- 404 -->
    <div v-if="!post" class="post-not-found">
      <h1>Статтю не знайдено</h1>
      <button @click="goBack" class="btn-primary">
        ← Повернутися до блогу
      </button>
    </div>

    <template v-else>
      <div class="post-container">
        <!-- Sleek Navigation -->
        <nav class="post-nav-bar">
          <button class="post-nav-back" @click="goBack">
            <PhArrowLeft :size="16" />
            <span>Блог</span>
          </button>

          <button class="post-nav-share" @click="share" title="Поділитися">
            <PhShare :size="16" />
            <span>Поділитися</span>
            <span v-if="copied" class="toast-badge">Скопійовано!</span>
          </button>
        </nav>

        <!-- Header -->
        <header class="post-header">
          <span class="post-category-badge">{{ post.category }}</span>
          <h1 class="post-title">{{ post.title }}</h1>

          <!-- Consolidated Author Card -->
          <div class="post-author-card">
            <div class="post-author-avatar">
              <PhUser :size="18" weight="bold" />
            </div>
            <div class="post-author-meta">
              <div class="post-author-name">
                {{ post.author || "Команда Шукача" }}
              </div>
              <div class="post-author-sub">
                <span class="post-meta-date">{{ post.formattedDate }}</span>
                <span class="post-meta-separator">·</span>
                <span class="post-meta-readtime">
                  <PhClock :size="13" /> {{ post.readTime }} хв читання
                </span>
              </div>
            </div>
          </div>
        </header>

        <!-- Featured Image Showcase -->
        <div class="post-image-wrap">
          <img :src="post.image" :alt="post.imageAlt" class="post-image" />
        </div>

        <!-- Main Content -->
        <main>
          <article class="post-content prose" v-html="post.content" />

          <!-- Tags -->
          <div class="post-tags-container">
            <div class="post-tags-list">
              <span v-for="tag in post.tags" :key="tag" class="post-tag">
                <PhTag :size="13" />
                {{ tag }}
              </span>
            </div>
          </div>
        </main>
      </div>

      <!-- Related Posts Section (Full Width Bottom Area) -->
      <section v-if="relatedPosts.length" class="post-related-section">
        <div class="post-related-section__inner">
          <h3 class="post-related-title">Читайте також</h3>
          <div class="post-related-grid">
            <article
              v-for="rel in relatedPosts"
              :key="rel.slug"
              class="post-related-card"
              @click="goToPost(rel.slug)"
              :tabindex="0"
              @keydown.enter="goToPost(rel.slug)"
            >
              <div class="post-related-card__image-wrap">
                <img
                  :src="rel.image"
                  :alt="rel.imageAlt"
                  class="post-related-card__image"
                  loading="lazy"
                />
                <span class="post-related-card__category">{{
                  rel.category
                }}</span>
              </div>
              <div class="post-related-card__body">
                <div class="post-related-card__meta">
                  <span>{{ rel.formattedDate }}</span>
                  <span>·</span>
                  <span>
                    <PhClock :size="12" />
                    {{ rel.readTime }} хв читання
                  </span>
                </div>
                <h4 class="post-related-card__title">{{ rel.title }}</h4>
                <p class="post-related-card__excerpt">{{ rel.excerpt }}</p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </template>
  </div>
</template>

<style scoped>
/* ── Page Wrapper ── */
.post-page {
  min-height: 100vh;
  padding-top: 120px;
  padding-bottom: 0;
  background: var(--bg-main);
}

.post-not-found {
  text-align: center;
  padding: 6rem 1.5rem;
  max-width: 500px;
  margin: 0 auto;
}
.post-not-found h1 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: var(--text-heading);
}

/* ── Container ── */
.post-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* ── Sleek Navigation Bar ── */
.post-nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.5rem;
}

.post-nav-back,
.post-nav-share {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  border-radius: 9999px;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  color: var(--text-body);
  padding: 0.5rem 1.1rem;
}

.post-nav-back:hover {
  border-color: var(--brand-light);
  color: var(--brand-dark);
  background: rgba(139, 92, 246, 0.04);
}

.post-nav-share {
  position: relative;
}

.post-nav-share:hover {
  border-color: var(--brand-light);
  color: var(--brand-dark);
  background: rgba(139, 92, 246, 0.04);
}

/* ── Header ── */
.post-header {
  margin-bottom: 2rem;
}

.post-category-badge {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--brand);
  background: rgba(139, 92, 246, 0.08);
  padding: 0.35rem 0.85rem;
  border-radius: 9999px;
  margin-bottom: 1.25rem;
}

.post-title {
  font-size: clamp(2rem, 5vw, 2.75rem);
  font-weight: 800;
  line-height: 1.2;
  color: var(--text-heading);
  letter-spacing: -0.03em;
  margin-bottom: 1.5rem;
}

/* ── Consolidated Author Card ── */
.post-author-card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 1.25rem 0;
  border-top: 1px solid var(--border-subtle);
  border-bottom: 1px solid var(--border-subtle);
}

.post-author-avatar {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--brand-light) 0%, var(--brand) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 4px 10px rgba(139, 92, 246, 0.15);
  flex-shrink: 0;
}

.post-author-meta {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.post-author-name {
  font-weight: 700;
  font-size: 0.95rem;
  color: var(--text-heading);
}

.post-author-sub {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.8rem;
  color: var(--text-body);
  opacity: 0.85;
}

.post-meta-separator {
  opacity: 0.4;
}

.post-meta-readtime {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

/* ── Featured Image ── */
.post-image-wrap {
  margin-bottom: 3rem;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(15, 23, 42, 0.08);
  border: 1px solid var(--border-subtle);
  background: #f1f5f9;
}

.post-image {
  width: 100%;
  height: auto;
  max-height: 520px;
  object-fit: cover;
  display: block;
}

/* ── Article prose ── */
.post-content.prose {
  font-size: 1.125rem;
  line-height: 1.85;
  color: var(--text-body);
  margin-bottom: 3.5rem;
}

:deep(.prose h2) {
  font-size: 1.625rem;
  font-weight: 800;
  color: var(--text-heading);
  margin: 3rem 0 1.25rem;
  letter-spacing: -0.02em;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--border-subtle);
}

:deep(.prose h3) {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-heading);
  margin: 2.25rem 0 1rem;
}

:deep(.prose p) {
  margin-bottom: 1.5rem;
}

:deep(.prose strong) {
  color: var(--text-heading);
  font-weight: 700;
}

:deep(.prose blockquote) {
  border-left: 4px solid var(--brand);
  background: rgba(139, 92, 246, 0.04);
  padding: 1.5rem 1.75rem;
  border-radius: 0 1rem 1rem 0;
  margin: 2.25rem 0;
  font-style: italic;
  font-size: 1.15rem;
  line-height: 1.65;
  color: var(--text-heading);
}

:deep(.prose ul) {
  list-style: none;
  padding: 0;
  margin: 1.25rem 0 1.75rem;
}

:deep(.prose ul li) {
  padding-left: 1.75rem;
  position: relative;
  margin-bottom: 0.75rem;
}

:deep(.prose ul li::before) {
  content: "";
  position: absolute;
  left: 6px;
  top: 0.7rem;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--brand);
}

:deep(.prose ol) {
  padding-left: 1.75rem;
  margin: 1.25rem 0 1.75rem;
}

:deep(.prose ol li) {
  margin-bottom: 0.75rem;
}

:deep(.prose ol li::marker) {
  color: var(--brand);
  font-weight: 700;
}

:deep(.prose table) {
  width: 100%;
  border-collapse: collapse;
  margin: 2.5rem 0;
  font-size: 0.95rem;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(15, 23, 42, 0.04);
  border: 1px solid var(--border-subtle);
}

:deep(.prose th) {
  background: #f8fafc;
  color: var(--text-heading);
  font-weight: 700;
  padding: 1rem 1.25rem;
  text-align: left;
  border-bottom: 2px solid var(--border-subtle);
}

:deep(.prose td) {
  padding: 1rem 1.25rem;
  border-bottom: 1px solid var(--border-subtle);
  color: var(--text-body);
  background: white;
}

:deep(.prose tr:last-child td) {
  border-bottom: none;
}

:deep(.prose tr:nth-child(even) td) {
  background: #fafafb;
}

:deep(.prose hr) {
  border: none;
  border-top: 1px solid var(--border-subtle);
  margin: 3.5rem 0;
}

/* ── Tags ── */
.post-tags-container {
  padding-top: 1.5rem;
  border-top: 1px solid var(--border-subtle);
  margin-bottom: 3.5rem;
}

.post-tags-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.post-tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: white;
  border: 1px solid var(--border-subtle);
  color: var(--text-body);
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.4rem 0.9rem;
  border-radius: 9999px;
  transition: all 0.25s;
  cursor: default;
}

.post-tag:hover {
  background: rgba(139, 92, 246, 0.05);
  color: var(--brand);
  border-color: rgba(139, 92, 246, 0.2);
}

/* ── Telegram CTA Banner (Beautiful Card) ── */
.post-cta-banner {
  position: relative;
  background: linear-gradient(135deg, #1e1b4b 0%, #311060 100%);
  border-radius: 2rem;
  padding: 2.5rem;
  color: white;
  overflow: hidden;
  box-shadow:
    0 20px 40px -15px rgba(49, 16, 96, 0.35),
    0 0 0 1px rgba(139, 92, 246, 0.1);
  margin-bottom: 4rem;
}

.post-cta-banner__glow {
  position: absolute;
  top: -50%;
  right: -20%;
  width: 300px;
  height: 300px;
  background: radial-gradient(
    circle,
    rgba(139, 92, 246, 0.35) 0%,
    transparent 70%
  );
  filter: blur(50px);
  pointer-events: none;
}

.post-cta-banner__content {
  position: relative;
  z-index: 1;
}

.post-cta-banner__header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 1.25rem;
}

.post-cta-banner__icon {
  font-size: 2.5rem;
  line-height: 1;
}

.post-cta-banner__title-group {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.post-cta-banner__title {
  color: white;
  font-size: 1.35rem;
  font-weight: 800;
  margin: 0;
  letter-spacing: -0.02em;
}

.post-cta-banner__subtitle {
  color: var(--brand-light);
  font-size: 0.875rem;
  font-weight: 600;
  margin: 0;
}

.post-cta-banner__description {
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.75rem;
}

.post-cta-banner__features {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 1.5rem;
  margin-bottom: 2rem;
}

.post-cta-banner__feature-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.875rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
}

.post-cta-banner__feature-check {
  color: #c084fc;
  font-weight: 800;
}

.post-cta-banner__btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: white;
  color: #311060;
  font-weight: 800;
  font-size: 0.95rem;
  padding: 0.9rem 2rem;
  border-radius: 9999px;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.post-cta-banner__btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(139, 92, 246, 0.3);
  background: #fdfdfd;
}

.post-cta-banner__btn-arrow {
  width: 16px;
  height: 16px;
  transition: transform 0.3s ease;
}

.post-cta-banner__btn:hover .post-cta-banner__btn-arrow {
  transform: translateX(3px);
}

/* ── Related Posts Section (Full Width Bottom Area) ── */
.post-related-section {
  background: #ffffff;
  border-top: 1px solid var(--border-subtle);
  margin-top: 4rem;
  padding: 5rem 1.5rem;
}

.post-related-section__inner {
  max-width: 1000px;
  margin: 0 auto;
}

.post-related-title {
  font-size: 1.75rem;
  font-weight: 800;
  color: var(--text-heading);
  letter-spacing: -0.02em;
  margin-bottom: 2.5rem;
  text-align: center;
}

.post-related-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 640px) {
  .post-related-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.post-related-card {
  background: var(--bg-main);
  border-radius: 1.5rem;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid var(--border-subtle);
  transition: all 0.35s cubic-bezier(0.2, 0.8, 0.2, 1);
  display: flex;
  flex-direction: column;
  height: 100%;
  outline: none;
}

.post-related-card:hover,
.post-related-card:focus-visible {
  transform: translateY(-5px);
  box-shadow: 0 20px 35px rgba(15, 23, 42, 0.05);
  border-color: rgba(139, 92, 246, 0.2);
}

.post-related-card__image-wrap {
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: #cbd5e1;
}

.post-related-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.post-related-card:hover .post-related-card__image {
  transform: scale(1.04);
}

.post-related-card__category {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  color: var(--brand-dark);
  font-size: 0.675rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 0.35rem 0.85rem;
  border-radius: 9999px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
}

.post-related-card__body {
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.post-related-card__meta {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.75rem;
  color: var(--text-body);
  margin-bottom: 0.75rem;
  opacity: 0.8;
}

.post-related-card__meta span {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.post-related-card__title {
  font-size: 1.125rem;
  font-weight: 800;
  line-height: 1.4;
  color: var(--text-heading);
  margin-bottom: 0.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.post-related-card__excerpt {
  font-size: 0.875rem;
  color: var(--text-body);
  line-height: 1.5;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* ── Toast tooltip for share button ── */
.toast-badge {
  position: absolute;
  bottom: -40px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--text-heading);
  color: white;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.35rem 0.75rem;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  white-space: nowrap;
  animation: tooltipFade 0.2s cubic-bezier(0.2, 0.8, 0.2, 1);
  z-index: 10;
}

.toast-badge::after {
  content: "";
  position: absolute;
  top: -4px;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 8px;
  height: 8px;
  background: var(--text-heading);
}

@keyframes tooltipFade {
  from {
    opacity: 0;
    transform: translate(-50%, 4px);
  }
  to {
    opacity: 1;
    transform: translate(-50%, 0);
  }
}

/* ── Responsive Spacing ── */
@media (max-width: 639px) {
  .post-page {
    padding-top: 100px;
  }
  .post-nav-bar {
    margin-bottom: 1.75rem;
  }
  .post-header {
    margin-bottom: 1.5rem;
  }
  .post-image-wrap {
    margin-bottom: 2rem;
    border-radius: 1rem;
  }
  .post-content.prose {
    font-size: 1rem;
    line-height: 1.7;
    margin-bottom: 2rem;
  }
  .post-cta-banner {
    padding: 1.75rem;
    border-radius: 1.5rem;
    margin-bottom: 3rem;
  }
  .post-cta-banner__header {
    gap: 12px;
  }
  .post-cta-banner__icon {
    font-size: 2rem;
  }
  .post-cta-banner__btn {
    width: 100%;
    justify-content: center;
  }
  .post-related-section {
    padding: 3.5rem 1rem;
  }
}
</style>
