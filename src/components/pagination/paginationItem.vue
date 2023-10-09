<template>
  <button @click="$emit('click')" :class="pageItemClass">
    {{ page }}
  </button>
</template>

<script>
export default {
  props: {
    page: {
      type: Number,
      required: true
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    pageItemClass() {
      return [
        "flex items-center justify-center w-8 h-8 rounded-full text-sm font-semibold",
        this.active ? "bg-footer text-white" : "bg-white border-2 "
      ]
    }
  }
}
</script>

<style></style>
