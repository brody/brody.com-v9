<template>

  <div>

    <main class="max-w-screen-sm">
      <slot />
    </main>

    <Footer />

  </div>

</template>

<script>
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Footer
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
