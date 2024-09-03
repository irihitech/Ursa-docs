import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Ursa',
  tagline: 'Aesthetic Evolution of Productivity',
  favicon: 'img/irihi_240x240.svg',

  // Set the production url of your site here
  url: 'https://irihi.tech',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/ursa/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans','en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'IRIHI',
      logo: {
        alt: 'IRIHI Logo',
        src: 'img/irihi_240x240.svg',
        srcDark: 'img/irihi_240x240_dark.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Ursa',
        },
        /*
        {
          href: 'https://docs.irihi.tech/ursa/',
          label: 'Ursa',
          position: 'left',
        },
        
        { 
          to: '/blog', 
          label: 'Blog', 
          position: 'left'
        },
        */
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/irihitech/Ursa.Avalonia',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'IRIHI Tech',
          items: [
            {
              label: 'Homepage',
              href: 'https://irihi.tech',
            },
          ],
        },
        {
          title: 'Github Repo',
          items: [
            {
              label: 'Semi Avalonia',
              href: 'https://github.com/irihitech/Semi.Avalonia',
            },
            {
              label: 'Ursa',
              href: 'https://github.com/irihitech/Ursa.Avalonia',
            }
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
              href: 'https://github.com/irihitech',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} IRIHI Technology.  Built with Docusaurus. ICP备案号：沪ICP备2023033400号\n\n本文档内容严禁用于任何形式的AI训练大语言模型训练`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
