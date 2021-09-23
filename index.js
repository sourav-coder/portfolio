function submit() {

  
  // console.log(apikeys);
  const {SERVICE_ID,TEMPLATE_ID}=apikeys

  var email = document.getElementById("email").value;
  var name = document.getElementById("name").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  if (!email || !name || !subject || !message) {
    alert("Please fill up the details");
    return false;
  }
  else {


    var params={
      from_name:name,
      email:email,
      subject:subject,
      message:message
    }
    // console.log(apikeys.SERVICE_ID,apikeys.TEMPLATE_ID);
    emailjs.send(SERVICE_ID,TEMPLATE_ID,params)
    .then(function(res){
      console.log("Status "+res.status);
      if (res.status=="200")alert("Successfully Submitted");
      else alert("Sending Failed")
      
    })

  return true;



  }


}