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

const allDays = document.querySelectorAll('option');

const arrDays = [...allDays];

console.log(arrDays)

let day;

const showPlan = (e) => {
    e.preventDefault();

    // for (const el of arrDays) {
    //     console.log(el.value);
    // }


    // switch (day) {
    //     case 'mondey':
    //         description.textContent = 'W pniedziałek: piłka nożna';
    //         break;
    //     case 'tuesday':
    //         description.textContent = 'wtorek: język angielski';
    //         break;
    //     default:
    //         description.textContent = 'nie działa';
    // }
}

btn.addEventListener('click', showPlan);