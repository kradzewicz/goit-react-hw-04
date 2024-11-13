/** @format */
import { ImageCard } from "./ImageCard";
import css from "../module_css/ImageGallery.module.css";

export function ImageGallery({
  imageList,
  setImageList,
  getImages,
  searchQuery,
  setPage,
  page,
}) {
  const handleLoadMore = (e) => {
    e.preventDefault();
    setPage(page + 1);
    getImages(searchQuery);
  };

  return (
    <div>
      <ul className={css.imageGallery}>
        {imageList.map((image) => (
          <ImageCard key={image.id} image={image} />
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
