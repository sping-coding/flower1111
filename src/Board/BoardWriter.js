import { useRef, useState } from "react";
import axios from "axios";
import { BsFillXSquareFill } from "react-icons/bs";

const BoardWriter = ({ handlelist, modal, openModal }) => {
  const titleRef = useRef();
  const contentsRef = useRef();
  const writerRef = useRef();
  const imageRef = useRef();

  const [image_name, setImage_name] = useState("");
  const usernick = window.sessionStorage.getItem("nick");

  function onImage(e) {
    const imageUrl = URL.createObjectURL(e.target.files[0]);

    setImage_name(imageUrl);
  }

  //   handlelist();

  const handleInsert = (e) => {
    handlelist();
    openModal(modal);
    // e.preventDefault();
    console.log("Insert =", titleRef.current.value);
    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };

    axios
      .post(
        "http://localhost:8005/insert",
        {
          title: titleRef.current.value,
          writer: window.sessionStorage.getItem("nick"),
          contents: contentsRef.current.value,
          image: image_name,
        },
        config // 설정옵션
      )
      .then((res) => {
        console.log("handleInsert =", res);
        titleRef.current.value = "";
        contentsRef.current.value = "";
        writerRef.current.value = window.sessionStorage.getItem("nick");
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <div className="wwwww">
      <div className="boardWriters">
        <form encType="multipart/form-data">
          <div className="closeModal">
            <button
              className="closeModalBtn"
              onClick={() => {
                openModal(modal);
              }}
            >
              X
            </button>
          </div>
          <div className="writerTitless">
            <div className="writerTitle">
              <input
                className="input_title"
                type="text"
                name="title"
                size="68"
                ref={titleRef}
                placeholder="제목"
              ></input>
            </div>
          </div>
          <div className="writerCttImg">
            <div className="writerImg">
              <div className="filebox">
                <label for="ex_file">파일 선택</label>
                <input
                  id="ex_file"
                  type="file"
                  name="image"
                  ref={imageRef}
                  accept="image/*"
                  onChange={onImage}
                />
              </div>
              <div>
                {image_name && (
                  <img
                    alt="sample"
                    src={image_name}
                    width="300px"
                    height="300px"
                  />
                )}
              </div>
            </div>
            <div className="writerContetsss">
              <div className="writerContets">
                <input
                  type="text"
                  className="input_contents"
                  name="content"
                  ref={contentsRef}
                  placeholder="내용"
                ></input>
              </div>

              <div className="writeUploads">
                <button onClick={handleInsert} className="uploadsBtn">
                  글 올리기
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BoardWriter;
