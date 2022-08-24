import modalOverlayStyles from "./modal-overlay.module.css";
import PropTypes from "prop-types";

export default function ModalOverlay({ children, onClose }) {
  const handleCloseModal = (evt) => {
    if (evt.target.id === "ModalOverlay") {
      onClose();
    }
  };

  return (
    <div
      onClick={handleCloseModal}
      className={`${modalOverlayStyles.main} ${modalOverlayStyles.mainOpened}`}
      id="ModalOverlay"
    >
      {children}
    </div>
  );
}

ModalOverlay.propTypes = {
  children: PropTypes.element.isRequired,
  onClose: PropTypes.func.isRequired,
};
