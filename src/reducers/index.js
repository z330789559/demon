import { combineReducers } from 'redux'
import counter from './counter'
import main from './main'
import create from './create'
import formList from './formList'
import formItem from './formItem'
import opus  from './opus'
import sence from './sence'
import customerView from './customerView'

export default combineReducers({
  counter,
  main,
  create,
  formList,
  formItem,
  opus,
  sence,
  customerView
})
