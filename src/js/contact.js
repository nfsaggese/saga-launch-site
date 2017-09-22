// var baseUrl = 'http://localhost:8000/';
var baseUrl = 'http://api.saga.guide/';

function contactsubmit(event){
    // event.preventDefault();
    $.ajax({
        url: baseUrl + 'launch/contact/',
        type:'POST',
        data:$('#contact-us').serialize(),
        success:function(){
          alert("Thank you for your reaching out. We will be in touch soon.")
          $('#contact-us')[0].reset();
        },

        error:function(data){
            alert("Something went wrong. Did you fill in all the fields?");
        }
    });
    return false;
}