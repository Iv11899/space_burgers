import { useEffect } from "react";
import modalStyles from "./modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import ModalOverlay from "../modal-overlay/modal-overlay";
import { modalsRoot } from "../../utils/data";

export default function Modal({ children, onClose, isOpened }) {
  useEffect(() => {
    const handleEscClose = (evt) => {
      if (evt.key === "Escape") {
        onClose();
      }
    };
    if (isOpened) {
      document.addEventListener("keydown", handleEscClose);
      return () => {
        document.removeEventListener("keydown", handleEscClose);
      };
    }
  }, [isOpened, onClose]);

  return createPortal(
    <ModalOverlay onClose={onClose}>
      <div className={modalStyles.main}>
        <button className={modalStyles.closeButton} onClick={onClose}>
          <CloseIcon type="primary" />
        </button>
        {children}
      </div>
    </ModalOverlay>,
    modalsRoot
  );
}

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  onClose: PropTypes.func.isRequired,
  isOpened: PropTypes.bool.isRequired,
};
