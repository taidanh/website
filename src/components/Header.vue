<template>
  <b-navbar toggleable="lg" class="custom-padding" :class="{'bg-dark': isDark, 'bg-light': !isDark}">
    <b-navbar-brand href="/" class="custom-brand">{{ getBrandName }}</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item :active="$route.path === '/'" href="/">Home</b-nav-item>
        <b-nav-item :active="$route.path === '/about'" href="/about">About</b-nav-item>
        <b-nav-item :active="$route.path === '/contact'" href="/contact">Contact</b-nav-item>
        <b-nav-item :active="$route.path === '/resume'" href="/resume">Resume</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script lang="ts">
export default {
  computed: {
    getBrandName() {
      return this.$route.path === '/' ? '~' : 'Tai Danh';
    },
    isDark() {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
  }
}
</script>

<style scoped>
.custom-padding {
  padding: 0 20px;
}

.custom-brand {
  font-weight: bold;
  font-size: xx-large;
  color: var(--color-text); /* Using the CSS variable for text color */
}

/* Ensuring text colors in navbar adapt to theme changes */
.nav-link {
  color: var(--color-text);
}
</style>

