import axios from "axios";

const BASE_URL = "http://localhost:8000"; 

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000, 
});


const setAuthToken = (token) => {
  if (token) {
    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axiosInstance.defaults.headers.common["Authorization"];
  }
};

const api = {
  login: async (credentials) => {
    try {
      const response = await axiosInstance.post("/login", credentials);
      const { token } = response.data;
      setAuthToken(token);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },

  getBlogPosts: async () => {
    try {
      const response = await axiosInstance.get("/blog/blogPosts");
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },

  createBlogPost: async (post) => {
    try {
      console.log("dat::", post);
      const response = await axiosInstance.post("/blog/blogPosts", post);

      return response.data;
    } catch (error) {
      console.log(error);
      //throw error.response.data;
    }
  },

  updateBlogPost: async (id, post) => {
    try {
      const response = await axiosInstance.put(`/blogPosts/${id}`, post);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },

  deleteBlogPost: async (id) => {
    try {
      const response = await axiosInstance.delete(`/blogPosts/${id}`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },

  createComment: async (comment) => {
    try {
      const response = await axiosInstance.post("/comments", comment);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },

  deleteComment: async (id) => {
    try {
      const response = await axiosInstance.delete(`/comments/${id}`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
};

export default api;
