for(let count=0; count<persons.length; count++){
    if(persons[count].age>=19){
        console.log("성인입니다")
    }else{
        console.log("미성년자입니다")
    }
}
// VM1878:5 미성년자입니다
// VM1878:3 성인입니다
// VM1878:5 미성년자입니다
// VM1878:3 성인입니다
// VM1878:5 미성년자입니다
// undefined
for(let count=0; count<persons.length; count++){
    if(persons[count].age>=19){
        console.log(persons[count].name+"님은 성인입니다")
    }else{
        console.log(persons[count].name+"님은 미성년자입니다")
    }
}
// VM2044:5 철수님은 미성년자입니다
// VM2044:3 영희님은 성인입니다
// VM2044:5 도우너님은 미성년자입니다
// VM2044:3 그루트님은 성인입니다
// VM2044:5 도비님은 미성년자입니다
// undefined

for(i=0; i<fruits.length; i++){
    console.log( `${fruits[i].number} ${fruits[i].title}`)
}
// VM2114:2 1 레드향
// VM2114:2 2 샤인머스캣
// VM2114:2 3 산청딸기
// VM2114:2 4 한라봉
// VM2114:2 5 사과
// VM2114:2 6 애플망고
// VM2114:2 7 딸기
// VM2114:2 8 천혜향
// VM2114:2 9 과일선물세트
// VM2114:2 10 귤
// undefined
for(i=0; i<fruits.length; i++){
    console.log( '${fruits[i].number} ${fruits[i].title}')
}
// 10VM2126:2 ${fruits[i].number} ${fruits[i].title}
// undefined
for(i=0; i<fruits.length; i++){
    console.log( `과일 차트 ${fruits[i].number}위는 ${fruits[i].title}입니다`)
}
// VM2204:2 과일 차트 1위는 레드향입니다
// VM2204:2 과일 차트 2위는 샤인머스캣입니다
// VM2204:2 과일 차트 3위는 산청딸기입니다
// VM2204:2 과일 차트 4위는 한라봉입니다
// VM2204:2 과일 차트 5위는 사과입니다
// VM2204:2 과일 차트 6위는 애플망고입니다
// VM2204:2 과일 차트 7위는 딸기입니다
// VM2204:2 과일 차트 8위는 천혜향입니다
// VM2204:2 과일 차트 9위는 과일선물세트입니다
// VM2204:2 과일 차트 10위는 귤입니다
// undefined