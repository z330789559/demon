const Mock=require('mockjs')

const Query = (options, dataSource) => {
  let { current, pageSize, ...other } = options;
  current = current || 1;
  pageSize = pageSize || 10;
  for (let key in other) {
    if ({}.hasOwnProperty.call(other, key)) {
      dataSource = dataSource.filter(item => {
        if ({}.hasOwnProperty.call(item, key)) {
          return String(item[key]).trim().indexOf(decodeURI(other[key]).trim()) > -1
        }
        return true
      })
    }
  }
  return { current, pageSize, dataSource }
}
const data=Mock.mock({
  'opusList|20': [{
    // 属性 sid 是一个自增数，起始值为 1，每次增 1
    'id|+1': 1,
    // 属性 userId 是一个5位的随机码
    'src': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583333761089&di=dfb31786b68da527407f40899203ce96&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fwallpaper%2F1301%2F08%2Fc1%2F17228898_1357627460092.jpg',
    'name': '华为智能制造科技项目',
    'activeName':'好玩活动，千元大抽奖等你来',
    'interest|1-10000': 155,
    'visit|1-1000000':22,
    'score|1-5': 4.8,
    'tags':'护航项目,智能制造',
    'catalogFont':'融',
    'catalog':1,
    'status':3,
    'attach|1-100':1
  }]
})


module.exports.initData=(req, res) => {
  const { query } = req;
  const { current, pageSize, dataSource } = Query(query, data.opusList);
  res.status('200').json({
    data: {
      opusList: dataSource.slice((current - 1) * pageSize, current * pageSize),
      pageInfo: {
        current: Number(current),
        pageSize: Number(pageSize),
        total: dataSource.length,
        maxCurrent: dataSource.length % pageSize >= 0 ? Math.ceil(dataSource.length / pageSize) : dataSource.data.length / pageSize
      }
    },
    message:"",
    code: '200'
  })
}

