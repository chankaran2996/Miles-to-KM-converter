const cal = () =>{
    const miles = document.getElementById("miles").value;
    document.getElementById("miles").value="";
    if(miles==""){
        alert("Enter miles vaule");
        return;
    }
    let km = miles*1.60934;
    document.getElementById("output").innerHTML="Value of "+miles+" miles is "+km+" km";
    // console.log(miles)
}