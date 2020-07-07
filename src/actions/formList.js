import {
  FORM_LIST_LOAD, FORM_SUBCATE_LOAD
} from '@constants/formList'

import  {
  API_FORM_LIST_LOAD,API_FORM_SUBCATE_LOAD
}
  from '@constants/api'

import { createAction } from '@utils/redux'



export const dispatchFormSubCate= payload=>createAction({
  url: API_FORM_SUBCATE_LOAD,
  type: FORM_SUBCATE_LOAD,
  payload,
  cb:(res)=>{
    console.log(res)
    return {
      ...payload,
      ...res
    }
  }
})
export const dispatchFormList= payload=>createAction({
  url: API_FORM_LIST_LOAD,
  type: FORM_LIST_LOAD,
  payload,
  cb:(res)=>{
    console.log(res)
    return {
      ...payload,
      ...res
    }
  }
})

