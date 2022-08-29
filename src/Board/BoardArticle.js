const BoardArticle = ({
  article,
  handlelist,
  handledetail,
  handleupdateform,
}) => {
  return (
    <tr className="ArticleTr">
      {/* <td>{article.BOARD_NUM}</td> */}
      <td>
        <a
          className="boardLink"
          href="#"
          id={article.BOARD_NUM}
          onClick={handledetail}
        >
          {article.BOARD_NUM}
        </a>
      </td>
      <td>
        <a
          className="boardLink"
          href="#"
          id={article.BOARD_NUM}
          onClick={handledetail}
        >
          {article.TITLE}
        </a>
      </td>
      <td>{article.WRITER}</td>
      <td>{article.TIME}</td>
    </tr>
  );
};

export default BoardArticle;
