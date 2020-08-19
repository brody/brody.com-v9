<template>
  <PageLayout>
    <section class="mb-20">
      <h1 class="mb-6 text-color-mid">Journal</h1>

      <div v-for="entry in $page.entries.edges" :key="entry.id" class="my-2 py-2">
        <h3 class="mb-1 font-medium">
          <g-link class="link" :to="entry.node.path">{{ entry.node.title }}</g-link>
        </h3>
        <div>{{ entry.node.description }}</div>
        <span class="text-color-mid text-sm mt-1">{{ entry.node.date }}</span>
        <span
          class="entry-tags text-sm text-color-mild"
          v-for="tag in entry.node.tags"
          :key="tag.id"
        >
          •
          <g-link class="entry-tags__link text-sm text-color-mid" :to="tag.path">{{ tag.title }}</g-link>
        </span>
      </div>
    </section>

    <RandomGiphy />
  </PageLayout>
</template>

<page-query>
query Entries {
  entries: allEntry {
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
}
</page-query>

<script>
import RandomGiphy from "~/components/RandomGiphy.vue";

export default {
  metaInfo: {
    title: "Journal",
  },
  components: {
    RandomGiphy,
  },
};
</script>



