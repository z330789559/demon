import {
  FORM_ELEMENT_LOAD,FORM_ADD_ELEMENT,FORM_DELETE_ELEMENT,FORM_CHANGE_HEADER,FORM_PROJECT_TYPE,PROPS_STATUS_CHANGE
} from '@constants/formItem'

import  {
  API_FORM_ElEMENT_LOAD,
}
  from '@constants/api'

import { createAction } from '@utils/redux'



export const dispatchFormItemLoad= payload=>createAction({
  url: API_FORM_ElEMENT_LOAD,
  type: FORM_ELEMENT_LOAD,
  payload,
  cb:(res)=>{
    console.log(res)
    return {
      ...payload,
      ...res
    }
  }
})


export const dispatchAddElement=playLoad=>dispatch=> {
    dispatch({
      type: FORM_ADD_ELEMENT,
      playLoad
    })
}
export const dispatchDeleteElement=playLoad=>dispatch=>{
   dispatch({
    type:FORM_DELETE_ELEMENT,
     playLoad
  })
}
export const dispatchProjectType=playLoad=>dispatch=>{
   dispatch({
    type:FORM_PROJECT_TYPE,
     playLoad
  })
}

export const dispatchChangeHeader=playLoad=>dispatch=>{
   dispatch({
    type:FORM_CHANGE_HEADER,
     playLoad:{
      header: playLoad,
     }
  })
}
export const onDispatchPropsChange=playLoad=>dispatch=>{
   dispatch({
    type: PROPS_STATUS_CHANGE,
     playLoad:{
       defineState: playLoad,
     }
  })
}

