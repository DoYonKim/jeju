* cardholder 데이터 입력
INSERT INTO jeju.cardHolder (card_holder_date, card_holder_category, card_holder_location) VALUES ('2020-11-23', '카페', '성산일출봉' )
* card 데이터 입력
- MAP03
INSERT INTO jeju.card (card_holder_id, card_order, card_type, card_contents_1, card_contents_2) VALUES (1,1,'MAP03','33.46283380286916' , '126.93556824686983' )
- REVIEW03
INSERT INTO jeju.card (card_holder_id, card_order, card_type, card_contents_1, card_contents_2, card_contents_3, card_contents_4) VALUES (1,2,'REVIEW03','성산일출봉이 보이는 스벅' , '4', '제주특별자치도 서귀포시 성산읍 일출로 284-5', '성산일출봉이 보이는 카페. 주위에 있는 DT점보다 사람이 적다.' )

* map 조회
select card.card_id as cardID
     , card.card_contents_1
     , card.card_contents_2
  from jeju.card card
     , jeju.cardHolder holder
 where card.card_holder_id = holder.card_holder_id
   and card.card_type = 'MAP03'
   and holder.card_holder_id = 1
 order by card.card_order asc