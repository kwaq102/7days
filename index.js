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

const description = document.querySelector('.plan');
const btn = document.querySelector('button');

const days = document.querySelector('#days')
const allDays = document.querySelectorAll('option');

const arrDays = [...allDays];

let day1 = 'mondey';
console.log(day1)

arrDays.forEach(day => day.addEventListener('click', () => {
    day1 = day.value;
}));
console.log(day1)

const showPlan = (e) => {
    e.preventDefault();

    switch (day1) {
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

btn.addEventListener('click', showPlan);