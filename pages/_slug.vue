<template>
  <div class="grid grid-cols-12 p-6">
    <div class="col-span-2 hidden lg:block"></div>
    <div class="col-span-12 lg:col-span-8">
      <Breadcrumb :path="article.slug" />
      <div v-if="article.banner" class="mb-6">
        <NuxtImg
          :src="article.banner.src"
          class="w-full object-cover object-center"
          :alt="article.banner.alt"
          format="webp"
        />
        <div
          v-html="article.banner.description"
          v-if="article.banner.description"
          class="text-sm italic text-gray-400"
        />
      </div>
      <h1 class="text-4xl font-bold">{{ article.title }}</h1>
      <nuxt-content :document="article" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ route, $content }) {
    const article = await $content('pages')
      .where({ slug: { $eq: route.params.slug } })
      .fetch()

    return {
      article: article[0],
    }
  },
}
</script>

<style lang="scss" scoped></style>
