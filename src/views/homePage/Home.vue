<template>
  <section>
    <div
      class="h-screen w-full flex justify-center items-center"
      v-if="loading"
    >
      Yükleniyor...
    </div>
    <div v-else>
      <div class="flex items-center mb-3">
        <textboxComp
          v-model="movieName"
          class="w-80 ml-2"
          placeholder="Filmi Adı Giriniz"
        />
        <button
          class="flex justify-center items-center border-2 w-12 h-12 rounded-xl ml-2"
          @click="search(movieName)"
        >
          Ara
        </button>
      </div>
      <div class="flex flex-wrap">
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
          @goDetailPage="goDetailPage"
          @setFavorite="setFavorite"
        />
      </div>
      <div class="flex justify-end mt-4">
        <Pagination
          :value="activePage"
          :count="totalResult"
          @pageSelected="changePage($event)"
        />
      </div>
    </div>
  </section>
</template>

<script>
  import movieCard from '../../components/movieCard/index.vue'
  import textboxComp from '../../components/formElements/textbox.vue'
  import Pagination from '../../components/pagination/index'
  import { mapActions, mapState } from 'vuex'
  export default {
    name: 'Home',
    components: { movieCard, textboxComp, Pagination },
    data() {
      return {
        activePage: 1,
        movieName: null,
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
      this.getMovies(this.activePage)
    },
    methods: {
      ...mapActions('movies', {
        getMovies: 'getMovies',
        searchMovieByName: 'searchMovieByName',
        setFavoriteMovie: 'setFavoriteMovie',
      }),
      search(name) {
        this.activePage = 1
        if (!name) {
          this.getMovies(this.activePage)
          return
        }
        this.searchMovieByName({
          name: name,
          page: this.activePage,
        })
      },
      goDetailPage(id) {
        //detay sayfasına gidilmesini sağlayan method
        this.$router.push({
          name: 'detail',
          params: { movieId: id },
        })
      },
      setFavorite(id) {
        this.setFavoriteMovie(id)
          .then(() =>
            this.$toast.success(
              'Film Başarıyla Favorilere Eklendi',
              {
                timeout: 2000,
              },
            ),
          )
          .catch(() =>
            this.$toast.error(
              'Film Favorilere Eklenemedi!',
              {
                timeout: 2000,
              },
            ),
          )
      },
      changePage(event) {
        this.activePage = event
        if (this.movieName) {
          this.searchMovieByName({
            name: this.movieName,
            page: this.activePage,
          })
        } else {
          this.getMovies(this.activePage)
        }
      },
    },
  }
</script>
