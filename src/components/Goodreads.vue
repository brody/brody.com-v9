<template>
  <section id="goodreads">
    <div id="gr_custom_widget_1532863785" class>
      <div class="gr_custom_container_1532863785">
        <div class="gr_custom_each_container_1532863785">
          <div class="gr_custom_book_container_1532863785">
            <a title="Ready Player One" rel="nofollow" href="#">
              <img
                alt="Ready Player One"
                border="0"
                src="https://images.gr-assets.com/books/1500930947m/9969571.jpg"
              />
            </a>
          </div>
          <div class="gr_custom_title_1532863785">
            <a rel="nofollow" href="#">Ready Player One</a>
          </div>
          <div class="gr_custom_author_1532863785">
            by
            <a rel="nofollow" href="#">Ernest Cline</a>
          </div>
        </div>

        <noscript>
          Share
          <a rel="nofollow" href="https://www.goodreads.com/">book reviews</a>
          and ratings with Brody, and even join a
          <a
            rel="nofollow"
            href="https://www.goodreads.com/group"
          >book club</a>
          on Goodreads.
        </noscript>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Goodreads",
  data: () => ({}),
  mounted() {
    let recaptchaScript = document.createElement("script");
    recaptchaScript.setAttribute(
      "src",
      "https://www.goodreads.com/review/custom_widget/1073529.Brody's%20bookshelf:%20currently-reading?cover_position=left&cover_size=medium&num_books=5&order=a&shelf=currently-reading&show_author=1&show_cover=1&show_rating=0&show_review=0&show_tags=0&show_title=1&sort=date_added&widget_bg_color=FFFFFF&widget_bg_transparent=true&widget_border_width=none&widget_id=1532863785&widget_text_color=000000&widget_title_size=medium&widget_width=full"
    );
    document.head.appendChild(recaptchaScript);
  },
  methods: {},
};
</script>



<style>
/* add scoped back */

.gr_custom_header_1532863785,
.gr_custom_container_1532863785 center,
.gr_custom_container_1532863785 br {
  display: none;
}

#gr_custom_widget_1532863785 {
  @apply mt-5;
}
.gr_custom_each_container_1532863785 {
  @apply mb-5 grid col-gap-4;
  grid-template-columns: 4rem auto;
  grid-template-rows: auto 1fr;
}

.gr_custom_book_container_1532863785 {
  @apply col-span-1 row-span-2 col-start-1 row-start-1;
}

.gr_custom_title_1532863785 {
  @apply col-span-1 row-span-1 col-start-2 row-start-1 self-start pt-1;
}

.gr_custom_author_1532863785 {
  @apply col-span-1 row-span-1 col-start-2 row-start-2 self-start text-color-mid;
}
.gr_custom_author_1532863785 a {
  @apply text-color-mid;
}
</style>