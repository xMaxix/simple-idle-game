// let amount = 10;
// let multi = 1;
// let speed = 1000;
// let speedcost = 1000;
// let gen1 = 0;
// let gen1gen = 0;
// let gen1cost = 10;
// let multi1=1;
// let gen2 = 0;"
// let gen2gen = 0;
// let gen2cost = 100;"
// let multi2=1;
// for(let i = 0; i<localStorage.length-1;i++){
//     if(parseInt(localStorage.key(i))===NaN){
//         localStorage.clear();
//     }
// }
if(localStorage.getItem("issaved") === null){
    localStorage.clear();
    localStorage.setItem("issaved",1)
    localStorage.setItem("amount", 10);
    localStorage.setItem("multi", 1);
    localStorage.setItem("speed", 1000);
    localStorage.setItem("speedcost", 1000);
    localStorage.setItem("gen1", 0);
    localStorage.setItem("gen1gen", 0);
    localStorage.setItem("gen1cost", 10);
    localStorage.setItem("multi1", 1);
    localStorage.setItem("gen2", 0);
    localStorage.setItem("gen2gen", 0);
    localStorage.setItem("gen2cost", 100);
    localStorage.setItem("multi2", 1);
    localStorage.setItem("gen3", 0);
    localStorage.setItem("gen3gen", 0);
    localStorage.setItem("gen3cost", 100000);
    localStorage.setItem("multi3", 1);
    localStorage.setItem("pres1", 1);

}

let amount = parseInt(localStorage.getItem("amount"));  
let multi = parseInt(localStorage.getItem("multi"));    
let speed = parseInt(localStorage.getItem("speed"));    
let speedcost = parseInt(localStorage.getItem("speedcost"));
    
let gen1 = parseInt(localStorage.getItem("gen1"));  
let gen1gen = parseInt(localStorage.getItem("gen1gen"));    
let gen1cost = parseInt(localStorage.getItem("gen1cost"));  
let multi1=parseInt(localStorage.getItem("multi1"));
    
let gen2 = parseInt(localStorage.getItem("gen2"));
let gen2gen = parseInt(localStorage.getItem("gen2gen"));    
let gen2cost = parseInt(localStorage.getItem("gen2cost"));  
let multi2=parseInt(localStorage.getItem("multi2"));

let gen3 = parseInt(localStorage.getItem("gen3"));
let gen3gen = parseInt(localStorage.getItem("gen3gen"));
let gen3cost = parseInt(localStorage.getItem("gen3cost"));
let multi3 = parseInt(localStorage.getItem("multi3"));

let pres1 = parseInt(localStorage.getItem("pres1"));

let amountdis = document.getElementById("amount");  
let persecond = document.getElementById("persec");  
let speeddis = document.getElementById("speed")

let gen1dis = document.getElementById("gen1");  
let gen2dis = document.getElementById("gen2");
let gen3dis = document.getElementById("gen3");

let pres1dis = document.getElementById("pres1");





function gen1but(){
    if(amount>=gen1cost){
        gen1++;
        amount-=gen1cost;
        if(gen1%10==0){
            multi1*=2;
            gen1cost *= 100;
        }
    }
}
function gen2but(){
    if(amount>=gen2cost){
        gen2++;
        amount-=gen2cost;
        if(gen2%10==0){
            multi2*=2;
            gen2cost*=100;
        }
    }
}
function gen3but(){
    if(amount>=gen3cost && pres1!=1){
        gen3++;
        amount-=gen3cost;
        if(gen3%10==0){
            multi3*=2;
            gen3cost*=100;
        }
    }
}

function pres1but(){
    reset("soft");
    pres1dis = document.getElementById("pres1");
    pres1dis.classList.add("hidden");
    gen3dis = document.getElementById("gen3");
    gen3dis.classList.remove("hidden");
    multi *= 2;
}

