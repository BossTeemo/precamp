const fruits = [
    { number: 1, title: "레드향" },
    { number: 2, title: "샤인머스캣" },
    { number: 3, title: "산청딸기" },
    { number: 4, title: "한라봉" },
    { number: 5, title: "사과" },
    { number: 6, title: "애플망고" },
    { number: 7, title: "딸기" },
    { number: 8, title: "천혜향" },
    { number: 9, title: "과일선물세트" },
    { number: 10, title: "귤" }
];
// undefined

fruits[0].number + " " + fruits[0].title
fruits[1].number + " " + fruits[1].title
fruits[2].number + " " + fruits[2].title
fruits[3].number + " " + fruits[3].title
fruits[4].number + " " + fruits[4].title
fruits[5].number + " " + fruits[5].title
fruits[6].number + " " + fruits[6].title
fruits[7].number + " " + fruits[7].title
fruits[8].number + " " + fruits[8].title
fruits[9].number + " " + fruits[9].title
// '10 귤'

fruits[0].number + " " + fruits[0].title+
fruits[1].number + " " + fruits[1].title+
fruits[2].number + " " + fruits[2].title+
fruits[3].number + " " + fruits[3].title+
fruits[4].number + " " + fruits[4].title+
fruits[5].number + " " + fruits[5].title+
fruits[6].number + " " + fruits[6].title+
fruits[7].number + " " + fruits[7].title+
fruits[8].number + " " + fruits[8].title+
fruits[9].number + " " + fruits[9].title
// '1 레드향2 샤인머스캣3 산청딸기4 한라봉5 사과6 애플망고7 딸기8 천혜향9 과일선물세트10 귤'


for(i=0; i<10; i++){
    console.log( fruits[i].number + " " + fruits[i].title);
}
// VM3696:2 1 레드향
// VM3696:2 2 샤인머스캣
// VM3696:2 3 산청딸기
// VM3696:2 4 한라봉
// VM3696:2 5 사과
// VM3696:2 6 애플망고
// VM3696:2 7 딸기
// VM3696:2 8 천혜향
// VM3696:2 9 과일선물세트
// VM3696:2 10 귤
// undefined