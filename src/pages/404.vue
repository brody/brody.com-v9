<template>
  <PageLayout>
    <nav class="w-100 fixed top-0 inset-x-0 max-w-screen-lg mx-auto z-40">
      <div class="flex max-w-screen-sm px-4 sm:px-0 py-4 sm:px-8 md:px-12">
        <g-link to="/" rel="noopener noreferrer" class>← Back to Home</g-link>
      </div>
    </nav>
    <section class="mb-20 -mt-20">
      <h1 class="mb-6">Page not found</h1>

      <figure v-if="fourofourImage && isMobile()">
        <g-image
          class="w-full"
          alt="404"
          :src="require('!!assets-loader!~/assets/img/404/' + fourofourImage)"
        />
      </figure>

      <figure v-if="fourofourVideo && !isMobile()">
        <video class="w-75" alt="404" autoplay muted loop :src="(fourofourVideo)" />
      </figure>

      <!-- <video class="w-full hidden md:block" id="404-vid" src autoplay muted loop></video> -->

      <!-- <p class="text-neutral-600 mt-2 mb-4">t
        It's probably best to head
        <g-link to="/">home</g-link>.
      </p>-->
    </section>
  </PageLayout>
</template>


<script>
export default {
  metaInfo: {
    title: "404"
  },
  data() {
    return {
      images: [
        "1.gif",
        "2.gif",
        "3.gif",
        "4.gif",
        "5.gif",
        "6.gif",
        "7.gif",
        "8.gif",
        "9.gif",
        "10.gif",
        "11.gif",
        "12.gif",
        "13.gif",
        "14.gif",
        "15.gif",
        "16.gif",
        "17.gif",
        "18.gif"
      ],
      videos: [
        "https://media.giphy.com/media/g01ZnwAUvutuK8GIQn/giphy.mp4", //travolta
        "https://media.giphy.com/media/D3lRpp7jQietO/giphy.mp4", //britney
        "https://media.giphy.com/media/RBeddeaQ5Xo0E/giphy.mp4", // judge judy
        "https://media.giphy.com/media/O5pd2oPjjcGFW/giphy.mp4", // cat
        "https://media.giphy.com/media/3og0INyCmHlNylks9O/giphy.mp4", // picard
        "https://media.giphy.com/media/27EhcDHnlkw1O/giphy.mp4", // face palm montage
        "https://media.giphy.com/media/Ra1bmpxpsppNC/giphy.mp4", // loaded weapon face palm
        "https://media.giphy.com/media/CPskAi4C6WLHa/giphy.mp4", // confused girl 2
        "https://media.giphy.com/media/5t9wJjyHAOxvnxcPNk/giphy.mp4", //jeff goldblum
        "https://media.giphy.com/media/3oxRmGNqKwCzJ0AwPC/giphy.mp4", //hiker slip
        "https://media.giphy.com/media/Ub8XEam5vXbMY/giphy.mp4", // pig fall
        "https://media.giphy.com/media/mWk4TlR5h6Qda/giphy.mp4", // chair fall
        "https://media.giphy.com/media/oHxeimsHezGwM/giphy.mp4", // frog miss
        "https://media.giphy.com/media/aQAOVgpDLuaLm/giphy.mp4" // fake door
      ],
      fourofourImage: null,
      fourofourVideo: null
    };
  },
  methods: {
    selectedItem(items) {
      return items[Math.floor(Math.random() * items.length)];
    },

    isMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    }
  },
  created() {
    this.fourofourImage = this.selectedItem(this.images);
    this.fourofourVideo = this.selectedItem(this.videos);
  }
};
</script>