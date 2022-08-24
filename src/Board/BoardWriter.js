import { useRef, useState } from "react";
import axios from "axios";

const BoardWriter = ({ handlelist, modal, openModal }) => {
  const titleRef = useRef();
  const contentsRef = useRef();
  const writerRef = useRef();
  const imageRef = useRef();

  const [image_name, setImage_name] = useState("");

  function onImage(e) {
    setImage_name(e.target.files[0]);
  }

  //   handlelist();

  const handleInsert = (e) => {
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
          writer: writerRef.current.value,
          contents: contentsRef.current.value,
          image: image_name,
        },
        config // 설정옵션
      )
      .then((res) => {
        console.log("handleInsert =", res);
        titleRef.current.value = "";
        contentsRef.current.value = "";
        writerRef.current.value = "";
      })
      .catch((e) => {
        console.error(e);
      });
    handlelist();
  };

  return (
    <div>
      <form encType="multipart/form-data">
        <table border="1" width="700px" align="center">
          <tr>
            <td width="100px">제목</td>
            <td align="left" width="550px">
              <input
                type="text"
                name="title"
                size="68"
                ref={titleRef}
                placeholder="제목을 입력하세요"
              ></input>
            </td>
          </tr>
          <tr>
            <td width="100px">글쓴이</td>
            <td align="left" width="550px">
              <input
                type="text"
                name="writer"
                size="68"
                ref={writerRef}
                value={window.sessionStorage.getItem("nickname")}
                placeholder="글쓴이를 입력하세요"
              ></input>
            </td>
          </tr>
          <tr>
            <td>내용</td>
            <td align="left">
              <textarea
                rows="5"
                cols="70"
                name="content"
                ref={contentsRef}
                placeholder="내용을 입력하세요"
              ></textarea>
            </td>
          </tr>
          <tr>
            <td>이미지</td>
            <td align="left">
              <input
                type="file"
                name="image"
                ref={imageRef}
                accept="image/*"
                onChange={onImage}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2" align="center">
              <input
                type="button"
                value="글쓰기"
                onClick={handleInsert}
              ></input>
              &nbsp;
              <input type="reset" value="취소" onClick={openModal}></input>
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
};

export default BoardWriter;
