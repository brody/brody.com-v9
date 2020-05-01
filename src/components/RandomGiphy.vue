<template>
  <figure v-if="selectedVideo">
    <video
      class="w-full max-w-md"
      alt="404"
      autoplay
      muted
      loop
      playsinline
      autobuffer
      :src="(selectedVideo)"
      @click="generate()"
    />
  </figure>
</template>

<script>
export default {
  name: "RandomGiphy",
  data() {
    return {
      images: [
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
      selectedVideo: null
    };
  },
  methods: {
    randomItem(items) {
      return items[Math.floor(Math.random() * items.length)];
    },
    generate() {
      this.selectedVideo = this.randomItem(this.images);
    }
  },
  created() {
    this.selectedVideo = this.randomItem(this.images);
  }
};
</script>

<style>
</style>