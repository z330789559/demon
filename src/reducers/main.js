import {
  MAIN_SUBCATES, MAIN_CONTENT,MAIN_RECOMMEND
} from '@constants/main'

import {
  SENCE_ELEMENT_LOAD
} from '@constants/sence'
const INITIAL_STATE = {
  subCateId: 0,
  subCates: [],
  code: 'FORM',
  channals: [],
  pin: [],
  recommends: [],
  opusList:[]
}

export default function home(state = INITIAL_STATE, action) {
  switch(action.type) {
    case MAIN_SUBCATES: {
      return {
        ...state,
        ...action.payload
      }
    }
    case MAIN_CONTENT: {
      return {
        ...state,
        ...action.payload
      }
    }
    case MAIN_RECOMMEND: {
      return {
        ...state,
        ...action.payload
      }
    }
    case SENCE_ELEMENT_LOAD:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
