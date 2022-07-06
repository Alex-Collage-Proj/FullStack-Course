var typee = document.querySelector('#typee');
var howClose = document.querySelector('#howClose');
var howMany = document.querySelector('#howMany');
var day = document.querySelector('#day');
var postion = document.querySelector('#postion');
var where = document.querySelector('#where');

var tot = 0;
console.log(tot);
function myFunction() {
    var value0 = Number(typee.options[typee.selectedIndex].value);
    var value1 = Number(howClose.options[howClose.selectedIndex].value);
    var value2 = Number(howMany.options[howMany.selectedIndex].value);
    var value3 = Number(day.options[day.selectedIndex].value);
    var value4 = Number(postion.options[postion.selectedIndex].value);
    var value5 = Number(where.options[where.selectedIndex].value);

    if (value0 === 0 || value1 === 0 || value2 === 0 || value3 === 0 || value4 === 0 || value5 === 0) {
        console.log("תבחרו  את כל השדות");
        resultNumber2.innerText = "תבחרו את כל השדות";
    }
    else {
        tot = value0 + value1 + value2 + value3 + value4 + value5;
        console.log(tot);
        resultNumber2.innerText = tot;
    }
}

document.getElementById('accept').onclick = function () { myFunction() };

////////////////////////////////////////////////////////////////////////////////// teacher way

const SelectInputs = document.querySelectorAll("select");
const resultNumber = document.querySelector("#resultNumber");
//console.log(SelectInputs);

let result = 0;

const renderResult = () => {
    result = 0;
    SelectInputs.forEach((select) => {
        result += Number(select.value);
    });
    resultNumber.innerText = result;
};

SelectInputs.forEach((select) => {
    select.addEventListener("input", renderResult);
});

