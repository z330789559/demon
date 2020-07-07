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
  'header':{
    'storeId|1-100':1,
    'images':['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583333761089&di=dfb31786b68da527407f40899203ce96&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fwallpaper%2F1301%2F08%2Fc1%2F17228898_1357627460092.jpg','https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583333761089&di=dfb31786b68da527407f40899203ce96&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fwallpaper%2F1301%2F08%2Fc1%2F17228898_1357627460092.jpg'],
    'projectName':'河源资本',
    'projectLogo':'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAACbklEQVRoQ+2aMWgUQRSGv7dGLwraCGKhWOTUJJ3WFtporXBe1EZBQYiKXmchiJVVIhhBSEAbNeeB1tpokVq7I8odKFpIwEYhuWi8Jwuubo7b292wNxmX2XZ3Zt/3/nnMP7wRcv5IzvlwgP+7wk7B3CtYeqob3j7nHEoJGFVlOzAIxutXgZYIX4E6Qu3AcR7UTsqvXiL0XKKjZ3XncosayiErlRTmCoOU6g/lS1R8kYC+cm+e8dpauIBImDt4gsNRSkYCFk/peW0zbaVyHUGJx4XGE5npFms04Ji+UOXov0TxagAuruzgY+OuLJsGV1XZe4VNAwvsWYH7Ckf+xia8bMzKsbSAn1TZFQzaCPvnq/LeNFi3/w2Xdd9PeBcC/NyYld2pAIfKughsDgYVRijUb8oPGwCLl7WgC7RCsSw1q7IlLWA7vBU0q2KVKRgqq79tBI82q+KlBQxPgOWAkfFFqtKRIQdoujaTCuAUDJRxNWh4jbol+ifhrgaT1uD4pF4X5YaG3M9aVq3AEnBrqiK3e403vkTHJ/QbsHUtUF3GfL9XkW1WAV6a0EcKp7MAFHg8VZEzVgH6x5lrdxhue3Q1vUnBvTaLk1eZF5FVVrFzvPElmhQgq+8coNsmVp+33Gkiq9pKOo+rwaxrMKmTSepU4pQ0rmBKJxPrVKwDTONkkjgV6wCTOpmkTsU6wLiAsn5vvAazBoibzwFmvU3EZTzr905Bp2BZc998yXf7rDim+W6AFiNa2N4IH9arEeo3PrNrYef9EkLur5H420iuLwIFziPXV7mytlfrMZ9VNyf6kQAH2I+smpzTKWgy2/341292LtNIIhxligAAAABJRU5ErkJggg==',
    'projectSubTitle':'专注于实体经济-H5制作',
    'currentCatalog':1,
    'catalogs':[{
      'key':'1',
      'name':'项目',
     'count|1-20':2,
    } ,
      {
        'key':'2',
        'name':'投顾',
        'count|1-20':2,
      } ,
      {
        'key':'3',
        'name':'设计',
        'count|1-20':2,
      } ,{
        'key':'4',
        'name':'工程',
        'count|1-20':2,
      } ]
  },
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
    'attach|1-100':1,
  }]
})

module.exports.list=(req, res) => {
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

module.exports.initData=(req, res) => {
  const { query } = req;
  const { current, pageSize, dataSource } = Query(query, data.opusList);
  res.status('200').json({
    data: {
      header:data.header,
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
