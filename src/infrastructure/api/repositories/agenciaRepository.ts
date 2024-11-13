import { api } from "../axios"

const listAgencia = async (setLoading: (loading: boolean) => void) => {
  setLoading(true)
  try {
    const response = await api.get("/agencia")
    return response.data
  } catch (error) {
    console.error("Error listing agencies:", error)
    throw error
  } finally {
    setLoading(false)
  }
}

const createAgencia = async (dataAgencia: any, setLoading: (loading: boolean) => void) => {
  setLoading(true)
  try {
    const response = await api.post("/agencia", dataAgencia)
    return response.data
  } catch (error) {
    console.error("Error creating agency:", error)
    throw error
  } finally {
    setLoading(false)
  }
}

const updateAgencia = async (dataAgencia: any, setLoading: (loading: boolean) => void) => {
  setLoading(true)
  try {
    const response = await api.patch(`/agencia/${dataAgencia.age_codigo}`, dataAgencia)
    return response.data
  } catch (error) {
    console.error("Error updating agency:", error)
    throw error
  } finally {
    setLoading(false)
  }
}

const deleteAgencia = async (age_codigo: number, setLoading: (loading: boolean) => void) => {
  setLoading(true)
  try {
    const response = await api.delete(`/agencia/${age_codigo}`)
    return response.data
  } catch (error) {
    console.error("Error deleting agency:", error)
    throw error
  } finally {
    setLoading(false)
  }
}

const getAgencia = async (age_codigo: number, setLoading: (loading: boolean) => void) => {
  setLoading(true)
  try {
    const response = await api.get(`/agencia/${age_codigo}`)
    return response.data
  } catch (error) {
    console.error("Error getting agency:", error)
    throw error
  } finally {
    setLoading(false)
  }
}

export { listAgencia, createAgencia, updateAgencia, deleteAgencia, getAgencia }
