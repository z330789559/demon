import {
  MAIN_SUBCATES, MAIN_CONTENT,MAIN_RECOMMEND
} from '@constants/main'
import {
  SENCE_ELEMENT_LOAD
}  from '@constants/sence'
import  {
   API_MAIN_CONTENT,API_MAIN_RECOMMEND,API_SENCE_ElEMENT_LOAD
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


export const dispatchLoadPage= payload=>createAction({
  url: API_MAIN_CONTENT,
  type: MAIN_CONTENT,
  payload,
  cb:(res)=>{
    console.log(res)
    return {
      ...payload,
      ...res
    }
  }
})


export const loadRecommend=()=>createAction({
  url: API_MAIN_RECOMMEND,
  type: MAIN_RECOMMEND
})




export const dispatchLoadScenePage=(payload)=>createAction({
  url:  API_SENCE_ElEMENT_LOAD,
  type: SENCE_ELEMENT_LOAD,
  payload,
  cb:(res)=>{
    console.log(res)
    return {
      ...payload,
      ...res
    }
  }

});
