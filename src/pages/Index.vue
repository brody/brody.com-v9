<template>
  <Layout>
    <section class="mb-16 md:mb-24 lg:mb-40">
      <Memoji class="h-16 w-auto absolute mb-3 -mt-20" />

      <h2 class="mb-6">
        G'day, I’m
        <Peek
          text="Brody MacLean"
          imageURL="intro/intro-brody.jpg"
          class="text-brand-main bg-neutral-800"
          imageClass="max-w-xs sm:max-w-sm"
        />.
      </h2>
      <p>
        I’m a multi-disciplinary product designer based in
        <Peek
          text="Sydney, Australia"
          imageURL="intro/intro-sydney.jpg"
          class="text-brand-main bg-neutral-800"
          imageClass="max-w-xs sm:max-w-sm"
        />. Currently, I’m a Lead Product Designer building software for the insurance industry at
        <Peek
          text="Intelligent Thought"
          imageURL="intro/intro-intelligentthought.jpg"
          class="text-brand-main bg-neutral-800"
          imageClass="max-w-xs sm:max-w-sm"
        />. Previously I've made things at places like Deputy, Hudl and CloudBees.
      </p>
      <p class="mt-4">
        <g-link to="/about/">
          More about me
          <span class="opacity-50">→</span>
        </g-link>
      </p>
    </section>

    <section class="mb-16 md:mb-24 lg:mb-32">
      <h2 class="mb-3">Journal</h2>
      <p
        class="text-neutral-600 mt-2 mb-4"
      >I sometimes jot down my thoughts on things ranging from design, technology and life in general.</p>

      <div v-for="entry in $page.entries.edges" :key="entry.id" class="my-2 py-2">
        <g-link :to="entry.node.path">{{ entry.node.title }}</g-link>
        <div>{{ entry.node.description }}</div>
        <span class="text-neutral-700 text-sm mt-1">{{ entry.node.date }}</span>
        <span
          class="entry-tags text-sm text-neutral-700"
          v-for="tag in entry.node.tags"
          :key="tag.id"
        >
          •
          <g-link class="entry-tags__link text-sm text-neutral-700" :to="tag.path">{{ tag.title }}</g-link>
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
      <h2 class="mb-3">Featured work</h2>
      <p class="text-neutral-600 mt-2 mb-4">A selection of some projects I've been working on.</p>

      <div v-for="work in $page.work.edges" :key="work.id" class="my-2 py-2">
        <g-link :to="work.node.path">
          <Peek
            :text="work.node.title"
            :imageURL="work.node.peek_image"
            imageClass="hidden md:block max-w-lg"
          />
        </g-link>
        <div>{{ work.node.description }}</div>
        <span class="text-neutral-700 text-sm mt-1">{{ work.node.year }} • {{ work.node.job_title }}</span>
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

export default {
  metaInfo: {
    titleTemplate: "Brody MacLean",
    meta: [
      { name: "author", content: "Brody MacLean" },
      {
        name: "description",
        content:
          "A multi-disciplinary product designer based in Sydney, Australia."
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:description",
        content:
          "A multi-disciplinary product designer based in Sydney, Australia."
      },
      { name: "twitter:title", content: "Brody MacLean" },
      { name: "twitter:site", content: "@brodymaclean" },
      {
        name: "twitter:image",
        content: `${process.env.GRIDSOME_BASE_URL}/assets/img/og.png`
      },
      { name: "twitter:creator", content: "@brodymaclean" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Brody MacLean" },
      {
        property: "og:description",
        content:
          "A multi-disciplinary product designer based in Sydney, Australia."
      },
      {
        property: "og:url",
        content: `${process.env.GRIDSOME_BASE_URL}`
      },

      {
        property: "og:image",
        content: `${process.env.GRIDSOME_BASE_URL}/assets/img/og.png`
      },
      {
        property: "og:image:secure_url",
        content: `${process.env.GRIDSOME_BASE_URL}/assets/img/og.png`
      }
    ]
  },
  components: {
    Peek,
    Memoji
  }
  // mounted: function() {
  //   console.log(process.env.GRIDSOME_BASE_URL);
  // }
};
</script>

<style>
</style>


