<template>
  <div>
    <headerComp />
    <div class="md:px-8">
      <router-view />
    </div>

    <footerComp />
  </div>
</template>

<script>
import headerComp from "../components/headerComp/index.vue";
import footerComp from "../components/footerComp/index.vue";
export default {
  components: {
    headerComp,
    footerComp,
  },
};
</script>

<style></style>
