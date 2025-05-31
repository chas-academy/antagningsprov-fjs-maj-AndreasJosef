

function uppg8() {

    // skapa en array med fem person obkjet
    // varje person objekt ska ha två properties, name och age
    let people = [
        {
            name: "Hanna",
            age: 32
        },
        {
            name: "Frank",
            age: 40
        },
        {
            name: "Alf",
            age: 60
        },
        {
            name: "Emma",
            age: 28
        },
        {
            name: "Peter",
            age: 29
        }
    ];

    // skapa en fuktion som tar in en array som argument
    function logOverThirty(peopleArray) {

        if (!peopleArray) return;

        peopleArray.forEach(person => {
            // skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
            //  över 30 år som skrivs ut i konsolen
            if (person.age > 30) {
                console.log(person.name);
            }
        });

    }

    // anropa funktionen och skicka med arrayen som argument
    logOverThirty(people);


}

module.exports = { uppg8 };