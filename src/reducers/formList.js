import {
  FORM_LIST_LOAD, FORM_SUBCATE_LOAD
} from '@constants/formList'



const INITIAL_STATE = {
  formSubCates: [],
  id: 0,
  list: []
}

export default function home(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FORM_LIST_LOAD: {
      return {
        ...state,
        ...action.payload
      }
    }
    case FORM_SUBCATE_LOAD: {
      return {
        ...state,
        ...action.payload
      }
    }
    default:
      return state
  }
}
