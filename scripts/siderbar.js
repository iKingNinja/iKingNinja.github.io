const menuButton = document.getElementById("menu-button");
const sidebar = document.getElementById("sidebar");
let open = false;


const toggleSidebar = () => {
    sidebar.style.setProperty("transition", "transform 300ms ease-in");
    
    if (!open) {
        sidebar.style.setProperty("transform", "translateX(0%)");
        open = true;
    } else {
        sidebar.style.setProperty("transform", "translateX(100%)");
        open = false
    }
}

menuButton.addEventListener("click", toggleSidebar);