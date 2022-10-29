document.addEventListener("DOMContentLoaded", (e) => {
    let displayArray = [];
    let operation = "";
    let calcMem1 = null;
    let calcMem2 = null;
    const btn1 = document.querySelector('#calc1');
    const btn2 = document.querySelector('#calc2');
    const btn3 = document.querySelector('#calc3');
    const btn4 = document.querySelector('#calc4');
    const btn5 = document.querySelector('#calc5');
    const btn6 = document.querySelector('#calc6');
    const btn7 = document.querySelector('#calc7');
    const btn8 = document.querySelector('#calc8');
    const btn9 = document.querySelector('#calc9');
    const btn0 = document.querySelector('#calc0');
    const btnDec = document.querySelector('#calcDecimal');
    const btnClear = document.querySelector('#calcOn');
    const btnPlus = document.querySelector("#opPlus");
    const btnSub = document.querySelector("#opMinus");
    const btnMultiply = document.querySelector("#opTimes");
    const btnDivide = document.querySelector("#opDiv");
    const btnEquals = document.querySelector('#opEquals');
    const display = document.querySelector('#display');

    function numberClick(number) {
        displayArray.push(number);
        display.innerHTML += number;
    }

    function opClick(operator) {
        // if calcmem1 full, add current working number to calcMem2, operate and store to calcMem1, and add operator to display
        if (calcMem1 != null) {
            calcMem2 = parseFloat(displayArray.join(""));
            calcMem1 = operate(calcMem1,calcMem2,operation); 
            display.innerHTML = calcMem1 + operator;
            displayArray = [];
            return;
        }
        //Save entry to calc mem 1, add operator to display, and clear display array
        calcMem1 = parseFloat(displayArray.join(""));
        display.innerHTML += operator;
        displayArray = [];
    }

    function clear() {
        displayArray = [];
        display.innerHTML = "";
        calcMem1 = null;
        calcMem2 = null;
    }

    function operate(num1, num2, operation) {
        switch (operation) {
            case "add":
                display.innerHTML = "";
                display.innerHTML = add(num1,num2);
                return add(num1,num2);
            case "subtract":
                display.innerHTML = "";
                display.innerHTML = subtract(num1,num2);
                return subtract(num1,num2);
            case "multiply":
                display.innerHTML = "";
                display.innerHTML = multiply(num1,num2);
                return multiply(num1,num2);
            case "divide":
                display.innerHTML = "";
                display.innerHTML = divide(num1,num2);
                return divide(num1,num2);
        }

    }

    function add(num1,num2) {
        return num1 + num2;
    }

    function subtract(num1,num2) {
        return num1 - num2;
    }

    function multiply(num1,num2) {
        return num1 * num2;
    }

    function divide(num1,num2) {
        if (num1 % num2 == 0) {
            return parseFloat(num1/num2)
        } else return parseFloat(num1/num2).toFixed(8);
    }

    
    document.addEventListener("click", (e) => {
        switch (e.target) {
            case btn1: 
                numberClick(1);
                break;
            case btn2:
                numberClick(2);
                break;
            case btn3:
                numberClick(3);
                break;
            case btn4:
                numberClick(4);
                break;
            case btn5:
                numberClick(5);
                break;
            case btn6:
                numberClick(6);
                break;
            case btn7:
                numberClick(7);
                break;
            case btn8:
                numberClick(8);
                break;
            case btn9:
                numberClick(9);
                break;
            case btn0:
                numberClick(0);
                break;
            case btnDec:
                if (displayArray.includes(".")) {
                    break;
                }
                numberClick("."); 
                break;
            case btnPlus:
                if (calcMem1 != null) {
                    opClick("+");
                    operation = "add";
                    break;
                }
                operation = "add";
                opClick("+");
                break;
            case btnSub:
                if (calcMem1 != null) {
                    opClick("-");
                    operation = "subtract";
                    break;
                }
                operation = "subtract";
                opClick("-");
                break;
            case btnMultiply:
                if (calcMem1 != null) {
                    opClick("x");
                    operation = "multiply";
                    break;
                }
                operation = "multiply";
                opClick("x");
                break;
            case btnDivide:
                if (calcMem1 != null) {
                    opClick("÷");
                    operation = "divide";
                    break;
                }
                operation = "divide";
                opClick("÷");
                break;
            case btnEquals:
                calcMem2 = parseFloat(displayArray.join(""));
                operate(calcMem1, calcMem2, operation);
                break;
        }
    });

    

    document.addEventListener("click", (e) => {
        if (e.target == btnClear) {
            clear();   
        }
    });

    
    
});