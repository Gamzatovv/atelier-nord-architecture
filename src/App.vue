<script setup lang="ts">
import SiteHeader from './components/SiteHeader.vue';
import RevealBlock from './components/RevealBlock.vue';
import ProjectCard from './components/ProjectCard.vue';
import MarqueeLine from './components/MarqueeLine.vue';
import { projects } from './data/projects';

const services = [
  'Архитектура',
  'Интерьеры',
  'Реконструкция',
  'Ландшафт',
];

const principles = [
  {
    index: '01',
    title: 'Пространство прежде формы',
    text: 'Мы начинаем с маршрутов, света и пропорций, а не с декоративных решений.',
  },
  {
    index: '02',
    title: 'Материалы без шума',
    text: 'Предпочитаем честные материалы, которые красиво стареют и не требуют объяснений.',
  },
  {
    index: '03',
    title: 'Архитектура на годы',
    text: 'Проектируем так, чтобы пространство оставалось актуальным после первого впечатления.',
  },
];

const team = [
  { name: 'Elin Berg', role: 'Architect / Founder' },
  { name: 'Mikael Lund', role: 'Project Architect' },
  { name: 'Nora Salo', role: 'Interior Architect' },
];
</script>

<template>
  <div id="top" class="site-shell">
    <SiteHeader />

    <main>
      <section class="hero">
        <div class="hero-corner hero-corner--left">Architecture / 04—26</div>
        <div class="hero-corner hero-corner--right">Scroll to explore ↓</div>

        <div class="hero-content">
          <RevealBlock>
            <p class="eyebrow">Independent architecture studio</p>
          </RevealBlock>

          <RevealBlock>
            <h1>
              Quiet
              <em>architecture</em>
              for everyday life.
            </h1>
          </RevealBlock>

          <RevealBlock>
            <div class="hero-bottomline">
              <p>
                Проектируем частные дома, интерьеры и общественные пространства в Северной Европе.
              </p>
              <a href="#projects" class="round-link">↓</a>
            </div>
          </RevealBlock>
        </div>
      </section>

      <section class="intro section-pad">
        <RevealBlock>
          <div class="section-kicker">01 — Studio</div>
        </RevealBlock>

        <div class="intro-grid">
          <RevealBlock>
            <h2>
              Не добавлять больше.
              <span>Убрать лишнее.</span>
            </h2>
          </RevealBlock>

          <RevealBlock>
            <div class="intro-copy">
              <p>
                ATELIER NORD — небольшое архитектурное бюро, работающее на стыке архитектуры,
                интерьера и ландшафта.
              </p>
              <p>
                Нам важны тишина, естественный свет, точная геометрия и материалы, которые
                ощущаются руками.
              </p>
              <a href="#approach" class="text-link">Наш подход ↗</a>
            </div>
          </RevealBlock>
        </div>
      </section>

      <MarqueeLine :items="services" />

      <section id="projects" class="projects section-pad">
        <RevealBlock>
          <div class="section-head">
            <div class="section-kicker">02 — Selected work</div>
            <p>Избранные проекты / 2023—2025</p>
          </div>
        </RevealBlock>

        <div class="projects-grid">
          <RevealBlock
            v-for="project in projects"
            :key="project.number"
            class="project-reveal"
          >
            <ProjectCard :project="project" />
          </RevealBlock>
        </div>
      </section>

      <section id="approach" class="manifesto">
        <div class="manifesto-image">
          <img
            src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1800&q=85"
            alt="Светлый архитектурный интерьер"
            loading="lazy"
          />
        </div>

        <div class="manifesto-copy section-pad">
          <RevealBlock>
            <div class="section-kicker">03 — Approach</div>
          </RevealBlock>

          <RevealBlock>
            <h2>Сдержанность — это не отсутствие характера.</h2>
          </RevealBlock>

          <div class="principles">
            <RevealBlock v-for="principle in principles" :key="principle.index">
              <article class="principle">
                <span>{{ principle.index }}</span>
                <div>
                  <h3>{{ principle.title }}</h3>
                  <p>{{ principle.text }}</p>
                </div>
              </article>
            </RevealBlock>
          </div>
        </div>
      </section>

      <section id="studio" class="studio section-pad">
        <RevealBlock>
          <div class="section-head">
            <div class="section-kicker">04 — People</div>
            <p>Small team / Big attention</p>
          </div>
        </RevealBlock>

        <div class="studio-grid">
          <RevealBlock>
            <h2>
              Три человека.
              <br />Один язык.
            </h2>
          </RevealBlock>

          <RevealBlock>
            <div class="team-list">
              <article v-for="person in team" :key="person.name" class="team-member">
                <span>{{ person.name }}</span>
                <span>{{ person.role }}</span>
              </article>
            </div>
          </RevealBlock>
        </div>
      </section>

      <section id="contact" class="contact">
        <div class="contact-topline">
          <span>05 — Start a project</span>
          <span>Stockholm / Helsinki</span>
        </div>

        <RevealBlock>
          <div class="contact-main">
            <p class="contact-overline">Новый проект?</p>
            <h2>Let's make room<br /><em>for something good.</em></h2>
            <a class="contact-email" href="mailto:hello@ateliernord.example">
              hello@ateliernord.example ↗
            </a>
          </div>
        </RevealBlock>

        <div class="contact-bottom">
          <span>+46 8 410 210 18</span>
          <span>© 2026 ATELIER NORD</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </section>
    </main>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Manrope:wght@400;500;600;700&display=swap');

