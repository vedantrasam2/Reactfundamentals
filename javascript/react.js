flag=true;
function hide(){
    if(flag)
    {
        document.getElementsByTagName('h1')[0].style="visibility:hidden";
    }
    else
    {
    document.getElementsByClassName('hide')[0].style="visibility:visible";
    }
    flag=!flag
}