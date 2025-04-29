## Sistem Informasi Akademik – SMK Hang Tuah 1 Jakarta

Aplikasi web statis berbasis HTML, CSS, dan JavaScript untuk mengelola data akademik di lingkungan sekolah dengan pembagian akses berdasarkan peran pengguna.

### 📌 Fitur Utama

- **Login pengguna**
- **Role-based access**: tampilan dan fitur berbeda untuk:
  - **Admin** – Kelola data siswa, guru, jurusan, jadwal, pengumuman
  - **Guru** – Input dan lihat nilai, jadwal, profil
  - **Siswa** – Lihat nilai, pengumuman, profil
- **Pengelolaan Data**:
  - Siswa, Guru, Jurusan
  - Input nilai dan rapor
  - Jadwal pelajaran
  - Pengumuman sekolah
- **Tampilan dashboard modern** untuk setiap peran

### 🗂️ Struktur Folder

```
├── HTML/
│   ├── index.html              # Halaman utama
│   ├── login.html              # Login
│   ├── dashboard_admin.html    # Dashboard Admin
│   ├── dashboard_guru.html     # Dashboard Guru
│   ├── dashboard_siswa.html    # Dashboard Siswa
│   └── ... (halaman lainnya)
│
├── CSS/
│   ├── style.css               # Styling umum
│   ├── style_dashboard_*.css   # Styling dashboard per peran
│   └── ... (file CSS lainnya)
│
├── js/
│   ├── script.js
│   ├── loading.js
│   └── profile.js
│
├── asset/
│   ├── Logo YHT Terbaru.png
│   └── gedung depan 1.png
```

### 🛠 Teknologi yang Digunakan

- HTML5
- CSS3
- JavaScript
