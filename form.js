
let base = Array(
    {name:"ana vaz", age: 18, job:"professor", email:"email@.com", phone:"12345678"},
    {name:"carlos vaz", age: 28, job:"advogado", email:"email@.com", phone:"12345678"}

);
console.log(base);
let id_P = 1;

function hideForm(){
    var x = document.getElementById("formulario").style.display;
    if(x=="none"){
       document.getElementById("formulario").style.display="block";
       console.log(x);
}else{
       document.getElementById("formulario").style.display="none";
       console.log(x);
}
}




 function controleForm(){

    validateForm();
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var job = document.getElementById('job').value; 
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var vet = Array( name, age, job, email, phone)
    base.push({
        name,
        age,
        job,
        email,
        phone



    });
    console.log( base);
    document.getElementById('name').value = "";
    document.getElementById('age').value = "";
    document.getElementById('job').value = "";
    document.getElementById('email').value = "";
    document.getElementById('phone').value = "";
};

function validateForm() {
    var a = document.getElementById('name').value;
    var b = document.getElementById('age').value;
    var c = document.getElementById('job').value; 
    var d = document.getElementById('email').value;
    var e = document.getElementById('phone').value;
    if (a == "") {
      alert("O campo nome é obrigatorio");
      return false;
    }
    if (b == "") {
        alert("O campo Idade é obrigatorio");
        return false;
      }
      if (c == "") {
        alert("O campo Profissão é obrigatorio");
        return false;
      }
      if (d == "") {
        alert("O campo email é obrigatorio");
        return false;
      }
      if (e == "") {
        alert("O campo telefone é obrigatorio");
        return false;
      }
  }
  function quest31(){
    var name = document.getElementById('name3').value;
    console.log(name);
    quest3(name);
  }
  function quest3(name){
    var x;
      for(var i=0;i<base.length; i++){
       if(base[i].name==name){
        x = {name:base[i].name, age:base[i].age}
        var y = JSON.stringify(x);
        let ele = document.getElementById('searchq3');
        ele.innerHTML += y;
        return x;
       }
      }    
  }

  function quest4(){
    let vet = Array();
      for(var i=0;i<base.length; i++){
        var str = base[i].name;
        var fname = str.split(' ');
        vet.push(fname[0]);
      }   
      let ele = document.getElementById('searchq4');
      ele.innerHTML = vet.toString();
      return vet;
  }

 function idVetor(){
     var x = "antes: ";
     var y = "depois: ";
    for(var i=0;i<base.length; i++){
        x = x + JSON.stringify(base[i]);
        var obj = base[i];
        var key = "id";
        if(!obj[key]){
            obj[key] = id_P;
            base[i] = obj;
            id_P++;
        }
        y = y + JSON.stringify(obj);
        console.log(y)
   
    }
   
    console.log(x)
    let ele2 = document.getElementById('text1');
    ele2.innerHTML = x
    let ele3 = document.getElementById('text2');
    ele3.innerHTML = JSON.stringify(y);
 }

 function habilitaveis(){
    var x = "";
    for(var i=0;i<base.length; i++){
        if(base[i].age>=18){
            x = x + JSON.stringify(base[i]);
            console.log(x);
        }
    }
    let ele4 = document.getElementById('text3');
    ele4.innerHTML = x
    return x;
}
function mediaidades(){
    var x = 0;
    if(base.length>0){
        for(var i=0;i<base.length; i++){
           x = x + parseInt(base[i].age);
        }
        var y = x/base.length;
        let ele7 = document.getElementById('text7');
        ele7.innerHTML = y;
    }

}
 
