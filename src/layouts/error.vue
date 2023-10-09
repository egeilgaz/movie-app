<template>
  <div class="flex flex-col">
    <div class="relative">
      <img
        class="h-screen w-full"
        src="../assets/images/404.jpg"
        alt="404 image"
      />
    </div>
    <div
      class="absolute top-20 left-0 right-0 bottom-0 w-72 mx-auto text-white text-3xl"
    >
      <div class="my-16 mx-auto">
        Salonu bulamadın mı?
      </div>
      <router-link to="/" class="mb-5 text-xl"
        ><div
          class="px-4 py-2 border border-white inline-block"
        >
          Ana Sayfa
        </div></router-link
      >
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style></style>
