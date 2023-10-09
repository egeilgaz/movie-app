<template>
  <div v-if="pageCount > 0" class="flex gap-1">
    <pagination-item
      v-if="value > 3"
      :page="1"
      :active="1 == value"
      @click="pageSelected(1)"
      class="mr-2"
    />

    <span v-if="value > 3">...</span>

    <pagination-item
      v-for="page in pages"
      :page="page"
      :key="page"
      :active="page == value"
      @click="pageSelected(page)"
    />

    <span v-if="pageCount > value + 2">...</span>

    <pagination-item
      v-if="pageCount > value + 2"
      :active="pageCount == value"
      :page="pageCount"
      @click="pageSelected(pageCount)"
      class="ml-2"
    />
  </div>
</template>

<script>
import paginationItem from "./paginationItem.vue"
export default {
  components: {
    paginationItem
  },
  props: {
    value: {
      type: Number,
      default: 1
    },
    itemPerPage: {
      type: Number,
      default:20
    },
    count: {
      type: Number,
      default: 0
    }
  },
  computed: {
    pages() {
      let pages = []
      const startVal = Math.max(Math.min(this.value - 2, this.pageCount - 4), 1)

      for (let i = startVal; i <= Math.min(startVal + 4, this.pageCount); i++) {
        pages.push(i)
      }
      return pages
    },
    pageCount() {
      return Math.ceil(this.count / this.itemPerPage)
    }
  },
  methods: {
    pageSelected(page) {
      this.$emit("pageSelected", page)
      this.$emit("input", page)
    }
  }
}
</script>

<style></style>
