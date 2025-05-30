

function uppg9() {

    let numbers = [2, 5, 7, 86, 54, 33, 24, 80];

    // skapa en funktion som heter sort och tar in en array av siffror som argument
    function sort(numArray) {

        // i funktionen du loopa igenom arrayen
        numArray.forEach(num => {

            //kolla med en if-sats om  talet är jämt eller udda
            // i if-sattsen skriv ut i konsolen resultatet
            // resultatet ska loggas i formatet: talet och sen ordet "jämt" eller "udda"
            if (num % 2 === 0) {
                console.log(num, " jämt");
            }
            else {
                console.log(num, " udda");
            }

        });

    }

    // anropa funktionen och skicka med en array som argument
    sort(numbers);

}

module.exports = { uppg9 };