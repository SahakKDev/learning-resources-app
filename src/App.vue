<template>
  <the-header title="RememberMe" />
  <TheResources />
</template>

<script>
import TheResources from './components/learning-resources/TheResources.vue';

export default {
  components: {
    TheResources,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
