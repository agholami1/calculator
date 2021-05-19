let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error"
                }
                break;
            case '←':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});
function switchTheme() {
    let darkMode = document.getElementById("dark-mode");
    let theme = document.getElementById("theme");
    if (theme.getAttribute("href") == "licht.css") {
      theme.href = "donker.css";
      darkMode.innerHTML = "Light Mode ☀️";
    } else {
      theme.href = "licht.css";
      darkMode.innerHTML = "Dark Mode 🌑";
    }
}