import axios from "axios";
import "./Board.css";

const BoardDetail = ({
  article,
  handlelist,
  handleupdateform,
  handleupdate,
}) => {
  const image = article.board_image; // 경로추가
  console.log("image =>", image);

  const handleDelete = (e) => {
    axios
      .post("http://localhost:8005/delete", {
        num: e.target.id,
      })
      .then(() => {
        handlelist();
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <div className="BBBDDD">
      <div className="BBDD">
        <div className="BD">
          <div className="BDTitle">
            {/* <h1>제목</h1> */}
            <h1>{article.title}</h1>
            <div className="BDBTN">
              <button
                className="detailOut"
                id={article.num}
                onClick={handlelist}
              >
                x
              </button>
            </div>
            <div className="write">
              <div className="user">{article.writer}</div>
              <div className="time">{article.time}</div>
            </div>
          </div>

          {/* <hr></hr> */}
          <div className="BDcontainer">
            <div className="upload_image">
              <img src={image} alt="이미지가 없습니다." width="400px" height="350px"></img>
            </div>
            <div className="detailContent">
              <div>{article.contents}</div>
            </div>
          </div>
          <div className="btnzzz">
            <input
              className="btnList"
              type="button"
              value="글목록"
              onClick={handlelist}
            ></input>
            <input
              className="reMake"
              type="button"
              value="수정"
              id={article.num}
              onClick={handleupdateform}
            ></input>
            <input
              className="detailDelete"
              type="button"
              value="삭제"
              id={article.num}
              onClick={handleDelete}
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardDetail;
