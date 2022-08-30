// const [pay, setPay] = useState({
//     // 응답에서 가져올 값들
//     next_redirect_pc_url: "",
//     tid: "",
//     // 요청에 넘겨줄 매개변수들
//     params: {
//       cid: "TC0ONETIME",
//       partner_order_id: "partner_order_id",
//       partner_user_id: "partner_user_id",
//       item_name: "초코파이",
//       quantity: 1,
//       total_amount: 2200,
//       vat_amount: 200,
//       tax_free_amount: 0,
//       approval_url: "http://localhost:3000/",
//       fail_url: "http://localhost:3000/",
//       cancel_url: "http://localhost:3000/",
//     },
//   });

//   useEffect(() => {
//     const { params } = pay;
//     axios({
//       url: "https://kapi.kakao.com/v1/payment/ready",
//       method: "POST",
//       headers: {
//         Authorization: "KakaoAK 87105da4391b25ac4286abaa508070c7",
//         "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
//       },
//       params,
//     }).then((response) => {
//       const {
//         data: { next_redirect_pc_url, tid },
//       } = response;
//       console.log("url=>", next_redirect_pc_url);
//       console.log(tid);
//       setPay({ next_redirect_pc_url, tid, params });
//     });
//   }, []);

//   const { next_redirect_pc_url } = pay;