import { STORAGE_KEY } from './index'
import { createLogger } from 'vuex'

const localStorageMiddleware = {
  onMutation (mutation, state) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  }
}

export default process.env.NODE_ENV !== 'production'
  ? [createLogger(), localStorageMiddleware]
  : [localStorageMiddleware]
