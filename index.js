let countHome = document.getElementById("homeNumber")
let countGuest = document.getElementById("guestNumber")
let count = 0
let countG = 0

function add1PointH(){
    count += 1
    countHome.textContent = count
}

function add2PointsH(){
    count += 2
    countHome.textContent = count
}

function add3PointsH(){
    count += 3
    countHome.textContent = count
}

function add1PointG(){
    countG += 1
    countGuest.textContent = countG
}

function add2PointsG(){
    countG += 2
    countGuest.textContent = countG
}

function add3PointsG(){
    countG += 3
    countGuest.textContent = countG
}

function startGame(){
    count = 0
    countG = 0
    countGuest.textContent = countG
    countHome.textContent = count
}

//if (count>countG){
//    document.getElementById("homeNumber").style.color=yellow;
 //   console.log(count) }