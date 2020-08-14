module.exports = {
  title: "龙辉",
  description: "a collection of programming knowledge",
  themeConfig: {
    logo: '/assets/images/logo.png',
    nav: [
      { text: '常用工具', link: '/tools/' },
      {
        text: '学习文章', items: [
          {
            text: "front-interview",
            link: '/article/front-interview/'
          },
          {
            text: "front",
            link: '/article/front/'
          },
          {
            text: 'javascript',
            link: "/article/javascript/"
          },
          {
            text: "css",
            link: '/article/css/'
          },
          {
            text: 'vue',
            link: '/article/vue/'
          },
          {
            text: 'react',
            link: '/article/react/'
          },
          {
            text: 'webpack',
            link: '/article/webpack/'
          },
          {
            text: 'nginx',
            link: '/article/nginx/'
          },
          {
            text: 'ps',
            link: "/article/ps/"
          },
          {
            text: "其他",
            link: '/article/other/'
          }
        ]
      },
      { text: 'vuepress', link: 'https://www.vuepress.cn/' }
    ]
  }
}