var counterindex=1;
 


function addrow(){

   var trid=counterindex;
    //Create tr
    var tr=document.createElement("tr"); /*create <tr> node*/
    
    
    tridname="tr"+trid;
    tr.setAttribute("id",tridname);


     /*var sitespan={
        
        number:document.getElementById("inputName"+trid),
        obj:{
               idspan:document.getElementById("spanid"+trid).textContent,
               Namespan:document.getElementById("inputName"+trid).textContent
        }
    }

    var strspan = JSON.stringify(sitespan);//change to String
    localStorage.setItem( "infor",strspan);
    console.log(strspan);*/
     

    /*var sitetr = new Object; 
    sitetr.position=document.getElementById("tr_id").id;
    var strtr = JSON.stringify(sitetr);//change to String
    localStorage.setItem(sitetr.position,strtr);
    console.log(strtr);*/
   

    // create ID td
    var td1=document.createElement("td"); /*create <td> node*/
    td1.setAttribute("id","IDtd"+trid);
    
    //create IDInput
    var text1=document.createElement("input");
    text1.setAttribute("id","inputid"+trid);
    text1.type="text";
    text1.value="Id"+trid;
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
    text2.value="name"+trid;
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
    //deletebutton.setAttribute("id","delete"+trid);
    //deletebutton.setAttribute("id",trid);
    deletebutton.setAttribute("data_id",tridname);

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
             
           

             td4.appendChild(editbutton);
             td4.removeChild(savebutton);
             td4.removeChild(cancelbutton);
             
            
             text1.style.display="none";
             spanText1.style.display="block";
             var span1_result = document.getElementById("spanid"+trid);
             span1_result.innerHTML=text1.value;
  
             text2.style.display="none";
             spanText2.style.display="block";
             var span2_result = document.getElementById("spanName"+trid);
             span2_result.innerHTML=text2.value;
    
            

             var sitespan={
        
        
               // number:document.getElementById(tridname).id,
             
                 obj:{
                       idspan:document.getElementById("spanid"+trid).textContent,
                       Namespan:document.getElementById("spanName"+trid).textContent
                }
            
                
            }

        
            var strspan = JSON.stringify(sitespan);//change to String
            localStorage.setItem( "infor",strspan);
            console.log(strspan);
             
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

    
     var inputid=document.getElementById("inputid"+trid).value;
     text1.value=inputid;
     var inputName= document.getElementById("inputName"+trid).value;
     text2.value=inputName;

    }
 
    counterindex+=1;
    //trid+=1;
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
    if(tr !=null)
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
 