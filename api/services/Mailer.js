module.exports.sendActivationMail = function(obj) {
    sails.hooks.email.send(
        'emailAktivasi', 
        {
            Name: obj.email,
            Url: obj.url,
            VerificationNumber: obj.verificationNumber
        },
        {
            to: obj.email,
            subject: 'Email Aktivasi'
        },
        function(err) {console.log(err || 'Mail Sent!');}
    )
}