current=new Date();
x="";
setInterval(function(){
        x=current.getSeconds()+"sec/"+current.getMinutes()+"min/"+current.getHours()+"hrs";
        console.log(x);
}
,1000);