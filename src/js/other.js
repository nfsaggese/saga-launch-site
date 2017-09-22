// var baseUrl = 'http://localhost:8000/';
var baseUrl = 'http://api.saga.guide/';

function leadformsubmit(event){
    console.log("leadform scrpit");
    // event.preventDefault();
    $.ajax({
        url: baseUrl + 'launch/add-guide/',
        type:'POST',
        data:$('#leadform').serialize(),
        success:function(){
          alert("Thank you for your interest. We will be in touch soon.")
          $('#leadform')[0].reset();
        },

        error:function(data){
            console.log(data["responseText"]);
            var response = JSON.parse(data["responseText"]);
            if("email" in response){
                alert(response["email"]);
            }else{
                alert(response["phone_number"]);
            }

        }
    });
    return false;
}