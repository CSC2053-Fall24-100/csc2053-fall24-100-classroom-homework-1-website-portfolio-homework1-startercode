function loadNavbar() {
    const navbar = `
        <nav class="navbar navbar-expand-xl navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="../homepage/index.html">Home</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarBasic" aria-controls="navbarBasic" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarBasic">
                    <ul class="navbar-nav me-auto mb-2 mb-xl-0">
                        <li class="nav-item">
                            <a class="nav-link" href="../schedule/schedule.html">Schedule</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="../hobbies/hobbies.html">Hobbies</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    `;
    document.getElementById('navbar-container').innerHTML = navbar;  // Insert the navbar HTML into the navbar-container
}
