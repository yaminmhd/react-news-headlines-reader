import axios from "axios";

export const getNewsApi = async () => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_KEY}`
    );
    return response.data.articles;
  } catch (error) {
    console.error(error);
  }
};
