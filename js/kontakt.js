document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('navn').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('besked').value.trim();
    const telefon = document.getElementById('telefon').value.trim();
    const errorContainer = document.getElementById('error-messages');
    errorContainer.innerHTML = '';

    let errors = [];

    if (navn === '') {
        errors.push('Navn er påkrævet.');
    }

    if (email === '') {
        errors.push('Email er påkrævet.');
    } else if (!validateEmail(email)) {
        errors.push('Indtast en gyldig emailadresse.');
    }
    if (telefon !== '' && !/^\+?\d{7,15}$/.test(telefon)) {
        errors.push('Indtast et gyldigt telefonnummer.');
    }

    if (besked  === '') {
        errors.push('Besked er påkrævet.');
    }})

    