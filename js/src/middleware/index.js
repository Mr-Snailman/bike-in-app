import { isFSA } from 'flux-standard-action'

const fsaThunkMiddleware = ({dispatch, getState}) => {
  return (next) => {
    return (action) => {
      if (isFSA(action) && typeof action.payload === 'function') {
        return next({
          ...action,
          payload: action.payload(dispatch, getState),
        })
      } else {
        return next(action)
      }
    }
  }
}

export {
  fsaThunkMiddleware
}
