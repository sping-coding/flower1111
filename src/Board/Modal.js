import BoardWriter from "./BoardWriter";
import "./Modal.css";
import { BsFillXSquareFill } from "react-icons/bs";

function Modal({ modal, openModal, handlelist }) {
  // let [mobal, setMobal] = useState(props.modal);

  // const openMobal = () => {
  //   setMobal(...props.modal, (props.modal = !mobal));
  // };

  return (
    <>
      <div className="modal2">
        <div>
          <BoardWriter
            handlelist={handlelist}
            modal={modal}
            openModal={openModal}
          ></BoardWriter>
        </div>
      </div>
    </>
  );
}

export default Modal;
