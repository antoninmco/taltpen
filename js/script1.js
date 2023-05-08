
/* Fonction qui calcule le prix total de la location en multipliant le prix d'une journée de location du vehicule par la durée de la location*/
function calculprix() {
	//Récupération de l'élément choix
	const selecteur = document.getElementById('choix');
	const vehiculeSel = selecteur[selecteur.selectedIndex];
	//Récupération de la valeur de l'élément choix
	var choixvehicule = vehiculeSel.value;
	//Récupération de l'élément durée
	const duree = document.getElementById('duree');
	//Calcul du prix du véhicule
	var prixvehicule = choixvehicule*duree.value;
	//Récupération de l'élément total
	const total = document.getElementById('total');
	//Test pour s'assurer que le transfert de la valeur du total se fait quand l'utilisateur a choisi un véhicule que l'utilisateur a bien sélectionné un véhicule
	if (choixvehicule!=-1) {
		//Transfert de la valeur de total 
		total.value= prixvehicule + "$";
	}
	else {
		total.value="";
	}
}
/*Fonction qui verifie si le mot de passe entré est le même que celui de la confirmation. 
Si les mdp sont les mêmes la fonction retourne True et le fomulaire est validé et on accède à la réponse php. 
Si les mdp ne sont pas identiques, la fonction retourne False et le formulaire n'est pas validé et on n'accède pas au formulaire*/
function isValidForm() {
	////Récupération de l'élément mot de passe
	var obj = document.getElementById('mdp');
	//Récupération de l'élément confirmer le mot de passe
	var obj2 = document.getElementById('conf_mdp');
	//test pour vérifier que les mots de passe correspondesnt
	if (obj.value != obj2.value) {
		//Alerte pour indiquer à l'utilisateur que les mots de passe ne correspondent pas
		alert("Vos mots de passe ne correspondent pas");
		//Retourne false et l'utilisateur n'accède pas à la réponse php
		return false;
	}
	//Le test est validé, la fonction retourne true et l'utilisateur accède à la réponse php
	return true;
}
/*Fonction qui se lance quand l'utilisateur valide le paiement. Vérifie que l'utilisateur a choisi un véhicule dans le menu déroulant sinon la fonction retourne false et on le formulaire n'est pas validé et on n'accède pas à la réponse php.
Cette fonction vérifie également que le numéro de carte bancaire comporte bien 16 chiffres sinon la fonction retourne false et le formulaire n'est pas validé et l'utilisateur n'accède pas à la réponse php.
Si ces deux tests sont validés, alors la fonction retourne true et le formulaire est validé et l'utilisateur accède à la réponse php.*/
function verifPaiement() {
	//Récupération de l'élément choix
	var sel = document.getElementById('choix');
	//Test pour vérifier que l'utilisateur a choisi un véhicule
	if (sel.value==-1) {
		//Alerte pour indiquer à l'utilisateur qu'il n'a pas choisi de véhicule
		alert("Veuillez choisir un vehicule");
		//retourne false et l'utilisateur n'accède pas à la réponse php
		return false;
	}
	//Récupération de l'élément numéro de carte bancaire
	var numero = document.getElementById('numero')
	//Test pour vérifier que le numéro de carte bancaire comporte bien 16 chiffres 
	if (numero.value.length!=16) {
		//Alerte pour indiquer à l'utilisateur que le numéro de carte ne comporte pas 16 chiffres
		alert("Numéro carte invalide");
		//Retourne false, l'utilisateur n'accède pas à la réponse php
		return false;
	}
	//Le test est validé, la fonction retourne true et l'utilisateur accède à la réponse php
	return true;
}

