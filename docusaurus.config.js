// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "易水风萧",
  tagline: "风萧萧兮易水寒，壮士一去兮不复还",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://yishuifengxiao.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "log",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "www.yishuifengxiao.com",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "www.yishuifengxiao.com",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      prism: {
        additionalLanguages: ["powershell", "java"],
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      navbar: {
        title: "易水风萧",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            label: "通用工具",
            to: "/common-tool",
            position: "left",
          },
          {
            label: "增强组件",
            to: "/common-starter",
            position: "left",
          },
          {
            label: "个人博客",
            href: "http://www.yishuifengxiao.com/",
            position: "right",
          },
          {
            href: "https://github.com/yishuifengxiao/",
            className: "header-github-link",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "快速开始",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://docusaurus.io/zh-CN/docs/configuration",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/yishuifengxiao/",
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
  themes: [
    [
      "@easyops-cn/docusaurus-search-local",
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        language: ["en", "zh"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      }),
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "common-tool",
        path: "wiki/common-tool",
        routeBasePath: "common-tool",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "http://www.yishuifengxiao.com",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "common-starter",
        path: "wiki/common-starter",
        routeBasePath: "common-starter",
        sidebarPath: require.resolve("./sidebars.js"),
        // editUrl: "http://www.yishuifengxiao.com",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "programming-language",
        path: "wiki/programming-language",
        routeBasePath: "programming-language",
        sidebarPath: require.resolve("./sidebars.js"),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "structures-algorithms",
        path: "wiki/structures-algorithms",
        routeBasePath: "structures-algorithms",
        sidebarPath: require.resolve("./sidebars.js"),
        // editUrl: "http://www.yishuifengxiao.com",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
  ],
};

module.exports = config;
