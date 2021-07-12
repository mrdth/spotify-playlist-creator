<template>
  <div class="relative w-3/4 m-auto my-12 lg:w-1/2">
    <input class="w-full p-4 pl-8 text-gray-800 bg-gray-200 rounded-full" type="text" name="playlist-uri" id="playlist-uri" />
    <button class="absolute right-0 px-6 py-4 uppercase bg-green-500 rounded-r-full" type="submit">Fetch</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup () {
    return {};
  }
});
</script>

<style scoped>

</style>
