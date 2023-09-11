import { ModalWindow } from "components/Modal/modal"
import { GalleryItemsStyled, ModalGalleryImg } from "./ImageGalleryItem.styled"
import { Component } from "react";

export class ImageGalleryItem extends Component {
    state = {
      modalIsOpen: false,
    };
    showModal = () => {
      this.setState(prevState => ({ modalIsOpen: !prevState.modalIsOpen }));
    };
    render() {
      const { webformatURL, tags, largeImageURL } = this.props.image;
      return (
        <GalleryItemsStyled>
          <ModalGalleryImg
            src={webformatURL}
            alt={tags}
            loading="lazy"
            onClick={this.showModal}
          />
          {this.state.modalIsOpen && (
                  <ModalWindow largeImageURL={largeImageURL} tag={tags} onClick={this.showModal} modalIsOpen={this.state.modalIsOpen} />
          )}
        </GalleryItemsStyled>
      );
    }
  }