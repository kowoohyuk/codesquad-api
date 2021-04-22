import express from "express";
import "../db.js";
import {
  sidedishSchema,
  sidedishDetailSchema,
} from "../schema/sidedishSchema.js";

console.log(sidedishSchema, sidedishDetailSchema);

export const sidedishRouter = express.Router();

sidedishRouter.get("/main", (req, res) => {
  // 든든한반찬, 국물요리, 밑반찬 전부 반환!
  res.status(200).json("::)");
});

sidedishRouter.get("/best", (req, res) => {
  // 할인특가세트상품, 풍성한고기반찬, 편리한반찬세트, 간편한 덮밥요리, 우리아이영양반찬
  sidedishSchema
    .find({}, function (err, item) {
      res.status(200).json(item);
    })
    .populate({
      path: "childs",
    });
});

sidedishRouter.get("/detail/:id", (req, res) => {
  // 상세 컴포넌트(팝업 모달)
  res.status(200).json("::)");
});

sidedishRouter.get("/test", (req, res) => {
  console.log(1);
  // const sidedish = new sidedishSchema({
  //   title: "우리아이 영양반찬",
  //   type: "best",
  // });
  // sidedish.save(function (err, item) {
  //   if (err) return res.status(500).send("죄송함다...");
  //   res.status(200).json({ id: item._id });
  // });
});

