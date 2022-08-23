const BoardUpdateForm = ({ article, setArticle, handleupdate }) => {
  const onChange = (e) => {
    setArticle({
      ...article,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="updateModel">
      <form>
        <table border="1" width="700px" align="center">
          <tr>
            <td width="100px">제목</td>
            <td align="left" width="600px">
              <input
                type="text"
                name="title"
                defaultValue={article.title}
                onChange={onChange}
              ></input>
            </td>
          </tr>
          <tr>
            <td width="100px">작성자</td>
            <td align="left" width="600px">
              {article.writer}
            </td>
          </tr>
          <tr>
            <td width="100px">내용</td>
            <td align="left" width="600px">
              <input
                type="text"
                name="contents"
                defaultValue={article.contents}
                onChange={onChange}
              ></input>
            </td>
          </tr>
          <td colspan="2" align="center">
            <input type="button" value="글수정" onClick={handleupdate}></input>
          </td>
        </table>
      </form>
    </div>
  );
};

export default BoardUpdateForm;
