//add functon:1
var list=[];
function add(){
    var content=document.getElementById("content").value;
    list.push(content);
    document.getElementById("content").value=null;
    view();
}
//view function:2
function view(){
    var text=""
    var count=list.length;
    for(var i=0;i<count;i++){
        text+="<li onlclick='del("+i+")'>"+list[i]+"</li><button onclick='del()' style='background-color: red;color:#fff;border-ridus:3px;border:none;'>delete</button> <button onclick='update("+i+")' style='background-color: #286090;color:#fff;border-ridus:3px;border:none;' >update</button>";
    }
    document.getElementById("result").innerHTML=text;
}
//delete function:3
function del(index){
    list.splice(index,1)
    view();
}
//function update:4
function update(index){
     var content=document.getElementById("content").value=list[index];
    document.getElementById("update").style.display="inline-block";
    document.getElementById("add").style.display="none";
    document.getElementById("index").value =index;
}
// function edit:5
function edit(){
    var content=document.getElementById("content").value;
    var index =document.getElementById("index").value;
    list[index]=content;
    view();
    var content=document.getElementById("content").value=null;
    document.getElementById("update").style.display="none";
    document.getElementById("add").style.display="inline-block";
}
