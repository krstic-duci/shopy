import axios from 'axios'

export default {
  async getProducts () {
    try {
      const response = await axios.get('/products')
      return response.data
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
  }
}
