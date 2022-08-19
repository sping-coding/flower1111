import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BoardList = (
  {
    //   boardlist,
    //   handlelist,
    //   actionmode,
    //   handledetail,
    //   handleupdateform,
  }
) => {
  //   const navigate = useNavigate();

  //   useEffect(() => {
  //     handlelist();
  //   }, []);

  //   if (boardlist.boardList.length === 0) {
  return (
    <div>
      <table width="700px" align="center">
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>날짜</th>
          </tr>
        </thead>
      </table>
    </div>
  );
  //   } else {
  //     return (
  //       <div>
  //         <table width="700px" align="center">
  //           <thead>
  //             <tr>
  //               <th>번호</th>
  //               <th>제목</th>
  //               <th>작성자</th>
  //               <th>날짜</th>
  //             </tr>
  //           </thead>
  //         </table>
  //       </div>
  //     );
  //   }
};

export default BoardList;
