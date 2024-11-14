/** @format */
import { ImageCard } from "./ImageCard";
import { ImageModal } from "./ImageModal";
import css from "../module_css/ImageGallery.module.css";
import { useEffect, useRef, useState } from "react";

export function ImageGallery({
  imageList,
  getImages,
  searchQuery,
  setPage,
  page,
}) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  // function openModal() {
  //   setIsOpen(true);
  // }
  useEffect(() => {
    if (selectedImage === "") {
      return;
    }
    setIsOpen(true);
  }, [selectedImage]);

  function closeModal() {
    setSelectedImage("");
    setIsOpen(false);
  }

  const divRef = useRef();

  const scrollToElement = () => {
    const { current } = divRef;

    current.scrollIntoView({
      behavior: "instant",
      block: "end",
    });
  };

  useEffect(scrollToElement, [imageList]);

  const handleLoadMore = (e) => {
    e.preventDefault();
    setPage(page + 1);
    getImages(searchQuery);
  };

  return (
    <div ref={divRef}>
      <ul className={css.imageGallery}>
        {imageList.map((image) => (
          <div key={image.id}>
            <ImageCard
              image={image}
              // openModal={openModal}
              setSelectedImage={setSelectedImage}
            />
            <ImageModal
              image={selectedImage}
              modalIsOpen={modalIsOpen}
              closeModal={closeModal}
            />
          </div>
        ))}
      </ul>
      <br />
      <button
        className={css.loadMoreBtn}
        style={{
          display: imageList.length === 0 ? "none" : "inline-block",
        }}
        type="button"
        onClick={handleLoadMore}>
        Load more...
      </button>
    </div>
  );
}
