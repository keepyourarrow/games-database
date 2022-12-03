import { useEffect, useRef } from "react";
import useMediaQuery from "hooks/useMediaQuery";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { ModalClose, ModalImageWrapper, ModalWrapper } from "../styles/Global.styled";

const Modal = ({ selected, closeModal, items = [] }) => {
  const isSmallScreen = useMediaQuery(776);

  const modalRef = useRef(null);

  useEffect(() => {
    modalRef.current.focus();
  }, []);

  const handleEsc = (e) => {
    if (e.key == "Escape") {
      closeModal(null);
    }
  };

  return (
    <ModalWrapper
      ref={modalRef}
      onClick={() => closeModal(null)}
      onKeyDown={handleEsc}
      tabIndex="0"
    >
      <ModalClose onClick={() => closeModal(null)}>
        <span></span>
      </ModalClose>

      <ModalImageWrapper onClick={(e) => e.stopPropagation()}>
        <Carousel
          selectedItem={selected}
          useKeyboardArrows={true}
          infiniteLoop={true}
          showThumbs={!isSmallScreen}
        >
          {items.map((item) => (
            <div key={item}>
              <img src={item.image} />
            </div>
          ))}
        </Carousel>
      </ModalImageWrapper>
    </ModalWrapper>
  );
};

export default Modal;
