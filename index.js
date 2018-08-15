  var counterindex=1;
     
     
   function addrow(){
       
       
       var tr=document.createElement("tr"); /*create <tr> node*/
       var trid="tr_"+counterindex;
       tr.setAttribute("id",trid);//將trid屬性設置給id
       //setAttribute():添加指定的屬性，並為其賦予指定的值
       var td1=document.createElement("td"); /*create <td> node*/
       var text1=document.createTextNode("Id"+counterindex);  /*create a text node*/
       td1.appendChild(text1); /* Append the text to td1*/
       /*td1.innerHTML="id1";*/
       td1.setAttribute("td1_id",trid);
       
       var td2=document.createElement("td");
       td2.innerHTML="name"+counterindex;  /*設置或返回表格行的開始和結束的開始和結束標籤之間的html*/
       td2.setAttribute("td2_id",trid);

       var td3=document.createElement("td");
       var deletebutton=document.createElement("button"); /*create <button> node */
       deletebutton.innerHTML="Delete"+counterindex;
       td3.appendChild(deletebutton); 
       deletebutton.setAttribute("data_id",trid);//將trid值設給data_id
       deletebutton.onclick=function(){
           removeRow(this);
       }

       //Add EditId Button
       var td4=document.createElement("td");
       var editbutton=document.createElement("button");
       editbutton.innerHTML="EditId";
       td4.appendChild(editbutton);
       editbutton.setAttribute("edit_id",trid);
       editbutton.onclick=function (){

        td1.innerHTML="";
        var text1=document.createElement("input");
        var td1_edit=document.getElementById("td1_id");
        text1.type="text";
        td1.appendChild(text1);
        var word_edit=td1_edit.value;
        td1.innerHTML=word_edit;
        

        
       }
       
       //Add EditName Button
       var td5=document.createElement("td");
       var editbutton1=document.createElement("button");
       editbutton1.innerHTML="EditName";
       td5.appendChild(editbutton1);
       editbutton1.setAttribute("edit_id",trid);
       editbutton1.onclick=function (){

        td2.innerHTML="";
        var text2=document.createElement("input");
        var td2_edit=document.getElementById("td2_id");
        text2.type="text";
        td2.appendChild(text2);
        var word_edit2=td2_edit.value;
        td2.innerHTML=word_edit2;
       }

       counterindex+=1;
       tr.appendChild(td1); /*Append td1 to tr*/
       tr.appendChild(td2);
       tr.appendChild(td3);
       tr.appendChild(td4);
       tr.appendChild(td5);
       
       var tbody=document.getElementById("tbody");
       tbody.appendChild(tr);/*Append tr to tbody*/
   }


   function removeRow(event){
       var id=event.getAttribute("data_id");
       var tr=document.getElementById(id);
       tr.outerHTML="";
   }



    

       
   