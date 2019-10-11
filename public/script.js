function onCreate(ev) {
    ev.preventDefault();
   
   
    var data = JSON.stringify({
        "name": String(document.getElementById("name").value),
        "age": document.getElementById("age").value,
        "gender": String(document.getElementById("gender").value),
        "email": String(document.getElementById("email").value),
        "position":String(document.getElementById("position").value)
    });
    console.log()
    fetch("http://localhost:3000/workers", {
        method: 'POST',
        body: data, 
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .then(response => {
          popup("crtS");
          setTimeout(function() {popup("crtS"); },1000);
       })
      .catch(error => {
        popup("crtE");
        setTimeout(function() {popup("crtE"); },1000);
     });



}

function onRead() {

    fetch('http://localhost:3000/workers', {
        headers:{
            'Content-Type': 'application/json'
        }
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(workers) {
        var resultTBody = document.createElement('tbody');
        workers.map(function(nthWorkers){
            resultTBody.appendChild(parseWorkersToTableRow(nthWorkers));
        });

        var table = document.getElementById('rTBody').parentElement;
        table.replaceChild(resultTBody, document.getElementById('rTBody'));
        resultTBody.id = 'rTBody';
        console.log('success');

        alert = document.querySelector(".message");
        alert.innerHTML = "Changes saved successfully";
        alert.classList.add('message--visible');
    })
    .catch(error=>console.error('Error:',error));

}
 
function onPrepareUpdate(ev){

    ev.preventDefault();
    fetch('http://localhost:3000/workers', {
        headers:{
            'Content-Type': 'application/json'
        }
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(workers) {
        var ids=document.createElement('select');
        ids.className='form-control';
        workers.map(function(nthWorkers){
            var id=document.createElement('option');
            id.innerHTML=nthWorkers['_id'];
            ids.appendChild(id);
        });
        var form=document.getElementById('uid').parentElement;
        form.replaceChild(ids,document.getElementById('uid'));
        ids.id='uid';
        document.getElementById('uid').addEventListener('change', onSelectId);
        onSelectId(ev)
    })
    .catch(error=>console.error('Error:',error));
}


function onSelectId(ev){

    ev.preventDefault();

    fetch("http://localhost:3000/workers/" + document.getElementById("uid").value, {
        method: 'GET',
        headers:{
          'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(response => {
        console.log(response['0']);
        document.getElementById("uname").value = response['0'].userdetails['0'].name;
        document.getElementById("uage").value = response['0'].userdetails['0'].age;
        document.getElementById("ugender").value = response['0'].userdetails['0'].gender;
        document.getElementById("uemail").value = response['0'].userdetails['0'].email;
        document.getElementById("uposition").value = response['0'].position;
    })
    .catch(error => console.error('Error:', error));
}


function onUpdate(ev) {
    ev.preventDefault();

    var data =
     JSON.stringify({
        "name": String(document.getElementById("uname").value),
        "age": document.getElementById("uage").value,
        "gender": String(document.getElementById("ugender").value),
        "email": String(document.getElementById("uemail").value),
        "position":String(document.getElementById("uposition").value)
     });

    fetch("http://localhost:3000/workers/" + document.getElementById("uid").value, {
        method: 'PUT', 
        body: data, 
        headers:{
          'Content-Type': 'application/json'
        }
    }).then(res => res.json())
    .then(response => {
        popup("updS");
        setTimeout(function() {popup("updS"); },1000);
     })
    .catch(error => {
      popup("updE");
      setTimeout(function() {popup("updE"); },1000);
   });
}


function onDelete(ev) {
    ev.preventDefault();

    fetch("http://localhost:3000/workers/" + document.getElementById("did").value, {
        method: 'DELETE',
        headers:{
          'Content-Type': 'application/json'
        }
    }).then(res => res.json())
    .then(response => {
        popup("delS");
        setTimeout(function() {popup("delS"); },1000);
     })
    .catch(error => {
      popup("delE");
      setTimeout(function() {popup("delE"); },1000);
   });
}

function parseWorkersToTableRow(Workers){
    console.log(Workers.userdetails['0']);
    var row=document.createElement('tr');

    id=document.createElement('td');
    id.innerText=Workers['_id'];
    row.appendChild(id);

    uname=document.createElement('td');
    uname.innerText=Workers.userdetails['0'].name;
    row.appendChild(uname);

    age=document.createElement('td');
    age.innerText=Workers.userdetails['0'].age ;
    row.appendChild(age);
   
    gender=document.createElement('td');
    gender.innerText=Workers.userdetails['0'].gender ;
    row.appendChild(gender);
    
    email=document.createElement('td');
    email.innerText=Workers.userdetails['0'].email ;
    row.appendChild(email);

    position=document.createElement('td');
    position.innerText=Workers['position'];
    row.appendChild(position);

    return row;
}

function popup(item){
    var popup = document.getElementById(item);
    popup.classList.toggle("show");
}

(function () {
  
    document.getElementById('cbutton').addEventListener('click', onCreate);
    document.getElementById('rbutton').addEventListener('click', onRead);
    document.getElementById('ubutton').addEventListener('click', onUpdate);
    document.getElementById('pubutton').addEventListener('click', onPrepareUpdate);
    document.getElementById('dbutton').addEventListener('click', onDelete);
    //document.getElementById('uid').addEventListener('change', onSelectId);
    console.log('Handlers is set')
})()