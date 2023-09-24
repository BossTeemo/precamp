// let time=10
// // // undefined
// setInterval(function(){
//     console.log(time)
//         time=time-1},1000)
// // VM1006:2 10
// // VM1006:2 9
// // VM1006:2 8
// // VM1006:2 7
// // VM1006:2 6
// // VM1006:2 5
// // VM1006:2 4
// // VM1006:2 3
// // VM1006:2 2
// // VM1006:2 1
// // VM1006:2 0 
// // VM1006:2 -1
// // VM1006:2 -2
// // VM1006:2 -3

// setInterval(function(){
//     if(time >=0){
//         console.log(time)
//         time=time-1   
// }
// },1000)
// // VM1236:3 10
// // VM1236:3 9
// // VM1236:3 8
// // VM1236:3 7
// // VM1236:3 6
// // VM1236:3 5
// // VM1236:3 4
// // VM1236:3 3
// // VM1236:3 2
// // VM1236:3 1
// // VM1236:3 0

let time = 180
setInterval(function () {
    if (time >= 0) {
        let min = Math.floor(time / 60)
        let sec = String(time % 60).padStart(2, "0")
        console.log(min + ":" + sec)
        time = time - 1
    }
}, 1000)
