function myFunction() {
    alert("Hi")
}

document.addEventListener("DOMContenLoaded", load);

function load () {  
    tableau.extensions.initializeAsync().then(() => {
        const dashboard = tableau.extensions.dashboardContent.dashboard;
        console.log(dashboard.name);
    });
}