import axios from 'axios';


const server = axios.create({
    baseURL: 'http://localhost:4040/v1/',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'REACT' }
});


export const wishlistService = {
    createArticle: async (article) => {
        return await server.post('/articles', { article });
    },
    createWishlist: async (name) => {
        return await server.post('/wishlists', { name });
    },
    getAllArticles: async (wishlist_id) => {
        return await server.get('/wishlists', { wishlist_id });
    },
    addArticle: async (wishlist_id, article_id) => {
        return await server.post('/wishlists', { wishlist_id, article_id });
    },
    removeArticle: async (wishlist_id, article_id) => {
        return await server.post('/wishlists', { wishlist_id, article_id });
    }
}

