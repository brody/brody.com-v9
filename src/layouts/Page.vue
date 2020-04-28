<template>

  <div class>

    <main class="max-w-screen-sm">
      <nav class="w-100 fixed top-0 inset-x-0 max-w-screen-lg mx-auto z-40">
        <div class="flex max-w-screen-sm px-4 sm:px-0 py-4 sm:px-8 md:px-12">
          <a href="/" rel="noopener noreferrer" class>← Back to Home</a>
        </div>
      </nav>
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
