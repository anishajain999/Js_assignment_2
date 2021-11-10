console.log("working");
function generate_star(){
    //console.log("hello");
    var star = parseInt(document.getElementById("star").value);
    //console.log(star)
    if(star==0){
        alert("0 Not allow");
        return;
    }
    else if(star<0 ){
        alert("Negative value not allow");
        return;
    }
    else if(isNaN(star)){
        alert("Please Enter value");
    }
    else if(star> 30){
        alert("Not valid")
    }
    else{
        let s= "";
        for(var i =1; i<=star; i++){
            for(var j=0; j<i; j++){
                s+= "*"
            }
            s+= `<br>`
            // string += ``
        }
        //console.log(s);
        document.getElementById("ans").innerHTML =`${s}<br>`;
    }
}

function reset_star(){
    document.getElementById("star").value="";
    document.getElementById("ans").innerHTML="";

}
function generate_number(){
    //console.log("hello");
    var number = parseInt(document.getElementById("number").value);
    //console.log(star)
    if(number==0){
        alert("0 Not allow");
        return;
    }
    else if(number<0 ){
        alert("Negative value not allow");
        return;
    }
    else if(isNaN(number)){
        alert("Please Enter value");
    }
    else if(number> 25){
        alert("Not valid")
    }
    else{
        let n = "";
        for(var i =1; i<=number; i++){
            for(var j=1; j<i; j++){
                n += i*j + '&nbsp &nbsp';
            }
            n += `<br> <br>`
            // string += ``
        }
        //console.log(s);
        document.getElementById("ans_number").innerHTML =`${n}<br>`;
    }
}

function reset(){
    document.getElementById("number").value="";
    document.getElementById("ans_number").innerHTML="";

}