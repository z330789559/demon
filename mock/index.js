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
  /**
   * 常见模版页面（目前数据暂时归类出来)
   */
  'GET /api/opus/template': opusData.list,


  'GET /api/opus/list': opusData.list,
  /**
   * 作品店铺页面，查询当前店铺或者人员的作品集合
   */
  'GET /api/opus': opusData.initData,
  /**
   * 场景列表数据
   * 根据code决定是场景还是form
   *  //收藏
   LIKE: 'LIKE',
   //遇见
   OCCURE: 'OCCURE',
   //H5
   H5: 'H5',
   //视频
   VIDEO: 'VIDEO',
   //表单
   FORM: 'FORM',
   // 海报
   POST: 'POST',
   //更多
   SCENE: 'SCENE'
   */
  'GET /api/sences': senceData.initData,
  /**
   *首页表单获取接口
   */
  'GET /api/main/content': {
    data: mainData.initData,
    message:"",
    code: '200'
  },
  /**
   * 创建页面
   */
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
  /**
   * 查询页面元素
   * 搭建完成页面组成的json集合
   */
  'GET /api/form/elements':{
    data: formItemData.page,
    message:"",
    code: '200'
  },
  /**
   * 表单推荐
   * @param req
   * @param res
   * @constructor
   */
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
  /**
   * 创建表单页面，表单列表
   * @param req
   * @param res
   * @constructor
   */
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
  /**
   * 频道表单页面表单列表
   * @param req
   * @param res
   * @constructor
   */
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
