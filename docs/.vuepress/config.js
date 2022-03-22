module.exports = {
    title: 'Yagol的网站',
    description: 'Yagol的网站',
    markdown: {
        lineNumbers: true
    },
    head: [
        //baidu analysis
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
        ],
        //live2d
        [
            "script",
            {
                src: "https://yagol2020.github.io/live2d/autoload.js"
            }
        ]
    ],
    themeConfig: {
        nav: [
            {text: '主页', link: '/'},
            {text: '博客', link: '/blog/'},
            {text: '项目', link: '/project/'},
            {text: '科研', link: '/science/'},
            {text: '力扣', link: '/leetcode/'},
            {text: '关于', link: '/about/'}
        ],
        sidebar: {
            '/blog/': [
                '',
                'VuePress',
                'Selenium1'
            ],
            '/project/': [
                '',
                'pwc',
            ],
            '/science/': [
                '',
                'defect predict',
                'solcAutoCompiler'
            ],
            '/leetcode': [''],
            '/about/': [
                '',
                'this website'
            ],
            '/': [
                '',
            ]
        },
        lastUpdated: '更新时间',
        repo: 'yagol2020/yagol2020.github.io',
        repoLabel: '本站源码',

        docsRepo: 'yagol2020/yagol2020.github.io',
        docsDir: '/docs',
        docsBranch: 'main',
        editLinks: true,
        editLinkText: '在GitHub查看该页面',
    }
}
