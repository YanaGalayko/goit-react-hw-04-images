import { ModalImageIsOpen } from 'components/ImageGalleryItem/ImageGalleryItem.styled';
import Modal from 'react-modal';

Modal.setAppElement('#root');
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0px'
  },
};

export const ModalWindow = ({ largeImageURL, tag , onClick, modalIsOpen}) => {
      return (
        <div className="overlay">
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={onClick}
            style={customStyles}
            // contentLabel="Minimal Modal Example"
          >
            <ModalImageIsOpen src={largeImageURL} alt={tag} />
          </Modal>
        </div>
      );
    }
