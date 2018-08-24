  var counterindex=1;
     
     
   function addrow(){
       
       //Create tr
       var tr=document.createElement("tr"); /*create <tr> node*/
       var trid=counterindex;
       tr.setAttribute("id",trid);//將trid屬性設置給id
       //setAttribute():添加指定的屬性，並為其賦予指定的值

       // create ID td
       var td1=document.createElement("td"); /*create <td> node*/
       td1.setAttribute("td1_id",trid);
       
       //create IDInput
       var text1=document.createElement("input");
       text1.type="text";
       text1.value="Id";
       text1.style.borderStyle="outset";
       text1.style.display="none";
       td1.appendChild(text1);

       //create IDspan
       var spanText1=document.createElement("span");
       td1.appendChild(spanText1);
       spanText1.innerHTML="Id"+counterindex;
       spanText1.display="block";

       
       
       // create Name td
       var td2=document.createElement("td");
       td2.setAttribute("td2_id",trid);
       
       //create Name Input
       var text2=document.createElement("input");
       text2.type="text";
       text2.value="name";
       text2.style.borderStyle="outset";
       text2.style.display="none";
       td2.appendChild(text2);

       //create Name span
       var spanText2=document.createElement("span");
       td2.appendChild(spanText2);
       spanText2.innerHTML="name"+counterindex;
       spanText2.display="block";

       
       
       // create Deletebutton
       var td3=document.createElement("td");
       var deletebutton=document.createElement("button"); /*create <button> node */
       deletebutton.innerHTML="Delete";
       deletebutton.className="deletebtn";
       td3.appendChild(deletebutton); 
       deletebutton.setAttribute("data_id",trid);//將trid值設給data_id
      

       //deletebutton click
       deletebutton.onclick=function(){
           removeRow(this);
       }

       //create Editbutton
       var td4=document.createElement("td");
       var editbutton=document.createElement("button");
       editbutton.innerHTML="Edit";
       editbutton.className="editbtn";
       td4.appendChild(editbutton);
       editbutton.setAttribute("edit_id",trid);

       //Editbutton click
       editbutton.onclick=function (){

            td4.removeChild(editbutton);


            //create saveButton
            var savebutton=document.createElement("button");
            savebutton.innerHTML="Save";
            savebutton.className="savebtn";
            td4.appendChild(savebutton);
            savebutton.setAttribute("save_id",trid);
   

            //savebutton click
            savebutton.onclick=function(){
                
                
                td4.appendChild(editbutton);
                td4.removeChild(savebutton);
                td4.removeChild(cancelbutton);
                
                //td1 span display:block
                //td1 input display:none
                text1.style.display="none";
                spanText1.style.display="block";
                spanText1.innerHTML=text1.value;
 

                //td2 span display:block
                //td2 input display:none
                text2.style.display="none";
                spanText2.style.display="block";
                spanText2.innerHTML=text2.value;

            
              
             }

             
            // create cancelbutton
            var cancelbutton=document.createElement("button");
            cancelbutton.innerHTML="Cancel";
            cancelbutton.className="cancelbtn";
            td4.appendChild(cancelbutton);
            cancelbutton.setAttribute("cancel_id",trid);
            cancelbutton.style.boxShadow="3px 3px 3px #bebebe";
         
            //cancelbutton click
            cancelbutton.onclick=function(){
                 
                 var judge=confirm("請問確定要將編輯的文字復原嗎！！");
                 if(judge==true){
                 td4.appendChild(editbutton);
                 td4.removeChild(savebutton);
                 td4.removeChild(cancelbutton);
                 if(oldvalue1=="Id" && oldvalue2=="name"){
                     spanText1.innerHTML="Id"+trid;
                     spanText2.innerHTML="Name"+trid;
                 }else{
                     spanText1.innerHTML=oldvalue1;
                     spanText2.innerHTML=oldvalue2;

                 }

                 
                 
                 }else{

                    spanText1.innerHTML=text1.value;
                    spanText2.innerHTML=text2.value;
                   
                    td4.appendChild(editbutton);
                    td4.removeChild(savebutton);
                    td4.removeChild(cancelbutton);
                 }
                
                 spanText1.style.display="block";
                 text1.style.display="none";
                 spanText2.style.display="block";
                 text2.style.display="none";
            
            }

        spanText1.innerHTML="";
        spanText2.innerHTML="";
        spanText1.style.display="none";
        spanText2.style.display="none";
        text1.style.display="block";
        text2.style.display="block";
        var oldvalue1=text1.value;
        var oldvalue2=text2.value;
        var IdInput=document.getElementById("td1_id").value;
        text1.value=IdInput;
        var NameInput=document.getElementById("td2_id").value;
        text2.value=NameInput;
        
        
      
       
       }
       


       counterindex+=1;
       tr.appendChild(td1); /*Append td1 to tr*/
       tr.appendChild(td2);
       tr.appendChild(td3);
       tr.appendChild(td4);
 
       
       var tbody=document.getElementById("tbody");
       tbody.appendChild(tr);/*Append tr to tbody*/
   }

   //delete the row
   function removeRow(event){
       var id=event.getAttribute("data_id");
       var tr=document.getElementById(id);
       tr.outerHTML="";
   }



    

       
   