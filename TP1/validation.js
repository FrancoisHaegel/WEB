$(document).ready(function(){  
    $("#form").submit(function(e) {
        var exprNames = /^[A-Za-z]{1,20}$/;
        var exprCityName = /^[A-Za-z]{1,50}$/;
        var exprPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[ !@#$€%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[0-9a-zA-Z!@#$€%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,}$/;
        var exprAddress = /^[a-zA-Z0-9\-.,' ]+$/;
        var exprPhoneNumber = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
        var exprEmail = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var exprLogin = /^[0-9A-Za-z]{1,20}$/;
        var exprPostalCode = /^[0-9]{5}$/;
        
        var email = $('#email').val();
        var password = $('#password').val();
        var verifpassword = $('#verifpassword').val();
        var address = $('#address').val();
        var phonenumber = $('#phonenumber').val();
        var firstname = $('#firstname').val();
        var lastname = $('#lastname').val();
        var login = $('#login').val();
        var postalcode = $('#postalcode').val();
        var city = $('#city').val();
        
        if(!firstname.match(exprNames)){
			alert("Le prénom doit faire 20 LETTRES au maximum");
		}
		if(!lastname.match(exprNames)){
			alert("Le nom doit faire 20 LETTRES au maximum");
		} 
		if(!login.match(exprLogin)){
			alert("L'identifiant ne peut pas dépassé 20 lettres ou chiffres");
		} 
        if(!email.match(exprEmail)){
			alert("Entrez un e-mail valide !");
		}  
		if(!password.match(exprPassword)){
			alert("Le mot de passe doit contenir au moins une majuscule, une minuscule, un chiffre, un caractère spécial, et faire plus de 8 caractères");
		}
		if(verifpassword != password){
		    alert("La vérification du mot de passe n'est pas identique au mot de passe");
		}
		if(!address.match(exprAddress)){
		    alert("Entrez une adresse valide");
		}
		if(!phonenumber.match(exprPhoneNumber)){
		    alert("Format de numéro de téléphone invalide\n formats attendus : 0X XX XX XX XX, +33 X XX XX XX XX ou 00 33 XX XX XX XX");
		}
		if(!postalcode.match(exprPostalCode)){
		    alert("Le code postal doit uniquement être composé de 5 chiffres");
		}
		if(!city.match(exprCityName)){
			alert("Le nom de la ville doit faire 50 LETTRES au maximum");
		} 
    });
});

