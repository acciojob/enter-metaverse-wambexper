const enterBtn = document.getElementById("enterBtn");
const para  = document.getElementById("status");

enterBtn.addEventListener('click',()=>{

	para.innerText = "";

	// para.innerText = "Entered Metaverse";
	// para.style.fontSize = "50px";

	
	const h1 = document.createElement("h1");
	h1.innerText = "Entered Metaverse";

	para.appendChild(h1);
	
})