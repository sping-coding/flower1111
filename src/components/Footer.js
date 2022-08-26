import React from "react";

const Footer = () => {
  return (
    <footer>
      <div class="inner">
        <ul class="menu">
          <li>
            <a href="javascript:void(0)">개인정보처리방침</a>
          </li>
          <li>
            <a href="javascript:void(0)">영상정보처리기기 운영관리 방침</a>
          </li>
          <li>
            <a href="javascript:void(0)">홈페이지 이용약관</a>
          </li>
          <li>
            <a href="javascript:void(0)">위치정보 이용약관</a>
          </li>
          <li>
            <a href="javascript:void(0)">클로레라 카드 이용약관</a>
          </li>
          <li>
            <a href="javascript:void(0)">윤리경영 핫라인</a>
          </li>
        </ul>

        <div class="btn-group">
          <a href="javascript:void(0)" className="footerA">
            찾아오시는길
          </a>
          <a href="javascript:void(0)" className="footerA">
            고객문의
          </a>
          <a href="javascript:void(0)" className="footerA">
            사이트맵
          </a>
        </div>

        <div class="info">
          <span>사업자등록번호 201-81-21515</span>
          <span>(주)크룰리아</span>
          <span>TEL : 010) 4622-2173 / FAX : 063) 653-2173</span>
          <span>총 책임자 : 박 훈</span>
        </div>

        <p class="copyright">
          &copy; <span class="this-year"></span> Caerulea Company. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
