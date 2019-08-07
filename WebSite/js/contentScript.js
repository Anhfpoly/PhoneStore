const toggleMenu = document.querySelector('#toggleMenu');
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const toggleSidebar = document.querySelector('#mini-sidebar');
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
const currentSidebar = localStorage.getItem('sidebar') ? localStorage.getItem('sidebar') : null;
toggleMenu.onclick = () => {
    toggleSidebar.checked = !toggleSidebar.checked;
    if (toggleSidebar.checked) {
        localStorage.setItem('sidebar', 'normal');
        document.body.classList.remove("sidebar-icon-only");
    } else {
        localStorage.setItem('sidebar', 'mini');
        document.body.className = "sidebar-icon-only";
    }
}
if (currentSidebar) {
    if (currentSidebar === 'mini') {
        toggleSidebar.checked = false;
        document.body.className = "sidebar-icon-only";
    }
    if (currentSidebar === 'normal') {
        toggleSidebar.checked = true;
    }
}
switchTheme = (e) => {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        document.querySelector('#logo-white').style.display = 'block';
        document.querySelector('#logo-black').style.display = 'none';
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        document.querySelector('#logo-white').style.display = 'none';
        document.querySelector('#logo-black').style.display = 'block';
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        document.querySelector('#logo-white').style.display = 'block';
        document.querySelector('#logo-black').style.display = 'none';
    }
}


convertTime = (unix_timestamp) => {
    var date = new Date(unix_timestamp * 1000);
    var day = date.getDay() < 10 ? "0" + date.getDay() : date.getDay();
    var month = date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth();
    var year = date.getFullYear();
    var formattedTime = day + '/' + month + '/' + year;
    return formattedTime;
}
showImage = (e) => {
    document.querySelector('#get-image').src = URL.createObjectURL(e.target.files[0])
}

const formatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
})