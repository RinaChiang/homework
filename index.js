var counterIndex=1;

function addRow(){
    var  tr_id=counterIndex;
    //Create tr
    var tr=document.createElement("tr"); /*create <tr> node*/
    trid_Name="tr"+tr_id;
    tr.setAttribute("id",trid_Name);

    // create ID td
    var td1=document.createElement("td"); /*create <td> node*/
    
    //create IDInput
    var text1=document.createElement("input");
    text1.setAttribute("id","inputid"+tr_id);
    text1.className="idInput";
    text1.type="text";
    text1.value="Id"+tr_id;
    text1.style.display="none";
    td1.appendChild(text1);

    //create IDspan
    var spanText1=document.createElement("span");
    spanText1.setAttribute("id","spanid"+tr_id);
    td1.appendChild(spanText1);
    spanText1.innerHTML="Id"+counterIndex;
    spanText1.style.display="block";
    
    // create Name td
    var td2=document.createElement("td");
    td2.setAttribute("id","Nametd"+tr_id);
    
    //create Name Input
    var text2=document.createElement("input");
    text2.setAttribute("id","inputName"+tr_id);
    text2.type="text";
    text2.value="name"+tr_id;
    text2.style.borderStyle="outset";
    text2.style.display="none";
    td2.appendChild(text2);

    //create Name span
    var spanText2=document.createElement("span");
    spanText2.setAttribute("id","spanName"+tr_id);
    td2.appendChild(spanText2);
    spanText2.innerHTML="name"+counterIndex;
    spanText2.style.display="block";

    // create Deletebutton
    var td3=document.createElement("td");
    var deleteButton=document.createElement("button"); /*create <button> node */
    deleteButton.innerHTML="Delete";
    deleteButton.className="deletebtn";
    td3.appendChild(deleteButton); 
    deleteButton.setAttribute("data_id",trid_Name);

    //deleteButton click
    deleteButton.onclick=function(){
       removeRow(this);
       storageData();
    }

    //create editButton
    var td4=document.createElement("td");
    var editButton=document.createElement("button");
    editButton.innerHTML="Edit";
    editButton.className="editbtn";
    td4.appendChild(editButton);
    //editButton.setAttribute("edit_id",tr_id);

    //editButton click
    editButton.onclick=function (){
        td4.removeChild(editButton);
        //create saveButton
        var savebutton=document.createElement("button");
        savebutton.innerHTML="Save";
        savebutton.className="savebtn";
        td4.appendChild(savebutton);
        //savebutton click
        savebutton.onclick=function(){
            td4.appendChild(editButton);
            td4.removeChild(savebutton);
            td4.removeChild(cancelButton);
            text1.style.display="none";
            spanText1.style.display="block";
            spanText1.innerHTML=text1.value;
            text2.style.display="none";
            spanText2.style.display="block";
            spanText2.innerHTML=text2.value;
            storageData();
          }
        // create cancelButton
        var cancelButton=document.createElement("button");
        cancelButton.innerHTML="Cancel";
        cancelButton.className="cancelbtn";
        td4.appendChild(cancelButton);
        //cancelButton click
        cancelButton.onclick=function(){
            var judge=confirm("請問確定要將編輯的文字復原嗎！！");
            if(judge==true){
            td4.appendChild(editButton);
            td4.removeChild(savebutton);
            td4.removeChild(cancelButton);
                if(oldvalue1=="Id"+tr_id && oldvalue2=="name"+tr_id){
                text1.value="Id"+tr_id;
                text2.value="Name"+tr_id;
                spanText1.innerHTML="Id"+tr_id; 
                spanText2.innerHTML="Name"+tr_id;
                }
                else{
                  if(spanText1.innerHTML!="Id"+tr_id ||spanText2.innerHTML!= "Name"+tr_id){
                    text1.value=oldvalue1;
                    text2.value=oldvalue2;
                    spanText1.innerHTML=text1.value;
                    spanText2.innerHTML=text2.value;
                  }else{
                    text1.value="Id"+tr_id;
                    text2.value="Name"+tr_id;
                    spanText1.innerHTML=text1.value;
                    spanText2.innerHTML=text2.value;
                  }
                }
            }else{ 
                td4.appendChild(editButton);
                td4.removeChild(savebutton);
                td4.removeChild(cancelButton);
                spanText1.innerHTML=text1.value;
                spanText2.innerHTML=text2.value;
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
    
        var input_Id=document.getElementById("inputid"+tr_id).value;
        text1.value=input_Id;
        var input_Name=document.getElementById("inputName"+tr_id).value;
        text2.value=input_Name;
    }
    counterIndex+=1;
    tr.appendChild(td1); /*Append td1 to tr*/
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    var tbody=document.getElementById("tbody");
    tbody.appendChild(tr);/*Append tr to tbody*/
    storageData();
}
function storageData(){
  /*var tmp2 = $("#spanid1"); //id; $('.spanName1') //classname = getElementsByClassName
    var tmp3 = tmp2[0].innerText;
    var _name = $("#spanName1");
    var name = _name[0].innerText;*/
    var _body = $("#tbody");//catch tbody id
    var _array = _body[0].children; //ex:[tr#tr1, tr#tr2, tr1: tr#tr1, tr2: tr#tr2]
    console.log(_array);
    //陣列清空並重新抓取新的狀況
    var _final = [];
    for(i=0; i<_array.length; i++) {
        var _item = _array[i];
        var _id = _item.children[0].innerText; //ex:id1
        var _name = _item.children[1].innerText;//ex:Name1
        _final.push({ id: _id, name: _name });//將obj push至 _final Array
    }
    var _str_final = JSON.stringify(_final);
    localStorage.setItem("infor", _str_final); //將目前values存到infor
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
    _local_obj.map( function(item) { //按照順序排列
        var  tr_id=counterIndex;
        var _id = item.id;
        var _name = item.name;
        var tr = document.createElement("tr");
        //id
        var td1 = document.createElement("td");
        var text1 = document.createElement("input");
        text1.value = _id;
        text1.style.borderStyle = "outset";
        text1.style.display = "none";
        var spanText1 = document.createElement("span");
        td1.appendChild(spanText1);
        spanText1.innerHTML = _id;
        spanText1.display = "block";
        //name
        var td2 = document.createElement("td");
        var text2 = document.createElement("input");
        text2.value = _name;
        text2.style.borderStyle = "outset";
        text2.style.display = "none";
        var spanText2 = document.createElement("span");
        td2.appendChild(spanText2);
        spanText2.innerHTML = _name;
        spanText2.display = "block";
        //Delete
        var td3=document.createElement("td");
        var deleteButton=document.createElement("button");
        deleteButton.innerHTML="Delete";
        deleteButton.className="deletebtn";
        td3.appendChild(deleteButton);
        //edit
        var td4=document.createElement("td");
        var editButton=document.createElement("button");
        editButton.innerHTML="Edit";
        editButton.className="editbtn";
        td4.appendChild(editButton);
        editButton.onclick=function (){
            td4.removeChild(editButton);
            //create saveButton
            var savebutton=document.createElement("button");
            savebutton.innerHTML="Save";
            savebutton.className="savebtn";
            td4.appendChild(savebutton);
            //savebutton click
            savebutton.onclick=function(){
                td4.appendChild(editButton);
                td4.removeChild(savebutton);
                td4.removeChild(cancelButton);
                text1.style.display="none";
                spanText1.style.display="block";
                spanText1.innerHTML=text1.value;
      
                text2.style.display="none";
                spanText2.style.display="block";
                spanText2.innerHTML=text2.value;
              }
            //create cancelButton
            var cancelButton=document.createElement("button");
            cancelButton.innerHTML="Cancel";
            cancelButton.className="cancelbtn";
            td4.appendChild(cancelButton);
            //cancelButton click
            cancelButton.onclick=function(){
                var judge=confirm("請問確定要將編輯的文字復原嗎！！");
                if(judge==true){
                td4.appendChild(editButton);
                td4.removeChild(savebutton);
                td4.removeChild(cancelButton);
                    if(oldvalue1=="Id"+tr_id && oldvalue2=="name"+tr_id){
                    text1.value="Id"+tr_id;
                    text2.value="Name"+tr_id;
                    spanText1.innerHTML="Id"+tr_id; 
                    spanText2.innerHTML="Name"+tr_id;
                    }
                    else{
                      if(spanText1.innerHTML!="Id"+tr_id ||spanText2.innerHTML!= "Name"+tr_id){
                        text1.value=oldvalue1;
                        text2.value=oldvalue2;
                        spanText1.innerHTML=text1.value;
                        spanText2.innerHTML=text2.value;
                      }else{
                        text1.value="Id"+tr_id;
                        text2.value="Name"+tr_id;
                        spanText1.innerHTML=text1.value;
                        spanText2.innerHTML=text2.value;
                      }
                    }
                }else{ 
                    td4.appendChild(editButton);
                    td4.removeChild(savebutton);
                    td4.removeChild(cancelButton);
                    spanText1.innerHTML=text1.value;
                    spanText2.innerHTML=text2.value;
                }
                spanText1.style.display="block";
                text1.style.display="none";
                spanText2.style.display="block";
                text2.style.display="none";
            }
            text1.style.display="block";
            text2.style.display="block";
            spanText1.style.display="none";
            spanText2.style.display="none";
            var oldvalue1=text1.value;
            var oldvalue2=text2.value;

            var input_Id=document.getElementById("inputid"+tr_id).value;
            text1.value=input_Id;
            var input_Name=document.getElementById("inputName"+tr_id).value;
            text2.value=input_Name;
        }
        counterIndex += 1;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        var tbody = document.getElementById("tbody");
        tbody.appendChild(tr);
    })
}
function loadAll(){
    appendFromLocal(); 
}