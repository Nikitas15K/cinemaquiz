const buttonsAct = document.querySelectorAll(".actors .button");
//console.log(buttonsAct.length);
const buttonsDir = document.querySelectorAll(".directors .button");
//console.log(buttonsDir.length);
const result = document.getElementById("result");

let total = 0;

let lengthAct = buttonsAct.length
for (let i = 0; i < lengthAct; i++) {
    let buttonA = buttonsAct[i];
    buttonA.addEventListener('click', showSuccessOrNotA);
}

let lengthDir = buttonsDir.length
for (let i = 0; i < lengthDir; i++) {
    let buttonD = buttonsDir[i];
    buttonD.addEventListener('click', showSuccessOrNotD);
}


function showSuccessOrNotA(event) {
    let button = event.target;
    let question = button.parentElement;
    let answers = question.querySelector('select');
    let answer = answers.options[answers.selectedIndex].value;
    //console.log(answer);
    if (answer === "error") {
        //if the user had selected right and then selected wrong
        if (answers.style.color === "green") {
            total = total - 2;
        }
        // if the user selected wrong for a second time, do nothing
        else if (answers.style.color === "red") {
        }
        // if user's first selected anser is wrong
        else {
            total = total - 1;
        }
        answers.style.color = "red";
        question.style.borderColor = "red";
        result.innerText = total;
    }

    else if (answer === "correct") {
        //if the user had selected wrong and then selected right
        if (answers.style.color === "red") {
            total = total + 2;
        }

        else {
            total = total + 1;
        }
        answers.style.color = "green";
        question.style.borderColor = "green";

        result.innerText = total;
    }

}



function showSuccessOrNotD(event) {

    let button = event.target;
    let answers = button.parentElement;
    if (answers.querySelector('div label input[type="radio"]:checked') !== null) {
        let answer = answers.querySelector('div label input[type="radio"]:checked').value;
        let question = answers.querySelector('div p');
        // console.log(answer);
        // console.log(answers);

        if (answer === "error") {
            //if the user had selected right and then selected wrong
            if (answers.style.color === "green") {
                total = total - 2;
            }
            // if the user selected wrong for a second time, do nothing
            else if (answers.style.color === "red") {
            }
            // if user's first selected answer is wrong
            else {
                total = total - 1;
            }
            answers.style.color = "red";
            answers.style.borderColor = "red";
            result.innerText = total;
        }
        else if (answer === "correct") {
            //if the user had selected wrong and then selected right
            if (answers.style.color === "red") {
                total = total + 2;
            }
            // if user's first selected answer is right
            else {
                total = total + 1;
            }
            answers.style.color = "green";
            answers.style.borderColor = "green";
            result.innerText = total;

        }

        question.style.color = "white";
    }
    else {
        button.innerHTML = "You have not answered this question.";
        setTimeout(function () {
            button.innerHTML = "Submit Answer"
        }, 2000)
    }

}



//     }

//     console.log(length);
// }
    // for (let j=0, j<length, j++){
    //    console.log(document.documentElement.parentElement);

    // }

//     if (answer1 === "error") {
//         document.getElementById("answers1").style.color = "red";
//     }
//     else if (answer1 === "correct") {
//         document.getElementById("answers1").style.color = "green";
//     }

//     let answer2 = document.querySelector('option[name="js_package_manager"]:checked').value;
//     if (answer2 === "error") {
//         document.getElementById("answers2").style.color = "red";
//     }
//     else if (answer2 === "correct") {
//         document.getElementById("answers2").style.color = "green";
//     }

//     let answer3 = document.querySelector('option[name="quality_tool"]:checked').value;
//     if (answer3 === "error") {
//         document.getElementById("answers3").style.color = "red";
//     }
//     else if (answer3 === "correct") {
//         document.getElementById("answers3").style.color = "green";
//     }



// }


