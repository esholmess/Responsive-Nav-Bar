function showSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.right = "0";
    document.addEventListener('click', closeSidebarOnClickOutside);
}

function hideSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.right = "-200%";
    document.removeEventListener('click', closeSidebarOnClickOutside);
}

function closeSidebarOnClickOutside(event) {
    const sidebar = document.querySelector(".sidebar");
    const menuButton = document.querySelector(".menubutton");

    // Eğer tıklanan alan menünün veya menü butonunun dışında ise menüyü kapatır
    if (!sidebar.contains(event.target) && !menuButton.contains(event.target)) {
        hideSidebar();
    }
}
