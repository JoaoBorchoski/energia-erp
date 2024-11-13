import { api } from "../axios"

const validateToken = async (token: string) => {
  try {
    const response = await api.post(`/auth/validate?token=${token}`)
    return response.data
  } catch (e) {
    console.error("Error validating token:", e)
  }
}

export { validateToken }
