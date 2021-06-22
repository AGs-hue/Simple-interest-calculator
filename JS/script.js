var p,r,t,si;
function calculator()
{
const principal = document.getElementById("principal").value;
const rate = document.getElementById("rate").value;
const time = document.getElementById("time").value;
const simple = (principal * rate * time)/100;
result.innerHTML= "The simple interest is =" + simple;

}
    