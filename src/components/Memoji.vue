<template>
  <g-image class="h-16 w-auto absolute mb-3 -mt-20" alt="Brody MacLean" src="~/assets/img/memoji/memoji6.png"/>
</template>

<script>
export default {
  name: "Peek",
  props: {
    text: {
      type: String,
      required: true
    },
    imageURL: {
      type: String,
      required: true
    }
  },
  computed: {
    setURL: function() {
      return require("~/assets/img/" + this.imageURL);
    }
  },

  data() {
    return {
       images: [
      'https://picsum.photos/600/200',
      'https://picsum.photos/600/200',
      'https://picsum.photos/600/200'
    ],
    selectedImage: null

  },

  methods: {
      onMouseMove(e) {
      this.page.left = e.pageX;
      this.page.top = e.pageY;
    }
  }

};
</script>



<style>
/* add scoped back */

.peek {
  @apply inline-block;
}

.peek__image {
  @apply opacity-0 absolute transform -translate-x-1/2 -translate-y-1/2 max-w-md transition-opacity duration-500 ease-out;
  z-index: -1;
}

.peekactive .peek__image {
  @apply opacity-25;
}
</style>