/*
 * Contoh kode untuk membaca query parameter,
 * Siapa tau relevan! :)
 * */

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

// Coba olah data ini hehe :)
console.log(params);

/*
 * Contoh penggunaan DOM di dalam class
 * */
const app = new App();

app.init().then(app.run);
let clicked = true;
app.testButton.addEventListener('click', (e) => {
    e.preventDefault();
    app.clear();
    app.filter().then(app.run);
});
