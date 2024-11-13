import { useState } from "react";
import { fetchImages } from "../api/api";

export const useGetImages = () => {
    const [imageList, setImageList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [page, setPage] = useState(1);
  
    const getImages = async (searchQuery) => {

      try {
        setIsLoading(true);
        const dataResp = await fetchImages(searchQuery, page);
        const newImages = dataResp.results
        if (imageList.length === 0) {
          setImageList(dataResp.results)
        } else {
          setImageList((imageList) => [...imageList, ...newImages])
        };

      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
  
    return { imageList, setImageList, page, setPage, getImages , isLoading, isError};
  };