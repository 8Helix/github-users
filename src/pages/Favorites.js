import { useContext, useState } from 'react';
import Favorite from '../components/Favorite';
import Modal from '../components/modal/Modal';
import { FollowContext } from '../context/FollowContext';

function Favorites() {
  const { favorites, setFavorites } = useContext(FollowContext);
  const [showModal, setShowModal] = useState({ show: false, id: '' });

  function handleRemove(e) {
    setShowModal({ show: false, id: '' });
    const id = e.target.id;
    setFavorites((prev) => {
      prev.splice(id, 1);
      return [...prev];
    });
  }

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
            <h2>Are you sure?</h2>
            <div className="buttons modal-button">
              <div className="button">
                <button id={showModal.id} onClick={handleRemove}>
                  Yes
                </button>
              </div>
              <div className="button">
                <button onClick={() => setShowModal({ show: false, id: '' })}>
                  No
                </button>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </main>
  );
}

export default Favorites;
