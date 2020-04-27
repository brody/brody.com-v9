// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// Import global styles
require("~/css/main.css");
// import '~/css/font.scss'

import DefaultLayout from "~/layouts/Default.vue";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  // Add javascript & jquery
  head.script.push({ src: "/assets/js/theme.js" });
  head.script.push({ src: "/assets/js/jquery-3.4.1.min.js" });

  head.link.push({
    rel: "stylesheet",
    href:
      "https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap",
  });

  // Add attributes to BODY tag
  head.bodyAttrs = {
    class:
      "bg-neutral-900 font-sans text-neutral-500 antialiased max-w-screen-xl mx-auto px-4 sm:px-8 md:px-12 reative my-40 md:mt-48 lg:mt-56",
  };
}
