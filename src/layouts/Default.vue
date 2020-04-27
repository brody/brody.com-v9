<template>
  <div class>
    <main class="max-w-screen-sm">
      <slot />
    </main>

    <aside class="hidden lg:flex flex-col fixed bottom-0 right-0 text-right mr-12 mb-10">
      <a href="/" class="py-1">Home</a>
      <a href="/about" class="py-1">About</a>
      <a href="#" class="py-1">Journal</a>
      <a href="/featured-work" class="py-1">Work</a>
      <a href="mailto:hello@brody.com?Subject=Hello!" class="py-1">Email</a>
    </aside>

    <footer class="flex mt-20 md:mt-32 lg:mt-40 max-w-screen-md">
      <div class="hidden sm:flex flex-col sm:w-1/2 md:w-2/3 items-start">
        <Memoji class="h-16 w-auto inline-flex mb-4" />
        <p class="mb-2 pr-16 mt-0">
          Multi-disciplinary designer working on user interfaces and design systems
          for digital products.
        </p>
        <p class="mb-2 pr-16 mt-0">Built with 💛, <a href="https://gridsome.org/" target="_blank">Gridsome</a> and <a href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a>.</p>
      </div>

      <div class="w-1/2 sm:w-1/4 md:w-1/6 flex flex-col items-start">
        <p class="mb-4 mt-0">Navigate</p>
        <a href="/" class="py-1">Home</a>
        <a href="/about" class="py-1">About</a>
        <a href="#" class="py-1">Journal</a>
        <a href="/#featured-work" class="py-1">Work</a>
      </div>

      <div class="w-1/2 sm:w-1/4 md:w-1/6 flex flex-col items-start">
        <p class="mb-4 mt-0">Connect</p>
        <a href="#" target="_blank" rel="noopener noreferrer" class="py-1">Instagram</a>
        <a href="#" target="_blank" rel="noopener noreferrer" class="py-1">Twitter</a>
        <a href="#" target="_blank" rel="noopener noreferrer" class="py-1">LinkedIn</a>
        <a href="#" target="_blank" rel="noopener noreferrer" class="py-1">Email</a>
        <a href="#" target="_blank" rel="noopener noreferrer" class="py-1">Codepen</a>
        <a href="#" target="_blank" rel="noopener noreferrer" class="py-1">Github</a>
      </div>
    </footer>
  </div>

  <!-- <slot /> -->

  <!-- 
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
      </nav>
    </header>
    <slot />
  </div>-->
</template>

<script>
import Memoji from "~/components/Memoji.vue";

export default {
  components: {
    Memoji
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
