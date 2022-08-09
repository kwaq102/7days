/*

Napisz program, który wyświetlać będzie jakie zajecia dodatkowe ma użytkownik w
zależności od dnia tygodnia. Użytkownik podaje dzień tygodnia np. “wtorek” a
program wyświetla zajęcia jakie dzisiaj ma użytkownik:
a. poniedziałek: piłka nożna
b. wtorek: język angielski
c. środa: kurs programowania
d. czwartek: wolne
e. piątek: kurs tenisa
f. sobota: spotkania ze znajomymi
g. niedziela: wolne

*/

const form = document.querySelector('form')
const description = document.querySelector('.plan');
const btn = document.querySelector('button');

const allDays = document.querySelectorAll('option');

const arrDays = [...allDays];

let day = '';

const showPlan = (e) => {
    e.preventDefault();

    // console.log(e.target[0].value)

    day = e.target[0].value;

    switch (day) {
        case 'choose':
            description.textContent = 'WYBIERZ DZIEŃ TYGODNIA!';
            break;
        case 'mondey':
            description.textContent = 'W pniedziałek: piłka nożna';
            break;
        case 'tuesday':
            description.textContent = 'wtorek: język angielski';
            break;
        case 'wednesday':
            description.textContent = 'Środa: Kurs programowania';
            break;
        case 'thrusday':
            description.textContent = 'Czwartek: Wolne';
            break;
        case 'friday':
            description.textContent = 'piątek: kurs tenisa';
            break;
        case 'saturday':
            description.textContent = 'sobota: spotkania ze znajomymi';
            break;
        case 'sunday':
            description.textContent = 'niedziela: Wolne';
            break;
        default:
            description.textContent = 'nie znam takiego dnia tygodnia';
    }
}

form.addEventListener('submit', showPlan);