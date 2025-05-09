function show()  {
    // Obter um elemento único a partir do seu id
    const contactlist = document.getElementById('contact-list');
    console.log(contactlist);
}

function show() {
    
    // Obter um elemento único a partir do seu id
    const liElements = document.getElementsByTagName('li')
    console.log(liElements)

    // Obter vários elementos (HTMLCollection) a partir de uma classe
    const contactInputs = document.getElementsByClassName('contact-input')
    console.log(contactInputs)

     // Obter vários elementos (NodeList) a partir de uma query (semelhante aos seletores do CSS)
    const contacts = document.querySelectorAll('#contact-list > li > label')
    console.log(contacts)

     // Obter vários elementos (NodeList) a partir do atributo name
    const contact1 = document.getElementsByName('contact1')
    console.log(contact1)

    // Obter um elemento a partir de uma query (o primeiro elemento a corresponder)
    const fistContact = document.querySelector('#contact-list > li > label')
    console.log(fistContact)
}

