<template>
  <WorkLayout>
    <div>
      <div class="work-title">
        <h1 class="work-title__text">{{ $page.work.title }}</h1>

        <span class="work-meta text-sm text-neutral-700">{{ $page.work.date }}</span>
      </div>

      <div class="work content-box">
        <figure class="work__header">
          <g-image alt="Cover image" v-if="$page.work.cover_image" :src="$page.work.cover_image" />
        </figure>
        <div class="work__content" v-html="$page.work.content" />
      </div>
    </div>
  </WorkLayout>
</template>

<page-query>
query Work ($path: String!) {
  work: work (path: $path) {
    title
    content
    path
    slug
    date (format: "DD MMM YYYY")
    cover_image (width: 640, height: 380)
    og_image (width: 640, height: 380)
    description
  }
}
</page-query>

<script>
import moment from "moment";

export default {
  metaInfo() {
    return {
      title: this.$page.work.title,
      meta: [
        { name: "description", content: this.$page.work.description },
        // twitter-card: https://cards-dev.twitter.com/validator
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:description", content: this.$page.work.description },
        { name: "twitter:title", content: this.$page.work.title },
        { name: "twitter:site", content: "@brodymaclean" },
        { name: "twitter:image", content: this.getCoverImage },
        { name: "twitter:creator", content: "@brodymaclean" },
        { property: "og:type", content: "article" },
        { property: "og:title", content: this.$page.work.title },
        { property: "og:description", content: this.$page.work.description },
        {
          property: "og:url",
          content: `${this.getBaseUrl}${this.$page.work.path}`
        },
        {
          property: "article:published_time",
          content: moment(this.$page.work.date).format("MM-DD-YYYY")
        },
        { property: "og:updated_time", content: this.$page.work.date },
        { property: "og:image", content: this.getCoverImage },
        { property: "og:image:secure_url", content: this.getCoverImage }
      ],
      script: [{ src: "https://platform.twitter.com/widgets.js", async: true }]
    };
  },
  computed: {
    getCoverImage() {
      let coverImage = "";
      const og_image = this.$page.work.og_image;
      if (og_image != null) {
        coverImage = `${process.env.GRIDSOME_BASE_URL}${this.$page.work.og_image.src}`;
        // console.log(process.env.GRIDSOME_BASE_URL);
        // console.log(this.$page.work.og_image.src);
      }
      return coverImage;
    },
    getBaseUrl() {
      return process.env.GRIDSOME_BASE_URL;
    }
  }
};
</script>
