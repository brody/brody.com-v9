<template>
  <!-- <div class="card">
    {{ message }}
    <button @click="onClick">
      Change
    </button>
  </div>-->

  <span class="peek rounded-sm px-05 -mx-05 inline-block" :class="{ peekactive: hover }">
    <span
      class="peek__text"
      @mouseover="hover = true"
      @mousemove.self="onMouseMove($event)"
      @mouseleave="hover = false"
    >{{ text }}</span>
    <g-image
      class="peek__image pointer-events-none opacity-0 absolute transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500 ease-out"
      :class="imageClass"
      :style="{ left: page.left + 'px', top: page.top + 'px' }"
      :alt="text"
      :src="setURL"
      :width="imageWidth"
    />
  </span>
</template>

<script>
export default {
  name: "Peek",
  props: {
    text: {
      type: String,
      required: true,
    },
    imageURL: {
      type: String,
      required: true,
    },
    imageClass: {
      type: String,
      required: false,
    },
    imageWidth: {
      type: String,
      required: false,
    },
  },
  computed: {
    setURL: function () {
      return require("!!assets-loader?" +
        "width=650" +
        "!~/assets/img/" +
        this.imageURL);
    },
  },

  data() {
    return {
      hover: false,
      page: {
        left: 0,
        top: 0,
      },
    };
  },

  methods: {
    onMouseMove(e) {
      this.page.left = e.pageX;
      this.page.top = e.pageY;
    },
  },
};
</script>



<style>
/* add scoped back */

.peek {
}

.peek__image {
  z-index: -1;
}

.peekactive .peek__image {
  @apply opacity-25;
}
</style>