import checkPropTypes from "check-prop-types"
import {createStore, applyMiddleware} from 'redux'

import rootReducer from '../src/reducers'
import {middleWares} from "../src/configureStore"

export const storeFactory = (initialState) => {
  return createStore(rootReducer, initialState, applyMiddleware(...middleWares))
}

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`)
}

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTyoes,
    conformingProps,
    'prop',
    component.name)
    expect(propError).toBeUndefined()
}