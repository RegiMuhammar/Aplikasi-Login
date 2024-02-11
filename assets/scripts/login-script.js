/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */

/* Membuat variable untuk elemen View */
const loginFormElement = document.querySelector('#loginForm');
const inputEmailElement = document.querySelector('#inputEmail');
const inputPasswordElement = document.querySelector('#inputPassword');


// ini variabel email dan password
const expectedEmail = 'admin@dicoding.com';
const expectedPassword = 'superpassword';

// aksi klik pada button
loginFormElement.addEventListener('submit', function(event) {
    event.preventDefault();
    // TODO 1 : Mendapatkan input email dan password pengguna dari form.
    const email = inputEmailElement.value;
    const password = inputPasswordElement.value;
  
    /* TODO 2 : Buat Logika perbandingan dengan kondisi:
       Jika variabel email identik dengan expectedEmail dan password identik dengan expectedPassword, panggil fungsi goToHome().
       Jika tidak, maka panggil fungsi showPopUp().
     */
    // Memastikan input email dan password sama dengan yang diharapkan
    if (email == expectedEmail && password == expectedPassword) {
      // kalau benar mengarah ke home
      goToHome();
    } else {
      // kalau salah muncul pop up
      showPopUp();
    }
});
