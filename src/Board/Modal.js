import BoardWriter from "./BoardWriter";
import "./Modal.css";

function Modal({ modal, openModal, handlelist }) {
  // let [mobal, setMobal] = useState(props.modal);

  // const openMobal = () => {
  //   setMobal(...props.modal, (props.modal = !mobal));
  // };

  return (
    <>
      <div className="modal2">
        <button
          onClick={() => {
            openModal(modal);
          }}
        >
          x
        </button>
        <BoardWriter
          handlelist={handlelist}
          modal={modal}
          openModal={openModal}
        ></BoardWriter>
      </div>
    </>
  );
}

export default Modal;
