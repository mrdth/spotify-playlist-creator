<template>
  <div class="container px-4 pt-24 mx-auto text-white">
    <playlist-fetch-form />

  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderCurve from './_headerCurve.vue';
import PlaylistFetchForm from './PlaylistFetchForm.vue';

export default defineComponent({
  name: 'Header',
  components: { PlaylistFetchForm },
  props: {
    msg: String
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
