function insert_Row(){
	const ST = document.querySelector("#sampleTable");

	for(let i=1;i<=1;i++){
		const tr = document.createElement("tr");

		for(let j=1;j<=2;j++){
			const td = document.createElement("td");
			td.textContent = `New Cell${j}`;
			tr.appendChild(td);
		}
		ST.insertBefore(tr, ST.firstChild);
	}
}