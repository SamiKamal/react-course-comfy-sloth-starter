import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions'

const products_reducer = (state, action) => {
  const {type, payload} = action

  if (type === SIDEBAR_OPEN){
    return {...state, isSidebarOpen: true}
  } else if (type === SIDEBAR_CLOSE){
    return {...state, isSidebarOpen: false}
  } else if (type === GET_PRODUCTS_BEGIN){
    return {...state, isLoding: true}
  } else if (type === GET_PRODUCTS_SUCCESS){
    return {...state, isLoading: false, products: payload}
  }
  return state
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default products_reducer
