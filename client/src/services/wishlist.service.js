import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:4040/v1/';

const server = axios.create({
  baseURL: apiUrl,
  timeout: 1000,
  headers: { 'X-Custom-Header': 'REACT' }
});


export const wishlistService = {
  createArticle: async (articles) => {
    return await server.post('/articles', articles);
  },
  createWishlist: async (name) => {
    return await server.post('/wishlists', { name });
  },
  getAllArticles: async (wishlist_id) => {
    return await server.get(`/wishlists/articles/${wishlist_id}`);
  },
  addArticle: async ({ wishlist_id, article }) => {
    return await server.post(`/wishlists/${wishlist_id}`, { article });
  },
  removeArticle: async ({ wishlist_id, article_id, productid }) => {
    return await server.delete(`/wishlists/${wishlist_id}/${article_id}/${productid}`);
  },
  searchAritcle: async (keyword) => {
    return await axios.get('https://www.adidas.co.uk/api/search/suggestions/' + keyword);
  }
};

