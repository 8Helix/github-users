function ModalElement({ setShowModal, setFavorites, showModal }) {
  function handleRemove(e) {
    setShowModal({ show: false, id: '' });
    const id = e.target.id;
    setFavorites((prev) => {
      prev.splice(id, 1);
      return [...prev];
    });
  }

  return (
    <>
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
    </>
  );
}

export default ModalElement;
