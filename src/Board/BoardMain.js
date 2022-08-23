import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import BoardList from "./BoardList";
import BoardDetail from "./BoardDetail";
import BoardUpdateForm from "./BoardUpdateForm";

function BoardMain() {
  const [boardlist, setBoardlist] = useState({
    boardList: [],
  });

  const navigate = useNavigate();

  // 상세 글, 데이터 수정할 때 글 불러오기
  const [article, setArticle] = useState({
    num: 0,
    title: "",
    contents: "",
    writer: "",
    time: "",
    board_image: "",
  });

  const [actionMode, setActionMode] = useState({ mode: 0 });
  const [pageLink, setPageLink] = useState([]);

  var page_num = 1;
  const page_size = 10;
  var page_count = 1;
  var article_count = 0;

  useEffect(() => {}, []);

  const handlePage = (e) => {
    console.log("Page(e.target.id) =", e.target.id);
    page_num = e.target.id;
    getList();
  };

  //글 목록
  async function getList() {
    await axios
      .get("http://localhost:8005/board/count", {})
      .then((res) => {
        const { data } = res;
        article_count = data[0].COUNT;
        page_count = Math.ceil(article_count / page_size);
        var page_link = [];
        for (let i = 1; i <= page_count; i++) page_link.push(i);
        setPageLink(page_link);
      })
      .catch((e) => {
        console.error(e);
      });

    console.log("article_count =>", article_count);

    await axios
      .post("http://localhost:8005/list", {
        page_num: page_num,
        page_size: page_size,
        article_count: article_count,
      })
      .then((res) => {
        const { data } = res;
        console.log(data);
        setBoardlist({
          boardList: data,
        });
        setActionMode({
          ...actionMode,
          mode: 0, // 상세보기
        });
      })
      .catch((e) => {
        console.error(e);
      });
  }

  //상세보기
  const handleDetail = (e) => {
    axios
      .post("http://localhost:8005/detail", { num: e.target.id })
      .then((res) => {
        const { data } = res;
        console.log(data);
        if (res.data.length > 0) {
          setArticle({
            ...article,
            num: data[0].BOARD_NUM,
            title: data[0].TITLE,
            contents: data[0].CONTENTS,
            writer: data[0].WRITER,
            time: data[0].TIME,
            board_image: data[0].board_image,
          });
          setActionMode({
            ...actionMode,
            mode: 1,
          });
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  // 수정 하기
  const handleUpdateForm = (e) => {
    axios
      .post("http://localhost:8005/detail", { num: e.target.id })
      .then((res) => {
        const { data } = res;
        console.log(data);
        if (res.data.length > 0) {
          setArticle({
            ...article,
            num: data[0].BOARD_NUM,
            title: data[0].TITLE,
            contents: data[0].CONTENTS,
            writer: data[0].WRITER,
            time: data[0].TIME,
          });
          setActionMode({
            ...actionMode,
            mode: 2, // 글수정하기
          });
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const handleUpdate = () => {
    console.log("handleUpdate =>", article);
    axios
      .post("http://localhost:8005/update", {
        article: article,
      })
      .then(() => {
        getList();
      })
      .catch((e) => {
        console.error(e);
      });
  };

  if (actionMode.mode === 0) {
    // alert("글쓰기")
    // 글쓰기
    return (
      <div className="BBBBBB">
        <BoardList
          boardlist={boardlist}
          actionmode={actionMode}
          handlelist={getList}
          handledetail={handleDetail}
          handleupdateform={handleUpdateForm}
          handlepage={handlePage}
          pagelink={pageLink}
        ></BoardList>
      </div>
    );
  } else if (actionMode.mode === 1) {
    // alert("상세정보")
    // 상세보기
    return (
      <div>
        <BoardDetail
          article={article}
          handlelist={getList}
          handleupdate={handleUpdate}
          handleupdateform={handleUpdateForm}
        ></BoardDetail>
      </div>
    );
  } else if (actionMode.mode === 2) {
    // alert("글수정")
    // 글수정
    return (
      <div>
        <BoardUpdateForm
          article={article}
          setarticle={setArticle}
          handleupdate={handleUpdate}
        ></BoardUpdateForm>
      </div>
    );
  }
}

export default BoardMain;
