import axios from 'axios'
import { createAction, handleActions } from 'redux-actions'

const type = {
  GET_STATUS: 'GET_STATUS',
  GET_STATUS_FULFILLED: 'GET_STATUS_FULFILLED',
  UPDATE_STATUS: 'UPDATE_STATUS',
  UPDATE_STATUS_FULFILLED: 'UPDATE_STATUS_FULFILLED',
}

export const defaultState = {
  status: false,
}

export const getStatus = createAction(type.GET_STATUS, () => {
  return (dispatch, getState) => {
    return axios.get('http://localhost:8080/status').then((response) => {
      return response.data
    })
  }
})

export const updateStatus = createAction(type.UPDATE_STATUS, () => {
  return (dispatch, getState) => {
    return axios.put('http://localhost:8080/status').then((response) => {
      return response.data
    })
  }
})

export default handleActions({
  [type.UPDATE_STATUS_FULFILLED]: (state, action) => {
    return {
      status: action.payload
    }
  },
  [type.GET_STATUS_FULFILLED]: (state, action) => {
    return {
      status: action.payload
    }
  },
}, defaultState)

