// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwind = require("tailwindcss");
const purgecss = require("@fullhuman/postcss-purgecss");

const postcssPlugins = [tailwind()];

if (process.env.NODE_ENV === "production")
  postcssPlugins.push(purgecss(require("./purgecss.config.js")));

module.exports = {
  siteName: "Brody MacLean",
  siteDescription:
    "Brody MacLean is a Lead Product Designer based in Sydney, Australia.",
  siteUrl: "https://brody.com",
  titleTemplate: `%s • Brody MacLean`,

  templates: {
    Entry: "/:title",
    Tag: "/tag/:id",
  },

  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Entry",
        path: "content/journal/**/*.md",
        refs: {
          tags: {
            typeName: "Tag",
            create: true,
          },
        },
      },
    },
  ],

  transformers: {
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      anchorClassName: "icon icon-link",
      plugins: [["@gridsome/remark-prismjs"]],
    },
  },

  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  },
};
