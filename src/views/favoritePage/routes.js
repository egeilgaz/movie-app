const favoriteComp = () =>
  import(/* webpackChunkName: "favoritePage" */ "./index")

export const favorite = [
  {
    path: "/favorites",
    name: "favorites",
    component: favoriteComp
  }
]