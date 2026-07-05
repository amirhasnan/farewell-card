<template>
  <main class="page pigeon-theme">
    <div class="flip-card" :class="{ flipped: isFlipped }">
      <div class="card-inner">
        <!-- FRONT -->
        <section
          class="card-front"
          :style="{ backgroundImage: `url(${pigeonImage})` }"
          @click="isFlipped = true"
        >
          <div class="front-overlay"></div>

          <div class="front-content">
            <h1>For Leena</h1>
            <p>A Little Delivery Just For You</p>

            <div class="tap">
              <span>Tap to Open</span>
            </div>
          </div>
        </section>

        <!-- BACK -->
        <section class="card-back">
          <button class="back-btn" @click.stop="isFlipped = false">Back</button>
          <div class="paper">
            <h2>Dear Leena, 🕊️</h2>

            <p>Apa kau cari atu leena?</p>
            <p>Betmut kah?</p>

            <p>Takan tia button di bawah ah 👇🏼</p>
          </div>
        </section>
        <button v-if="isFlipped" class="real-card-btn" type="button" @click.stop="goRealCard">
          🎁 Gudmut Button
        </button>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import pigeonImage from '@/assets/leena1.png'
import { useRouter } from 'vue-router'

const isFlipped = ref(false)
const router = useRouter()

function goRealCard() {
  router.replace('/leena')
}
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
  font-family: 'Comic Sans MS', cursive;

  background: linear-gradient(135deg, #dbeafe, #f8fafc, #94a3b8);
}

.flip-card {
  position: relative;
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
  box-shadow: 0 25px 60px rgba(71, 85, 105, 0.25);
}

/* FRONT */

.card-front {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  border: 4px solid white;

  display: flex;
  align-items: flex-end;
}

.front-overlay {
  position: absolute;
  inset: 0;

  background: linear-gradient(transparent 20%, rgba(0, 0, 0, 0.08), rgba(15, 23, 42, 0.72));
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

/* BACK */

.card-back {
  transform: rotateY(180deg);

  background: #ffffff;
  border: 4px solid #d1d5db;

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

  background: linear-gradient(to bottom, #ffffff, #f8fafc);
  border-radius: 20px;

  padding: 52px 28px 28px;

  overflow-y: auto;
  overflow-x: hidden;

  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
  touch-action: pan-y;

  box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.05);
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

  color: #334155;
  font-weight: bold;
  cursor: pointer;
}

.paper h2 {
  color: #334155;
  margin-bottom: 22px;
  font-size: 2rem;
}

.paper p {
  color: #475569;
  line-height: 1.9;
  margin-bottom: 18px;
}

.signature {
  margin-top: 35px;
  text-align: right;
  color: #334155;
  font-weight: bold;
  font-size: 1.2rem;
}

.real-card-btn {
  position: absolute;

  left: 50%;
  bottom: 100px;

  transform: translateX(-50%);

  z-index: 9999;

  width: 170px;
  height: 56px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border: none;
  border-radius: 999px;

  background: linear-gradient(135deg, #334155, #1e293b);
  color: white;

  font-size: 1rem;
  font-weight: 700;

  box-shadow: 0 12px 25px rgba(51, 65, 85, 0.35);

  cursor: pointer;

  transition: all 0.25s ease;
}

.real-card-btn:hover {
  transform: translateX(-50%) translateY(-2px);
  box-shadow: 0 16px 30px rgba(51, 65, 85, 0.45);
}

.real-card-btn:active {
  transform: translateX(-50%) scale(0.96);
}
.flip-card.flipped .real-card-btn {
  transform: translateX(-50%) rotateY(180deg);
}

.flip-card.flipped .real-card-btn:active {
  transform: translateX(-50%) rotateY(180deg) scale(0.95);
}
/* MOBILE */

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
