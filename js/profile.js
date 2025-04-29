document.addEventListener('DOMContentLoaded', function () {
    const username = localStorage.getItem('username');
    const role = localStorage.getItem('role');

    if (username && role) {
        document.getElementById('username').textContent = username;
        document.getElementById('role').textContent = role;

        // Display additional data based on role
        if (role === 'Siswa') {
            document.getElementById('kelas').textContent = 'XI PPLG 1'; // Example data
            document.getElementById('nisn').textContent = '1234567890'; // Example data
        } else {
            // Hide fields specific to Siswa
            document.getElementById('kelas-container').style.display = 'none';
            document.getElementById('nisn-container').style.display = 'none';
        }
    } else {
        alert('No user is logged in. Redirecting to login page.');
        window.location.href = 'login.html';
    }
});

function back() {
    let role = localStorage.getItem('role');
    switch(role) {
        case 'admin':
            window.location.href = 'dashboard_admin.html';
            break;
        case 'guru':
            window.location.href = 'dashboard_guru.html';
            break;
        case 'siswa':
            window.location.href = 'dashboard_siswa.html';
            break;
        default:
            alert('Invalid role. Redirecting to login page.');
            window.location.href = 'login.html';
    }
}