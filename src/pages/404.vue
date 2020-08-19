<template>
  <Layout>
    <nav class="w-100 fixed top-0 inset-x-0 max-w-screen-lg mx-auto z-40">
      <div class="flex max-w-screen-sm px-4 sm:px-0 py-4 sm:px-8 md:px-12">
        <g-link to="/" rel="noopener noreferrer" class>← Back to Home</g-link>
      </div>
    </nav>
    <section class="mb-20 -mt-16">
      <h1 class="mb-6">Page not found</h1>

      <RandomGiphy />

      <!-- <p class="text-color-mild mt-2 mb-4">t
        It's probably best to head
        <g-link to="/">home</g-link>.
      </p>-->
    </section>
  </Layout>
</template>


<script>
import RandomGiphy from "~/components/RandomGiphy.vue";

export default {
  metaInfo: {
    title: "404",
  },
  components: {
    RandomGiphy,
  },
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
};
</script>

<page-query>
</page-query>