import axios from "axios";
import { useEffect, useState } from "react";

export default function useCategory() {
  const [categories, setCategories] = useState([]);

  // get categories
  const getCategories = async () => {
    try {
      const url = 
      // `${
      //   import.meta.env.VITE_REACT_APP_URL
      // }/api/v1/category/get-all-categories`;

      "http://localhost:8080/api/v1/category/get-all-categories"
      const { data } = await axios.get(url);
      console.log(data)
      setCategories(data?.categories);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return categories;
}
