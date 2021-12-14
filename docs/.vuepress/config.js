module.exports = {
    title: 'Yagol\'s GitHub Page',
    description: 'yagol的GitHub Page网站',
    themeConfig: {
        nav: [
            {text: '主页', link: '/'},
            {text: '项目', link: '/project/'},
            {text: '科研', link: '/science/'}
        ],
        sidebar: {
            '/blog/':[
                '',
                'VuePress'
            ],
            '/project/': [
                '',
                '文献网站爬虫工具',
            ],
            '/science/':[
                '',
                '缺陷预测',
            ],
            '/': [
                '',
            ]
        },
        lastUpdated: '更新时间'
    }
}
