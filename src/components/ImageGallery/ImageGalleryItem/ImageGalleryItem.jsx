import React from "react";
import PropTypes from "prop-types";
import s from "../ImageGallery.module.css";

export default function ImageGalleryItem({
  id,
  tags,
  webformatURL,
  largeImageURL,
  onOpenModal,
}) {
  return (
    <li key={id} className={s.ImageGalleryItem}>
      <img
        src={webformatURL}
        alt={tags}
        data-alt={tags}
        data-source={largeImageURL}
        className={s.ImageGalleryItem__image}
        onClick={onOpenModal}
      />
    </li>
  );
}
ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onOpenModal: PropTypes.func.isRequired,
};
