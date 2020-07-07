const INITIAL_STATE ={
  opusList:[],
  header:{},
  pageInfo:{
    current: 1,
    maxCurrent: 2,
    pageSize: 10,
    total: 20}
}

import {
  OPUS_LOAD_PAGE,OPUS_LOAD_LIST
} from '@constants/opus'

export default function opus(state=INITIAL_STATE,action) {
  switch (action.type){
    case OPUS_LOAD_PAGE:
      return {
        ...state,
        ...action.payload
      }
    case OPUS_LOAD_LIST:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }

}

