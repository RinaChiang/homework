  var counterindex=1;
     
     
   function addrow(){
       
       //ID
       var tr=document.createElement("tr"); /*create <tr> node*/
       //var trid="tr_"+counterindex;
       var trid=counterindex;
       tr.setAttribute("id",trid);//將trid屬性設置給id
       //setAttribute():添加指定的屬性，並為其賦予指定的值
       var td1=document.createElement("td"); /*create <td> node*/
       var text1=document.createTextNode("Id"+counterindex);  /*create a text node*/
       td1.appendChild(text1); /* Append the text to td1*/
       /*td1.innerHTML="id1";*/
       td1.setAttribute("td1_id",trid);
       
       
       //Name
       var td2=document.createElement("td");
       td2.innerHTML="name"+counterindex;  /*設置或返回表格行的開始和結束的開始和結束標籤之間的html*/
       td2.setAttribute("td2_id",trid);
       
       //Delete Button
       var td3=document.createElement("td");
       var deletebutton=document.createElement("button"); /*create <button> node */
       deletebutton.innerHTML="Delete";
       td3.appendChild(deletebutton); 
       deletebutton.setAttribute("data_id",trid);//將trid值設給data_id
      

       deletebutton.style.color="white";
       deletebutton.style.background="#9d9d9d";
       deletebutton.style.boxShadow="3px 3px 3px #4f4f4f ";
       deletebutton.style.borderRadius="5px";
       //font-family: 'Open Sans Condensed', sans-serif;
       
       deletebutton.onclick=function(){
           removeRow(this);
       }

       //Add EditId Button
       var td4=document.createElement("td");
       var editbutton=document.createElement("button");
       editbutton.innerHTML="Edit";
       td4.appendChild(editbutton);
       editbutton.setAttribute("edit_id",trid);

       // editbutton css
       editbutton.style.color="white";
       editbutton.style.background="#7b7b7b";
       editbutton.style.boxShadow=" 3px 3px 3px #4f4f4f ";
       editbutton.style.borderRadius="10px";

       editbutton.onclick=function (){

            td4.removeChild(editbutton);


            //Save Button
            var savebutton=document.createElement("button");
            savebutton.innerHTML="Save";
            td4.appendChild(savebutton);
            savebutton.setAttribute("save_id",trid);

            //savebutton css
            savebutton.style.width="50px";
            savebutton.style.height="20px";
            savebutton.style.color="white";
            savebutton.style.background="#eac100";
            savebutton.style.borderRadius="5px";
            savebutton.style.boxShadow="3px 3px 3px #bebebe";
   

            
            

            savebutton.onclick=function(){
          

                td4.appendChild(editbutton);
                td4.removeChild(savebutton);
                td4.removeChild(cancelbutton);

                spanText1.style.display="block";
                text1.style.display="none";
                td1.innerHTML=spanText1.innerText;
            
                spanText2.style.display="block";
                text2.style.display="none";
                td2.innerHTML=spanText2.innerText;
              
             }

            //cancel Button
            var cancelbutton=document.createElement("button");
            cancelbutton.innerHTML="Cancel";
            td4.appendChild(cancelbutton);
            cancelbutton.setAttribute("cancel_id",trid);
            cancelbutton.style.boxShadow="3px 3px 3px #bebebe";

            //cancelbutton css
            cancelbutton.style.color="white";
            cancelbutton.style.background="	#ff5809	";
            cancelbutton.style.width="70px";
            cancelbutton.style.height="20px";
            cancelbutton.style.borderRadius="70%";
            cancelbutton.style.marginLeft="10px";
         

            cancelbutton.onclick=function(){
                 
                 var judge=confirm("請問確定要將編輯的文字復原嗎！！");
                 if(judge==true){
                 td4.appendChild(editbutton);
                 td4.removeChild(savebutton);
                 td4.removeChild(cancelbutton);
                 spanText2.style.display="block";
                 text2.style.display="none";
                 td1.innerHTML="id"+trid;
                 td2.innerHTML="name"+trid;
                 }else{

                    td1.innerHTML=spanText1.innerText;
                    td2.innerHTML=spanText2.innerText;
                    td4.appendChild(editbutton);
                    td4.removeChild(savebutton);
                    td4.removeChild(cancelbutton);
                 }
                
                 
            
            }

        td1.innerHTML="";
        var text1=document.createElement("input");
        text1.style.display="block";
        //var td1_edit=document.getElementById("td1_id");
        text1.style.borderStyle="outset";
        text1.type="text";
        text1.value="Id";
        td1.appendChild(text1);
        var spanText1=document.createElement("span");
        //var td1_save=document.getElementById("td1_id");
        spanText1.style.display="none";
        spanText1.innerText=text1.value;
        
        td2.innerHTML="";
        var text2=document.createElement("input");
        text2.style.display="block";
        text2.style.borderStyle="outset";
        text2.type="text";
        text2.value="name";
        td2.appendChild(text2);
        //td2.innerHTML= text2.value;
        var spanText2=document.createElement("span");
        spanText2.style.display="none";
        spanText2.innerText=text2.value;

       
       }
       


       counterindex+=1;
       tr.appendChild(td1); /*Append td1 to tr*/
       tr.appendChild(td2);
       tr.appendChild(td3);
       tr.appendChild(td4);
 
       
       var tbody=document.getElementById("tbody");
       tbody.appendChild(tr);/*Append tr to tbody*/
   }


   function removeRow(event){
       var id=event.getAttribute("data_id");
       var tr=document.getElementById(id);
       tr.outerHTML="";
   }



    

       
   