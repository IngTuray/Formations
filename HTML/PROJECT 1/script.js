const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const image4 = document.getElementById('image4');
const image5 = document.getElementById('image5');
const image6 = document.getElementById('image6');
const textBox = document.getElementById('text-box');

//dark or light Images
function imageMode(color) {
    image1.src = `img/undraw_programming_re_kg9v_${color}.svg` ;
    image2.src = `img/undraw_mobile_ux_re_59hr_${color}.svg` ;
    image3.src = `img/undraw_real_time_analytics_re_yliv_${color}.svg` ;
    image4.src = `img/undraw_static_website_re_x70h_${color}.svg` ;
    image5.src = `img/undraw_develop_app_re_bi4i_${color}.svg` ;
    image6.src = `img/undraw_developer_activity_re_39tg_${color}.svg` ;
}

//dark mode style
function darkMode() {
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = 'Mode Sombre';
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon'); 
    imageMode('light');
}

//light mode style
function lightMode() {
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = 'Mode Normal';
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun'); 
    imageMode('dark');
    
}

// switch Theme dynamically
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        darkMode();
    }else{
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');

        lightMode();
    }
} 

//Event Listener
toggleSwitch.addEventListener('change', switchTheme);

//check local storage for theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        darkMode();
    }
    
}