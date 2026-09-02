<script setup lang="ts">
import type { Project } from '../data/projects';

defineProps<{
  project: Project;
}>();
</script>

<template>
  <article class="project-card" :class="`project-card--${project.ratio ?? 'landscape'}`">
    <a href="#contact" class="project-image-wrap">
      <img class="project-image" :src="project.image" :alt="project.title" loading="lazy" />
      <span class="project-index">{{ project.number }}</span>
      <span class="project-arrow">↗</span>
    </a>

    <div class="project-meta">
      <div>
        <h3>{{ project.title }}</h3>
        <p>{{ project.category }}</p>
      </div>
      <div class="project-location">
        <span>{{ project.location }}</span>
        <span>{{ project.year }}</span>
      </div>
    </div>
  </article>
</template>

<style scoped>
.project-card {
  display: grid;
  gap: 14px;
}

.project-image-wrap {
  position: relative;
  display: block;
  overflow: hidden;
  aspect-ratio: 16 / 10;
  background: #d4d1c6;
}

.project-card--portrait .project-image-wrap {
  aspect-ratio: 4 / 5;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 800ms cubic-bezier(0.22, 1, 0.36, 1);
}

.project-image-wrap::after {
  position: absolute;
  inset: 0;
  content: '';
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.04), rgba(0, 0, 0, 0.18));
  pointer-events: none;
}

.project-image-wrap:hover .project-image {
  transform: scale(1.035);
}

.project-index,
.project-arrow {
  position: absolute;
  z-index: 1;
  top: 14px;
  color: white;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
}

.project-index {
  left: 14px;
}

.project-arrow {
  right: 14px;
  font-size: 18px;
  font-weight: 400;
}

.project-meta {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 20px;
}

.project-meta h3 {
  margin: 0 0 3px;
  font-size: clamp(18px, 2vw, 24px);
  font-weight: 500;
  letter-spacing: -0.04em;
}

.project-meta p,
.project-location span {
  margin: 0;
  color: var(--muted);
  font-size: 11px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.project-location {
  display: grid;
  gap: 3px;
  align-content: start;
  justify-items: end;
  text-align: right;
}
</style>
