<template>

  <div class>

    <main class="max-w-screen-sm">

      <nav class="w-100 fixed top-0 inset-x-0 max-w-screen-lg mx-auto z-40">
        <div class="flex max-w-screen-sm px-4 sm:px-0 py-4 sm:px-8 md:px-12">
          <g-link to="/journal/" rel="noopener noreferrer" class>← Back to Journal</g-link>
        </div>
      </nav>

      <div class="entry-title">

        <h1 class="entry-title__text">
          {{ $page.entry.title }}
        </h1>

        <span class="entry-meta text-sm text-neutral-700">
          {{ $page.entry.date }}
        </span>
        <span class="entry-tags text-sm text-neutral-700" v-for="tag in $page.entry.tags" :key="tag.id">•
          <g-link class="entry-tags__link text-sm text-neutral-700" :to="tag.path">
            {{ tag.title }}
          </g-link>
        </span>

      </div>

      <div class="entry content-box">
        <figure class="entry__header">
          <g-image alt="Cover image" v-if="$page.entry.cover_image" :src="$page.entry.cover_image" />
        </figure>
        <div class="entry__content" v-html="$page.entry.content" />

      </div>

      <!-- <slot /> -->

    </main>

    <Footer />

  </div>

</template>

<script>
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Footer
  },
  metaInfo() {
    return {
      title: this.$page.entry.title,
      meta: [
        {
          name: "description",
          content: this.$page.entry.description
        }
      ]
    };
  }
};
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
