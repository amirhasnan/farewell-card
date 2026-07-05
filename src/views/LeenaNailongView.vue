<template>
  <main class="page nailong-theme">
    <div class="flip-card" :class="{ flipped: isFlipped }">
      <div class="card-inner">
        <section
          class="card-front"
          :style="{ backgroundImage: `url(${nailongImage})` }"
          @click="isFlipped = true"
        >
          <div class="front-overlay"></div>

          <div class="front-content">
            <h1>For Leena</h1>
            <p>The Real Farewell Card</p>

            <div class="tap">
              <span>Tap to Open</span>
            </div>
          </div>
        </section>

        <section class="card-back">
          <button class="back-btn" @click.stop="isFlipped = false">← Back</button>

          <div class="paper">
            <h2>Dear Leena, 🕊️</h2>

            <p>I just wanted to say I really appreciate you!</p>

            <p>
              For me, you've always been the anchor of the Product Development team. Your presence
              brought everyone together, and I honestly don't think PD would have had the same
              chemistry without you. Thank you for creating such a positive and welcoming
              environment where everyone felt comfortable to collaborate, laugh, and grow.
            </p>

            <p>
              I'm sorry for the past few weeks ani I keep on attacking you 🤣, I did it because I
              know when I officially left PD your laugh and your unfunny jokes atu tah will stuck in
              my head for a while.
            </p>

            <p>Wishing you happiness, success, and many more good things ahead.</p>

            <div class="signature">— Amir</div>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import nailongImage from '@/assets/leena.png'

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

  font-family: 'Trebuchet MS', sans-serif;

  background: linear-gradient(135deg, #fff7ad, #facc15, #f97316);
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
  border-radius: 32px;
  overflow: hidden;
  backface-visibility: hidden;
  box-shadow: 0 25px 60px rgba(120, 70, 0, 0.3);
}

.card-front {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: 4px solid #facc15;
  display: flex;
  align-items: flex-end;
}

.front-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(transparent 20%, rgba(0, 0, 0, 0.05), rgba(92, 45, 0, 0.75));
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
  font-weight: bold;
  text-shadow: 0 5px 15px rgba(0, 0, 0, 0.45);
}

.front-content p {
  margin-top: 10px;
  font-size: 1rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.45);
}

.tap {
  margin-top: 30px;
}

.tap span {
  display: inline-block;
  padding: 10px 22px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.22);
  backdrop-filter: blur(10px);
  font-size: 0.9rem;
}

.card-back {
  transform: rotateY(180deg);

  background: #fff7ad;

  border: 4px solid #facc15;

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

  background: linear-gradient(to bottom, #fffdf2, #fff3b0);

  border-radius: 20px;

  padding: 52px 28px 28px;

  overflow-y: auto;
  overflow-x: hidden;

  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
  touch-action: pan-y;

  box-shadow: inset 0 0 15px rgba(120, 70, 0, 0.08);

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

  color: #92400e;

  font-weight: bold;

  cursor: pointer;

  transition: 0.25s;
}

.back-btn:hover {
  background: white;
}

.paper h2 {
  color: #92400e;
  margin-bottom: 22px;
  font-size: 2rem;
}

.paper p {
  color: #78350f;
  line-height: 1.9;
  margin-bottom: 18px;
}

.signature {
  margin-top: 35px;
  text-align: right;
  color: #92400e;
  font-weight: bold;
  font-size: 1.2rem;
}

@media (max-width: 420px) {
  .page {
    padding: 52px 22px 22px;
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
