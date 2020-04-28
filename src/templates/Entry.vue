<template>
  <JournalLayout>
    <div v-html="$page.entry.content" />
  </JournalLayout>
</template>

<page-query>
query Entry ($path: String!) {
  entry: entry (path: $path) {
    title
    content
    date (format: "DD MMM YYYY")
    tags {
      id
      title
      path
    }
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    title: this.$page.entry.title;
  }
};
</script>