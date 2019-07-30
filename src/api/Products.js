import axios from 'axios'

export default {
  async getProducts (pageNum) {
    try {
      const response = await axios.get('/products?_page=' + pageNum + '&_limit=16')
      return response
    } catch (error) {
      console.error('Error in /products API call', error)
    }
  },
  async getSingleProduct (id) {
    try {
      const response = await axios.get('/products/' + id)
      return response.data
    } catch (error) {
      console.error('Error in /products/id API call', error)
    }
  },
  async getfilterCategory (category) {
    try {
      const response = await axios.get('/products/?category=man')
      return response.data
    } catch (error) {
      console.error('Error in /products/?category API call', error)
    }
  },
  async getHotDeals () {
    try {
      const response = await axios.get('/products?_limit=10')
      return response.data
    } catch (error) {
      console.error('Error in /products?_limit API call', error)
    }
  }
}
