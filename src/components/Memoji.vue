<template>
  <span v-if="selectedImage">
    <g-image
      class="h-full w-auto cursor-pointer"
      alt="Brody MacLean"
      :src="require('!!assets-loader?height=144&width=144!~/assets/img/memoji/' + selectedImage)"
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
        "memoji13.png",
        "memoji14.png",
        "memoji15.png",
        "memoji16.png",
        "memoji17.png",
        "memoji18.png",
        "maskmoji1.png",
        "maskmoji2.png",
        "maskmoji3.png",
      ],
      selectedImage: null,
    };
  },
  methods: {
    randomItem(items) {
      return items[Math.floor(Math.random() * items.length)];
    },
    generate() {
      this.selectedImage = this.randomItem(this.images);
    },
  },
  created() {
    this.selectedImage = this.randomItem(this.images);
  },
};
</script>

<style>
</style>