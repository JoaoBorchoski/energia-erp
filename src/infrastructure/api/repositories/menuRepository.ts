import { api } from "../axios"

const getMenus = async (grupoId: number) => {
  try {
    const response = await api.post(`/acesso-modulo/menu/${grupoId}`)
    return response.data
  } catch (error) {
    console.error("Error listing menus:", error)
    throw error
  }
}

export { getMenus }
