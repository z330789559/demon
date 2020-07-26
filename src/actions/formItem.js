import {
  FORM_ELEMENT_LOAD,FORM_ADD_ELEMENT,FORM_DELETE_ELEMENT,FORM_CHANGE_HEADER,FORM_PROJECT_TYPE,PROPS_STATUS_CHANGE,PROPS_PARRENT_CHANGE
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


export const dispatchAddElement=payload=>dispatch=> {
    dispatch({
      type: FORM_ADD_ELEMENT,
      payload
    })
}
export const dispatchDeleteElement=payload=>dispatch=>{
   dispatch({
    type:FORM_DELETE_ELEMENT,
     payload
  })
}
export const dispatchProjectType=payload=>dispatch=>{
   dispatch({
    type:FORM_PROJECT_TYPE,
     payload
  })
}

export const dispatchChangeHeader=payload=>dispatch=>{
   dispatch({
    type:FORM_CHANGE_HEADER,
     payload:{
      header: payload,
     }
  })
}
export const onDispatchPropsChange=payload=>dispatch=>{
   dispatch({
    type: PROPS_STATUS_CHANGE,
     payload:{
       defineState: payload,
     }
  })
}
export const dispathChangeParent=payload=>dispatch=>{
   dispatch({
    type: PROPS_PARRENT_CHANGE,
     payload:{
       currentParentElement:payload.element
     }
  })
}

