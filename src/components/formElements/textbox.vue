<template>
  <div
    class="flex items-center justify-between transition duration-500 bg-white text-left text-sm border-2 rounded-xl"
  >
    <input
      @input="$emit('input', $event.target.value)"
      :placeholder="placeholder"
      :value="value"
      type="text"
      class="w-full bg-transparent rounded-xl py-3 px-5"
    />
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        type: String,
        default: '',
      },
      placeholder: {
        type: String,
        default: '',
      },
    },
  }
</script>
