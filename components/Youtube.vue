<template>
  <div>
    <iframe
      class="aspect-video w-full"
      :src="`https://www.youtube-nocookie.com/embed/${src}`"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped></style>
