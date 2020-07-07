import { createAction } from '@utils/redux'



import {
  OPUS_LOAD_PAGE,
  OPUS_LOAD_LIST
} from '@constants/opus'
import  {
  API_OPUS_LOAD_PAGE,
  API_OPUS_LOAD_LIST
}
  from '@constants/api'

export const dispatchLoadPage=(payload)=>createAction({
  url:  API_OPUS_LOAD_PAGE,
  type: OPUS_LOAD_PAGE,
  payload,
  cb:(res)=>{
    console.log(res)
    return {
      ...payload,
      ...res
    }
  }

});
export const onLoadList=(payload)=>createAction({
  url:  API_OPUS_LOAD_LIST,
  type: OPUS_LOAD_LIST,
  payload,
  cb:(res)=>{
    console.log(res)
    return {
      ...payload,
      ...res
    }
  }

});
