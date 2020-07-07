import {
  CREATE_CATE, CREATE_LIST
} from '@constants/create'



const INITIAL_STATE = {
  subCates: [],
  code: 'FORM',
  recommends: []
}

export default function home(state = INITIAL_STATE, action) {
  switch(action.type) {
    case CREATE_CATE: {
      return {
        ...state,
        ...action.payload
      }
    }
    case CREATE_LIST: {
      return {
        ...state,
        ...action.payload
      }
    }
    default:
      return state
  }
}
