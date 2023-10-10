import axios from '../axios/index'
export default {
  namespaced: true,
  state: {
    movies: [],
    loading: false,
    activeMovieData: {},
    totalResult: null,
  },
  getters: {},
  mutations: {
    setMovies: (state, movies) => (state.movies = movies),
    setLoading: (state, loading) =>
      (state.loading = loading),
    setActiveMovieData: (state, activeMovieData) =>
      (state.activeMovieData = activeMovieData),
    setTotalResult: (state, totalResult) => (state.totalResult = totalResult),
  },
  actions: {
    async getMovies({ commit }, page) {
      //populer film datalarının çekildiği api
      commit('setLoading', true)
      await axios
        .get('movie/popular', {
          params: { language: 'en-US', page: page },
        })
        .then((response) => {
          var movies = []
          movies = response.data.results.map((m) => ({
            ...m,
            image:
              'https://image.tmdb.org/t/p/w500' +
              m.poster_path,
          }))
          commit('setMovies', movies)
          commit('setTotalResult', response.data.total_results)
        })
        .finally(() => commit('setLoading', false))
    },
    async getMovieDetails({ commit }, id) {
      //film detay datalarının çekildiği api
      commit('setLoading', true)
      await axios
        .get('movie/' + id)
        .then((response) => {
          commit('setActiveMovieData', response.data)
        })
        .finally(() => commit('setLoading', false))
    },
    async searchMovieByName({ commit }, { name, page }) {
      //film adı ile arama yapılan api
      commit('setLoading', true)
      await axios
        .get('search/movie', {
          params: {
            query: name,
            page: page,
          },
        })
        .then((response) => {
          var movies = []
          movies = response.data.results.map((m) => ({
            ...m,
            image:
              'https://image.tmdb.org/t/p/w500' +
              m.poster_path,
          }))
          commit('setMovies', movies)
        })
        .finally(() => commit('setLoading', false))
    },
    async setFavoriteMovie(_, movieId) {
      //filmi favoriye ekleme
      const accountId = process.env.VUE_APP_ACCOUNT_ID
      const movieJson = JSON.stringify({
        media_type: 'movie',
        media_id: movieId,
        favorite: true,
      })
      await axios
        .post(`account/${accountId}/favorite`, movieJson)
        .then((res) => {
          console.log(res)
        })
    },
    async getFavoriteMovies({ commit }, page) {
      //favoriye eklenmiş filmlerin çekildiği api
      const accountId = process.env.VUE_APP_ACCOUNT_ID
      commit('setLoading', true)

      await axios
        .get(`/account/${accountId}/favorite/movies`, {
          params: { language: 'en-US', page: page },
        })
        .then((response) => {
          var movies = []
          movies = response.data.results.map((m) => ({
            ...m,
            image:
              'https://image.tmdb.org/t/p/w500' +
              m.poster_path,
          }))
          commit('setMovies', movies)
          commit('setTotalResult', response.data.total_results)
        })
        .finally(() => commit('setLoading', false))
    },
  },
}
