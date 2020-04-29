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
import moment from "moment";

export default {
  components: {
    Footer
  },
  metaInfo() {
    return {
      title: this.$page.entry.title,
      meta: [
        { name: "description", content: this.$page.entry.description },
        // twitter-card: https://cards-dev.twitter.com/validator
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:description", content: this.$page.entry.description },
        { name: "twitter:title", content: this.$page.entry.title },
        { name: "twitter:site", content: "@brodymaclean" },
        { name: "twitter:image", content: this.getCoverImage },
        { name: "twitter:creator", content: "@brodymaclean" },
        { property: "og:type", content: "article" },
        { property: "og:title", content: this.$page.entry.title },
        { property: "og:description", content: this.$page.entry.description },
        {
          property: "og:url",
          content: `${this.getBaseUrl}${this.$page.entry.path}`
        },
        {
          property: "article:published_time",
          content: moment(this.$page.entry.date).format("MM-DD-YYYY")
        },
        { property: "og:updated_time", content: this.$page.entry.date },
        { property: "og:image", content: this.getCoverImage },
        { property: "og:image:secure_url", content: this.getCoverImage }
      ],
      script: [{ src: "https://platform.twitter.com/widgets.js", async: true }]
    };
  },
  computed: {
    getCoverImage() {
      let coverImage = "";
      const cover_image = this.$page.entry.cover_image;
      if (cover_image != null) {
        coverImage = `${this.getBaseUrl}${this.$page.entry.cover_image.src}`;
      }
      return coverImage;
    },
    getBaseUrl() {
      return process.env.GRIDSOME_BASE_URL;
    }
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