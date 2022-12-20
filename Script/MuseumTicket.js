
console.log("this is the main Js")
//variables available to all code 
// const date = document.getElementById("date").value;  
// const headCount = document.getElementsByName("headCount") 
//--------
// const btnAdd = document.getElementById("add");
// const btnConfirm=document.getElementById("confirm")
// const theForm =document.getElementById("form");
// const txtOutput = document.getElementById("output"); 
// const summary = document.getElementById("summary"); 

function calculateCost(){
    var totalsl = 0 ;
    var totalfr = 0 ;
    let totalCost = 0;
    

    

    var sladult = document.getElementById("sladult").value; 
    var slchild = document.getElementById("slchild").value; 
    var fradult = document.getElementById("fradult").value; 
    var frchild = document.getElementById("frchild").value; 

    let timeChoice= document.getElementById("timeDuration").value; 

    if(timeChoice == ""){
        alert("Please select a time duration foryour tickets")
        return;
    }



   
// -----------------------------------
     if(sladult==""){
        sladult = 0;
    }
    else{
        sladult = parseInt(sladult);
    }

// -----------------------------------

    if(slchild ==""){
        slchild = 0;
    }
    else{
        slchild = parseInt(slchild);
    }
// --------------------------------------

    if(fradult ==""){
        fradult = 0;
    }
    else{
        fradult = parseInt(fradult);
    }
// --------------------------------------

     if(frchild ==""){
        frchild = 0;
    }
    else{
        frchild = parseInt(frchild);
    }

// --------------------------------------




   

    totalsl = sladult+slchild; 
    totalfr = fradult+frchild; 
   



    if(timeChoice == "0"){
        totalCost = (sladult*1200) + (slchild*700)  + (fradult*5500) + (frchild*2700);
       
    }
    else if(timeChoice == "1"){
        totalCost = ((sladult*1200) + (slchild*700)  + (fradult*5500) + (frchild*2700) + (totalsl*350) + (totalfr*460));
    }
    else if(timeChoice == "2"){
    totalCost = ((sladult*1200) + (slchild*700)  + (fradult*5500) + (frchild*2700) + (totalsl*600) + (totalfr*800));
    }


    document.getElementById("spCost").innerHTML = totalCost.toFixed(2);


}







function formValidation(){
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;

    const email = document.getElementById("email").value;
    const cemail = document.getElementById("cemail").value; 

    const sladult = document.getElementById("sladult").value; 
    const slchild = document.getElementById("slchild").value; 
    const fradult = document.getElementById("fradult").value; 
    const frchild = document.getElementById("frchild").value; 

    const timeChoice= document.getElementById("timeDuration"); 

    if(fname == ""){
        alert("Please input first name");
        document.getElementById("your").focus();
        return;
      }

    if(lname == ""){
        alert("Please input last name");
        
        document.getElementById("your").focus();
        return;
    }

    if(email == ""){
        alert("Please input your email");
        
        document.getElementById("your").focus();
        return;
    }

    if(cemail == ""){
        alert("Please your email again");
        
        document.getElementById("your").focus();
        return;
    }

    if (email != cemail){
        alert("Email addresses are not matching! Check again")
        return;
    }

    if(timeChoice ==""){
        alert("Please select a time duration");
    }
}





const form = document.getElementById('form');
const cart = document.getElementById('cart');


