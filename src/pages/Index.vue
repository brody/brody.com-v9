<template>
  <Layout>
    <section class="mb-16 md:mb-24 lg:mb-40">
      <Memoji class="absolute w-auto h-16 mb-3 -mt-20" />

      <h1 class="mb-4">
        G'day, I’m
        <Peek
          text="Brody MacLean"
          class="cursor-default text-color-main bg-color-dim"
          imageURL="intro/intro-brody.jpg"
          imageClass="max-w-xs sm:max-w-sm"
          imageWidth="230"
        />, <br class="sm:hidden" />a multi-disciplinary product designer based
        in
        <Peek
          text="Sydney, Australia"
          class="cursor-default text-color-main bg-color-dim"
          imageURL="intro/intro-sydney.jpg"
          imageClass="max-w-xs sm:max-w-sm"
          imageWidth="230"
        />.
        <span class="hidden md:inline">
          Currently, I'm desiging software for the insurance industry at
          <Peek
            text="Mitti"
            class="cursor-default text-color-main bg-color-dim"
            imageURL="intro/intro-mitti.jpg"
            imageClass="max-w-xs sm:max-w-sm"
          />.
        </span>
      </h1>
      <latesttrack />
      <p class="mt-4">
        <g-link to="/about/">
          More about me
          <span class="opacity-50">→</span>
        </g-link>
      </p>
    </section>

    <section class="mb-16 md:mb-24 lg:mb-32">
      <h2 class="mb-4 text-color-mid">Journal</h2>

      <div
        v-for="entry in $page.entries.edges"
        :key="entry.id"
        class="py-2 my-2"
      >
        <h3 class="mb-1 font-medium">
          <g-link class="link" :to="entry.node.path">{{
            entry.node.title
          }}</g-link>
        </h3>
        <div>{{ entry.node.description }}</div>
        <span class="mt-1 text-sm text-color-mid">{{ entry.node.date }}</span>
        <span
          class="text-sm entry-tags text-color-mild"
          v-for="tag in entry.node.tags"
          :key="tag.id"
        >
          •
          <g-link
            class="text-sm entry-tags__link text-color-mid"
            :to="tag.path"
            >{{ tag.title }}</g-link
          >
        </span>
      </div>

      <p class="mt-4">
        <g-link to="/journal/">
          See more entries
          <span class="opacity-50">→</span>
        </g-link>
      </p>
    </section>

    <section class="mb-16 md:mb-24 lg:mb-32" id="featured-work">
      <h2 class="mb-4 text-color-mid">Featured work</h2>

      <div v-for="work in $page.work.edges" :key="work.id" class="py-2 my-2">
        <h3 class="mb-1 font-medium">
          <g-link class="link" :to="work.node.path">
            <Peek
              :text="work.node.title"
              :imageURL="work.node.peek_image"
              imageClass="hidden md:block max-w-lg"
            />
          </g-link>
        </h3>
        <div>{{ work.node.description }}</div>
        <span class="mt-1 text-sm text-color-mid">
          {{ work.node.year }}
          <span class="text-color-mild">•</span>
          {{ work.node.job_title }}
        </span>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query {
  entries: allEntry (limit: 5) {
    edges {
      node {
        id
        title
        path
        description
        date (format: "DD MMM YYYY")
        tags {
          id
          title
          path
       }
      }
    }
  }

  work: allWork {
    edges {
      node {
        id
        title
        path
        description
        year
        job_title
        peek_image
      }
    }
  }
}
</page-query>

<script>
import Peek from "~/components/Peek.vue";
import Memoji from "~/components/Memoji.vue";
import latesttrack from "~/components/latesttrack.vue";

export default {
  metaInfo: {
    titleTemplate: "Brody MacLean",
    meta: [
      { name: "author", content: "Brody MacLean" },
      {
        name: "description",
        content:
          "A multi-disciplinary product designer based in Sydney, Australia.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:description",
        content:
          "A multi-disciplinary product designer based in Sydney, Australia.",
      },
      { name: "twitter:title", content: "Brody MacLean" },
      { name: "twitter:site", content: "@brodymaclean" },
      {
        name: "twitter:image",
        content: `${process.env.GRIDSOME_BASE_URL}/assets/img/og.png`,
      },
      { name: "twitter:creator", content: "@brodymaclean" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Brody MacLean" },
      {
        property: "og:description",
        content:
          "A multi-disciplinary product designer based in Sydney, Australia.",
      },
      {
        property: "og:url",
        content: `${process.env.GRIDSOME_BASE_URL}`,
      },

      {
        property: "og:image",
        content: `${process.env.GRIDSOME_BASE_URL}/assets/img/og.png`,
      },
      {
        property: "og:image:secure_url",
        content: `${process.env.GRIDSOME_BASE_URL}/assets/img/og.png`,
      },
    ],
  },
  components: {
    Peek,
    Memoji,
    latesttrack,
  },
  // mounted: function() {
  //   console.log(process.env.GRIDSOME_BASE_URL);
  // }
};
</script>

<style>
</style>


