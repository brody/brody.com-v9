<template>
  <div id="letterboxd" class="mb5">
    <!-- v-if="movies && movies.length" -->
    <div id="recent-movies" class="mb-6">
      <div class="letterboxd">
        <div v-for="(items, index) of movies.slice(0, 3)" :key="index">
          <a :href="items.link">{{ items.title }}</a>
          <img :src="items.thumbnail" />
          <span class="letterboxd__content" v-html="items.content"></span>
          <!-- <p>{{ relativeDate(items.pubDate, "YYYY-MM-DD HH:mm:ss") }}</p> -->
        </div>
      </div>
    </div>

    <div class="flex flex-wrap mt-1">
      <a
        href="https://letterboxd.com/brody/"
        target="_blank"
        class="fill-current flex items-center"
      >
        <svg
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          class="inline-block mr-2"
        >
          <g fill="none" fill-rule="nonzero">
            <circle cx="4.421053" cy="11.421053" fill="#ff8000" r="4.421053" />
            <circle cx="12" cy="11.421053" fill="#00e054" r="4.421053" />
            <path
              d="m8.21052632 9.14273684c.41443796.68759655.6328494 1.47547946.63158445 2.27831576 0 .8336842-.23074235 1.6130527-.63158445 2.2783158-.4144181-.6876051-.63282798-1.4754823-.63158428-2.2783158 0-.8336842.23074217-1.6130526.63158428-2.27831576z"
              fill="#fff"
            />
            <circle cx="19.578947" cy="11.421053" fill="#40bcf4" r="4.421053" />
            <path
              d="m15.7894737 9.14273684c.4144379.68759655.6328494 1.47547946.6315844 2.27831576 0 .8336842-.2307423 1.6130527-.6315844 2.2783158-.4144181-.6876051-.632828-1.4754823-.6315843-2.2783158 0-.8336842.2307422-1.6130526.6315843-2.27831576z"
              fill="#fff"
            />
          </g>
        </svg>
        <span>Follow on Letterboxd</span>
      </a>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";

export default {
  name: "Letterboxd",
  data() {
    return {
      movies: [],
      errors: [],
    };
  },

  // Fetches posts when the component is created.
  created() {
    axios
      .get(
        "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fletterboxd.com%2Fbrody%2Frss%2F"
      )
      .then((response) => {
        // JSON responses are automatically parsed.
        this.movies = response.data.items;
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
  methods: {
    relativeDate(date) {
      return moment(date).startOf("day").fromNow();
    },
  },
};
</script>

<style>
.letterboxd h3,
.letterboxd p {
  @apply m-0;
}

.letterboxd > div {
  @apply mb-5 grid col-gap-4 p-0;
  grid-template-columns: 4rem auto;
  grid-template-rows: auto 1fr;
}

.letterboxd > div > :nth-child(2) {
  @apply col-span-1 row-span-2 col-start-1 row-start-1;
}

.letterboxd > div > :nth-child(1) {
  @apply col-span-1 row-span-1 col-start-2 row-start-1 self-start pt-1 truncate;
}

.letterboxd > div > :nth-child(3) {
  @apply col-span-1 row-span-1 col-start-2 row-start-2 self-start text-sm opacity-75 pt-1;
}

.letterboxd__content p:first-child {
  display: none;
}
</style>
