var circle =  

for(var i = 0; i < circle.length; i++){
if (item = 0){
    circle.classlist.add("green"); 
    circle.classlist.remove("yellow"); 
    circle.classlist.remove("red");
} else if (circle >0 && circle < 6){
    circle.classlist.add("yellow");
    circle.classlist.remove("green"); 
    circle.classlist.remove("red");
    } else {
        item.classlist.add("red"); 
        item.classlist.remove("green"); 
        item.classlist.remove("yellow");
    }
}