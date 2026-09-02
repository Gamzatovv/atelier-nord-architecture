<script setup lang="ts">
defineProps<{
  items: string[];
}>();
</script>

<template>
  <div class="marquee" aria-hidden="true">
    <div class="marquee-track">
      <span v-for="repeat in 3" :key="repeat" class="marquee-group">
        <template v-for="(item, index) in items" :key="`${repeat}-${item}`">
          <span class="item">{{ item }}</span>
          <span v-if="index < items.length - 1" class="dot">·</span>
        </template>
      </span>
    </div>
  </div>
</template>

<style scoped>
.marquee {
  overflow: hidden;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.marquee-track {
  display: flex;
  width: max-content;
  animation: slide 24s linear infinite;
}

.marquee-group {
  display: flex;
  align-items: center;
  padding: 18px 0;
}

.item {
  margin: 0 22px;
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.dot {
  color: var(--accent);
  font-size: 18px;
}

@keyframes slide {
  to {
    transform: translateX(-33.333%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .marquee-track {
    animation: none;
  }
}
</style>
