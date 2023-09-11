import { ModalWindow } from "components/Modal/modal"
import { GalleryItemsStyled, ModalGalleryImg } from "./ImageGalleryItem.styled"
import { useState } from "react";

export const ImageGalleryItem = ({image}) => {
   const [modalIsOpen, setModalIsOpen] = useState(false)

   const showModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <GalleryItemsStyled>
      <ModalGalleryImg
        src={image.webformatURL}
        alt={image.tags}
        loading="lazy"
        onClick={showModal}
      />
      {modalIsOpen && (
              <ModalWindow 
                largeImageURL={image.largeImageURL} 
                tag={image.tags} onClick={showModal} 
                modalIsOpen={modalIsOpen} />
      )}
    </GalleryItemsStyled>
  );
}
   
   
