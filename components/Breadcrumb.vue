<template>
  <div class="mb-4 flex items-center text-xs text-gray-700">
    <p><NuxtLink to="/">Home </NuxtLink> > {{ path }}</p>
  </div>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped></style>
