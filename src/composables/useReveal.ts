import { onBeforeUnmount, onMounted, ref } from 'vue';

export function useReveal() {
  const element = ref<HTMLElement | null>(null);
  let observer: IntersectionObserver | null = null;

  onMounted(() => {
    if (!element.value) {
      return;
    }

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer?.unobserve(entry.target);
        }
      },
      {
        threshold: 0.14,
        rootMargin: '0px 0px -40px 0px',
      },
    );

    observer.observe(element.value);
  });

  onBeforeUnmount(() => {
    observer?.disconnect();
  });

  return { element };
}
