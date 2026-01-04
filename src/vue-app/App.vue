<template>
  <div id="app">
    <div class="logo-container">
      <a href="https://vitejs.dev" target="_blank">
        <img src="./assets/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
      <a href="https://hono.dev/" target="_blank">
        <img src="./assets/hono.svg" class="logo hono" alt="Hono logo" />
      </a>
      <a href="https://www.cloudflare.com/" target="_blank">
        <img src="./assets/Cloudflare_Logo.svg" class="logo cloudflare" alt="Cloudflare logo" />
      </a>
    </div>
    <h1>Vite + Vue + Hono + Cloudflare</h1>
    <div class="card">
      <button type="button" @click="count++">count is {{ count }}</button>
      <p>
        Edit
        <code>src/vue-app/App.vue</code> to test HMR
      </p>
    </div>
    <p class="read-the-docs">
      Click on the Vite, Vue, Hono and Cloudflare logos to learn more
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>

<style scoped>
.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.logo.hono:hover {
  filter: drop-shadow(0 0 2em #ff6600aa);
}

.logo.cloudflare:hover {
  filter: drop-shadow(0 0 2em #f38020aa);
}

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.card {
  padding: 2em;
}

.read-the-docs {
  color: #888;
}
</style>
