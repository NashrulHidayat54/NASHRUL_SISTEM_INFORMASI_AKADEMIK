document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('uname').value;
    const password = document.getElementById('psw').value;
    const role = document.getElementById('role').value;

    // Validasi berdasarkan role
    if (role === 'admin' && username === 'admin' && password === 'admin') {
        localStorage.setItem('username', username); // Save username to localStorage
        localStorage.setItem('role', role); // Save role to localStorage
        window.location.href = 'dashboard_admin.html';
    } else if (role === 'guru' && username === 'guru' && password === 'guru') {
        localStorage.setItem('username', username); // Save username to localStorage
        localStorage.setItem('role', role); // Save role to localStorage
        window.location.href = 'dashboard_guru.html';
    } else if (role === 'siswa' && username === 'siswa' && password === 'siswa') {
        localStorage.setItem('username', username); // Save username to localStorage
        localStorage.setItem('role', role); // Save role to localStorage
        window.location.href = 'dashboard_siswa.html';
    } else {
        alert('Invalid credentials. Please try again.');
    }
});