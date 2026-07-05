<template>
  <main class="page fox-theme">
    <div class="flip-card" :class="{ flipped: isFlipped }">
      <div class="card-inner">
        <!-- FRONT -->
        <section
          class="card-front"
          :style="{ backgroundImage: `url(${foxImage})` }"
          @click="isFlipped = true"
        >
          <div class="front-overlay"></div>

          <div class="front-content">
            <h1>For Razzaq</h1>
            <p>A Clever Fox-Style Farewell</p>

            <div class="tap">
              <span>Tap to Open</span>
            </div>
          </div>
        </section>

        <!-- BACK -->
        <section class="card-back">
          <button class="back-btn" @click.stop="isFlipped = false">← Back</button>

          <div class="paper">
            <h2>Dear Razzaq, 🦊</h2>

            <p>
              I can't thank you enough for everything. Keep being Razzaq—the same cool, clever, and
              inspiring person you've always been. You're one of the smartest and coolest programmer
              friends I've ever known, and I'm truly grateful to have had the chance to work and
              learn alongside you.
            </p>

            <p>I'm not surprised if one day tani ada rezeki to work together lagi 🤣</p>

            <p>Wishing you nothing but success and exciting adventures ahead.</p>

            <div class="signature">— Amir</div>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import foxImage from '@/assets/razzaq.png'

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

  font-family: Verdana, sans-serif;
}

.fox-theme {
  background: linear-gradient(135deg, #f97316, #84cc16);
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

  overflow: hidden;
  border-radius: 28px;

  backface-visibility: hidden;

  box-shadow: 0 25px 70px rgba(55, 35, 10, 0.35);
}

/* ---------- FRONT ---------- */

.card-front {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  border: 4px solid #ea580c;

  display: flex;
  align-items: flex-end;

  cursor: pointer;
}

.front-overlay {
  position: absolute;
  inset: 0;

  background: linear-gradient(transparent 20%, rgba(0, 0, 0, 0.05), rgba(60, 25, 0, 0.75));
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

  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);

  font-size: 0.9rem;
}

/* ---------- BACK ---------- */

.card-back {
  transform: rotateY(180deg);

  background: #fffbeb;
  border: 4px solid #ea580c;

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

  color: #9a3412;

  font-weight: bold;

  cursor: pointer;

  transition: 0.25s;
}

.back-btn:hover {
  background: white;
}

.paper {
  width: 100%;
  height: 100%;

  background: linear-gradient(to bottom, #fffef7, #fff7e6);

  border-radius: 18px;

  padding: 52px 28px 28px;

  overflow-y: auto;
  overflow-x: hidden;

  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
  touch-action: pan-y;

  scrollbar-width: thin;

  box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.06);
}

.paper h2 {
  color: #9a3412;

  margin-bottom: 22px;

  font-size: 2rem;
}

.paper p {
  color: #7c2d12;

  line-height: 1.9;
  margin-bottom: 18px;

  font-size: 1rem;
}

.signature {
  margin-top: 35px;

  text-align: right;

  font-weight: bold;
  font-size: 1.2rem;

  color: #9a3412;
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
    font-size: 1.6rem;
  }

  .paper p {
    font-size: 0.95rem;
  }
}
</style>
