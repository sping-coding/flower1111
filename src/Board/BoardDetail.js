import axios from "axios";

const BoardDetail = ({
  article,
  handlelist,
  handleupdateform,
  handleupdate,
}) => {
  const image = "http://localhost:8005/uploads/" + article.board_image; // 경로추가
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
    <div>
      <form>
        <table border="1" width="700px" align="center">
          <tr>
            <td width="100px">글번호</td>
            <td align="left" width="600px">
              {article.num}
            </td>
          </tr>
          <tr>
            <td width="100px">제목</td>
            <td align="left" width="600px">
              {article.title}
            </td>
          </tr>
          <tr>
            <td width="100px">날짜</td>
            <td align="left" width="600px">
              {article.time}
            </td>
          </tr>
          <tr>
            <td width="100px">글쓴이</td>
            <td align="left" width="600px">
              {article.writer}
            </td>
          </tr>
          <tr>
            <td width="100px">글내용</td>
            <td align="left" width="600px">
              {article.contents}
            </td>
          </tr>
          <tr>
            <td width="100px">이미지</td>
            <td align="left" width="600px">
              <img src={image} />
            </td>
          </tr>
          <tr>
            <td colspan="2" align="center">
              <input type="button" value="글목록" onClick={handlelist}></input>
              <input
                type="button"
                value="수정"
                id={article.num}
                onClick={handleupdateform}
              ></input>
              <input
                type="button"
                value="삭제"
                id={article.num}
                onClick={handleDelete}
              ></input>
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
};

export default BoardDetail;
