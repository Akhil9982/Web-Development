   // console.log(document.querySelectorAll("h1"));
   //  const firstHead = document.querySelectorAll("h1");
   //  console.log(firstHead);
   //  console.log(document.querySelector(".second"));
   //  console.log(document.querySelector("#para"));

   //  console.log(document.getElementById('para'));
   //  console.log(document.getElementsByClassName('second'));
   //  console.log(document.getElementsByTagName('h3'));

   //  const heading = document.querySelector(".second");

   //  heading.style.color = "blue";
   //  heading.style.backgroundColor = "yellow";

   //  const para = document.querySelector("#para");
   //  para.innerText = "This is the updated paragraph.";

    const btn = document.createElement("button");
    btn.textContent = "Click Me";
    btn.className= 'btn1';

    const division = document.querySelector("div");
      division.appendChild(btn);

   const div1 = document.createElement("div");
   div1.className = "box";
   div1.style.width = "100px";
   div1.style.height = "100px";
   div1.style.marginTop = "10px";
   div1.style.backgroundColor = "red";
   
   document.body.appendChild(div1);