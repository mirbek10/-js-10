const mir = document.getElementById("list");
const input = document.querySelector("input");
const btn1 = document.querySelector("button")
 
 const p1 = document.createElement("p") 
 p1.textContent = "text"
 
mir.appendChild(p1)


    btn1.addEventListener('click',()=>{
    p1.innerText=input.value
        });
    
    
    btn1.addEventListener ('click',() => {
       const q =document.createElement("button")
        p1.appendChild(q)
        q.textContent ="delete"
        q.onclick=()=>{
        mir.removeChild(p1);
        q.onclick=()=>{ }
            const w = document.createElement("h3")
            mir.appendChild(w)
            w.textContent = "СПАСИБО, ЧТО ВОСПОЛЬЗЫВОЛИСЬ НАШИМИ УСДУГАМИ "
       
        const w2 = document.createElement("h4")
        mir.appendChild(w2)
        w2.textContent= "надеемся на высокие баллы (7)"
    }
    });
   
   