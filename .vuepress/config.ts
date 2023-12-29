import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import recoTheme from "vuepress-theme-reco";

export default defineUserConfig({
  title: "小哔咔的个人博客",
  description: "Just playing around",
  theme: recoTheme({
    style: "@vuepress-reco/style-default",
    logo: "/logo.jpg",
    author: "morley",
    authorAvatar: "/head.jpg",
    lastUpdatedText: "",
    // 自动设置分类
    autoSetSeries: true,
    navbar: [
      { text: "主页", link: "/" },
      { text: "博客", link: "/posts", icon: "reco-date" },
      { text: "Categories", link: "/categories/reco/1/" },
      { text: "Tags", link: "/tags/tag1/1/" },
      {
        text: "Docs",
        children: [
          { text: "vuepress-reco", link: "/docs/theme-reco/theme" },
          { text: "vuepress-theme-reco", link: "/blogs/other/guide" },
        ],
      },
    ],
    // commentConfig: {
    //   type: 'valie',
      // options 与 1.x 的 valineConfig 配置一致
      // options: {
        // appId: 'xxx',
        // appKey: 'xxx',
        // placeholder: '填写邮箱可以收到回复提醒哦！',
        // verify: true, // 验证码服务
        // notify: true,
        // recordIP: true,
        // hideComments: true // 隐藏评论
      // },
    // },
  })
  // debug: true,
});
