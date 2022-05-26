function Favorite({ favorite, setShowModal, id }) {
  return (
    <div className="favorite">
      <img alt="user" src={favorite.imgUrl} />
      <div className="favorite-name">
        <h2>{favorite.username}</h2>
        <div className="button">
          <button onClick={() => setShowModal({ show: true, id: id })}>
            remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default Favorite;
