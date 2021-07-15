<template>
  <div class="relative w-3/4 m-auto my-12 lg:w-1/2">
    <input class="w-full p-4 pl-8 text-gray-800 bg-gray-200 rounded-full" type="text" name="playlist-uri" id="playlist-uri" :v-model="playlistURI"/>
    <button class="absolute right-0 px-6 py-4 uppercase bg-green-500 rounded-r-full" @click="fetchPlaylist">Fetch</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import playlistParser from '../utils/AppleMusicPlaylistParser';

export default defineComponent({
  setup () {
    return {};
  },

  data () {
    return {
      playlistURI: ''
    };
  },

  methods: {
    async fetchPlaylist () {
      const playlist = await playlistParser.parse(this.playlistURI);
      console.log(playlist);
    }
  }
});
</script>

<style scoped>

</style>
