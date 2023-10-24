//  Notes
//  If there's an apostrophe in an entry, surround it with double quotes, like this:
//  ["Washing one's face", 'korean'],
//
//  When adding entries, be sure to make each entry end with a comma except for the last one
//
//  To deactivate a single line from the list below, precede it with '//', like this:
//  // ['english', 'korean'],
//
//  To deactivate a section from the list below, delimit it with '/*' and '*/', like this:
//  /*
//  ['english1', 'korean1'],
//  ['english2', 'korean2'],
//  */

const listFromFile = [
  ['To get into an accident', '사고가 나다'],
  ['To get caught', '들키다 / 잡히다'],
  ['To miss the train', '기차를 놓치다'],
  ['To fall off a chair', '의자에서 떨어지다'],
  ['To get hit by a car', '차에 치이다'],
  ['To say/tell/speak/talk', '말하다'],
  ['To die', '죽다'],
  ['To cry', '울다'],
  ['Trouble, effort, hard work', '수고'],
  ['Keep up the good work', '수고하세요'],
  ['You worked hard', '수고하셨습니다'],
  ['Your effort has been a lot', '수고 많으셨습니다'],
  ['To be smart, clever', '똑똑하다'],
  ['To do something well, to be good at something, to do something often, to be kind to someone', '잘하다'],
  ['To be curious', '궁금하다'],
  ['To be awkward', '어색하다'],
  ['To look forward to, to anticipate, to expect', '기대하다'], 
  ['To be hard, to be difficult, to be tough', '힘들다'],
  ['Younger sister', '여동생'],
  ['Doorbell', '초인종'],
  ['To press, to push', '누르다'],
  ['Answer, reply', '답'],
  ['To fall asleep', '잠들다'], 
  ['To like / to enter one\'s heart', '마음에 들다'],
  ['Alone, by oneself', '혼자'],
  ['To depart, to leave', '출발하다'],
  ['To play soccer', '축구를 하다'],
  ['Zoo', '동물원'],
  ['Ball', '공'],
  ['To be cancelled', '취소되다'],
  ['Backpacking trip', '배낭여행'],
  ['Refrigerator', '냉장고'],
  ['Player', '선수'],
  ['Customer', '손님'],
  ['Continuously', '계속'],
  ['Recently', '최근에'],
  ['To mull over, to contemplate', '고민하다'],
  ['To call, to invite', '부르다'],
  ['To solve', '풀다'],
  ['To pass by', '지나가다'],
  ['To work part-time', '아르바이트하다'],
  ['To quit', '그만두다'],
  ['Anything, doesn\'t matter what', '아무거나'],
  ['Anywhere, any place', '아무 데나'],
  ['First place winner', '일 등'],
  ['Theme park', '놀이공원'],
  ['Criminal, culprit', '범인'],
  ['To fall in love', '반하다'],
  ['To recommend', '추천하다'],
  ['To run', '달려가다'],
  ['To drop something', '떨어뜨리다'],
  ['To breakdown, to stop working', '고장 나다'],
  ['News', '소식'],
  ['Actor/Actress', '배우'],
  ['To try and listen, to have heard', '들어 보다'],
  ['Many, a lot of', '여러 가지'],
  ['Meaning', '뜻'],
  ['To come and hang out', '놀러 오다'],
  ['Website', '웹사이트'], 
  ['Related to writing or letter', '문'],
  ['Culture', '문화'],
  ['Document, papers', '문서'],
  ['Sentence', '문장'],
  ['Letter, character', '문자'],
  ['Literature', '문학'],
  ['Grammar', '문법'],
  ['Order', '주문'],
  ['Thesis, research paper', '논문'],
  ['Cultural assets, cultural properties', '문화재'],
  ['Related to gathering or gather', '화'],
  ['Company', '회사'],
  ['Employee/worker', '회사원'],
  ['School employee', '교직원'],
  ['Meeting', '회의'],
  ['Meeting/conference room #1', '회의실'],
  ['Big/main conference room', '대회의실'],
  ['Meeting/conference room #2', '회의장'],
  ['Company dinner', '회식'],
  ['Accounting', '회계'],
  ['Calculator', '계산기'],
  ['Counter', '계산대'],
  ['Calculation', '계산'],
  ['Accountant', '회계사'],
  ['Accounting department', '회계 부서'],
  ['Membership fee/dues', '회비'],
  ['Expense, cost', '비용'],
  ['Member/membership', '회원'],
  ['Foreign language conversation', '회화'],
  ['Society', '사회'],
  ['National Assembly', '국회'],
  ['Competition, tournament', '대회'],
  ['College, university', '대학교'],
  ['(Large) public park', '대공원'],
  ['Church', '교회'],
  ['Religion', '종교'],
  ['Buddhist temple', '절'],
  ['Catholic church/cathedral', '성당'],
  ['Club, society', '동호회'],
  ['To suit', '어울리다'],
  ['To be thick, heavy', '진하다'],
  ['To need', '필요하다'],
  ['To be boring', '지루하다'],
  ['Town, neighborhood', '동네'],
  ['To clean (up)', '청소하다'],
  ['Move', '이사'],
  ['Makeup', '화장'],
  ['By any chance', '혹시'],
  ['Any, what, which, what kind of', '어떤'], 
  ['To bake', '굽다'],
  ['To pass by', '지나가다'], 
  ['In a flash, dramatically', '확'], 
  ['To memorize', '외우다'],
  ['To be blinded by light', '눈이 부시다'],
  ['To leave', '떠나다'], 
  ['To be thankful', '고맙다'], 
  ['Rumor', '소문'],
  ['To congratulate', '축하하다'],
  ['To get married', '결혼하다'],
  ['Lyrics', '가사'],
  ['To drop', '떨어뜨리다'],
  ['To lose', '잃다'],
  ['To be regrettable, disappointing','아쉽다'],
  ['To fall down','넘어지다'],
  ['To run', '달리다'],
  ['To eat/drink', '드시다'],
  ['To initiate a conversation', '말을 걸다'],
  ['Mosquito', '모기'],
  ['To return', '반납하다'],
  ['To tidy up, to clean up', '치우다'],
  ['Event, function, ceremony', '행사'],
  ['Traffic is back up', '길이 막히다'],
  ['Something comes up', '일이 생기다'],
  ['To bring, to pack and come', '싸 오다'],
  ['To get around, to go around', '돌아다니다'],
  ['To take a walk, to stroll', '산책하다'],
  ['Delivery', '배달'],
  ['To buy, to buy and come/bring', '사 오다'],
  ['Video', '동영상'],
  ['To be dangerous', '위험하다'],
  ['Suddenly', '갑자기'],
  ['Personally, directly', '직접'],
  ['Definitely, certainly, surely', '꼭'],
  ['Perfume', '향수'],
  ['To take, to go by (transportation method)', '타고 가다'],
  ['Side dish', '반찬'],
  ['Will use, intend to use', '쓸 거다'],
  ['Will be late, intend to be late', '늦을 거다'],
  ['Meal', '식사'],
  ['Restaurant', '식당'],
  ['Food item, groceries', '식품'], 
  ['Dining table', '식탁'],
  ['Food', '음식'],
  ['Restaurant (as a place of business in formal situations)', '음식점'],
  ['Snack (between meals)', '간식'],
  ['Flour-based food (like ramen, tteokbokki', '분식'],
  ['To eat out, to dine out', '외식'],
  ['Overeating, excessive eating', '과식'],
  ['Dessert', '후식'],
  ['Sample food, food sampling', '시식'],
  ['Related to food & to eat', '식'],
  ['Have you eaten?', '식사하셨어요?'],
  ['Restaurant (loan word, more expensive/fancy than 식당', '레스토랑'],
  ['Table', '탁자'],
  ['Table tennis', '탁구'],
  ['Snack (cookies, chips, etc)', '과자'],
  ['Dessert (loan word)', '디저트'],
  ['To walk (somewhere)', '걸어가다'],
  ['To walk', '걷다'],
  ['To build', '짓다'],
  ['Floor', '바닥'],
  ['Secretly', '몰래'],
  ['To order', '시키다'],
  ['Comic book', '만화책'],
  ['Anyway, in any case, regardless', '어차피'],
  ['Very, extremely', '굉장히'],
  ['Last weekend', '지난주말'],
  ['To travel, traveling', '여행을 가다'],
  ['To work a part-time job', '아르바이트를 하다'],
  ['To do something for someone', '해 주다'],
  ['Verb', '동사'],
  ['To remember, to memorize', '기억하다'],
  ['Pronunciation, articulation', '발음'],
  ['For now, for the time being, first, first of all', '우선'],
  ['Only a few, just a few', '몇 개만'],
  ['To  challenge', '도전하다'],
  ['Moutain', '산'],
  ['Sneakers, sports shoes', '운동화'],
  ['Comparison', '비교'],
  ['To compare', '비교하다'],
  ['To hit, to play an instrument', '치다'],
  ['You (casual + SM)', '네가'],
  ['I (casual + SM)', '내가']
  ]
  
