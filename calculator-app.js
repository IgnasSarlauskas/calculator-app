// store input variable
let result = "";

// calculator screen element
let outputEl = document.querySelector(".output");

// buttons
let btnsAll = document.querySelectorAll(".btn");
let clearBtn = document.querySelector(".c");
let eqBtn = document.querySelector(".eq");


// register clicks
btnsAll.forEach(function (btn) {
    btn.addEventListener("click", function () {
        if(btn.classList.contains("prod")){
            addToResult("*");
            return;
        }
        addToResult(btn.innerText);
    });
})

clearBtn.addEventListener("click", function () {
    outputEl.value = "";
    result = "";
});

eqBtn.addEventListener("click", function () {
    if (result == "") {
        return;
    }
    outputEl.value = eval(result.toString());
});

// Adding symbols (numbers, math operators)
// show result variable on the screen
function addToResult(textToAdd) {
    result = result + textToAdd;
    outputEl.innerText = result;
}

