<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const isOpen = ref(false);

const closeMenu = () => {
  isOpen.value = false;
};

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header class="site-header" :class="{ 'menu-open': isOpen, 'is-scrolled': isScrolled}">
    <a class="wordmark" href="#top" @click="closeMenu">
      <span>ATELIER</span>
      <span>NORD</span>
    </a>

    <button
      class="menu-toggle"
      type="button"
      :aria-expanded="isOpen"
      aria-label="Открыть меню"
      @click="isOpen = !isOpen"
    >
      <span></span>
      <span></span>
    </button>

    <nav class="navigation" :class="{ open: isOpen }">
      <a href="#projects" @click="closeMenu">Проекты</a>
      <a href="#studio" @click="closeMenu">Бюро</a>
      <a href="#approach" @click="closeMenu">Подход</a>
      <a href="#contact" @click="closeMenu">Контакты</a>
    </nav>

    <a class="header-note" href="#contact" @click="closeMenu">
      Stockholm / Helsinki
    </a>
  </header>
</template>

<style scoped>
.site-header {
  position: fixed;
  inset: 0 0 auto;
  z-index: 20;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: start;
  padding: 24px 32px;
  color: var(--ink);
  mix-blend-mode: normal;
  transition: background-color 0.35s ease,
}

.is-scrolled {
  background-color: black;
}

.wordmark {
  display: inline-grid;
  width: fit-content;
  color: inherit;
  font-size: 13px;
  font-weight: 700;
  line-height: 0.92;
  letter-spacing: 0.11em;
}

.navigation {
  display: flex;
  gap: 28px;
  margin-top: 1px;
}

.navigation a,
.header-note {
  color: inherit;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.navigation a {
  position: relative;
}

.navigation a::after {
  position: absolute;
  right: 0;
  bottom: -6px;
  left: 0;
  height: 1px;
  content: '';
  background: currentColor;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 260ms ease;
}

.navigation a:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

.header-note {
  justify-self: end;
  opacity: 0.66;
}

.menu-toggle {
  display: none;
}

@media (max-width: 840px) {
  .site-header {
    grid-template-columns: 1fr auto;
    padding: 20px;
  }

  .navigation {
    position: absolute;
    top: 64px;
    right: 16px;
    left: 16px;
    display: none;
    flex-direction: column;
    gap: 18px;
    padding: 20px;
    border: 1px solid rgba(28, 31, 27, 0.14);
    background: rgba(237, 234, 226, 0.96);
    backdrop-filter: blur(14px);
  }

  .navigation.open {
    display: flex;
  }

  .header-note {
    display: none;
  }

  .menu-toggle {
    display: grid;
    gap: 5px;
    justify-self: end;
    padding: 6px;
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  .menu-toggle span {
    display: block;
    width: 24px;
    height: 1px;
    background: currentColor;
    transition: transform 220ms ease;
  }

  .menu-open .menu-toggle span:first-child {
    transform: translateY(3px) rotate(45deg);
  }

  .menu-open .menu-toggle span:last-child {
    transform: translateY(-3px) rotate(-45deg);
  }
}
</style>
