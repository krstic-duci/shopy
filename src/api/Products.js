import axios from 'axios'

const getSingleProduct = async (id) => {
  try {
    const response = await axios.get('/products/' + id)
    return response.data
  } catch (error) {
    console.error('Error in /products/id API call', error)
  }
}

const getProductsBySearch = async (searchBy) => {
  try {
    const response = await axios.get(`/products?q=${searchBy}`)
    return response.data
  } catch (error) {
    console.error('Error in /products?q=... API call', error)
  }
}

const getfilterCategory = async (category) => {
  try {
    const response = await axios.get(`/products/?category=${category}`)
    return response.data
  } catch (error) {
    console.error('Error in /products/?category API call', error)
  }
}

const getProducts = async (pageNum, perPage) => {
  try {
    const response = await axios.get(`/products?_page=${pageNum}&_limit=${perPage}`)
    return response
  } catch (error) {
    console.error('Error in /products API call', error)
  }
}

const getHotDeals = async () => {
  try {
    const response = await axios.get('/products?_limit=10')
    return response.data
  } catch (error) {
    console.error('Error in /products?_limit API call', error)
  }
}

export {
  getSingleProduct,
  getProductsBySearch,
  getfilterCategory,
  getProducts,
  getHotDeals
}
