//  Notes
//  If there's an apostrophe in an entry, surround it with double quotes, like this:
//  ["Washing one's face", 'korean'],
//
//  To deactivate a single line from the list below, precede it with '//', like this:
//  // ['english', 'korean'],
//
//  To deactivate a section from the list below, delimit it with '/*' and '*/', like this:
//  /*
//  ['english1', 'korean1'],
//  ['english2', 'korean2'],
//  */

const list = [
  ['I, me', '저'],
  ['Company employee', '회사원'],
  ['Too, very', '너무'],
  ['To be busy', '바쁘다'],
  ['We, our', '우리'],
  ['Usually, usual, regular', '보통'],
  ['Weekend', '주말'],
  ['To meet', '만나다'],
  ['Movie', '영화'],
  ['Cafe', '카페'],
  ['Every day', '매일'],
  ['Early', '일찍'],
  ['To get up, to wake up', '일어나다'],
  ['Water', '물'],
  ['To drink', '마시다'],
  ["Washing one's face", '세수'],
  ['Clothes', '옷'],
  ['To wear, to put on', '입다'],
  ['Make-up', '화장'],
  ['Company', '회사'],
  ['Test, exam', '시험'],
  ['Chair', '의자'],
  ['Desk', '책상'],
  ['To be dirty', '더럽다'],
  ['Up, top', '위'],
  ['Cleaning', '청소'],
  ['To be clean', '깨끗하다'],
  ['Notebook', '공책'],
  ['Pencil case', '필통'],
  ['To begin, to start', '시작하다'],
  ['To be hungry', '배고프다'],
  ['Earlier', '아까'],
  ['Bread', '빵'],
  ['Beverage', '음료수'],
  ['To give', '주다'],
  ['Now', '지금'],
  ['To be full (opposite of hungry)', '배부르다'],
  ['To doze', '졸다'],
  ['Teacher', '선생님'],
  ['To be scary, to be scared', '무섭다'],
  ['Child', '어린이'],
  ['School', '학교'],
  ['Family', '가족'],
  ['Park', '공원'],
  ['To be a lot, to be numerous', '많다'],
  ['Adult, grown-up', '어른'],
  ['Baby', '아기'],
  ['To be few, to be little', '적다'],
  ['To be interesting, to be fascinating', '신기하다'],
  ['How', '어떻게'],
  ['Winter', '겨울'],
  ['School vacation', '방학'],
  ['Grandmother', '할머니'],
  ['To go', '가다'],
  ['Bus', '버스'],
  ['Subway', '지하철'],
  ['To ride', '타다'],
  ['Cat', '고양이'],
  ['Animal', '동물'],
  ['To hang out, to play', '놀다'],
  ['Vacation, leave', '휴가'],
  ['Man', '남자'],
  ['Woman', '여자'],
  ['Shampoo', '샴푸'],
  ['Hair conditioner', '린스'],
  ['Underwear', '속옷'],
  ['Socks', '양말'],
  ['Hairdryer', '드라이기'],
  ['Pants', '바지'],
  ['T-shirt', '티셔츠'],
  ['Older sister (for a boy)', '누나'],
  ['Television', '텔레비전'],
  ['TV drama', '드라마'],
  ['News', '뉴스'],
  ['To fight, to argue', '싸우다'],
  ['To lose', '지다'],
  ['Room', '방'],
  ['To close', '닫다'],
  ['Music', '음악'],
  ['To listen, to hear', '듣다'],
  ['Dog', '개'],
  ['To exist, to have, to be (at a place)', '있다'],
  ['Name', '이름'],
  ['Time', '시간'],
  ['To live', '살다'],
  ['To die', '죽다'],
  ['To be sad', '슬프다'],
  ['Younger sibling', '동생'],
  ['To cry', '울다'],
  ['Tear', '눈물'],
  ['Swimming', '수영'],
  ['Towel', '수건'],
  ['Store', '가게'],
  ['Money', '돈'],
  ['To borrow, to rent', '빌리다'],
  ['Soap', '비누'],
  ['To be cold', '차갑다'],
  ['Shoulder', '어깨'],
  ['Strength, power', '힘'],
  ['To teach', '가르치다'],
  ['Tomorrow', '내일'],
  ['To be close (with someone)', '친하다'],
  ['To write, to use, to be bitter', '쓰다'],
  ['To receive', '받다'],
  ['To be glad, to be happy', '기쁘다'],
  ['Present, gift', '선물'],
  ['What', '무엇'],
  ['To be good', '좋다'],
  ['Earrings', '귀고리'],
  ['Necklace', '목걸이'], 
  ['Today', '오늘'],
  ['Birthday', '생일'],
  ['Classroom', '교실'],
  ['To eat', '먹다'],
  ['Friend', '친구'],
  ['Song', '노래'],
  ['Dance', '춤'],
  ['To congratulate, to celebrate', '축하하다'],
  ['To be fun', '재미있다'],
  ['Day, one day', '하루'],
  ['Dad', '아빠'],
  ['Sea, ocean', '바다'],
  ['To walk', '걷다'],
  ['Restaurant', '식당'],
  ['To be delicious', '맛있다'],
  ['Food', '음식'],
  ['Coffee', '커피'], 
  ['Star', '별'],
  ['To see, to watch, to meet, to read', '보다'],
  ['To be happy', '행복하다'],
  ['Summer', '여름'],
  ['To dislike, to hate', '싫어하다'],
  ['To be hot (weather)', '덥다'],
  ['Outside', '밖'],
  ['To go out', '나가다'], 
  ['House, home', '집'],
  ['Air conditioner', '에어컨'], 
  ['To turn on', '켜다'],
  ['To be cool (temperature)', '시원하다'],
  ['Ice', '얼음'],
  ['Already', '벌써'], 
  ['Night', '밤'],
  ['Bed', '침대'],
  ['To lie down', '눕다'],
  ['Sleep', '잠'],
  ['Bathroom', '화장실'],
  ['Book', '책'],
  ['To read', '읽다'],
  ['Refrigerator', '냉장고'],
  ['Milk', '우유'],
  ['Cup', '컵'],
  ['To be hot (temperature)', '뜨겁다'],
  ['Computer', '컴퓨터'],
  ['Email', '이메일'],
  ['Laptop computer', '노트북'],
  ['To charge', '충전하다'],
  ['To be important', '중요하다'],  
  ['Mirror', '거울'],
  ['Make-up product', '화장품'],
  ['To apply, to put on', '바르다'],
  ['Side, next to', '옆'],
  ['Married couple', '부부'],
  ['Invitation', '초대'],
  ['Afternoon', '오후'],
  ['Arrival', '도착'],
  ['Daughter', '딸'],
  ['Age', '나이'],
  ['To be the same, to be like', '같다'],
  ['Kindergarten', '유치원'],
  ['Relationship, relation', '사이'],
  ['Son', '아들'],
  ['Game', '게임'], 
  ['Day of the week', '요일'],
  ['Morning', '아침'],
  ['Lunch', '점심'],
  ['Rice, food, meal', '밥'],
  ['To feel angry, to get angry', '화나다'],
  ['Worry, concern', '걱정'],
  ['Why', '왜'],
  ['Study', '공부']
]
