import axios from "axios";

const API = {
  getBook: (query) => {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    //return axios.get("/api/google", { params: { q: "title:" + q} });
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