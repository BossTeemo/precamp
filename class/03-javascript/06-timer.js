let isStarted = false;

let auth = () => {
    if (isStarted === false) {
        //타이머가 작동중이 아닐때
        isStarted = true
        document.getElementById("finish").disabled = false
        const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
        document.getElementById("target").innerText = token;

        let time = 10
        let timer

        timer = setInterval(function () {
            if (time >= 0) {
                let min = Math.floor(time / 60)
                let sec = String(time % 60).padStart(2, "0")
                document.getElementById("timer").innerText = min + ":" + sec
                time = time - 1
            }
            else {
                document.getElementById("finish").disabled = true
                isStarted=false
                clearInterval(timer)
            }
        }, 1000)
    }
    else {
    //타이머가 작동중일때
}
}
     




//타이머 시작딜레이 없애는 방법1    
//타이머를 딜레이없이 실행시키기위해 외부에도 타이머 코드를 한번 더 작성해준다.
/*이 문제의 원인은 setInterval 함수가 지정된 시간 간격 이후에 처음 실행되는 방식 때문입니다.
따라서 setInterval을 호출하면서 동시에 타이머를 즉시 시작하려면,
setInterval 호출 전에 타이머를 시작하는 코드를 별도로 한 번 더 실행해주어야 합니다.*/


//     let min = Math.floor(time / 60);
//     let sec = String(time % 60).padStart(2, "0");
//     document.getElementById("timer").innerText = min + ":" + sec;
//     time = time - 1;

//     setInterval(function () {
//         if (time >= 0) {
//             let min = Math.floor(time / 60)
//             let sec = String(time % 60).padStart(2, "0")
//             document.getElementById("timer").innerText= min + ":" + sec
//             time = time - 1
//         }
//         else{
//             document.getElementById("finish").disabled=true
//         }
//     }, 1000)
// } 
//위의 방법은 타이머의코드가 두번 중복된다. 이를 해결하기위해 아래와같이 코드를 수정할 수 있다.



// 방법2
//  // Define a separate function for the timer logic
//  let updateTimer = () => {
//     if (time >= 0) {
//         let min = Math.floor(time / 60);
//         let sec = String(time % 60).padStart(2, "0");
//         document.getElementById("timer").innerText = min + ":" + sec;
//         time--;
//     } else {
//         document.getElementById("finish").disabled = true;
//     }
// }

// // Call the timer function immediately
// updateTimer();

// // Then call it every second
// setInterval(updateTimer, 1000);
// }