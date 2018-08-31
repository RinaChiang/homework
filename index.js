var counterindex=1;


function addrow(){
   var trid=counterindex;
    //Create tr
    var tr=document.createElement("tr"); /*create <tr> node*/
    tridname="tr"+trid;
    tr.setAttribute("id",tridname);
   

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
       /* var siteDelete = new Object; 
        siteDelete.Delete_position=document.getElementById("delete"+trid).id;
        var strDelete = JSON.stringify(siteDelete);//change to String
        localStorage.setItem( siteDelete.Delete_position,strDelete);
        console.log(strDelete);*/

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
    
            

             var sitespan=new Object;
             sitespan.Idspan=document.getElementById("spanid"+trid).textContent;
             sitespan.Namespan=document.getElementById("spanName"+trid).textContent;

             
              var siteinputstore=new Object;
              siteinputstore.a=sitespan;

             if(localStorage.length>0){
                 var siteoutputstore=localStorage.getItem("infor");
                 var stroutputstore=JSON.parse(siteoutputstore);
                 console.log(strinputstore);
                 siteinputstore.b=stroutputstore;
                 var strinputstore=JSON.stringify(siteinputstore);
                 localStorage.setItem("infor",strinputstore);

                
             }else{
                
               
                 var strinputstore=JSON.stringify(siteinputstore);
                 localStorage.setItem("infor",strinputstore);
                 
                 
            }
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
              if(oldvalue1=="Id"+trid && oldvalue2=="name"+trid){
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


    var tmp = document.getElementById("spanid1");
    var tmp2 = $("#spanid1"); //id; $('.spanName1') //classname = getElementsByClassName
    var tmp3 = tmp2[0].innerText;
    var _name = $("#spanName1");
    var name = _name[0].innerText;


    var _body = $("#tbody");
    var _array = _body[0].children;

    var _final = [];
    for(i=0; i<_array.length; i++) {
        var _item = _array[i];
        var _id = _item.children[0].innerText;
        var _name = _item.children[1].innerText;
        _final.push({ id: _id, name: _name });
    }
    console.log(_final);
    var _str_final = JSON.stringify(_final);
    localStorage.setItem("infor", _str_final);

}

//delete the row
function removeRow(event){

    var id=event.getAttribute("data_id");
    var tr=document.getElementById(id);
    if(tr !=null)
      tr.outerHTML="";
}

function appendFromLocal() {
    var _tmp = localStorage.getItem('infor');   
    var _local_obj = JSON.parse(_tmp);
    _local_obj.map( function(item) {
        var _id = item.id;
        var _name = item.name;
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var text1 = document.createElement("input");
        text1.value = _id;
        text1.style.borderStyle = "outset";
        text1.style.display = "none";
        var spanText1 = document.createElement("span");
        td1.appendChild(spanText1);
        spanText1.innerHTML = _id;
        spanText1.display = "block";
        counterindex += 1;
        tr.appendChild(td1);
        var tbody = document.getElementById("tbody");
        tbody.appendChild(tr);
    })

}


function loadAll(){

    for(var i=0;i<localStorage.length;i++){  
        var sitename = localStorage.key(i); 
        var siteurl = localStorage.getItem(sitename);  
        var siteparse=JSON.parse(siteurl);
    }
    appendFromLocal(); 

}