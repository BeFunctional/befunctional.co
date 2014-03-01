/*
 * -------------------------------------------
 *	$_FITTEXT
 *  
 *  This controls inflatable text.
 * -------------------------------------------
 */

$('.fitText').fitText(1); // Turn the compressor down (resizes less aggressively)






/*
 * -------------------------------------------
 *	$_EMAIL VALIDATION
 * -------------------------------------------
 */

function validateEmail($email) {
  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  if( !emailReg.test( $email ) ) {
    return false;
  } else {
    return true;
  }
}

var emailValID = "#userEmail";
$("label[for='mce-EMAIL'], input[name='EMAIL'], .invalidEmail").hide();
$(emailValID).keydown(function(event){
  if(event.keyCode == 13){
    $('.newsletterTrigger').click();
  }
});

$('#newsletterSignupModal').on('shown.bs.modal', function (e) {
	$(emailValID).val('');
	$(emailValID).parent('.input-group').removeClass('has-warning has-feedback');
	$('.invalidEmail').slideUp().fadeOut();
});

$(".newsletterSignup").find(".input-group-btn .btn").click( function() {
    var emailVal = $(emailValID).val();
    if (emailVal != "" && validateEmail(emailVal)) {
        $('#newsletterSignupModal').modal('show');
    } else {
        $(emailValID).parent('.input-group').addClass('has-warning has-feedback');
        $('.invalidEmail').finish().slideDown().fadeIn();
    }
});
$("#newsletterSignupModal").find("#mc-embedded-subscribe").click( function() {
  if (!$('#newsletterSignupModal input').val() === '') {
    alert('success!');
  } else {
    alert('Fail!');
  }
});


