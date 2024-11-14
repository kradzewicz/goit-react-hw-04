/** @format */

import css from "../module_css/ImageCard.module.css";

export function ImageCard({ image, setSelectedImage }) {
  const handleImageClick = (img) => {
    setSelectedImage(img);
  };
  return (
    <li>
      <div className={css.imageCard} onClick={() => handleImageClick(image)}>
        <img src={image.urls.small} alt={image.alt_description} />
      </div>
    </li>
  );
}
