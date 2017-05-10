const Mock = require('mockjs')

const tem = {
    indexMessage: {
        'inform|2': ['@csentence'],
        'leaveWords|2': [{
            word: '@ctitle',
            userName: '@cname'
        }],
        'subscribe|2': [{
            word: '@ctitle',
            userName: '@cname',
            date: '@date'
        }]
    },
    indexConfig: {
        title: '城市一网',
        url: 'http://kangle.zj.com',
        coverImg: '@dataImage'
    },
    menuConfig: {
        chatDisplay: '@boolean',
        'menu|1-3': [{
            name: '@ctitle',
            'child|0-2': [{
                name: '@ctitle'
            }]
        }]
    },
    replyConfig: {
        welcomeMessage: '@csentence',
        'keywordReplyConfig|1-3': [{
            keyword: '@ctitle',
            name: '@ctitle',
            replyMessage: '@csentence'
        }],
        allReplyConfig: '@csentence'
    },
    'notice|1-3': [{
        'id|+1': 1,
        content: '@ctitle',
        publisher: '@cname',
        publishDate: '@date',
        startDate: '@date',
        endDate: '@date',
        status: '@boolean',
        PV: '@integer'
    }],
    'artcle|1-5': [{
        type: '@type',
        classification: '',
        title: '@ctitle',
        img: '@image',
        'id|+1': 1
    }],
    'enterDepartment|1-5': [{
        name: '@ctitle',
        serviceStatus: '@boolean',
        HQD: '@boolean',
        appStatus: '@boolean'
    }],
    QR: {
        url: '@url'
    },
    userAndPassword: {
        accound: '@word',
        phone: '@natural',
        email: '@email',
        name: '@cname'
    },
    departmentUser: {}
}

export const mock= function() {
    Mock.mock('1.1.1.1',tem)
}