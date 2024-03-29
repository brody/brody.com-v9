// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwind = require('tailwindcss');
const purgecss = require('@fullhuman/postcss-purgecss');

const postcssPlugins = [tailwind()];

if (process.env.NODE_ENV === 'production')
  postcssPlugins.push(purgecss(require('./purgecss.config.js')));

module.exports = {
  siteName: 'Brody MacLean',
  siteDescription:
    'Brody MacLean is a Lead Product Designer based in Sydney, Australia.',
  siteUrl: 'https://brody.com',
  titleTemplate: `%s • Brody MacLean`,

  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
      .options({
        svgo: {
          plugins: [
            { removeDoctype: false },
            { convertPathData: false },
            { cleanupIDs: false },
            { removeDimensions: true },
            { removeViewBox: false },
            { minifyStyles: false },
            { removeUnknownsAndDefaults: false },
            { inlineStyles: false }
          ]
        }
      });
  },

  templates: {
    Entry: '/:slug',
    Tag: '/tag/:id',
    Work: '/work/:slug'
  },

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Entry',
        path: 'content/journal/**/*.md',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Work',
        path: 'content/work/**/*.md'
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-60603528-2'
      }
    }
  ],

  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [['@gridsome/remark-prismjs']]
    }
  },

  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins
      }
    }
  }
};
