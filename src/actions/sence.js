import { createAction } from '@utils/redux'
import {
  SENCE_DETAIL_LOAD,SENCE_ADD_ELEMENT
} from '@constants/sence'

import  {
  API_SENCE_DETAIL_LOAD
}
  from '@constants/api'

export const LoadSenceDetail=payLoad=>createAction({
  url:  API_SENCE_DETAIL_LOAD,
  type: SENCE_DETAIL_LOAD,
  payload,
  cb:(res)=>{
    console.log(res)
    return {
      ...payload,
      ...res
    }
  }

});

export const dispatchAddElement=playLoad=>dispatch=> {
  dispatch({
    type: SENCE_ADD_ELEMENT,
    playLoad
  })
}
