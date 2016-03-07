import { STORAGE_KEY } from '../constants'
import createLogger from 'vuex/logger'

const localStorageMiddleware = {
  onMutation (mutation, state) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  }
}

export default process.env.NODE_ENV !== 'production'
  ? [createLogger(), localStorageMiddleware]
  : [localStorageMiddleware]
