const get =(target)=>{
    return document.querySelector(target);
}

const getAll =(target)=>{
    return document.querySelectorAll(target);
}

const operators = getAll('.operator');
const result = get('.result');
const numbers = getAll('.number');
const clearButton = get('.ac');
const answerButton = get('.answer');

let first = '';
let second = '';
let total = '';
let operator ='';

const reset =()=>{
    first ='';
    second='';
    operator='';
}

const clear = ()=>{
    result.innerText ='';
    reset();
}

clearButton.addEventListener('click',()=>{
    clear();
})

numbers.forEach((number) => {
    number.addEventListener('click',(e)=>{
        if(e.target.className !== 'number'){
            return;
        }
        if(operator===''){
            first = first + e.target.innerText;
            console.log('first' + first);
            result.innerText=first;
        }else{
            second = second + e.target.innerText;
            console.log('second' + second);
            result.innerText=second;
        }
    })
})

operators.forEach((op)=>{
    op.addEventListener('click',(e)=>{
        if(e.target.className !== 'operator'){
            return
        }
        if(total !== '' && first == ''){
            first = total;
        }
        operator = e.target.innerText;
        result.innerText=operator;
    })
})

answerButton.addEventListener('click',()=>{
    switch(operator){
        case '+' :
            total = Number(first) + Number(second);
            break;
        case '-' :
            total = Number(first) - Number(second);
            break;
        case '/' :
            total = Number(first) / Number(second);
            break;
        case '*' :
            total = Number(first) * Number(second);
            break;
    }
    result.innerText = total;
    reset();
})