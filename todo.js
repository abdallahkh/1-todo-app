/// add an element to todos 
document.querySelector('.action-on').onclick=()=>{
    let content = document.getElementById('add-item').value;
    if (content=="") {
        alert('you cannot add an empty task')
    }else{
    const lis = document.createElement('li');
    const lisCon = document.createTextNode(content);
    lis.appendChild(lisCon);
    const elemen = document.getElementById('list');
    elemen.appendChild(lis);
    // mark finishded tasks with line through
    lis.onclick=()=>{
        lis.setAttribute('class','ex')
    };
    }
    document.getElementById('add-item').value="";
}
// remove finished elements from the todo list
const removing=document.getElementById('remove');
removing.onclick=()=>{
    document.querySelectorAll('.ex').forEach(e => e.remove());

};