<script setup lang="ts">
import { useReveal } from '../composables/useReveal';

const { element } = useReveal();
</script>

<template>
  <div ref="element" class="reveal">
    <slot />
  </div>
</template>

<style scoped>
.reveal {
  opacity: 0;
  transform: translate3d(0, 42px, 0);
  transition:
    opacity 800ms cubic-bezier(0.22, 1, 0.36, 1),
    transform 900ms cubic-bezier(0.22, 1, 0.36, 1);
}

.reveal.is-visible {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}
</style>
