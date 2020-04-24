<template>
  <!-- <div class="card">
    {{ message }}
    <button @click="onClick">
      Change
    </button>
  </div>-->

  <span class="peek text-brand-main bg-neutral-800 " :class="{ peekactive: hover }">
    <span class="peek__text" @mouseover="hover = true" @mousemove.self="onMouseMove($event)" @mouseleave="hover = false">{{ text }}</span>
    <g-image class="peek__image pointer-events-none" :style="{ left: page.left + 'px', top: page.top + 'px' }" :alt="text" :src="setURL" />
  </span>
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
      hover: false,
      page: {
        left: 0,
        top: 0
      }
    };
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