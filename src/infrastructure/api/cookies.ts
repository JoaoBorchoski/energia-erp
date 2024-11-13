import { destroyCookie, parseCookies, setCookie } from "nookies"

const saveToCookie = (key: string, value: string) => {
  setCookie(null, key, value, {
    maxAge: 30 * 24 * 60 * 60,
    path: "/",
  })
}

const getFromCookie = (key: string) => {
  const cookies = parseCookies()
  return cookies[key]
}

const deleteCookie = (key: string) => {
  destroyCookie(null, key)
}

export { saveToCookie, getFromCookie, deleteCookie }
