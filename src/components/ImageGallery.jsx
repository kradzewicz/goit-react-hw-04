/** @format */
import { ImageCard } from "./ImageCard";
import { ImageModal } from "./ImageModal";
import css from "../module_css/ImageGallery.module.css";
import { useRef, useState } from "react";

export function ImageGallery({
  imageList,
  getImages,
  searchQuery,
  setPage,
  page,
  // scrollToElement,
}) {
  const divRef = useRef();

  const scrollToElement = () => {
    const { current } = divRef;

    current.scrollIntoView({
      // behavior: "instant",
      block: "end",
      // inline: "end",
    });
    console.log(current);
  };

  const handleLoadMore = (e) => {
    e.preventDefault();
    setPage(page + 1);
    getImages(searchQuery);
    scrollToElement();
  };
  const { openModal } = ImageModal;
  return (
    <div>
      <ul className={css.imageGallery}>
        {imageList.map((image) => (
          <div key={image.id}>
            <ImageCard image={image} openModal={openModal} />
            <ImageModal image={image} />
          </div>
        ))}
      </ul>
      <br />
      <button
        ref={divRef}
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
