import {
  CREATE_CATE, CREATE_LIST
} from '@constants/create'

import  {
  API_CREATE_CATE,API_CREATE_LIST
}
  from '@constants/api'

import { createAction } from '@utils/redux'

/**
 * 主页面上面二级tab
 * @param {*} payload
 */
export const dispatchSubcates = payload => ({
  type: MAIN_SUBCATES,
  payload:{...payload, itemList:[{
      id:0,
      name:'收藏',
      url: 'www.baidu.com'
    },{
      id:0,
      name:'收藏',
      url: 'www.baidu.com'
    },{
      id:0,
      name:'收藏',
      url: 'www.baidu.com'
    },{
      id:0,
      name:'收藏',
      url: 'www.baidu.com'
    },{
      id:0,
      name:'收藏',
      url: 'www.baidu.com'
    }]}
})


export const dispatchLoadCate= payload=>createAction({
  url: API_CREATE_CATE,
  type: CREATE_CATE,
  payload,
  cb:(res)=>{
    console.log(res)
    return {
      ...payload,
      ...res
    }
  }
})
export const dispatchLoadList= payload=>createAction({
  url: API_CREATE_LIST,
  type: CREATE_LIST,
  payload,
  cb:(res)=>{
    console.log(res)
    return {
      ...payload,
      ...res
    }
  }
})

