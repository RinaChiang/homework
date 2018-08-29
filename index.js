
/*$('#dataTable').dataTable( {
  "stateSave": true
} );*/


  var counterindex=1;

   function addrow(){
       
       //Create tr
       var tr=document.createElement("tr"); /*create <tr> node*/
       var trid=counterindex;
       tr.setAttribute("tr_id",trid);//將trid屬性設置給id
       tr.setAttribute("id","tr_id");

       
      

       // create ID td
       var td1=document.createElement("td"); /*create <td> node*/
       td1.setAttribute("id","IDtd"+trid);
       
       //create IDInput
       var text1=document.createElement("input");
       text1.setAttribute("id","inputid"+trid);
       text1.type="text";
       text1.value="Id";
       text1.style.borderStyle="outset";
       text1.style.display="none";
       td1.appendChild(text1);

       //create IDspan
       var spanText1=document.createElement("span");
       spanText1.setAttribute("id","spanid"+trid);
       td1.appendChild(spanText1);
       spanText1.innerHTML="Id"+counterindex;
       spanText1.display="block";

       
       // create Name td
       var td2=document.createElement("td");
       td2.setAttribute("id","Nametd"+trid);
       
       //create Name Input
       var text2=document.createElement("input");
       text2.setAttribute("id","inputName"+trid);
       text2.type="text";
       text2.value="name";
       text2.style.borderStyle="outset";
       text2.style.display="none";
       td2.appendChild(text2);

       //create Name span
       var spanText2=document.createElement("span");
       spanText2.setAttribute("id","spanName"+trid);
       td2.appendChild(spanText2);
       spanText2.innerHTML="name"+counterindex;
       spanText2.display="block";

       
       
       // create Deletebutton
       var td3=document.createElement("td");
       var deletebutton=document.createElement("button"); /*create <button> node */
       deletebutton.innerHTML="Delete";
       deletebutton.className="deletebtn";
       td3.appendChild(deletebutton); 
       deletebutton.setAttribute("id","delete"+trid);

       //deletebutton click
       deletebutton.onclick=function(){
           removeRow(this);

           //Delete localStorage
           var siteDelete = new Object; 
           siteDelete.Delete_position=document.getElementById("delete"+trid).id;
           var strDelete = JSON.stringify(siteDelete);//change to String
           localStorage.setItem( siteDelete.Delete_position,strDelete);
           console.log(strDelete);
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
            savebutton.setAttribute("id","save"+trid);
   

            //savebutton click
            savebutton.onclick=function(){
                
                //Id Input localstorage
                var siteInputId = new Object;
                siteInputId.IdInput=document.getElementById("inputid"+trid).value; 
                siteInputId.Id_input_position=document.getElementById("inputid"+trid).id;
                var strInputId = JSON.stringify(siteInputId);//change to String
                localStorage.setItem(siteInputId.Id_input_position,strInputId);
                console.log(strInputId);
    
                //Name Input localstorage
                var siteInputName=new Object;
                siteInputName.NameInput=document.getElementById("inputName"+trid).value; 
                siteInputName.Name_input_position=document.getElementById("inputName"+trid).id;
                var strInputName = JSON.stringify(siteInputName);
                localStorage.setItem(siteInputName.Name_input_position,strInputName);
                console.log(strInputName);

                td4.appendChild(editbutton);
                td4.removeChild(savebutton);
                td4.removeChild(cancelbutton);
                
               
                text1.style.display="none";
                spanText1.style.display="block";
                var span1_result = document.getElementById("spanid"+trid);
                span1_result.innerHTML=siteInputId.IdInput;
                
     
                text2.style.display="none";
                spanText2.style.display="block";
                var span2_result = document.getElementById("spanName"+trid);
                span2_result.innerHTML= siteInputName.NameInput;


                 //Id span localstorage
                 var sitespanId = new Object;
                 sitespanId.Idspan=document.getElementById("spanid"+trid).value; 
                 sitespanId.Id_span_position=document.getElementById("spanid"+trid).id;
                 var strspanId = JSON.stringify(sitespanId);//change to String
                 localStorage.setItem( sitespanId.Id_span_position,strspanId);
                console.log(strspanId);
                  
                 //Name span localstorage
                 var sitespanName=new Object;
                 sitespanName.Namespan=document.getElementById("spanName"+trid).value; 
                 sitespanName.Name_span_position=document.getElementById("spanName"+trid).id;
                 var strspanName = JSON.stringify(sitespanName);
                 localStorage.setItem(sitespanName.Name_span_position,strspanName);
                 console.log(strspanName);

               
                
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

       var tr=document.getElementById("tr_id");
       tr.outerHTML="";
   }

function loadAll(){

    for(var i=0;i<localStorage.length;i++){  
        var sitename = localStorage.key(i); 
        var siteurl = localStorage.getItem(sitename);  
        var siteparse=JSON.parse(siteurl);
        console.log(sitename);
        console.log(siteurl);
        console.log(siteparse);
        
       
    }

}
    


       
   