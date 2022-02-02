<template>
  <div class="grid grid-cols-12 p-6">
    <div class="col-span-2 hidden lg:block"></div>
    <div class="col-span-12 lg:col-span-8">
      <Breadcrumb :path="` Article > ${article.title}`" />
      <div v-if="article.banner" class="mb-6">
        <NuxtImg
          :src="article.banner.src"
          class="aspect-video w-full object-cover object-center"
          :alt="article.banner.alt"
          format="webp"
        />
        <div
          v-html="article.banner.description"
          v-if="article.banner.description"
          class="text-sm italic text-gray-600"
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
    const article = await $content('articles')
      .where({ slug: { $eq: route.params.slug } })
      .fetch()

    return {
      article: article[0],
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          content: this.description,
          name: 'description',
        },
        {
          hid: 'og:title',
          content: this.title,
          property: 'og:title',
        },
        {
          hid: 'og:description',
          content: this.description,
          property: 'og:description',
        },
        {
          hid: 'og:url',
          content: this.url,
          property: 'og:url',
        },
        {
          hid: 'og:image',
          content: this.ogImage,
          property: 'og:image',
        },
        {
          hid: 'twitter:card',
          content: 'summary_large_image',
          property: 'twitter:card',
        },
      ],
    }
  },
  computed: {
    title() {
      if (this.article) return this.article.title
      return 'My Default Awesome Blog Post Title'
    },
    description() {
      if (this.article) return this.article.description
      return 'Default post description/caption/excerpt'
    },
    url() {
      return process.env.BASE_URL + this.$route.fullPath
    },
    ogImage() {
      if (this.article) return process.env.BASE_URL + this.article.ogBanner
      return process.env.BASE_URL + '/images/ogbanner/default.jpg'
    },
  },
}
</script>

<style lang="scss" scoped></style>
