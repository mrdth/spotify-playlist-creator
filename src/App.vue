<template>
  <nav-bar />
  <Header />

  <playlist-builder />
  <header-curve/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header.vue';
import HeaderCurve from './components/_headerCurve.vue';
import NavBar from './components/_navBar.vue';
import PlaylistBuilder from './components/PlaylistBuilder.vue';

export default defineComponent({
  name: 'App',
  components: {
    Header,
    HeaderCurve,
    NavBar,
    PlaylistBuilder
  }
});
</script>

<style>

</style>
