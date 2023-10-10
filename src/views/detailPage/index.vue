<template>
  <section>
    <div class="h-screen w-full flex justify-center items-center" v-if="loading">Yükleniyor...</div>
    <div class="mb-3" v-else>
      <img
        :src="`https://image.tmdb.org/t/p/w500/${activeMovieData.backdrop_path}`"
        :alt="activeMovieData.title"
        class="relative w-full h-96 opacity-40 z-0"
      />

      <div
        class="bg-black flex flex-col text-white relative z-10 -mt-48 md:flex-row xl:mx-16"
      >
        <img
          class="w-80 mx-auto pt-3 -mt-24 rounded-lg md:w-96 md:p-3 lg:w-97"
          :src="`https://image.tmdb.org/t/p/w500/${activeMovieData.poster_path}`"
          :alt="activeMovieData.title"
        />
        <div class="flex flex-col">
          <div
            class="flex font-semibold text-3xl py-8 mx-auto"
          >
            <h1>{{ activeMovieData.title }}</h1>
            ({{ activeMovieData.release_date }})
          </div>
          <div class="px-5 py-2 italic">
            {{ activeMovieData.tagline }}
          </div>
          <p class="p-5">{{ activeMovieData.overview }}</p>
          <div class="flex ml-4 pt-2">
            <div class="ml-2 mt-2">
              {{ activeMovieData.vote_average }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { mapActions, mapState } from 'vuex'

  export default {
    data() {
      return {
        movieId: null,
      }
    },
    computed: {
      ...mapState('movies', ['activeMovieData', 'loading']),
    },
    mounted() {
      this.movieId = this.$route.params.movieId
      this.getMovieDetails(this.movieId)
    },
    methods: {
      ...mapActions('movies', {
        getMovieDetails: 'getMovieDetails',
      }),
    },
  }
</script>

<style></style>
