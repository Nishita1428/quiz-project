function test() {
    // retrieving data (shows only on screen)
    var name = document.getElementById("name ").value;
    var surname = document.getElementById("qname ").value;
    var age = document.getElementById("wname ").value;
    var email = document.getElementById("ename ").value;
    var password = document.getElementById("rname ").value;
    // var gender = document.getElementById("male").value;
    // var gen = document.getElementById("female").value;

    alert(name+ surname+ age + email + password);


    //storing data (saved in console)
    var name = localStorage.setItem("name", name);
    var qname = localStorage.setItem("surname", surname);
    var wname = localStorage.setItem("age", age);
    var ename = localStorage.setItem("email", email);
    var rname = localStorage.setItem("password", password);
    // var male = localStorage.setItem("gender", gender);
    // var female = localStorage.setItem("gen", gen);

    //retreiving stored data and using it for calculation
    // var name = localStorage.getItem("name", name);
    // var qname = localStorage.getItem("surname", surname);
    // var wname = localStorage.getItem("age", age);
    // var ename = localStorage.getItem("email", email);
    // var male = localStorage.getItem("gender", gender);
    // var female = localStorage.getItem("gen", gen);
}