:root {
  --paper: #ece9e0;
  --ink: #1c1f1b;
  --muted: #6f736c;
  --line: rgba(28, 31, 27, 0.15);
  --accent: #8a8f74;
  --dark: #1b1e1a;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  min-width: 320px;
  margin: 0;
  background: var(--paper);
  color: var(--ink);
  font-family: 'Manrope', sans-serif;
  -webkit-font-smoothing: antialiased;
}

body,
a,
button {
  font: inherit;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  color: inherit;
}

img {
  display: block;
  max-width: 100%;
}

.site-shell {
  overflow: clip;
}

.section-pad {
  padding: clamp(76px, 9vw, 150px) clamp(20px, 4vw, 64px);
}

.section-kicker,
.eyebrow,
.contact-overline,
.hero-corner,
.section-head p,
.contact-topline,
.contact-bottom,
.principle > span,
.team-member span:last-child {
  font-family: 'DM Mono', monospace;
  font-size: 10px;
  line-height: 1.4;
  letter-spacing: 0.11em;
  text-transform: uppercase;
}

.hero {
  position: relative;
  min-height: 100svh;
  display: flex;
  align-items: flex-end;
  padding: 150px clamp(20px, 4vw, 64px) 54px;
  background:
    linear-gradient(180deg, rgba(240, 238, 231, 0.18), rgba(26, 29, 25, 0.12)),
    url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=88')
      center / cover;
}

.hero::after {
  position: absolute;
  inset: 0;
  content: '';
  background: linear-gradient(180deg, rgba(20, 22, 19, 0.06), rgba(20, 22, 19, 0.28));
  pointer-events: none;
}

.hero-content,
.hero-corner {
  position: relative;
  z-index: 1;
  color: white;
}

.hero-content {
  width: min(100%, 1120px);
}

.hero .eyebrow {
  margin-bottom: 24px;
}

.hero h1 {
  max-width: 1050px;
  margin: 0;
  font-size: clamp(54px, 10.2vw, 142px);
  font-weight: 500;
  line-height: 0.9;
  letter-spacing: -0.08em;
}

.hero h1 em {
  display: block;
  font-family: Georgia, 'Times New Roman', serif;
  font-weight: 400;
  letter-spacing: -0.07em;
}

.hero-bottomline {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 32px;
  width: min(100%, 620px);
  margin-top: 46px;
}

.hero-bottomline p {
  max-width: 430px;
  margin: 0;
  font-size: 13px;
  line-height: 1.65;
}

.round-link {
  display: grid;
  width: 56px;
  height: 56px;
  flex: 0 0 auto;
  place-items: center;
  border: 1px solid rgba(255, 255, 255, 0.55);
  border-radius: 50%;
  font-size: 19px;
  transition:
    background 220ms ease,
    color 220ms ease;
}

.round-link:hover {
  background: white;
  color: var(--ink);
}

.hero-corner {
  position: absolute;
  top: 104px;
  z-index: 1;
  opacity: 0.74;
}

.hero-corner--left {
  left: clamp(20px, 4vw, 64px);
}

.hero-corner--right {
  right: clamp(20px, 4vw, 64px);
}

.intro {
  display: grid;
  grid-template-columns: minmax(120px, 0.25fr) 1fr;
  gap: clamp(32px, 8vw, 130px);
}

.intro-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(240px, 0.65fr);
  gap: clamp(36px, 8vw, 140px);
  align-items: start;
}

