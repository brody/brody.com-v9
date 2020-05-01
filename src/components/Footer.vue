<template>
  <div>
    <aside class="hidden lg:flex flex-col fixed bottom-0 right-0 text-right mr-12 mb-10">
      <g-link to="/" class="py-1">Home</g-link>
      <g-link to="/about/" class="py-1">About</g-link>
      <g-link to="/journal/" class="py-1">Journal</g-link>
      <g-link to="/#featured-work" class="py-1">Work</g-link>
      <g-link to="mailto:hello@brody.com?Subject=Hey Brody!" class="py-1">Email</g-link>
    </aside>

    <footer class="flex mt-20 md:mt-32 lg:mt-40 max-w-screen-md">
      <div class="hidden sm:flex flex-col sm:w-1/2 md:w-2/3 items-start">
        <Memoji class="h-16 w-auto inline-flex mb-4" />
        <p class="mb-2 pr-16 mt-0">
          Multi-disciplinary designer working on user interfaces and design systems
          for digital products.
        </p>
        <p class="mb-2 pr-16 mt-0">
          Built with 💛,
          <a
            href="https://gridsome.org/"
            rel="noopener noreferrer"
            target="_blank"
          >Gridsome</a> and
          <a
            href="https://tailwindcss.com/"
            rel="noopener noreferrer"
            target="_blank"
          >Tailwind CSS</a>.
        </p>
      </div>

      <div class="w-1/2 sm:w-1/4 md:w-1/6 flex flex-col items-start">
        <p class="mb-4 mt-0">Navigate</p>
        <g-link to="/" class="py-1">Home</g-link>
        <g-link to="/about/" class="py-1">About</g-link>
        <g-link to="/journal/" class="py-1">Journal</g-link>
        <g-link to="/#featured-work" class="py-1">Work</g-link>
      </div>

      <div class="w-1/2 sm:w-1/4 md:w-1/6 flex flex-col items-start">
        <p class="mb-4 mt-0">Connect</p>
        <a
          href="https://twitter.com/BrodyMaclean"
          target="_blank"
          rel="noopener noreferrer"
          class="py-1"
        >Twitter</a>
        <a
          href="https://instagram.com/Brody"
          target="_blank"
          rel="noopener noreferrer"
          class="py-1"
        >Instagram</a>
        <a
          href="https://www.linkedin.com/in/BrodyMaclean/"
          target="_blank"
          rel="noopener noreferrer"
          class="py-1"
        >LinkedIn</a>
        <a
          href="mailto:hello@brody.com?Subject=Hey Brody!"
          target="_blank"
          rel="noopener noreferrer"
          class="py-1"
        >Email</a>
        <a
          href="https://codepen.io/Brody"
          target="_blank"
          rel="noopener noreferrer"
          class="py-1"
        >Codepen</a>
        <a
          href="https://github.com/Brody"
          target="_blank"
          rel="noopener noreferrer"
          class="py-1"
        >Github</a>
      </div>
    </footer>
  </div>
</template>


<script>
import Memoji from "~/components/Memoji.vue";

export default {
  components: {
    Memoji
  }
};
</script>


<style>
</style>