
import {
  PROPS_STATUS_CHANGE
} from '@constants/customerView'

export const onDispatchPropsChange=playLoad=>dispatch=>{
  dispatch({
    type: PROPS_STATUS_CHANGE,
    playLoad:{
      defineState: playLoad,
    }
  })
}
