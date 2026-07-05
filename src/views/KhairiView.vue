<template>
  <main class="page research-theme">
    <div class="flip-card" :class="{ flipped: isFlipped }">
      <div class="card-inner">
        <section
          class="card-front"
          :style="{ backgroundImage: `url(${researchImage})` }"
          @click="isFlipped = true"
        >
          <div class="front-overlay"></div>

          <div class="front-content">
            <h1>For Khairi</h1>
            <p>A Research-Inspired Farewell Note</p>

            <div class="tap">
              <span>Tap to Open</span>
            </div>
          </div>
        </section>

        <section class="card-back">
          <button class="back-btn" @click.stop="isFlipped = false">Back</button>

          <div class="paper">
            <h2>Dear Khairi, 🔬</h2>

            <p>Thank you for every knowledge that you share!</p>

            <p>
              Ku doakan semoga dipermudahkan segala urusan mu and tercapai segala hajat mu after
              this.
            </p>

            <p>
              May your research, ideas, and future work continue to grow, inspire, and create
              meaningful impact.
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
import researchImage from '@/assets/khairi.png'

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

  font-family: 'Times New Roman', serif;
  padding: 16px;
}

.research-theme {
  background: linear-gradient(135deg, #e5e7eb, #f8fafc, #cbd5e1);
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

  border-radius: 18px;
  overflow: hidden;

  backface-visibility: hidden;
  box-shadow: 0 25px 60px rgba(15, 23, 42, 0.18);
}

.card-front {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  border: 3px solid #1e293b;

  display: flex;
  align-items: flex-end;

  cursor: pointer;
}

.front-overlay {
  position: absolute;
  inset: 0;

  background: linear-gradient(transparent 15%, rgba(255, 255, 255, 0.05), rgba(15, 23, 42, 0.78));
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

  background: rgba(255, 255, 255, 0.18);
  border: 1px solid rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(10px);

  font-size: 0.9rem;
}

.card-back {
  transform: rotateY(180deg);

  background: #f8fafc;
  border: 3px solid #334155;

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

  color: #1e293b;
  font-weight: bold;

  cursor: pointer;
}

.paper {
  width: 100%;
  height: 100%;

  background: linear-gradient(to bottom, #ffffff, #f1f5f9);
  border-radius: 14px;

  padding: 52px 28px 28px;

  overflow-y: auto;
  overflow-x: hidden;

  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
  touch-action: pan-y;

  box-shadow: inset 0 0 15px rgba(15, 23, 42, 0.06);
}

.paper h2 {
  color: #1e293b;

  margin-bottom: 22px;
  font-size: 1.9rem;
}

.paper p {
  color: #334155;

  line-height: 1.9;
  margin-bottom: 18px;

  font-size: 1rem;
}

.signature {
  margin-top: 35px;

  text-align: right;

  font-weight: bold;
  font-size: 1.2rem;

  color: #1e293b;
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
    font-size: 1.55rem;
  }

  .paper p {
    font-size: 0.95rem;
  }
}
</style>
