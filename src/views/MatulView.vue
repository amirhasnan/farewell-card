<template>
  <main class="page smiski-theme">
    <div class="flip-card" :class="{ flipped: isFlipped }">
      <div class="card-inner">
        <section
          class="card-front"
          :style="{ backgroundImage: `url(${smiskiImage})` }"
          @click="isFlipped = true"
        >
          <div class="front-overlay"></div>

          <div class="front-content">
            <h1>For Matul</h1>
            <p>A Quiet Glowing Thank You</p>

            <div class="tap">
              <span>Tap to Open</span>
            </div>
          </div>
        </section>

        <section class="card-back">
          <button class="back-btn" @click.stop="isFlipped = false">← Back</button>

          <div class="paper">
            <h2>Dear Matul, 🌱</h2>

            <p>
              I'm really glad I got to be your desk neighbour. I truly appreciated every little
              conversation we had, and thank you for always being such a great listener.
            </p>

            <p>
              Sometimes kan when I feel tired looking at code saja, it's really interesting to see
              you do all of the GIS stuff and I enjoyed learning things from you and for once it
              felt refreshing to see something else other than code 🤣
            </p>

            <p>I appreciate the kindness, teamwork, and memories we shared together.</p>

            <div class="signature">— Amir</div>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import smiskiImage from '@/assets/matul.png'

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

  font-family: 'Trebuchet MS', sans-serif;
  padding: 16px;
}

.smiski-theme {
  background: radial-gradient(circle at top, #d9ffe2, #6abf69, #1d3b2a);
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

  border-radius: 30px;
  overflow: hidden;

  backface-visibility: hidden;
  box-shadow: 0 0 45px rgba(194, 255, 204, 0.75);
}

/* ---------- FRONT ---------- */

.card-front {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  border: 3px solid #b7ffb7;

  display: flex;
  align-items: flex-end;

  cursor: pointer;
}

.front-overlay {
  position: absolute;
  inset: 0;

  background: linear-gradient(transparent 20%, rgba(0, 0, 0, 0.05), rgba(8, 40, 18, 0.78));
}

.front-content {
  position: relative;
  z-index: 2;

  width: 100%;
  padding: 30px;

  text-align: center;
  color: white;
}

.front-content h1 {
  margin: 0;
  font-size: 2.4rem;
  font-weight: 700;

  text-shadow: 0 5px 15px rgba(0, 0, 0, 0.45);
}

.front-content p {
  margin-top: 10px;
  font-size: 1rem;

  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
}

.tap {
  margin-top: 30px;
}

.tap span {
  display: inline-block;

  padding: 10px 22px;

  border-radius: 999px;

  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(10px);

  color: #1f4d2b;
  font-size: 0.9rem;
  font-weight: 700;
}

/* ---------- BACK ---------- */

.card-back {
  transform: rotateY(180deg);

  background: #effff0;
  border: 3px solid #b7ffb7;

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

  border: none;
  padding: 8px 14px;

  border-radius: 999px;

  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(10px);

  color: #1f4d2b;
  font-weight: 700;

  cursor: pointer;

  transition: background 0.2s ease;
}

.back-btn:hover {
  background: white;
}

.paper {
  width: 100%;
  height: 100%;

  background: linear-gradient(to bottom, #fbfff8, #effff0);
  border-radius: 20px;

  padding: 52px 28px 28px;

  box-shadow: inset 0 0 18px rgba(31, 77, 43, 0.08);

  overflow-y: auto;
  overflow-x: hidden;

  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
  touch-action: pan-y;

  scrollbar-width: thin;
}

.paper h2 {
  color: #1f4d2b;
  margin-bottom: 22px;
  font-size: 1.9rem;
}

.paper p {
  color: #1f4d2b;
  font-size: 1rem;
  line-height: 1.9;
  margin-bottom: 18px;
}

.signature {
  margin-top: 35px;
  text-align: right;
  font-size: 1.2rem;
  font-weight: bold;
  color: #1f4d2b;
}

/* ---------- MOBILE ---------- */

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
    font-size: 1.55rem;
  }

  .paper p {
    font-size: 0.95rem;
  }
}
</style>
