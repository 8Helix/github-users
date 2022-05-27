import { useContext, useState } from 'react';
import Favorite from '../components/Favorite';
import Modal from '../components/modal/Modal';
import ModalElement from '../components/modal/ModalElement';
import { FollowContext } from '../context/FollowContext';
import './Favorites.modules.css';

function Favorites() {
  const { favorites, setFavorites } = useContext(FollowContext);
  const [showModal, setShowModal] = useState({ show: false, id: '' });

  return (
    <main>
      <div className="favorites">
        {Boolean(favorites.length) &&
          favorites.map((favorite, i) => (
            <Favorite
              key={favorite.username}
              favorite={favorite}
              setShowModal={setShowModal}
              id={i}
            />
          ))}
        {showModal.show && (
          <Modal>
            <ModalElement
              setShowModal={setShowModal}
              showModal={showModal}
              setFavorites={setFavorites}
            />
          </Modal>
        )}
      </div>
    </main>
  );
}

export default Favorites;
