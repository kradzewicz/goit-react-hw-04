/** @format */

import Modal from "react-modal";

const customStyles = {
  overlay: { background: "rgba(0,0,0,0.15)" },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export function ImageModal({ image, modalIsOpen, closeModal }) {
  return image === "" ? (
    ""
  ) : (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="ImageModal">
      <img src={image.urls.regular} alt={image.alt_description} />
    </Modal>
  );
}