function speedy(){
    if(amount>=speedcost){
        speed*=0.9;
        speedcost*=10;
    }
}
if(typeof multi2!== 'undefined'){
    setInterval(function(){ 
        amount+=(gen1+gen1gen)*multi*multi1;
        gen1gen+=(gen2+gen2gen)*multi*multi2;
        gen2gen+=(gen3+gen3gen)*multi*multi3;
    }, speed);
    setInterval(function(){ 
        amountdis = document.getElementById("amount");
        amountdis.textContent = Math.round(amount);
        persecond = document.getElementById("persec");
        persecond.textContent = Math.round((gen1+gen1gen)*multi*multi1/(speed/1000))+" / second";
        speeddis = document.getElementById("speed");
        speeddis.textContent = "reduce tickspeed by 10% ("+speedcost+")";
    
        gen1dis = document.getElementById("gen1");
        gen1dis.textContent = gen1+" generator    ("+Math.round(gen1cost)+")";
    
        gen2dis = document.getElementById("gen2");
        gen2dis.textContent = gen2+" generator    ("+Math.round(gen2cost)+")";
        if(pres1!=1){
            gen3dis = document.getElementById("gen3");
            gen3dis.textContent=gen3+" generator   ("+Math.round(gen3cost)+")"
        }


        if(pres1==1&&gen2>=20){
            pres1dis = document.getElementById("pres1");
            pres1dis.classList.remove("hidden");
            pres1dis.textContent = "reset for 2x multiplier";
        }
        if(pres1!=1){
            gen3dis.classList.remove("hidden")
        }
    
        localStorage.setItem("amount", amount);
        localStorage.setItem("multi", multi);
        localStorage.setItem("speed", speed);
        localStorage.setItem("speedcost", speedcost);
        localStorage.setItem("gen1", gen1);
        localStorage.setItem("gen1gen", gen1gen);
        localStorage.setItem("gen1cost", gen1cost);
        localStorage.setItem("multi1", multi1);
        localStorage.setItem("gen2", gen2);
        localStorage.setItem("gen2gen", gen2gen);
        localStorage.setItem("gen2cost", gen2cost);
        localStorage.setItem("gen3",gen3);
        localStorage.setItem("gen3gen",gen3gen);
        localStorage.setItem("gen3cost",gen3cost);
        localStorage.setItem("multi2", multi2);
        localStorage.setItem("pres1", pres1)
    }, 100);

}
addEventListener("keydown",function(event){
    if(event.code==='Enter'){
        gen1but();
        gen2but();
        gen3but();
        speedy();
    }
});
addEventListener("keydown",function(event){
    if(event.key==="r"){
        localStorage.clear();
        console.log("cleared")
        if(localStorage.getItem("multi2")=== null){
            reset("hard");
        }
    }
});
addEventListener("keydown",function(event){
    if(event.key==='h'){
        localStorage.clear();
    }
});
function reset(x){
    if(x=="hard"){
        localStorage.removeItem("issaved")
        if(localStorage.getItem("issaved") === null){
            localStorage.clear();
            localStorage.setItem("issaved",1)
            localStorage.setItem("amount", 10);
            localStorage.setItem("multi", 1);
            localStorage.setItem("speed", 1000);
            localStorage.setItem("speedcost", 1000);
            localStorage.setItem("gen1", 0);
            localStorage.setItem("gen1gen", 0);
            localStorage.setItem("gen1cost", 10);
            localStorage.setItem("multi1", 1);
            localStorage.setItem("gen2", 0);
            localStorage.setItem("gen2gen", 0);
            localStorage.setItem("gen2cost", 100);
            localStorage.setItem("multi2", 1);
            localStorage.setItem("gen3", 0);
            localStorage.setItem("gen3gen", 0);
            localStorage.setItem("gen3cost", 100000);
            localStorage.setItem("multi3", 1);
            localStorage.setItem("pres1", 1);
        
        }

        amount = parseInt(localStorage.getItem("amount"));  
        multi = parseInt(localStorage.getItem("multi"));    
        speed = parseInt(localStorage.getItem("speed"));    
        speedcost = parseInt(localStorage.getItem("speedcost"));
            
        gen1 = parseInt(localStorage.getItem("gen1"));  
        gen1gen = parseInt(localStorage.getItem("gen1gen"));    
        gen1cost = parseInt(localStorage.getItem("gen1cost"));  
        multi1=parseInt(localStorage.getItem("multi1"));
            
        gen2 = parseInt(localStorage.getItem("gen2"));
        gen2gen = parseInt(localStorage.getItem("gen2gen"));    
        gen2cost = parseInt(localStorage.getItem("gen2cost"));  
        multi2=parseInt(localStorage.getItem("multi2"));

        gen3 = parseInt(localStorage.getItem("gen3"));
        gen3gen = parseInt(localStorage.getItem("gen3gen"));
        gen3cost = parseInt(localStorage.getItem("gen3cost"));
        multi3 = parseInt(localStorage.getItem("multi3"));

        pres1 = parseInt(localStorage.getItem("pres1"));

    }
    if(x=="soft"){
        localStorage.setItem("amount", 10);
        localStorage.setItem("multi", 1);
        localStorage.setItem("speed", 1000);
        localStorage.setItem("speedcost", 1000);
        localStorage.setItem("gen1", 0);
        localStorage.setItem("gen1gen", 0);
        localStorage.setItem("gen1cost", 10);
        localStorage.setItem("multi1", multi*2);
        localStorage.setItem("gen2", 0);
        localStorage.setItem("gen2gen", 0);
        localStorage.setItem("gen2cost", 100);
        localStorage.setItem("multi2", 1);
        localStorage.setItem("pres1", pres1+=1);

        amount = parseInt(localStorage.getItem("amount"));  
        multi = parseInt(localStorage.getItem("multi"));    
        speed = parseInt(localStorage.getItem("speed"));    
        speedcost = parseInt(localStorage.getItem("speedcost"));
            
        gen1 = parseInt(localStorage.getItem("gen1"));  
        gen1gen = parseInt(localStorage.getItem("gen1gen"));    
        gen1cost = parseInt(localStorage.getItem("gen1cost"));  
        multi1=parseInt(localStorage.getItem("multi1"));
            
        gen2 = parseInt(localStorage.getItem("gen2"));
        gen2gen = parseInt(localStorage.getItem("gen2gen"));    
        gen2cost = parseInt(localStorage.getItem("gen2cost"));  
        multi2=parseInt(localStorage.getItem("multi2"));

        gen3 = parseInt(localStorage.getItem("gen3"));
        gen3gen = parseInt(localStorage.getItem("gen3gen"));
        gen3cost = parseInt(localStorage.getItem("gen3cost"));
        multi3 = parseInt(localStorage.getItem("multi3"));

        pres1 = parseInt(localStorage.getItem("pres1"));
    }
}