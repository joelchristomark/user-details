function details()
{
    var user_name=document.getElementById('user').value;
    var father_name=document.getElementById('father').value;
    var mother_name=document.getElementById('mother').value;
    var age=document.getElementById('age').value;
    var data="<tr><td>"+user_name+"</td><td>"+father_name+"</td><td>"+mother_name+"</td><td>"+age+"</td></tr>";
    document.getElementById('tbody').innerHTML=data;
}