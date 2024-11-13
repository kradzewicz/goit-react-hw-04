/** @format */

import css from "../module_css/ImageCard.module.css";

export function ImageCard({ image }) {
  return (
    <li>
      <div className={css.imageCard}>
        <img src={image.urls.small} alt={image.alt_description} />
      </div>
    </li>
  );
}
