const toggleBtn = document.getElementById('toggleSidebar');
const mainContent = document.querySelector('.mainContent');

const isCollapsed = localStorage.getItem('sidebarCollapsed');

if (isCollapsed === 'true') {
    mainContent.classList.add('collapsed');
} else if (isCollapsed === 'false') {
    mainContent.classList.remove('collapsed');
} else {
  
    if (window.innerWidth <= 768) {
        mainContent.classList.add('collapsed');
    }
}

toggleBtn.addEventListener('click', () => {
    mainContent.classList.toggle('collapsed');
    
 
    if (mainContent.classList.contains('collapsed')) {
        localStorage.setItem('sidebarCollapsed', 'true');
    } else {
        localStorage.setItem('sidebarCollapsed', 'false');
    }
});