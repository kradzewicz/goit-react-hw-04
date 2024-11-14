/** @format */

import css from "../module_css/ImageCard.module.css";

export function ImageCard({ image, openModal }) {
  return (
    <li>
      <div className={css.imageCard} onClick={openModal}>
        <img src={image.urls.small} alt={image.alt_description} />
      </div>
    </li>
  );
}
