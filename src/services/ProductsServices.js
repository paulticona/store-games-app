import { API_URL } from '@lib/Enviroments'

export const GetAllProducts = async (preferencia_id) => {
  let query_params = new URLSearchParams()
  if (preferencia_id) {
    query_params.append('preferencia', preferencia_id)
  }
  const response = await fetch(`${API_URL}/productos/productos/list?${query_params}`)
  const data = await response.json()
  return data
}

export const GetProductById = async (id) => {
  const response = await fetch(`${API_URL}/productos/productos/${id}`)
  const data = await response.json()
  return data
}

export const PostProduct = async (product) => {
  const response = await fetch(`${API_URL}/productos/productos/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(product)
  })
  const data = await response.json()
  return data
}


export const UploadProductImage = async (image) => {
  let formData = new FormData()
  formData.append('productImage', image)
  const response = await fetch(`${API_URL}/productos/productos/upload`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: formData
  })
  const data = await response.json()
  return data
}