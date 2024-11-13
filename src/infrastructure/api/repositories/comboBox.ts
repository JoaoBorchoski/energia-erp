import { api } from "../axios"

const getComboBox = async (url: string): Promise<[]> => {
  try {
    const req = await api.get(url)

    return req.data
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error("", { cause: error })
    }
    throw new Error("", error as ErrorOptions)
  }
}

export { getComboBox }
