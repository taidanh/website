<template>
  <div id="app">
    <Header />
    <div class="router-container">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default defineComponent({
  components: {
    Header,
    Footer
  }
})
</script>

<style scoped>
.router-container {
  padding: 20px; /* Adjust padding value as desired */
}
</style>
