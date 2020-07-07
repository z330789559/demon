const delay = require('mocker-api/utils/delay'); // 延时 模拟请求异步问题
const mockjs = require('mockjs');
const mainData = require('./main');
const createData=require('./create')
const formListData=require('./formList')
const formItemData=require('./formItem')
const senceData=require('./sence')
const opusData=require('./opus')
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


const data = {
  'GET /api/opus/list': opusData.list,
  'GET /api/opus': opusData.initData,
  'GET /api/sences': senceData.initData,
  'GET /api/main/content': {
    data: mainData.initData,
    message:"",
    code: '200'
  },
  'GET /api/create/cate':{
    data: createData.sudCate,
    message:"",
    code: '200'
  },
  'GET /api/form/subCate':{
    data: formListData.sudCate,
    message:"",
    code: '200'
  },
  'GET /api/form/elements':{
    data: formItemData.page,
    message:"",
    code: '200'
  },
  'GET /api/main/recommend': (req, res) => {
    const { query } = req;
    const { current, pageSize, dataSource } = Query(query, mainData.recommend.recommends);
    res.status('200').json({
      data: {
        lists: dataSource.slice((current - 1) * pageSize, current * pageSize),
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
  },
  'GET /api/create/list': (req, res) => {
    const { query } = req;
    const { current, pageSize, dataSource } = Query(query, createData.recommendTemplate.recommends);
    res.status('200').json({
      data: {
        recommends: dataSource.slice((current - 1) * pageSize, current * pageSize),
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
  },
  'GET /api/form/list': (req, res) => {
    const { query } = req;
    const { current, pageSize, dataSource } = Query(query, formListData.list.list);
    res.status('200').json({
      data: {
        list: dataSource.slice((current - 1) * pageSize, current * pageSize),
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
}


//使用delay方法可以延迟返回数据
module.exports = delay(data, 1000)
