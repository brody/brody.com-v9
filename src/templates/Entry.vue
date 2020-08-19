<template>
  <JournalLayout>
    <div>
      <div class="entry-title">
        <h1 class="entry-title__text">{{ $page.entry.title }}</h1>

        <span class="entry-meta text-sm text-color-mid">{{ $page.entry.date }}</span>
        <span
          class="entry-tags text-sm text-color-mild"
          v-for="tag in $page.entry.tags"
          :key="tag.id"
        >
          •
          <g-link class="entry-tags__link text-sm text-color-mid" :to="tag.path">{{ tag.title }}</g-link>
        </span>
      </div>

      <div class="entry content-box">
        <figure class="entry__header">
          <g-image alt="Cover image" v-if="$page.entry.cover_image" :src="$page.entry.cover_image" />
        </figure>
        <div class="entry__content" v-html="$page.entry.content" />
      </div>
    </div>
  </JournalLayout>
</template>

<page-query>
query Entry ($path: String!) {
  entry: entry (path: $path) {
    title
    content
    path
    slug
    date (format: "DD MMM YYYY")
    cover_image (width: 640, height: 380)
    og_image (width: 640, height: 380)
    description
    tags {
      id
      title
      path
    }
  }
}
</page-query>

<script>
import moment from "moment";

export default {
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
          content: `${this.getBaseUrl}${this.$page.entry.path}`,
        },
        {
          property: "article:published_time",
          content: moment(this.$page.entry.date).format("MM-DD-YYYY"),
        },
        { property: "og:updated_time", content: this.$page.entry.date },
        { property: "og:image", content: this.getCoverImage },
        { property: "og:image:secure_url", content: this.getCoverImage },
      ],
      script: [{ src: "https://platform.twitter.com/widgets.js", async: true }],
    };
  },
  computed: {
    getCoverImage() {
      let coverImage = "";
      const og_image = this.$page.entry.og_image;
      if (og_image != null) {
        coverImage = `${process.env.GRIDSOME_BASE_URL}${this.$page.entry.og_image.src}`;
        // console.log(process.env.GRIDSOME_BASE_URL);
        // console.log(this.$page.entry.og_image.src);
      }
      return coverImage;
    },
    getBaseUrl() {
      return process.env.GRIDSOME_BASE_URL;
    },
  },
};
</script>
