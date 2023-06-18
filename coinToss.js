const heads=document.getElementById('heads');
const tails=document.querySelector('.tails');

heads.addEventListener('click', head);
tails.addEventListener('click', tail);

function head(){
    let guess='heads';
    toss(guess);
}

function tail(){
    let guess='tails';
    toss(guess);
}

function toss(guess){
    const randomNumber = Math.floor(Math.random()*100)+1;
    const result = randomNumber < 50? 'heads' : 'tails';

        if(guess!=='reset'){
    
            const tossResult=(guess === result ? `You win!` : `You lose!`);
            // return tossResult;
            if(tossResult===`You win!`)
            {
                document.getElementById('green').innerHTML=tossResult;
                document.querySelector('.tossresult').innerText='Tossed-side';
                document.querySelector('.computerMove').innerHTML=`<img src='./img/${result}.png' class='img'>`;
                
               
            }else{
                document.getElementById('red').innerHTML=tossResult;
                document.querySelector('.tossresult').innerText='Tossed-side';
                document.querySelector('.computerMove').innerHTML=`<img src='./img/${result}.png' class='img'>`;
                
            }
        }else{
                document.getElementById('green').innerHTML='';
                document.getElementById('red').innerHTML='';
                document.querySelector('.tossresult').innerText='';
                document.querySelector('.computerMove').innerHTML='';
            }
    }