function table(){
    //console.log("he")
    let number = parseInt(document.getElementById("number").value);
    let range = parseInt(document.getElementById("range").value);
   
    if(number==0 || range==0){
        alert("Not valid");
        return;
    }
    else if(number<0 || range <0){
        alert("Negative value not allow");
        return;
    }
    else if(isNaN(number)|| isNaN(range)){
        alert("Please Enter value");
    }
    else{
        let s ;
        for (let i=1; i<= range; i++){
            let table = number*i;
            //console.log(table);
            document.getElementById("table").innerHTML+=`<h4> ${number} * ${i} = ${table}</h4>`;           
        }        
    }
}
function reset(){
    document.getElementById("number").value="";
    document.getElementById("range").value="";
    document.getElementById("table").innerHTML="";

}