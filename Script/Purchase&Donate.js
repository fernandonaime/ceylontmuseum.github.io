//Input validations for the donate form
function inputValidation(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var cardNumber = document.getElementById("cardNum").value;
    var pinNumber = document.getElementById("cvv").value;
    var cardholderName = document.getElementById("cardHolder").value;
    var mothInput = document.getElementById("monthInput").value;
    var yearInput = document.getElementById("yearInput").value;
    // var fixedDonatons = document.getElementById("fixedDonatons").value;

    var checkbox = document.getElementById('myCheckbox'); 
    var checkboxValue = checkbox.checked; console.log(checkboxValue);

    var email_pattern = /^[A-Za-z\d\.\_]+\@[A-Za-z\d\.\-]+\.[A-Za-z]{2,5}$/;
    var name_pattern = /^\b(?!.*\.{2})[a-zA-Z.]+(?:\s[a-zA-Z.]+)\b$/;
    var addr_pattern = /^[A-Za-z\d\.\-\/\#\,\s]+$/;
    var card_pattern = /^[0-9]{16,16}$/;
    var pin_pattern = /^[0-9]{3,3}$/;
    var holder_pattern = /^\b(?!.*\.{2})[a-zA-Z.]+(?:\s[a-zA-Z.]+)\b$/;


    

  if(!name.match(name_pattern)){
     
     alert("Please enter a valid name");
     document.getElementById("txtname").focus();
    return false;
  }


  if(!email.match(email_pattern)){
      alert("Please enter a valid email");
      document.getElementById("txtemail").focus();
      return false;
  }

  if(!address.match(addr_pattern)){
      alert("Please enter a valid address");
      document.getElementById("address").focus();
      return false;
  }

  if(fixedDonatons == ""){
    alert("Please select the donation amout");
    return;
  }

  if(!cardNumber.match(card_pattern)){
      alert("Please enter a valid cardnumber");
      document.getElementById("cardNum").focus();
      return false;
  }

  if(!cardholderName.match(holder_pattern)){
      
    alert("Please enter a valid cardholder name");
    document.getElementById("card-holder").focus();
    return false;
  }

  if(!pinNumber.match(pin_pattern)){
    alert("Please enter a valid pin number(cvv)");
    document.getElementById("txtadd").focus();
    return false;
  }


  if(mothInput == ""){
    alert("Please select expiration month of your credit/debit card");
    document.getElementById("monthInput").focus();
    return;
  }

  if(yearInput == ""){
    alert("Please select the expiration year of your credit/debit card");
    document.getElementById("yearInput").focus(); 
    return;
  }

  alert("Thank you so much for your contribution! The receipt will be sent to your email address.")

  clearDonatiom();
  
}

// clear form after click the Donate button
function clearDonatiom(){
  const inputs = document.querySelectorAll('#name, #email, #address, #myCheckbox, #comment, #cardNum, #cardHolder, #monthInput, #yearInput, #cvv');

  inputs.forEach(input => {
    input.value = '';
  });
};




// fixed donation amounts that are customized and multi-selectable.
