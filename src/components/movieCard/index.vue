<template>
  <!-- filmler için kullanılan kart -->
  <div
    class="mb-3 mx-auto px-2 relative hover:bg-primary text-black hover:text-white transition duration-500"
  >
    <div
      v-if="favorite"
      class="absolute flex justify-center items-center bg-gray-500 top-5 right-6 rounded-full border border-gray-500 w-8 h-8 text-white cursor-pointer"
      @click="$emit('setFavorite', movie.id)"
    >
      <font-awesome-icon icon="fa-regular fa-heart" />
    </div>
    <div
      @click="$emit('goDetailPage', movie.id)"
      class="flex flex-col rounded-lg px-6 py-5 bg-transparent shadow-lg min-h-1 cursor-pointer w-72"
    >
      <img
        class="rounded-lg mt-3 w-64 mx-auto"
        :src="movie.image"
        :alt="movie.original_title"
      />
      <div class="flex justify-between mt-3">
        <div class="flex">
          {{ movie.release_date }}
        </div>
        <div class="flex">
          {{ movie.vote_average }}
        </div>
      </div>
      <h2 class="font-semibold mx-auto mt-3 text-lg">
        {{ movie.original_title }}
      </h2>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      movie: {
        type: Object,
        default: () => {},
      },
      favorite: {
        type: Boolean,
        default: true,
      },
    },
  }
</script>

<style></style>