.intro h2,
.studio h2,
.manifesto-copy > div > h2,
.contact h2 {
  margin: 0;
  font-size: clamp(44px, 7vw, 92px);
  font-weight: 500;
  line-height: 0.94;
  letter-spacing: -0.075em;
}

.intro h2 span {
  display: block;
  color: var(--accent);
  font-family: Georgia, 'Times New Roman', serif;
  font-weight: 400;
}

.intro-copy {
  max-width: 460px;
  padding-top: 10px;
}

.intro-copy p {
  margin: 0 0 20px;
  color: #4f534d;
  font-size: 15px;
  line-height: 1.72;
}

.text-link {
  display: inline-flex;
  margin-top: 14px;
  border-bottom: 1px solid var(--ink);
  padding-bottom: 4px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 76px 28px;
  margin-top: 74px;
}

.project-reveal:nth-child(2) {
  margin-top: 120px;
}

.project-reveal:nth-child(3) {
  margin-top: -40px;
}

.section-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 28px;
}

.section-head p {
  margin: 0;
  color: var(--muted);
}

.manifesto {
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
  background: #dedbd1;
}

.manifesto-image {
  min-height: 820px;
}

.manifesto-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.manifesto-copy {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.manifesto-copy > div > h2 {
  max-width: 660px;
  margin-top: 64px;
}

.principles {
  display: grid;
  gap: 0;
  margin-top: 120px;
}

.principle {
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 20px;
  padding: 24px 0;
  border-top: 1px solid var(--line);
}

.principle h3 {
  margin: 0 0 8px;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.04em;
}

.principle p {
  max-width: 520px;
  margin: 0;
  color: #555a53;
  font-size: 14px;
  line-height: 1.6;
}

.studio-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(280px, 0.55fr);
  gap: 80px;
  margin-top: 100px;
}

.team-list {
  border-top: 1px solid var(--line);
}

.team-member {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 20px;
  padding: 19px 0;
  border-bottom: 1px solid var(--line);
}

.team-member span:first-child {
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.03em;
}

.contact {
  min-height: 94svh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 26px clamp(20px, 4vw, 64px) 24px;
  background: var(--dark);
  color: #f3f0e8;
}

.contact-topline,
.contact-bottom {
  display: flex;
  justify-content: space-between;
  gap: 22px;
  color: rgba(243, 240, 232, 0.55);
}

.contact-main {
  padding: 100px 0 120px;
}

.contact-overline {
  margin: 0 0 24px;
}

.contact h2 {
  font-size: clamp(58px, 10vw, 138px);
  letter-spacing: -0.085em;
}

.contact h2 em {
  font-family: Georgia, 'Times New Roman', serif;
  font-weight: 400;
  letter-spacing: -0.08em;
}

.contact-email {
  display: inline-block;
  margin-top: 42px;
  border-bottom: 1px solid rgba(243, 240, 232, 0.65);
  padding-bottom: 8px;
  font-size: 16px;
}

.contact-bottom a {
  color: rgba(243, 240, 232, 0.8);
}

@media (max-width: 900px) {
  .intro,
  .intro-grid,
  .manifesto,
  .studio-grid {
    grid-template-columns: 1fr;
  }

  .intro {
    gap: 44px;
  }

  .intro-copy {
    max-width: 620px;
  }

  .manifesto-image {
    min-height: 62svh;
  }

  .manifesto-copy > div > h2 {
    margin-top: 44px;
  }

  .principles {
    margin-top: 72px;
  }

  .studio-grid {
    gap: 60px;
    margin-top: 62px;
  }

  .project-reveal:nth-child(2),
  .project-reveal:nth-child(3) {
    margin-top: 0;
  }
}

@media (max-width: 680px) {
  .hero {
    min-height: 94svh;
    padding-bottom: 32px;
  }

  .hero-corner--right {
    display: none;
  }

  .hero-bottomline {
    align-items: flex-start;
  }

  .hero-bottomline p {
    max-width: 290px;
  }

  .round-link {
    width: 48px;
    height: 48px;
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: 54px;
    margin-top: 50px;
  }

  .section-head {
    align-items: flex-start;
    flex-direction: column;
  }

  .project-meta {
    grid-template-columns: 1fr;
  }

  .project-location {
    grid-template-columns: auto auto;
    justify-content: space-between;
    justify-items: start;
    text-align: left;
  }

  .contact-main {
    padding: 110px 0;
  }

  .contact-bottom {
    display: grid;
    gap: 10px;
  }
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}
</style>
