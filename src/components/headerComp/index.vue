<template>
  <div
    class="bg-white flex justify-between h-28 px-3.5 shadow-md md:px-16 mb-5"
  >
    <div class="my-auto w-36 md:w-44">
      <router-link to="/"
        ><img
          src="../../assets/images/logo.png"
          class="w-32 md:w-40"
          alt="pix select"
      /></router-link>
    </div>
    <div class="flex items-center">
      <router-link
        to="/"
        class="px-2 py-6 inline-block text-primary text-xs font-bold md:text-lg md:p-3"
        >Ana Sayfa</router-link
      >
      <router-link
        :to="{ name: 'favorites' }"
        class="px-2 py-6 inline-block text-primary text-xs font-bold md:text-lg md:p-3"
        >Favoriler</router-link
      >
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style></style>
