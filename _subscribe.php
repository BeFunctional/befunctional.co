<?php
$email = $_POST['EMAIL'];
$FNAME = $_POST['FNAME'];
$LNAME = $_POST['LNAME'];
$MailChimp = new ..\mailchimp-api\src\Drewm\MailChimp('29edcb090664de3d2824c0a181ee8e20-us3');
$result = $MailChimp->call('lists/subscribe', array(
                'id'                => 'd385783d82',
                'email'             => array('email'=>$email),
                'merge_vars'        => array('FNAME'=>$FNAME, 'LNAME'=>$LNAME),
                'double_optin'      => true,
                'update_existing'   => true,
                'replace_interests' => false,
                'send_welcome'      => false,
            ));
print_r($result);
echo $result;
?>
