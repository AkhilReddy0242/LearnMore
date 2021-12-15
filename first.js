let but=document.querySelector('button');
but.addEventListener('click',showmsg);
function showmsg()
{
    let name=prompt('enter name');
    but.textContent='nameste'+name;
}