let grandcost = 0;
let overallCode = 0;
let totalforFav;
form.addEventListener('submit', (event) => {

    let cocost = parseFloat(document.getElementById("spCost").innerHTML);
    totalforFav=cocost;
    if(cocost == 0){
        alert("You cannot place an order without any items in the current order. Please add one or more items to continue.");
        return;
    }
  event.preventDefault();

  // Get the values of the form inputs
  const slAdultTkt = form.elements['sladult'].value;
  const slChildTkt = form.elements['slchild'].value;
  const foreignerAdultTkt = form.elements['fradult'].value;
  const foreignerChildtkt = form.elements['frchild'].value;



  // Add the product to the cart
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td>${slAdultTkt}</td>
    <td>${slChildTkt}</td>
    <td>${foreignerAdultTkt}</td>
    <td>${foreignerChildtkt}</td>
    <td>${cocost}</td>
    <td><button class="remove-button">Remove</button></td>
  `;
  cart.appendChild(tr);

  // Update the total cost
  grandcost += cocost;
  document.getElementById("grandTotal").innerHTML = grandcost.toFixed(2);

  // Reset the form
    resetPurchaseForm();
});

cart.addEventListener('click', (event) => {
    if (event.target.className === 'remove-button') {
      const tr = event.target.parentNode.parentNode;
      var totalCell = tr.cells.item(3);
      var totalCost = totalCell.innerHTML;
      var totalCostInt = parseInt(totalCost);
      grandcost -= totalCostInt;
      document.getElementById("grandTotal").innerHTML = grandcost.toFixed(2);
      tr.remove();
    }
  });


function resetPurchaseForm(){
    document.getElementById("form").reset();
    document.getElementById("spCost").innerHTML = "0.00";
    }





// --------incDec buttons--------

//Date validation for javascrpt
        //-----------------------------
        let todayDate = new Date();
        let frmDate = document.getElementById("date");
        let month = todayDate.getMonth() + 1; 
        let year = todayDate.getUTCFullYear() - 0; 
        let tdate = todayDate.getDate(); 
        if(month < 10){
        month = "0" + month 
        }
        if(tdate < 10){
        tdate = "0" + tdate;
        }
        let maxDate = year + "-" + month  + "-" + tdate;
        // Fill in today's date on the form. 
        document.getElementById("date").value = maxDate;
        //Prevent the user from entering an earlier invalid date.| restrct user to book tickets on a past date
        frmDate.setAttribute("min",maxDate)





//calculating Loyalty points

        let FinalLoyaltyPoint = 0;
        let loyaltyPoints =0;
function loyalty(){
    const sladult = document.getElementById("sladult").value; 
    const slchild = document.getElementById("slchild").value; 
    const fradult = document.getElementById("fradult").value; 
    const frchild = document.getElementById("frchild").value; 
        
        let totalTickets = (fradult+frchild) + (sladult+slchild);
        let temp1;
        if(totalTickets > 3){
            loyaltyPoints = 15 * totalTickets;
            FinalLoyaltyPoint +=  loyaltyPoints; 
            let temp = {LYTY:FinalLoyaltyPoint}
            temp1=JSON.stringify(temp)
            localStorage.setItem("LYTY",temp1);
        }
        

        FinalLoyaltyPoint = localStorage.getItem("LYTY", temp1);
        let temp3=JSON.parse(FinalLoyaltyPoint)
        console.log(temp3["LYTY"])
        
        if(temp3["LYTY"]>0){
            alert("Current loyalty point value is "+  temp3["LYTY"] + " ! Lets goo");
        }
        else if(temp3["LYTY"]=0){
            alert("No loyalty points obtained, select atleast 3 tickets to obtain loyalty points");
        }
       
}
let favtemp1;
function Setfavourites(){
    const sladult = document.getElementById("sladult").value; 
    const slchild = document.getElementById("slchild").value; 
    const fradult = document.getElementById("fradult").value; 
    const frchild = document.getElementById("frchild").value; 

    let favorder={Fsladult:sladult, Fslchild: slchild, Ffradult: fradult, Ffrchild: frchild, FtotalforFav:totalforFav}
    // let favtemp = {FVRT:favorder}
    favtemp1=JSON.stringify(favorder)
    localStorage.setItem("FVRT",favtemp1);
}       



function Getfavourites(){
    const sladult = document.getElementById("sladult"); 
    const slchild = document.getElementById("slchild"); 
    const fradult = document.getElementById("fradult"); 
    const frchild = document.getElementById("frchild"); 



    let getfav=localStorage.getItem("FVRT",favtemp1)
    let getfav2=JSON.parse(getfav)
    console.log(typeof(getfav2["Fsladult"]))
    console.log(getfav2["Fsladult"])
    let SAD=getfav2["Fsladult"]
    let SCH=getfav2["Fslchild"]
    let FAD= getfav2["Ffrladult"]
    let FCH=getfav2["Ffrchild"]
    sladult.setAttribute("value",SAD)
    slchild.setAttribute("value",SCH)
    fradult.setAttribute("value",FAD)
    frchild.setAttribute("value",FCH)

    alert("Only your ticket values will be updated, to add to the order fill the credentials above the ticket purchase...Thank You !")


}



























