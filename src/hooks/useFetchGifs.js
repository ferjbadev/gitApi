import { useState, useEffect } from "react";
import { getGits } from "../helpers/getGits";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImages = await getGits(category);
    setImages(newImages);
  };

  useEffect(() => {
    getImages();
  }, []);

  return {
    images,
    isLoading: true,
  };
};
