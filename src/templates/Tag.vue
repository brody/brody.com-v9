<template>
  <PageLayout>
    <h1 class="text-color-mid">{{ $page.tag.title }}</h1>

    <div v-for="edge in $page.tag.belongsTo.edges" :key="edge.node.id" class="my-2 py-2">
      <h3 class="font-medium mb-1">
        <g-link class="link" :to="edge.node.path">{{ edge.node.title }}</g-link>
      </h3>
      <div>{{ edge.node.description }}</div>
      <span class="text-color-mid text-sm mt-1">{{ edge.node.date }}</span>
      <span class="entry-tags text-sm text-color-mid" v-for="tag in edge.node.tags" :key="tag.id">
        •
        <g-link class="entry-tags__link text-sm text-color-mid" :to="tag.path">{{ tag.title }}</g-link>
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