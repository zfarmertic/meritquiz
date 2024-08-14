// let right = document.getElementsByClassName("right")
// const newRight = Array.from(right)
// const total = []

// newRight.forEach((element, index)=>{
//     const num = (element.getAttribute('data-num'))
//     element.addEventListener('click', ()=>{
//         total[num] = true

//         console.log(total)
//     })
   
// })
let right = document.getElementsByClassName('right')
let answers = [...right]
console.log(answers)
const checker = (event) =>{
    for(let i = 0; i<answers.length; i++){
        let answerArray = []
        let userAnswer = event.target.value;
        console.log(userAnswer);
        if(userAnswer === answers[i]){
            answerArray.push(i)
            console.log(answerArray)
        }
        else{
            return null
        }
        console.log(answerArray)
    
    }
    
}


const getUserInput = (radioNamed) =>{
let radioName = document.getElementsByName(radioNamed)
    for(let i = 0; i<radioName.length; i++){
        radioName[i].addEventListener('change', checker)
    }
}

getUserInput("nigeria")
getUserInput("ghana")
getUserInput("cotonou")
getUserInput("asia")
getUserInput("cyprus")
