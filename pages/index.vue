<template>
  <section class="flex w-full flex-col divide-y p-6 lg:w-3/4">
    <NuxtLink
      :to="`/article/${article.slug}`"
      v-for="article in articles"
      :key="article.slug"
      class="p-4 pt-2 duration-150 ease-out hover:text-gray-500"
    >
      <div>
        <p class="text-xs">
          Published
          {{
            new Date(article.createdAt).toLocaleString('en-EN', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })
          }}
        </p>
      </div>
      <h2 class="text-3xl font-bold">{{ article.title }}</h2>
      <p class="text-gray-600">{{ article.description }}</p>
    </NuxtLink>
  </section>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const articles = await $content('articles')
      .sortBy('createdAt', 'desc')
      .fetch()

    return { articles }
  },
}
</script>

<style lang="scss" scoped></style>
