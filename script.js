let string=" "
let buttons = document.querySelectorAll('.button')
Array.from(buttons).forEach(button=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML=='=')
        {
            string=eval(string);
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='AC')
        {
            string=" ";
            document.querySelector('input').value=string;
        }
        else{
        console.log(e.target)
        string=string+e.target.innerHTML;
        document.querySelector('input').value=string;
        }
    })
})
let buttonsAC = document.querySelectorAll('.buttonAC')
Array.from(buttonsAC).forEach(buttonAC=>{
    buttonAC.addEventListener('click', (e)=>{
        if(e.target.innerHTML=='AC')
        {
            string="";
            document.querySelector('input').value=string;
        }
        else{
        console.log(e.target)
        string=string-e.target.innerHTML;
        document.querySelector('input').value=string;
        }
    })
})
let buttonsdiv = document.querySelectorAll('.buttondiv')
Array.from(buttonsdiv).forEach(buttondiv=>{
    buttondiv.addEventListener('click', (e)=>{
        console.log(e.target)
        string=string+e.target.innerHTML;
        document.querySelector('input').value=string;
    })
})

let buttonsper = document.querySelectorAll('.buttonper')
Array.from(buttonsper).forEach(buttonper=>{
    buttonper.addEventListener('click', (e)=>{
        console.log(e.target)
        string=string+e.target.innerHTML;
        document.querySelector('input').value=string;
    })
})
let buttonsadd = document.querySelectorAll('.buttonadd')
Array.from(buttonsadd).forEach(buttonadd=>{
    buttonadd.addEventListener('click', (e)=>{
        console.log(e.target)
        string=string+e.target.innerHTML;
        document.querySelector('input').value=string;
    })
})
let buttonseq = document.querySelectorAll('.buttoneq')
Array.from(buttonseq).forEach(buttoneq=>{
    buttoneq.addEventListener('click', (e)=>{
        if(e.target.innerHTML=='=')
        {
            string=eval(string);
            document.querySelector('input').value=string;
        }
        else{
        console.log(e.target)
        string=string+e.target.innerHTML;
        document.querySelector('input').value=string;
        }
    })
})
let buttonsmul = document.querySelectorAll('.buttonmul')
Array.from(buttonsmul).forEach(buttonmul=>{
    buttonmul.addEventListener('click', (e)=>{
        console.log(e.target)
        string=string+e.target.innerHTML;
        document.querySelector('input').value=string;
    })
})
let buttonsmin = document.querySelectorAll('.buttonmin')
Array.from(buttonsmin).forEach(buttonmin=>{
    buttonmin.addEventListener('click', (e)=>{
        console.log(e.target)
        string=string+e.target.innerHTML;
        document.querySelector('input').value=string;
    })
})
let buttons1 = document.querySelectorAll('.button1')
Array.from(buttons1).forEach(button1=>{
    button1.addEventListener('click', (e)=>{
        console.log(e.target)
        string=string+e.target.innerHTML;
        document.querySelector('input').value=string;
    })
})
let buttons0 = document.querySelectorAll('.button0')
Array.from(buttons0).forEach(button0=>{
    button0.addEventListener('click', (e)=>{
        console.log(e.target)
        string=string+e.target.innerHTML;
        document.querySelector('input').value=string;
    })
})
let buttonsdot = document.querySelectorAll('.buttondot')
Array.from(buttonsdot).forEach(buttondot=>{
    buttondot.addEventListener('click', (e)=>{
        console.log(e.target)
        string=string+e.target.innerHTML;
        document.querySelector('input').value=string;
    })
})