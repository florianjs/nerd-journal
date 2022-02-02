<template>
  <section
    class="sticky top-0 z-50 flex w-full flex-col items-start justify-start bg-white"
  >
    <NuxtLink
      to="/"
      class="flex h-28 w-full flex-col items-center justify-center md:w-auto md:flex-row md:justify-start md:space-x-4 md:px-4"
    >
      <NuxtImg
        format="webp"
        src="/images/logo.png"
        alt="Your alt"
        width="200px"
        height="70px"
      />
      <p class="text-3xl font-black uppercase">{{ title }}</p>
    </NuxtLink>
    <div
      class="flex h-24 w-full flex-col items-center justify-between border-b-2 border-t-2 border-gray-800 md:h-12 md:flex-row md:px-6"
    >
      <div class="flex h-12 items-center space-x-6 font-bold uppercase">
        <NuxtLink
          @click.native="search = ''"
          :to="item.path"
          v-for="item in menu"
          :key="item.name"
          class="hover:text-gray-500"
        >
          {{ item.name }}
        </NuxtLink>
      </div>
      <div
        class="relative flex h-full w-full items-center border-t-2 border-gray-800 md:w-1/3 md:border-t-0 md:border-l-2"
      >
        <input
          v-model="search"
          class="h-full w-full pl-2 focus:outline-none"
          :placeholder="placeholder"
        />
        <svg
          v-if="search === ''"
          xmlns="http://www.w3.org/2000/svg"
          class="absolute right-2 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <svg
          v-else
          @click="search = ''"
          xmlns="http://www.w3.org/2000/svg"
          class="absolute right-2 h-6 w-6 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
    </div>
    <div
      class="fixed inset-0 top-52 z-50 h-full bg-white md:top-40"
      v-if="articles"
    >
      <section>
        <div
          v-if="articles.length > 0"
          class="flex flex-col space-y-4 divide-y p-6"
        >
          <p class="mb-6 text-4xl font-bold underline">Search results :</p>
          <NuxtLink
            @click.native="search = ''"
            :to="`/article/${article.slug}`"
            v-for="article in articles"
            :key="article.slug"
            class="pt-2 duration-150 ease-out hover:text-gray-500"
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
        </div>
        <div v-else class="text-4xl font-bold">No results 🤓</div>
      </section>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      title: '',
      placeholder: '',
      articles: false,
      menu: [],
    }
  },
  async fetch() {
    const { menu, title, searchPlaceholder } = await this.$content('settings')
      .only(['menu', 'title', 'searchPlaceholder'])
      .fetch()
    this.menu = menu
    this.title = title
    this.placeholder = searchPlaceholder
  },
  watch: {
    async search(search) {
      if (!search) {
        this.articles = false
        return
      }

      this.articles = await this.$content('articles')
        .sortBy('createdAt', 'asc')
        .limit(12)
        .search(search)
        .fetch()
    },
  },
}
</script>
