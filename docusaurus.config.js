// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/docs-multi/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // id: 'docs', // omitted => default instance
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themes: [
    [
      // Note seems not to return docs results from integration1 but does from Integration2
      require.resolve("@easyops-cn/docusaurus-search-local"),
      ({
        hashed: true,
        docsRouteBasePath: [
          "docs",
          "Integration1",
          "Integration2"
        ],
        highlightSearchTermsOnTargetPage: true,
        docsDir: [
          "docs",
          "Integration1",
          "Integration2"
        ],
        explicitSearchResultPath: true,
        useAllContextsWithNoSearchContext: true
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'Integration1',
        path: 'Integration1',
        routeBasePath: 'Integration1',
        sidebarPath: require.resolve('./sidebarsIntegration1.js'),
        // ... other options
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'Integration2',
        path: 'Integration2',
        routeBasePath: 'Integration2',
        sidebarPath: require.resolve('./sidebarsIntegration2.js'),
        // ... other options
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'My Site',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            position: 'left',
            docId: 'intro',
            label: 'Docs',
          },
          {
            type: 'dropdown',
            label: 'Integrations',
            position: 'left',
            items: [
              {
                to: '/Integration1/intro',   // To highlight the navbar item, you must link to a document, not a top-level directory
                label: 'Integration1',
                activeBaseRegex: `/Integration1/`,
              },
              {
                to: '/Integration2/intro',   // To highlight the navbar item, you must link to a document, not a top-level directory
                label: 'Integration2',
                activeBaseRegex: `/Integration2/`,
              },
            ],
          },
          
          {
            to: '/blog',
            label: 'Blog',
            position: 'left'
          },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'docsVersionDropdown',
            position: 'left',
            dropdownItemsAfter: [{to: '/versions', label: 'All versions'}],
            dropdownActiveClassDisabled: true,
            docsPluginId: 'Integration1',
          },
          {
            type: 'docsVersionDropdown',
            position: 'left',
            dropdownItemsAfter: [{to: '/versions', label: 'All versions'}],
            dropdownActiveClassDisabled: true,
            docsPluginId: 'Integration2',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
               label: 'Tutorial',
               to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
