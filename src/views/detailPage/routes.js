const detailComp = () =>
  import(/* webpackChunkName: "detailPage" */ "./index")

export const detail = [
  {
    path: "/detail/:movieId",
    name: "detail",
    component: detailComp
  }
]