//declare the variables
let title=document.querySelector('.title')
let turn='x'
let squares=[];

//function writing X or O
function game(id){
    let element=document.getElementById(id);
    if(turn==='x' && element.innerHTML==''){
        element.innerHTML="X";
        turn='o'
        title.innerHTML='its O turn'
    }
    else if(turn==='o' && element.innerHTML==''){
        element.innerHTML="O";
        turn='x'
        title.innerHTML='its X turn'
    }
    winner();
}


//function for select the winner
function winner(){
    for(let i=1;i<10;i++){
        squares[i]=document.getElementById('sq'+i).innerHTML;
    }
    if(squares[1] ==squares[2] && squares[2]==squares[3] && squares[1]!=''){
        end(1,2,3);
    }
    else if(squares[4]==squares[5]&&squares[5]==squares[6] &&squares[4]!=''){
        end(4,5,6);
    }
    else if(squares[7]==squares[8]&&squares[8]==squares[9] &&squares[7]!=''){
        end(7,8,9);
    }
    else if(squares[1]==squares[4]&&squares[4]==squares[7] &&squares[1]!=''){
        end(1,4,7);
    }
    else if(squares[2]==squares[5]&&squares[5]==squares[8] &&squares[2]!=''){
        end(2,5,8);
    }
    else if(squares[3]==squares[6]&&squares[6]==squares[9] &&squares[3]!=''){
        end(3,6,9);
    }
    else if(squares[1]==squares[5]&&squares[5]==squares[9] &&squares[1]!=''){
        end(1,5,9);
    }
    else if(squares[3]==squares[5]&&squares[5]==squares[7] &&squares[3]!=''){
        end(3,5,7);
    }
    let i=1;
    if(squares[i]!='' && squares[i+1]!='' && squares[i+2]!='' &&squares[i+3]!='' &&squares[i+4]!='' 
    && squares[i+5]!='' && squares[i+6]!='' && squares[i+7]!='' && squares[i+8]!=''   
    ){
        title.innerHTML='There is no winner!'
        title.style.background='red'
        let reloadbtn=document.getElementById('reload');
        reloadbtn.style.display='inline-block'
    }
}


//function to show winner
function end(num1,num2,num3){
    let win=squares[num1]
    let result= document.getElementById('result');
    // title.innerHTML=`the winner is ${squares[num1]}`
    document.getElementById('sq'+num1).style.background='green';
    document.getElementById('sq'+num2).style.background='green';
    document.getElementById('sq'+num3).style.background='green';

    title.innerHTML='reload will begin'
    setInterval(function(){
        title.innerHTML+='.',1000
    },1000)
    setTimeout(function(){
        location.reload()
    },3000)
    showwinner()

    function showwinner(){
        // console.log('from show winner')
        result.style.display='block'
        result.innerHTML=`the winner is ${win}`

    }
}
