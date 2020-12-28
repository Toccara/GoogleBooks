import axios from "axios";

const API = {
  getBook: (query) => {
    return axios.get(`AIzaSyBsNxFgYxILhkFLSYaos4q9P8H5Nw2aTHk${query}`);
  },

  deleteBook: (id) => {
    return axios.delete("/api/books/" + id);
  },

  saveBook: (bookData) => {
    return axios.post("/api/books", bookData);
  },

  savedBooks: () => {
    return axios.get("/api/books");
  },
};

export default API;