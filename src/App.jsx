/** @format */
import { useState } from "react";
import "./App.css";
import { useGetImages } from "./hooks/useGetImages";
import { SearchBar } from "./components/SearchBar";
import { ImageGallery } from "./components/ImageGallery";
import { Loader } from "./components/Loader";
import { Error } from "./components/Error";

function App() {
  const {
    imageList,
    setImageList,
    page,
    setPage,
    getImages,
    isLoading,
    isError,
  } = useGetImages();

  const [searchQuery, setSearchQuery] = useState("");
  console.log(isError);
  if (isLoading) {
    return (
      <>
        <SearchBar disabled={true} />
        <Loader />
      </>
    );
  }

  if (isError) {
    return (
      <>
        <SearchBar disabled={true} />
        <Error />
      </>
    );
  }

  return (
    <>
      <SearchBar
        getImages={getImages}
        setSearchQuery={setSearchQuery}
        setPage={setPage}
        page={page}
        setImageList={setImageList}
      />

      <ImageGallery
        imageList={imageList}
        setImageList={setImageList}
        getImages={getImages}
        searchQuery={searchQuery}
        setPage={setPage}
        page={page}
      />
    </>
  );
}

export default App;
