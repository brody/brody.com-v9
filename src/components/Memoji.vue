<template>
  <span v-if="selectedImage">
    <g-image
      class="h-full w-auto cursor-pointer"
      alt="Brody MacLean"
      :src="require('!!assets-loader!~/assets/img/memoji/' + selectedImage)"
      @click="generate()"
    />
  </span>
</template>

<script>
export default {
  name: "Memoji",
  data() {
    return {
      images: [
        "memoji1.png",
        "memoji2.png",
        "memoji3.png",
        "memoji4.png",
        "memoji5.png",
        "memoji6.png",
        "memoji7.png",
        "memoji8.png",
        "memoji9.png",
        "memoji10.png",
        "memoji11.png",
        "memoji12.png",
        "memoji13.png"
      ],
      selectedImage: null
    };
  },
  methods: {
    randomItem(items) {
      return items[Math.floor(Math.random() * items.length)];
    },
    generate() {
      this.selectedImage = this.randomItem(this.images);
    }
  },
  created() {
    this.selectedImage = this.randomItem(this.images);
  }
};
</script>

<style>
</style>