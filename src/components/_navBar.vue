<template>
  <nav id="header" class="fixed top-0 z-30 w-full text-white">
    <div class="container flex flex-wrap items-center justify-between w-full py-2 mx-auto mt-0">
      <div class="flex items-center pl-4">
        <a class="text-2xl font-bold text-white no-underline toggleColour hover:no-underline lg:text-4xl" href="#">
          <svg class="inline h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
            <path
              d="M614.8 900.2c-24 7.9-48.1 11.9-72.1 11.9-31 0-58.1-6.4-81.2-19.3-23.1-12.8-38.1-30.3-45.1-52.5-2.8-8.4-4.2-17-4.2-25.9 0-28 12.1-55.1 36.2-81.2s55.4-45.5 93.6-58.1c5.6-1.6 12.4-3.2 20.3-4.7s16.6-2.8 26.1-3.9c9.5-1 18-1.6 25.7-1.6 11.4 0 20.1 1.2 25.9 3.5V109.1c0-5.8 2.1-10.9 6.3-15 4.2-4.2 9.2-6.3 15-6.3h62.3c3 0 5.8.6 8.4 1.8 2.6 1.2 4.8 2.7 6.6 4.6 1.9 1.9 3.4 4.1 4.5 6.6 1.2 2.6 1.8 5.4 1.8 8.4v19.3c7.9 5.1 19.5 10.6 34.8 16.3s30.7 11 46.4 15.8c15.6 4.8 32.3 10.9 50 18.2s33.8 15 48.1 23.1c14.4 8 27.1 18.3 38.2 30.6 11.1 12.4 18.5 26 22.2 40.9 3.5 14 5.3 28 5.3 42 0 17-2.6 33.7-7.7 49.9s-11.5 30.2-19.3 41.8-16.2 22.4-25.5 32.2c-9.3 9.8-17.8 17.4-25.5 22.9s-14.5 9.4-20.3 11.7c-5.4 2.3-9.3 3.5-11.9 3.5-2.1 0-3.2-.7-3.2-2.1 0-1.4.8-3.1 2.3-5.2 1.5-2.1 3-4 4.4-5.6l2.1-2.5c.9-.9 2-2.4 3.1-4.4 1.2-2 3.3-6.1 6.5-12.3 3.2-6.2 5.9-12.4 8.2-18.7 2.3-6.3 4.5-13.9 6.5-22.9 2-9 3-17.7 3-26.1 0-17.7-4.3-33.7-13-48-5.1-8.6-12.7-15.9-22.8-21.7-10-5.8-21.1-10.2-33.1-13.1-12-2.9-23.9-5.4-35.7-7.3-11.8-2-23.6-4.3-35.3-6.8-11.8-2.6-21.1-5.7-27.8-9.5v495.3c0 .5-.1 1.2-.4 2.1s-.3 1.5-.3 1.8c-2.8 26.6-16 52-39.7 76.1-23.6 24.2-53.5 42.1-89.7 53.7zM27.5 367.9c-4.9 0-9-1.7-12.4-5.1-3.4-3.4-5.1-7.5-5.1-12.4v-70c0-4.9 1.7-9 5.1-12.4 3.4-3.4 7.5-5.1 12.4-5.1H570v105H27.5zm0 210c-4.9 0-9-1.7-12.4-5.1-3.4-3.4-5.1-7.5-5.1-12.4v-70c0-4.9 1.7-9 5.1-12.4 3.4-3.4 7.5-5.1 12.4-5.1H570v105H27.5zm0 210c-3.3 0-6.2-.8-8.9-2.3-2.7-1.5-4.8-3.6-6.3-6.3-1.5-2.7-2.3-5.7-2.3-8.9v-70c0-4.9 1.7-9 5.1-12.4 3.4-3.4 7.5-5.1 12.4-5.1h354.2c-30.3 32-48.7 67-55 105H27.5z" />
            </svg>
          PLAYLISTR
        </a>
      </div>
      <div class="block pr-4 lg:hidden">
        <button id="nav-toggle"
          class="flex items-center p-1 text-pink-800 transition duration-300 ease-in-out transform hover:text-gray-900 focus:outline-none focus:shadow-outline hover:scale-105">
          <svg class="w-6 h-6 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        class="z-20 flex-grow hidden w-full p-4 mt-2 text-black bg-white lg:flex lg:items-center lg:w-auto lg:mt-0 lg:bg-transparent lg:p-0"
        id="nav-content">
        <ul class="items-center justify-end flex-1 list-reset lg:flex">
          <li class="mr-3">
            <a class="inline-block px-4 py-2 font-bold text-black no-underline" href="#">Active</a>
          </li>
          <li class="mr-3">
            <a class="inline-block px-4 py-2 text-black no-underline hover:text-gray-800 hover:text-underline"
              href="#">link</a>
          </li>
          <li class="mr-3">
            <a class="inline-block px-4 py-2 text-black no-underline hover:text-gray-800 hover:text-underline"
              href="#">link</a>
          </li>
        </ul>
        <button id="navAction"
          class="px-8 py-4 mx-auto mt-4 font-bold text-gray-800 transition duration-300 ease-in-out transform bg-white rounded-full shadow opacity-75 lg:mx-0 hover:underline lg:mt-0 focus:outline-none focus:shadow-outline hover:scale-105">
          Action
        </button>
      </div>
    </div>
    <hr class="py-0 my-0 border-b border-gray-100 opacity-25" />
  </nav>
</template>

<script lang="ts">
import {
  defineComponent
} from 'vue';

export default defineComponent({
  name: 'NavBar'
});

</script>
