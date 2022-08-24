import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BoardArticle from "./BoardArticle";
import PageLink from "./PageLink";
import Modal from "./Modal";

// 게시판 화면 리스트
const BoardList = ({
  boardlist,
  getList,
  actionmode,
  handlelist,
  handledetail,
  handleupdateform,
  handlepage,
  pagelink,
}) => {
  // const navigate = useNavigate();
  // const gotowriter = () => {
  //   navigate("/insert");
  // };

  useEffect(() => {
    handlelist();
  }, []);

  let [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(!modal);
  };

  // const handleLogout = () => {
  //   console.log("Logout");
  //   window.sessionStorage.clear();
  //   console.log(
  //     "Logout: window.sessionStorage(login_id) =",
  //     window.sessionStorage.getItem("id")
  //   );
  //   navigate("/"); // 로그인 페이지로 이동
  // };

  if (boardlist.boardList.length === 0) {
    return (
      <div>
        <table width="700px" border="1" align="center">
          <thead>
            <tr>
              <th width="60">번호</th>
              <th width="240">제목</th>
              <th width="100">작성자</th>
              <th width="100">작성일</th>
            </tr>
          </thead>
        </table>
        <div>
          <button onClick={openModal}>글쓰기</button>
          {modal === true ? (
            <Modal
              handlelist={handlelist}
              modal={modal}
              openModal={openModal}
            />
          ) : null}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <table width="700px" border="1" align="center">
          <thead>
            <tr>
              <th width="60">번호</th>
              <th width="240">제목</th>
              <th width="100">작성자</th>
              <th width="100">작성일</th>
            </tr>
          </thead>
          <tbody>
            {boardlist.boardList &&
              boardlist.boardList.map((article) => {
                return (
                  <BoardArticle
                    actionmode={actionmode}
                    article={article}
                    key={article.BOARD_NUM}
                    handlelist={handlelist}
                    handledetail={handledetail}
                    handleupdateform={handleupdateform}
                  />
                );
              })}
          </tbody>
        </table>
        <table align="center">
          <tr>
            <td>
              {pagelink &&
                pagelink.map((page) => {
                  return (
                    <PageLink page={page} key={page} handlepage={handlepage} />
                  );
                })}
            </td>
          </tr>
          <div>
            <button onClick={openModal}>글쓰기</button>
            {modal === true ? (
              <Modal
                handlelist={handlelist}
                modal={modal}
                openModal={openModal}
              />
            ) : null}
          </div>
        </table>
      </div>
    );
  }
};

export default BoardList;
