
let x_move = 150;
let y_move = 150;

let x_food = Math.floor(Math.random() * 300 / 25) * 25;
let y_food = Math.floor(Math.random() * 300 / 25) * 25;

const foodPosition = { x: x_food, y: y_food }
let headPosition = { x: x_move, y: y_move }

let snakeHeah = document.getElementById("snake-head");
let boxMoving = document.getElementById("box-moving");
let snakeFood = document.getElementById("snake-food");
let result = document.getElementById("result");

let push = document.getElementById("ptn0");

let score = 0
snakeFood.style.cssText = `top: ${foodPosition.y}px; left: ${foodPosition.x}px;`;

let arr = [headPosition]

// var condition = false
var lastbutton = ""
let num = 1
var speed = 250


function select(elem){
    speed = 1 / elem.value * 250
}



function interval(callbacksnakemove) {
    callbacksnakemove()
 
    if (num === 1) {
        let movement1 = setInterval(() => {
            if (num === 1) {
                callbacksnakemove()
            } else {

                clearInterval(movement1);

            }
        }, speed);

    } else if (num === 2) {
        let movement2 = setInterval(() => {
            if (num === 2) {
                callbacksnakemove()
            } else {
                // callbacksnakemove()
                clearInterval(movement2);

            }
        }, speed);
    } else if (num === 3) {
        let movement3 = setInterval(() => {
            if (num === 3) {
                callbacksnakemove()
            } else {
                // callbacksnakemove()
                clearInterval(movement3);

            }
        }, speed);
    } else if (num === 4) {
        let movement4 = setInterval(() => {
            if (num === 4) {
                callbacksnakemove()
            } else {
                // callbacksnakemove()
                clearInterval(movement4);

            }
        }, speed);
    } else if (num === 5) {
        let movement5 = setInterval(() => {
            if (num === 5) {
                callbacksnakemove()
            } else {
                // callbacksnakemove()
                clearInterval(movement5);

            }
        }, speed);
    } else if (num === 6) {
        let movement6 = setInterval(() => {
            if (num === 6) {
                callbacksnakemove()
            } else {
                // callbacksnakemove()
                clearInterval(movement6);

            }
        }, speed);
    } else if (num === 7) {
        let movement7 = setInterval(() => {
            if (num === 7) {
                callbacksnakemove()
            } else {
                // callbacksnakemove()
                clearInterval(movement7);

            }
        }, speed);
    }


}


function move(element) {
    if (num >= 7) {
        num = 0
    }

    if (element.id == "btn1" && lastbutton != "btn1" && lastbutton != "btn2") {
        lastbutton = "btn1"
        // condition = !condition
        // snakeMove(() => { headPosition.y -= 25 })
        num++
        interval(() => {
            snakeMove(() => { headPosition.y -= 25 })
            // refreshPage()
        })

    } else if (element.id == "btn2" && lastbutton != "btn2" && lastbutton != "btn1") {
        lastbutton = "btn2"
        // condition = !condition
        // snakeMove(() => { headPosition.y += 25 })
        num++
        interval(() => {
            snakeMove(() => { headPosition.y += 25 })
            // refreshPage()
        })

    }
    else if (element.id == "btn3" && lastbutton != "btn3" && lastbutton != "btn4") {
        lastbutton = "btn3"
        // condition = !condition
        // snakeMove(() => { headPosition.y -= 25 })
        num++
        interval(() => {
            snakeMove(() => { headPosition.x -= 25 })
            // refreshPage()
        })

    }
    else if (element.id == "btn4" && lastbutton != "btn4" && lastbutton != "btn3") {
        lastbutton = "btn4"
        // condition = !condition
        // snakeMove(() => { headPosition.x += 25 })
        num++
        interval(() => {
            snakeMove(() => { headPosition.x += 25 })
            // refreshPage()
        })

    } else if (element.id == "btn0") {
        lastbutton = "btn0"
        num = 8
        interval(() => {})
    }














}

function refreshPage() {
    let newEeadPosition = { ...headPosition }
    arr.unshift(newEeadPosition)
    for (let i = 1; i < arr.length ; i++) {

        if (arr[i].x == arr[0].x && arr[i].y == arr[0].y && arr.length != 2) {
            num = 8
            result.innerHTML = `you lose`
            interval(() => {})
            setTimeout(() => {
                  window.location.reload()
               
            }, 3000);
        }
    }
    if (headPosition.x == foodPosition.x && headPosition.y == foodPosition.y) {

        score += 1
        result.innerHTML = `${score}`
        for (const element of arr) {

            boxMoving.innerHTML += `<div class="snake-head"  style='left: ${element.x}px; top: ${element.y}px;'></div>`
        }
        
        foodPosition.x = Math.floor(Math.random() * 300 / 25) * 25;
        foodPosition.y = Math.floor(Math.random() * 300 / 25) * 25;
      
            for (let i = 0; i < arr.length ; i++) {

                if (arr[i].x == foodPosition.x && arr[i].y ==foodPosition.y) {
                    foodPosition.x = Math.floor(Math.random() * 300 / 25) * 25;
                    foodPosition.y = Math.floor(Math.random() * 300 / 25) * 25;
                }
            }

        
       
       


    } else {
        boxMoving.innerHTML = ` <div class="snake-food" id='snake-food'   style='left: ${foodPosition.x}px; top: ${foodPosition.y}px;'></div>`
        arr.pop()
        for (const element of arr) {

            boxMoving.innerHTML += `<div class="snake-head"  style='left: ${element.x}px; top: ${element.y}px;'></div>`
        }

    }



}


function snakeMove(callback) {

    callback()

    sheckMove()

    snakeHeah.style.cssText = `top: ${headPosition.y}px; left: ${headPosition.x}px;`
    refreshPage()
}
function sheckMove() {
    if (headPosition.x === -25) {
        headPosition.x = 275
    } else if (headPosition.x === 300) {
        headPosition.x = 0
    } else if (headPosition.y === -25) {
        headPosition.y = 275
    } else if (headPosition.y === 300) {
        headPosition.y = 0
    }
}



document.getElementById("restart").addEventListener("click", () => {
    window.location.reload()
})
