const clcbutton=document.getelementbytype('button');
const newtd=document.getelementbyid('newtd')
clcbutton.addeventlistener('click',function insert_Row() {
	const newrow=document.createelement('tr');
	newrow.innerhtml="<tr><td>New Cell1</td><td>New Cell1</td>";
	newtd.appendchild('newrow')
	
})


  
  
}
