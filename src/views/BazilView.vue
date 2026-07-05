<template>
  <main class="page star-theme">
    <div class="flip-card" :class="{ flipped: isFlipped }">
      <div class="card-inner">
        <section
          class="card-front"
          :style="{ backgroundImage: `url(${starImage})` }"
          @click="isFlipped = true"
        >
          <div class="front-overlay"></div>

          <div class="front-content">
            <h1>For Bazil</h1>
            <p>A Farewell From a Galaxy Far Away</p>

            <div class="tap">
              <span>Tap to Open</span>
            </div>
          </div>
        </section>

        <section class="card-back">
          <button class="back-btn" @click.stop="isFlipped = false">Back</button>

          <div class="paper">
            <h2>Dear Bazil, 🚀</h2>

            <p>
              I really appreciate every knowledge that you share to me walaupun ada yang over
              explain but somehow I really enjoyed your explanation and will dangar sampai abis.
            </p>

            <p>Now take a good care of my BRAVE UI if you decided to use it in the end lah 🤣.</p>

            <p>Adang tah sakit kaki</p>

            <p>
              Good luck with all the coding ahead! I know there will be challenges, but I truly
              believe you can do it. Keep learning, keep building, and never doubt your abilities!
            </p>

            <div class="signature">— Amir</div>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import starImage from '@/assets/bazil.png'

const isFlipped = ref(false)
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.page {
  min-height: 97vh;

  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: Orbitron, Arial, sans-serif;
  padding: 16px;
}

.star-theme {
  background:
    radial-gradient(circle at top, #334155, transparent 30%),
    linear-gradient(135deg, #020617, #111827, #1e1b4b);
}

.flip-card {
  width: min(390px, 92vw);
  height: min(560px, calc(100dvh - 32px));

  perspective: 1800px;
}

.card-inner {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.9s cubic-bezier(0.2, 0.7, 0.2, 1);
}

.flip-card.flipped .card-inner {
  transform: rotateY(180deg);
}

.card-front,
.card-back {
  position: absolute;
  inset: 0;
  border-radius: 24px;
  overflow: hidden;
  backface-visibility: hidden;
  box-shadow: 0 0 45px rgba(250, 204, 21, 0.25);
}

.card-front {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: 3px solid #facc15;
  display: flex;
  align-items: flex-end;
  cursor: pointer;
}

.front-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(transparent 15%, rgba(0, 0, 0, 0.1), rgba(2, 6, 23, 0.85));
}

.front-content {
  position: relative;
  z-index: 2;
  width: 100%;
  padding: 30px;
  text-align: center;
  color: #facc15;
}

.front-content h1 {
  margin: 0;
  font-size: 2.4rem;
  font-weight: bold;
  text-shadow: 0 0 18px rgba(250, 204, 21, 0.45);
}

.front-content p {
  margin-top: 10px;
  color: #e5e7eb;
  font-size: 1rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.55);
}

.tap {
  margin-top: 30px;
}

.tap span {
  display: inline-block;
  padding: 10px 22px;
  border-radius: 999px;
  background: rgba(250, 204, 21, 0.16);
  border: 1px solid rgba(250, 204, 21, 0.55);
  backdrop-filter: blur(10px);
  color: #facc15;
  font-size: 0.9rem;
}

.card-back {
  transform: rotateY(180deg);
  background: #0f172a;
  border: 3px solid #38bdf8;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 20px;
  overflow: hidden;

  cursor: default;
}

.back-btn {
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 10;

  border: 1px solid rgba(250, 204, 21, 0.55);
  padding: 8px 14px;
  border-radius: 999px;

  background: rgba(15, 23, 42, 0.85);
  backdrop-filter: blur(10px);

  color: #facc15;
  font-weight: bold;
  cursor: pointer;
}

.paper {
  width: 100%;
  height: 100%;

  background:
    radial-gradient(circle at top, rgba(56, 189, 248, 0.18), transparent 35%),
    linear-gradient(to bottom, #020617, #0f172a);

  border-radius: 18px;
  padding: 52px 28px 28px;

  overflow-y: auto;
  overflow-x: hidden;

  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
  touch-action: pan-y;

  box-shadow: inset 0 0 18px rgba(56, 189, 248, 0.18);
}

.paper h2 {
  color: #facc15;
  margin-bottom: 22px;
  font-size: 1.8rem;
}

.paper p {
  color: #e5e7eb;
  line-height: 1.9;
  margin-bottom: 18px;
  font-size: 1rem;
}

.signature {
  margin-top: 35px;
  text-align: right;
  color: #facc15;
  font-weight: bold;
  font-size: 1.2rem;
}

@media (max-width: 420px) {
  .front-content {
    padding: 22px;
  }

  .front-content h1 {
    font-size: 2rem;
  }

  .paper {
    padding: 52px 22px 22px;
  }

  .paper h2 {
    font-size: 1.5rem;
  }

  .paper p {
    font-size: 0.95rem;
  }
}
</style>
