<template>
  <main class="page cowboy-theme">
    <div class="flip-card" :class="{ flipped: isFlipped }">
      <div class="card-inner">
        <!-- FRONT -->
        <section
          class="card-front"
          :style="{ backgroundImage: `url(${cowboyImage})` }"
          @click="isFlipped = true"
        >
          <div class="front-overlay"></div>

          <div class="front-content">
            <h1>For Muazz</h1>
            <p>You've Got a Friend in Me</p>

            <div class="tap">
              <span>Tap to Open</span>
            </div>
          </div>
        </section>

        <!-- BACK -->
        <section class="card-back">
          <button class="back-btn" @click.stop="isFlipped = false">← Back</button>

          <div class="paper">
            <h2>Dear Muazz, 🤠</h2>

            <p>
              Three months ago both of us join PD together and I'm really grateful to learn
              everything alongside you atleast we learn and figure things out together. Without you
              I will be bangang alone 🤣.
            </p>

            <p>
              Seeing how much you've grown, I can tell you're really getting the hang of everything,
              and I truly believe you can do it. Keep believing in yourself because you're more
              capable than you think.
            </p>
            <p>
              Lastly, I'm sorry for leaving the PM team. I really hope the next System Administrator
              will be able to support you and help make the PM team successful—something I wish I
              could have contributed more to. I'll always be cheering you on, and I know you'll do
              great.
            </p>

            <p>
              I truly appreciate your support, friendship, and all the moments we've shared
              throughout my short NIAT adventure.
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
import cowboyImage from '@/assets/muazz.png'

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

  font-family: Georgia, serif;
}

.cowboy-theme {
  background: linear-gradient(135deg, #92400e, #fbbf24, #7c2d12);
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
  border-radius: 24px;

  backface-visibility: hidden;

  box-shadow: 0 25px 60px rgba(60, 30, 10, 0.35);
}

/* ---------- FRONT ---------- */

.card-front {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  border: 5px solid #78350f;

  display: flex;
  align-items: flex-end;

  cursor: pointer;
}

.front-overlay {
  position: absolute;
  inset: 0;

  background: linear-gradient(transparent 20%, rgba(0, 0, 0, 0.05), rgba(55, 30, 5, 0.75));
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

  background: #fff7ed;
  border: 5px solid #78350f;

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

  color: #78350f;

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

  background: linear-gradient(to bottom, #fffdf7, #fff5e6);

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
  color: #78350f;

  margin-bottom: 22px;

  font-size: 2rem;
}

.paper p {
  color: #78350f;

  line-height: 1.9;
  margin-bottom: 18px;

  font-size: 1rem;
}

.signature {
  margin-top: 35px;

  text-align: right;

  font-weight: bold;
  font-size: 1.2rem;

  color: #78350f;
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
