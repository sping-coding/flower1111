import BoardWriter from "./BoardWriter";
import "./Modal.css";

function Modal({ modal, openModal }) {
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
        <BoardWriter modal={modal} openModal={openModal}></BoardWriter>
      </div>
    </>
  );
}

export default Modal;
