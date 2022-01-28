const APP_KEY = 'pokemon-api'

export function getStorageItem() {
  if (typeof window === 'undefined') return

  const data = window.localStorage.getItem(APP_KEY)
  return JSON.parse(data)
}

export function setStorageItem(item) {
  if (typeof window === 'undefined') return

  const data = JSON.stringify(item)
  return window.localStorage.setItem(APP_KEY, data)
}
