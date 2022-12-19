
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
    let totalTickets =0;
    

    

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

    // alert(totalCost);

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

form.addEventListener('submit', (event) => {

    var cocost = parseFloat(document.getElementById("spCost").innerHTML);
   
    alert(cocost);
    if(cocost == 0){
        alert("You cannot place an order without any items in the current order. Please add one or more items to continue.");
        return;
    }
  event.preventDefault();

  // Get the values of the form inputs
  const slAdultPass = form.elements['sladult'].value;
  const slChildPass = form.elements['slchild'].value;
  const foreignerAdultPass = form.elements['fradult'].value;
  const foreignerChildPass = form.elements['frchild'].value;



  // Add the product to the cart
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td>${slAdultPass}</td>
    <td>${slChildPass}</td>
    <td>${foreignerAdultPass}</td>
    <td>${foreignerChildPass}</td>
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





// --------incDec buttons-----------


 

































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
        totalTickets= parseInt(totalsl+totalfr)


        function calcLoyaltyPoints(){
        
        
        totalTickets += FRppl + SLppl;
        if(totalTickets > 3){
            loyaltyPoints = 15 * totalTickets;
            FinalLoyaltyPoint +=  loyaltyPoints; 
            localStorage.setItem("LYTY",FinalLoyaltyPoint);
        }
        }

        function showLoyaltyPoints(){
        
            FinalLoyaltyPoint = JSON.parse(localStorage.getItem(`LYTY`));
        
        if(FinalLoyaltyPoint>0){
            alert("Congratulations! You have earned "+  FinalLoyaltyPoint + " loyalty points so far");
        }
        else{
            alert("Sorry! You don't have any loyalty points so far");
        }
        }



























//————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————



// booking={locAdult:0, locChild:0,forAdult:0,forChild:0,dur:"0",Cost:0,bookNum:0 }
// function getOption() {
//     timeChoice = document.querySelector('#time');
//     output = selectElement.value;
//     document.querySelector('.output').textContent = output;
// }





















// let outArray=[];

// summary.addEventListener("click",summary);

// function summary(){
//     for (let i=0;i<=count;i++){
//         summary.innerText=`  localAdult: ${(array[i].locAdult).value}  , localChild: ${(array[i].locChild).value} ,   forAdult:  ${(array[i].forAdult).value}  ,  forchild: ${(array[i].forChild).value} \n  `
//     }
    
// }

// btnAdd.addEventListener("click",AddToOrder);
 
// function AddToOrder(evt){
//     totalCost=( parseInt(sladult.value) *1200) +(parseInt(slchild.value) * 700) + (parseInt(fradult.value) * 5500) +(parseInt(frchild.value) *2700)+ timeCost;
//     console.log(totalCost)
//     timeChoice.forEach(item=>item.addEventListener("change", durationCosting));

//     evt.preventDefault();
//     let Arrival=(date.value)
//     if (theForm.checkValidity()){
//         let fullName= `Order name ${fname.value} ${lname.value}`
//          txtOutput.innerText=`Your order:\n :${fullName} \n Order Email:${email.value} \n Arrival date ${Arrival} \n Total Cost ${totalCost} `;
//     }
// }
