<template>
  <main class="page pooh-theme">
    <div class="flip-card" :class="{ flipped: isFlipped }">
      <div class="card-inner">
        <!-- FRONT -->
        <section
          class="card-front"
          :style="{ backgroundImage: `url(${poohImage})` }"
          @click="isFlipped = true"
        >
          <div class="front-overlay"></div>

          <div class="front-content">
            <h1>For Emily</h1>
            <p>A Honey-Sweet Farewell Card</p>

            <div class="tap">
              <span>Tap to Open</span>
            </div>
          </div>
        </section>

        <!-- BACK -->
        <section class="card-back">
          <button class="back-btn" @click.stop="isFlipped = false">← Back</button>

          <div class="paper">
            <h2>Dear Emily, 🍯</h2>

            <p>
              Thank you for giving me the opportunity for being the part of Product Development team
              and being an awesome leader for PD!.
            </p>

            <p>
              Also thank you for giving me the freedom to showcase my skills because without your
              blessings there will be no BRAVE and Observe Catalogue.
            </p>

            <p>
              I'm really grateful and happy to work under your leadership and I believe one day you
              can elevate PD to another level.
            </p>

            <p>Lastly please lower your expectations for the new System Administrator 😂</p>

            <p>Thanks For Everything!</p>

            <div class="signature">— Amir</div>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import poohImage from '@/assets/emily.png'

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

  padding: 16px;

  background: radial-gradient(circle at top, #ffe89d, #f7b733);
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

  border-radius: 28px;

  overflow: hidden;

  backface-visibility: hidden;

  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.28);
}

/* =======================
        FRONT
======================= */

.card-front {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  border: 5px solid #d89b00;

  display: flex;
  align-items: flex-end;
}

.front-overlay {
  position: absolute;
  inset: 0;

  background: linear-gradient(transparent 20%, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.75));
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

  font-size: 2.5rem;

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

  background: rgba(255, 255, 255, 0.2);

  backdrop-filter: blur(10px);

  font-size: 0.9rem;
}

/* =======================
        BACK
======================= */

.card-back {
  transform: rotateY(180deg);

  background: #fff6de;

  border: 5px solid #d89b00;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 20px;

  overflow: hidden;

  cursor: default;
}

.paper {
  width: 100%;
  height: 100%;

  background: linear-gradient(to bottom, #fffef7, #fff8e7);

  border-radius: 18px;

  padding: 52px 28px 28px;

  box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.06);

  overflow-y: auto;
  overflow-x: hidden;

  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
  touch-action: pan-y;

  scrollbar-width: thin;
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

  color: #8b5a00;

  font-weight: bold;

  cursor: pointer;

  transition: 0.25s;
}

.back-btn:hover {
  background: white;
}
.paper h2 {
  color: #8b5a00;

  margin-bottom: 22px;

  font-size: 2rem;
}

.paper p {
  color: #5d3f00;

  font-size: 1rem;

  line-height: 1.9;

  margin-bottom: 18px;
}

.signature {
  margin-top: 35px;

  text-align: right;

  font-size: 1.2rem;

  font-weight: bold;

  color: #8b5a00;
}

html,
body,
#app {
  width: 100%;
  height: 100%;
  margin: 0;

  overflow: hidden;
}
/* =======================
       MOBILE
======================= */

@media (max-width: 420px) {
  .page {
    padding: 16px;
  }

  .front-content {
    padding: 22px;
  }

  .front-content h1 {
    font-size: 2rem;
  }

  .paper {
    padding: 22px;
  }

  .paper h2 {
    font-size: 1.6rem;
  }

  .paper p {
    font-size: 0.95rem;
  }
}
</style>