sidedishRouter.get("/test2", (req, res) => {
  // 할인특가 세트상품
  // id: "60811280c6f32339ac17d359"
  // 풍성한 고기반찬
  // id: "6081132df5e3d76d1ce0e05e"
  // 편리한 반찬세트
  // id: "60811338b1471040b49562eb"
  // 간편한 덮밥요리
  // id: "6081134d27d8b0686cbf48f7"
  // 우리아이 영양반찬
  // id: "60811373ccf9093e10c6abe9"
  // ["https://cdn.pixabay.com/photo/2015/05/02/00/57/aluminous-749358__340.jpg", "https://cdn.pixabay.com/photo/2017/08/08/09/44/food-photography-2610863__340.jpg", "https://cdn.pixabay.com/photo/2016/10/13/19/15/bibimbap-1738580__340.jpg", "https://cdn.pixabay.com/photo/2017/08/08/09/44/food-photography-2610864__340.jpg", "https://cdn.pixabay.com/photo/2015/10/01/14/26/fried-rice-967081__340.jpg", "https://cdn.pixabay.com/photo/2018/03/07/10/09/food-3205654__340.jpg", "https://cdn.pixabay.com/photo/2015/10/09/00/56/traditional-978660__340.jpg", "https://cdn.pixabay.com/photo/2015/01/12/11/34/tofu-597228__340.jpg", "https://cdn.pixabay.com/photo/2018/12/10/00/27/tang-fish-cakes-3866061__340.jpg", "https://cdn.pixabay.com/photo/2015/05/02/01/03/lunch-box-749367__340.jpg", "https://cdn.pixabay.com/photo/2015/05/02/00/59/herbs-749360__340.jpg", "https://cdn.pixabay.com/photo/2015/01/12/11/35/slice-the-tofu-597229__340.jpg", "https://cdn.pixabay.com/photo/2016/01/15/06/57/vegetarian-1141242__340.jpg", "https://cdn.pixabay.com/photo/2015/02/11/07/03/bibimbap-632083__340.jpg", "https://cdn.pixabay.com/photo/2015/04/17/04/42/korean-726741__340.jpg", "https://cdn.pixabay.com/photo/2017/01/11/08/30/market-1971125__340.jpg", "https://cdn.pixabay.com/photo/2019/07/25/01/35/kimchi-4361465__340.jpg", "https://cdn.pixabay.com/photo/2017/11/06/13/18/skate-2923636__340.jpg", "https://cdn.pixabay.com/photo/2018/12/10/00/27/tang-fish-cakes-3866060__340.jpg", "https://cdn.pixabay.com/photo/2019/03/26/01/14/tofu-4081697__340.jpg", "https://cdn.pixabay.com/photo/2015/03/27/15/36/bob-694825__340.jpg", "https://cdn.pixabay.com/photo/2015/02/16/17/59/side-dish-638660__340.jpg", "https://cdn.pixabay.com/photo/2015/11/20/08/17/meat-1052571__340.jpg", "https://cdn.pixabay.com/photo/2017/07/19/03/13/pot-2517765__340.jpg", "https://cdn.pixabay.com/photo/2015/02/04/02/52/kimchi-623260__340.jpg"]

  // const images = [
  //   "https://cdn.pixabay.com/photo/2015/05/02/00/57/aluminous-749358__340.jpg",
  //   "https://cdn.pixabay.com/photo/2017/08/08/09/44/food-photography-2610863__340.jpg",
  //   "https://cdn.pixabay.com/photo/2016/10/13/19/15/bibimbap-1738580__340.jpg",
  //   "https://cdn.pixabay.com/photo/2017/08/08/09/44/food-photography-2610864__340.jpg",
  //   "https://cdn.pixabay.com/photo/2015/10/01/14/26/fried-rice-967081__340.jpg",
  //   "https://cdn.pixabay.com/photo/2018/03/07/10/09/food-3205654__340.jpg",
  //   "https://cdn.pixabay.com/photo/2015/10/09/00/56/traditional-978660__340.jpg",
  //   "https://cdn.pixabay.com/photo/2015/01/12/11/34/tofu-597228__340.jpg",
  //   "https://cdn.pixabay.com/photo/2018/12/10/00/27/tang-fish-cakes-3866061__340.jpg",
  //   "https://cdn.pixabay.com/photo/2015/05/02/01/03/lunch-box-749367__340.jpg",
  //   "https://cdn.pixabay.com/photo/2015/05/02/00/59/herbs-749360__340.jpg",
  //   "https://cdn.pixabay.com/photo/2015/01/12/11/35/slice-the-tofu-597229__340.jpg",
  //   "https://cdn.pixabay.com/photo/2016/01/15/06/57/vegetarian-1141242__340.jpg",
  //   "https://cdn.pixabay.com/photo/2015/02/11/07/03/bibimbap-632083__340.jpg",
  //   "https://cdn.pixabay.com/photo/2015/04/17/04/42/korean-726741__340.jpg",
  //   "https://cdn.pixabay.com/photo/2017/01/11/08/30/market-1971125__340.jpg",
  //   "https://cdn.pixabay.com/photo/2019/07/25/01/35/kimchi-4361465__340.jpg",
  //   "https://cdn.pixabay.com/photo/2017/11/06/13/18/skate-2923636__340.jpg",
  //   "https://cdn.pixabay.com/photo/2018/12/10/00/27/tang-fish-cakes-3866060__340.jpg",
  //   "https://cdn.pixabay.com/photo/2019/03/26/01/14/tofu-4081697__340.jpg",
  //   "https://cdn.pixabay.com/photo/2015/03/27/15/36/bob-694825__340.jpg",
  //   "https://cdn.pixabay.com/photo/2015/02/16/17/59/side-dish-638660__340.jpg",
  //   "https://cdn.pixabay.com/photo/2015/11/20/08/17/meat-1052571__340.jpg",
  //   "https://cdn.pixabay.com/photo/2017/07/19/03/13/pot-2517765__340.jpg",
  //   "https://cdn.pixabay.com/photo/2015/02/04/02/52/kimchi-623260__340.jpg",
  // ];
  // const titles = [
  //   "[미노리키친] 규동 250g",
  //   "[빅마마의밥친구] 아삭 고소한 연근고기조림 250g",
  //   "[소중한식사] 골뱅이무침 195g",
  //   "[옹가솜씨] 꽁치간장조림 240g",
  //   "[마더앤찬] 코다리구이 320g",
  //   "[남도애꽃] 반건조 문어조림 120g",
  //   "[마샐미디쉬] 매콤마늘쫑 해산물볶음 180g",
  //   "[빅마마의밥친구] 비빔오징어 150g",
  //   "[수하동] 특곰탕 850g",
  //   "[빅마마의밥친구] 된장찌개 900g",
  //   "[탐나는밥상] 동태탕 1000g",
  //   "[국물닷컴] 치즈부대찌개 600g",
  //   "[집밥의완성] 스키야키 1.5kg (2~3인분)",
  //   "[새로미부산어묵] 프리미엄 어묵탕세트",
  //   "[모이세] 육개장 1팩(600g)",
  //   "[마더앤찬] 명란감자국 630ml",
  //   "[마샐미디쉬] 유자소스 연근무침 250g",
  //   "[동네부엌] 쇠고기야채장조림 200g",
  //   "[소중한식사] 도라지초무침 150g",
  //   "[미노리키친] 일본식 우엉조림(킨피라고보) 80g",
  //   "[빅마마의밥친구] 갈치포무침 150g",
  //   "[마더앤찬] 명란치즈계란말이 230g",
  //   "[옹가솜씨] 달걀곤약조림 330g",
  //   "[너의반찬] 미소된장 고추무침 200g",
  //   "[비비고] 남원추어탕 250g",
  // ];
  // const prices = [
  //   5000,
  //   4000,
  //   8000,
  //   7000,
  //   6000,
  //   5500,
  //   4800,
  //   4900,
  //   5100,
  //   9800,
  //   3500,
  //   4200,
  //   2000,
  //   4000,
  //   3400,
  //   4000,
  //   2500,
  //   2700,
  //   3800,
  //   6000,
  //   5500,
  //   4800,
  //   4900,
  //   5100,
  //   9800,
  //   5000,
  //   4000,
  // ];
  // const descriptions = [
  //   "맛있는 규동 입니다",
  //   "고소한 연근과 맛있는 고기",
  //   "술안주에요",
  //   "비리지 않아요!",
  //   "밥반찬 겸 술안주!",
  //   "쫄깃한 문어 조림",
  //   "신선한 산해진미",
  //   "매콤달콤한 양념과 함께하는 오징어",
  //   "48시간 우려낸 정말 푸짐한 곰탕",
  //   "엄마의 손맛이 그대로!",
  //   "시원한 속풀이 음식",
  //   "매콤함과 고소함의 완벽한 조화",
  //   "하카타의 기분을 집에서",
  //   "안주와 해장을 동시에",
  //   "공기밥 두그릇이 뚝딱!",
  //   "명란의 고소함",
  //   "상큼한 유자 소스",
  //   "1등급 한우 양지살",
  //   "도라지의 향긋함만",
  //   "의외의 밥도둑",
  //   "갈치 포는 처음이지?",
  //   "고소함이 듬뿍!",
  //   "영양과 칼로리를 동시에",
  //   "할머니의 손맛이 그대로!",
  //   "남원에 안가도 돼요",
  // ];
  // const labels = [
  //   ["런칭특가"],
  //   ["이벤트특가"],
  //   ["베스트"],
  //   [],
  //   ["런칭특가", "이벤트특가"],
  //   ["이벤트특가", "베스트"],
  //   ["런칭특가", "베스트"],
  // ];
  // const ids = [];
  // for (let i = 0; i < images.length; i++) {
  //   const sidedishDetail = new sidedishDetailSchema({
  //     hash: i,
  //     title: titles[i],
  //     description: descriptions[i],
  //     stock: Math.floor(Math.random() * 5 + 1),
  //     img: images[i],
  //     alt: titles[i],
  //     price: prices[i],
  //     discount: Math.floor(Math.random() * 50),
  //     label: labels[Math.floor(Math.random() * 7)],
  //     point: Math.ceil(prices[i] * (1 / 100)),
  //     delivery_fee: "2,500원 <b>(40,000원 이상 구매 시 무료)</b>",
  //     delivery_info:
  //       "서울 경기 새벽배송 / 전국택배 (제주 및 도서산간 불가) [월 · 화 · 수 · 목 · 금 · 토] 수령 가능한 상품입니다",
  //   });
  //   sidedishDetail.save(function (err, item) {
  //     if (err) return res.status(500).send("죄송함다...");
  //     ids.push(item._id);
  //   });
  // }

  const sid = [
    "60811280c6f32339ac17d359",
    "6081132df5e3d76d1ce0e05e",
    "60811338b1471040b49562eb",
    "6081134d27d8b0686cbf48f7",
    "60811373ccf9093e10c6abe9",
  ];
  // console.log("?");
  // const ids = [];
  // sidedishDetailSchema.find({}, function (err, item) {
  //   for (let i = 0; i < item.length; i++) {
  //     ids.push(item[i]._id);
  //   }
  //   for (let i = 0; i < sid.length; i++) {
  //     sidedishSchema.updateOne(
  //       { _id: sid[i] },
  //       {
  //         $set: {
  //           childs: ids.slice(i * 5, i * 5 + 5),
  //         },
  //       },
  //       function (err, todo) {
  //         console.log(err, todo);
  //       }
  //     );
  //   }
  // });

  // for (let i = 0; i < sid.length; i++) {
  //   sidedishSchema
  //     .find({}, function (err, item) {
  //       console.log(item);
  //     })
  //     .populate({
  //       path: "childs",
  //     })
  //     .exec();
  // }

  // console.log(ids);
  console.log("성공?!");
  res.json("끝!");
  // 할인특가 세트상품
  // id: "60811280c6f32339ac17d359"
  // 풍성한 고기반찬
  // id: "6081132df5e3d76d1ce0e05e"
  // 편리한 반찬세트
  // id: "60811338b1471040b49562eb"
  // 간편한 덮밥요리
  // id: "6081134d27d8b0686cbf48f7"
  // 우리아이 영양반찬
  // id: "60811373ccf9093e10c6abe9"

  // ["https://cdn.pixabay.com/photo/2015/05/02/00/57/aluminous-749358__340.jpg", "https://cdn.pixabay.com/photo/2017/08/08/09/44/food-photography-2610863__340.jpg", "https://cdn.pixabay.com/photo/2016/10/13/19/15/bibimbap-1738580__340.jpg", "https://cdn.pixabay.com/photo/2017/08/08/09/44/food-photography-2610864__340.jpg", "https://cdn.pixabay.com/photo/2015/10/01/14/26/fried-rice-967081__340.jpg", "https://cdn.pixabay.com/photo/2018/03/07/10/09/food-3205654__340.jpg", "https://cdn.pixabay.com/photo/2015/10/09/00/56/traditional-978660__340.jpg", "https://cdn.pixabay.com/photo/2015/01/12/11/34/tofu-597228__340.jpg", "https://cdn.pixabay.com/photo/2018/12/10/00/27/tang-fish-cakes-3866061__340.jpg", "https://cdn.pixabay.com/photo/2015/05/02/01/03/lunch-box-749367__340.jpg", "https://cdn.pixabay.com/photo/2015/05/02/00/59/herbs-749360__340.jpg", "https://cdn.pixabay.com/photo/2015/01/12/11/35/slice-the-tofu-597229__340.jpg", "https://cdn.pixabay.com/photo/2016/01/15/06/57/vegetarian-1141242__340.jpg", "https://cdn.pixabay.com/photo/2015/02/11/07/03/bibimbap-632083__340.jpg", "https://cdn.pixabay.com/photo/2015/04/17/04/42/korean-726741__340.jpg", "https://cdn.pixabay.com/photo/2017/01/11/08/30/market-1971125__340.jpg", "https://cdn.pixabay.com/photo/2019/07/25/01/35/kimchi-4361465__340.jpg", "https://cdn.pixabay.com/photo/2017/11/06/13/18/skate-2923636__340.jpg", "https://cdn.pixabay.com/photo/2018/12/10/00/27/tang-fish-cakes-3866060__340.jpg", "https://cdn.pixabay.com/photo/2019/03/26/01/14/tofu-4081697__340.jpg", "https://cdn.pixabay.com/photo/2015/03/27/15/36/bob-694825__340.jpg", "https://cdn.pixabay.com/photo/2015/02/16/17/59/side-dish-638660__340.jpg", "https://cdn.pixabay.com/photo/2015/11/20/08/17/meat-1052571__340.jpg", "https://cdn.pixabay.com/photo/2017/07/19/03/13/pot-2517765__340.jpg", "https://cdn.pixabay.com/photo/2015/02/04/02/52/kimchi-623260__340.jpg", "https://cdn.pixabay.com/photo/2017/08/08/09/44/food-photography-2610865__340.jpg", "https://cdn.pixabay.com/photo/2017/07/27/16/48/toppokki-2545943__340.jpg", "https://cdn.pixabay.com/photo/2017/08/10/08/39/snow-crab-2620060__340.jpg", "https://cdn.pixabay.com/photo/2018/12/03/01/04/kimchi-3852526__340.jpg", "https://cdn.pixabay.com/photo/2016/05/09/02/25/food-1380278__340.jpg", "https://cdn.pixabay.com/photo/2019/04/05/16/40/korean-food-4105500__340.jpg", "https://cdn.pixabay.com/photo/2018/12/04/15/21/chinese-3855835__340.jpg", "https://cdn.pixabay.com/photo/2015/04/22/06/57/gopchang-734303__340.jpg", "https://cdn.pixabay.com/photo/2018/12/10/00/27/tang-fish-cakes-3866058__340.jpg", "https://cdn.pixabay.com/photo/2018/03/29/19/32/bibimbap-3273405__340.jpg", "https://cdn.pixabay.com/photo/2018/12/10/00/27/tang-fish-cakes-3866059__340.jpg", "https://cdn.pixabay.com/photo/2015/02/04/02/55/short-623261__340.jpg", "https://cdn.pixabay.com/photo/2015/04/28/07/40/korean-743153__340.jpg", "https://cdn.pixabay.com/photo/2015/04/17/04/41/pumpkin-porridge-726740__340.jpg", "https://cdn.pixabay.com/photo/2014/02/26/09/02/bibimbap-274923__340.jpg", "https://cdn.pixabay.com/photo/2015/10/13/16/16/sweet-pumpkin-986410__340.jpg", "https://cdn.pixabay.com/photo/2016/05/09/02/26/food-1380280__340.jpg", "https://cdn.pixabay.com/photo/2017/08/08/09/41/dumplings-fried-2610850__340.jpg", "https://cdn.pixabay.com/photo/2018/12/04/15/20/chinese-3855829__340.jpg", "https://cdn.pixabay.com/photo/2018/05/14/13/12/cooking-3399914__340.jpg", "https://cdn.pixabay.com/photo/2019/11/23/15/25/korea-food-4647402__340.jpg", "https://cdn.pixabay.com/photo/2018/12/10/00/27/tang-fish-cakes-3866062__340.jpg", "https://cdn.pixabay.com/photo/2018/12/04/15/20/chinese-3855830__340.jpg", "https://cdn.pixabay.com/photo/2020/01/01/00/15/one-address-based-4732816__340.jpg", "https://cdn.pixabay.com/photo/2019/11/23/15/26/salmon-4647406__340.jpg", "https://cdn.pixabay.com/photo/2017/09/10/14/23/jjolmyeon-2735716__340.jpg", "https://cdn.pixabay.com/photo/2020/01/21/03/11/korean-food-4781973__340.jpg", "https://cdn.pixabay.com/photo/2018/03/24/04/03/food-3255643__340.jpg", "https://cdn.pixabay.com/photo/2020/02/08/03/56/octopus-desktop-4829030__340.jpg", "https://cdn.pixabay.com/photo/2020/01/21/03/10/korean-food-4781965__340.jpg", "https://cdn.pixabay.com/photo/2018/12/04/15/19/chinese-3855828__340.jpg", "https://cdn.pixabay.com/photo/2020/04/14/22/08/delicious-5044522__340.jpg", "https://cdn.pixabay.com/photo/2019/09/30/03/07/al-rice-4514717__340.jpg", "https://cdn.pixabay.com/photo/2018/12/04/15/21/chinese-3855834__340.jpg", "https://cdn.pixabay.com/photo/2019/04/22/18/52/korean-4147335__340.jpg", "https://cdn.pixabay.com/photo/2016/01/24/12/50/korean-1158797__340.jpg", "https://cdn.pixabay.com/photo/2020/06/27/13/15/tofu-5345870__340.jpg", "https://cdn.pixabay.com/photo/2014/02/26/09/04/chicken-274926__340.jpg", "https://cdn.pixabay.com/photo/2020/03/04/10/01/pig-4901172__340.jpg", "https://cdn.pixabay.com/photo/2014/02/26/09/02/gochujang-274922__340.jpg", "https://cdn.pixabay.com/photo/2018/03/24/04/07/food-3255644__340.jpg", "https://cdn.pixabay.com/photo/2020/02/08/03/56/file-version-4829032__340.jpg", "https://cdn.pixabay.com/photo/2020/02/08/03/56/octopus-desktop-4829035__340.jpg", "https://cdn.pixabay.com/photo/2018/12/04/15/20/chinese-3855832__340.jpg", "https://cdn.pixabay.com/photo/2019/12/15/10/37/inari-4696793__340.jpg", "https://cdn.pixabay.com/photo/2018/12/04/15/20/chinese-3855833__340.jpg", "https://cdn.pixabay.com/photo/2020/04/14/22/20/stock-image-5044542__340.jpg", "https://cdn.pixabay.com/photo/2020/02/08/04/00/health-4829042__340.jpg", "https://cdn.pixabay.com/photo/2018/05/02/03/03/food-3367642__340.jpg", "https://cdn.pixabay.com/photo/2020/01/21/03/10/korean-food-4781966__340.jpg", "https://cdn.pixabay.com/photo/2020/02/08/03/56/octopus-desktop-4829033__340.jpg", "https://cdn.pixabay.com/photo/2019/12/31/04/44/chicken-4731198__340.jpg", "https://cdn.pixabay.com/photo/2019/11/23/15/25/wave-4647403__340.jpg", "https://cdn.pixabay.com/photo/2015/05/11/09/59/bibimbap-762218__340.jpg", "https://cdn.pixabay.com/photo/2018/11/26/02/25/kimchi-3838674__340.jpg", "https://cdn.pixabay.com/photo/2019/01/02/13/13/korean-food-3908819__340.jpg", "https://cdn.pixabay.com/photo/2018/04/10/09/56/food-3306892__340.jpg", "https://cdn.pixabay.com/photo/2019/04/05/16/40/dining-4105501__340.jpg", "https://cdn.pixabay.com/photo/2016/04/28/06/59/food-1358237__340.jpg", "https://cdn.pixabay.com/photo/2015/04/17/04/51/korean-726743__340.jpg", "https://cdn.pixabay.com/photo/2017/08/08/09/41/dumplings-fried-2610855__340.jpg", "https://cdn.pixabay.com/photo/2016/10/28/08/06/korean-1777446__340.jpg", "https://cdn.pixabay.com/photo/2015/06/10/08/42/bibimbap-804611__340.jpg", "https://cdn.pixabay.com/photo/2015/10/30/14/03/pork-1014180__340.jpg", "https://cdn.pixabay.com/photo/2018/09/10/09/21/haejangguk-3666599__340.jpg", "https://cdn.pixabay.com/photo/2016/04/28/07/00/food-1358238__340.jpg", "https://cdn.pixabay.com/photo/2015/04/17/04/52/lunch-box-726744__340.jpg", "https://cdn.pixabay.com/photo/2016/01/19/08/37/food-1148090__340.jpg", "https://cdn.pixabay.com/photo/2018/11/04/09/08/toppokki-3793393__340.jpg", "https://cdn.pixabay.com/photo/2017/09/10/14/23/toppokki-2735719__340.jpg", "https://cdn.pixabay.com/photo/2015/05/31/08/22/korean-790940__340.jpg", "https://cdn.pixabay.com/photo/2018/11/16/16/22/korean-3819740__340.jpg", "https://cdn.pixabay.com/photo/2017/09/24/08/30/pork-2781157__340.jpg", "https://cdn.pixabay.com/photo/2018/04/07/03/22/food-3297636__340.jpg", "https://cdn.pixabay.com/photo/2015/12/18/12/57/korean-food-1098549__340.jpg"]
  //
});
