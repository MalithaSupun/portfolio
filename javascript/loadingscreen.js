document.addEventListener("DOMContentLoaded", function() {
    // Show loading screen
    document.getElementById("loadingScreen").style.display = "flex";

    // Hide loading screen and show page content when fully loaded
    window.addEventListener("load", function() {
        document.getElementById("loadingScreen").style.display = "none";
        document.getElementById("pageContent").style.display = "block";
    });
});
