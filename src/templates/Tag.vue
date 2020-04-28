<template>
  <PageLayout>
    <h1>{{ $page.tag.title }}</h1>

    <div v-for="edge in $page.tag.belongsTo.edges" :key="edge.node.id" class="my-2 py-2">
      <g-link :to="edge.node.path">{{ edge.node.title }}</g-link>
      <div>{{ edge.node.description }}</div>
      <span class="text-neutral-700 text-sm mt-1">{{ edge.node.date }}</span>
      <span class="entry-tags text-sm text-neutral-700" v-for="tag in edge.node.tags" :key="tag.id"> •
        <g-link class="entry-tags__link text-sm text-neutral-700" :to="tag.path">
          {{ tag.title }}
        </g-link>
      </span>
    </div>

  </PageLayout>
</template>

<page-query>
query ($id: ID!) {
  tag(id: $id) {
    title
    belongsTo {
      edges {
        node {
          ... on Entry {
            id
            title
            path
            date (format: "DD MMM YYYY")
            description
            tags {
                id
                title
                path
            }
          }
        }
      }
    }
  }
}
</page-query>