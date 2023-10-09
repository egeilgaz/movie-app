<template>
  <section>
    <div
      class="h-screen w-full flex justify-center items-center"
      v-if="loading"
    >
      Yükleniyor...
    </div>

    <div v-else class="flex flex-wrap">
      <div
        v-if="movies.length == 0"
        class="h-screen w-full flex justify-center items-center"
      >
        Film Bulunamadı..
      </div>
      <movieCard
        v-else
        v-for="movie in movies"
        :key="movie.id"
        :movie="movie"
        :favorite="false"
        @goDetailPage="goDetailPage"
      />
    </div>
    <div class="flex justify-end mt-4">
      <Pagination
        :value="activePage"
        :count="totalResult"
        @pageSelected="changePage($event)"
      />
    </div>
  </section>
</template>

<script>
  import movieCard from '../../components/movieCard/index.vue'
  import Pagination from '../../components/pagination/index'
  import { mapActions, mapState } from 'vuex'
  export default {
    name: 'Home',
    components: { movieCard, Pagination },
    data() {
      return {
        activePage: 1,
      }
    },
    computed: {
      ...mapState('movies', [
        'movies',
        'loading',
        'totalResult',
      ]),
    },
    mounted() {
      this.getFavoriteMovies(this.activePage)
    },
    methods: {
      ...mapActions('movies', {
        getFavoriteMovies: 'getFavoriteMovies',
      }),
      goDetailPage(id) {
        //detay sayfasına gidilmesini sağlayan method
        this.$router.push({
          name: 'detail',
          params: { movieId: id },
        })
      },
      changePage(event) {
        this.activePage = event
        this.getFavoriteMovies(this.activePage)
      },
    },
  }
</script>
