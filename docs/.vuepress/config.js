module.exports = {
    title: 'Yagol\'s GitHub Page',
    description: 'yagol的GitHub Page网站',
    markdown: {
        lineNumbers: true
    },
    head: [
        [
            "script",
            {},
            `
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?7506f0120ade763a4f5a2ef8f91ca7c6";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
        `
        ]
    ],
    themeConfig: {
        nav: [
            {text: '主页', link: '/'},
            {text: '项目', link: '/project/'},
            {text: '科研', link: '/science/'}
        ],
        sidebar: {
            '/blog/': [
                '',
                'VuePress'
            ],
            '/project/': [
                '',
                '文献网站爬虫工具',
            ],
            '/science/': [
                '',
                '缺陷预测',
            ],
            '/about/':[
                '',
                '本站'
            ],
            '/': [
                '',
            ]
        },
        lastUpdated: '更新时间'
    }
}
