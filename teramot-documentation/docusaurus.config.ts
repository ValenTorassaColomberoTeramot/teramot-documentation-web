import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Teramot Documentation',
  tagline: 'Technical documentation, compliance materials, and product updates for Teramot',
  favicon: 'img/favicon-teramot.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.teramot.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'teramot', // Usually your GitHub org/user name.
  projectName: 'teramot-documentation', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars-api.ts',
          routeBasePath: '/api',
        },
        // ✅ mantené blog y theme si los usás
        blog: {
          routeBasePath: '/blog',
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          blogTitle: 'Teramot Developer Blog',
          blogDescription: 'Technical articles, internal tools, and development updates',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],
  

  // Multiple documentation sections
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'compliance',
        path: 'compliance',
        routeBasePath: '/compliance',
        sidebarPath: require.resolve('./sidebars-compliance.ts'),
        // TODO: Update with actual repo URL when ready
        // editUrl: 'https://github.com/teramot/teramot-documentation/tree/main/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'status',
        path: 'status',
        routeBasePath: '/status',
        sidebarPath: require.resolve('./sidebars-status.ts'),
        // TODO: Update with actual repo URL when ready
        // editUrl: 'https://github.com/teramot/teramot-documentation/tree/main/',
      },
    ],
  ],

  themeConfig: {
    // TODO: Replace with Teramot social card image
    image: 'img/teramot-social-card.jpg',
    navbar: {
      title: 'Teramot Docs',
      logo: {
        alt: 'Teramot Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'apiSidebar',
          position: 'left',
          label: 'API',
        },
        {
          type: 'docSidebar',
          sidebarId: 'complianceSidebar',
          position: 'left',
          label: 'Compliance',
          docsPluginId: 'compliance',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          type: 'docSidebar',
          sidebarId: 'statusSidebar',
          position: 'left',
          label: 'Status',
          docsPluginId: 'status',
        },
        {
          href: 'https://github.com/teramot/teramot-documentation',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'API Reference',
              to: '/api',
            },
            {
              label: 'Compliance',
              to: '/compliance',
            },
            {
              label: 'Product Updates',
              to: '/products',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Developer Blog',
              to: '/blog',
            },
            {
              label: 'System Status',
              to: '/status',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/teramot/teramot-documentation',
            },
          ],
        },
        {
          title: 'Company',
          items: [
            {
              label: 'About Teramot',
              to: '/compliance/about',
            },
            {
              label: 'Contact',
              to: '/contact',
            },
            {
              label: 'Privacy Policy',
              to: '/privacy',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Teramot, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
