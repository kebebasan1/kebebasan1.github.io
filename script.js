// INI ARROW FUNCTION
// const tampilNama = (nama, waktu) => {
//     return`selamat ${waktu}, ${nama}`;
// };
// console.log(tampilNama('Dawa', 'malam'));

// implisit return
// const tampilNama = nama => `halo, ${nama}`;
// console.log('Ahmad Freedom');

// const tampilNama = nama => `halo, ${nama}`
// console.log(tampilNama())

// let mahasiswa = ['Dawa', 'Ahmad', 'Maulana']
// let jumlahHuruf = mahasiswa.map(nama => ({ nama, jumlahHuruf: nama.length }));
// console.table(mahasiswa)
// Arrow FUNCTION SELESAI

// Construktor Function
// const mahasiswa = function() {
//     this.nama = 'Dawa';
//     this.umur = 18;
//     this.sayHello = function () {
//         console.log(`halo, nama saya${this.nama}, umur saya ${this.umur}`);
//     };
// };

// const Dawa = new mahasiswa();

// Arrow Function
// const mahasiswa = function() {
//         this.nama = 'Dawa';
//         this.umur = 18;
//         this.sayHello = () => {
//             console.log(`halo, nama saya${this.nama}, umur saya ${this.umur}`);
//         };
//     };

//     const Dawa = new mahasiswa()

// Object literal
// const mhs1 = {
//     nama: 'Dawa',
//     umur: 18,
//     sayHello: () => {
//         console.log(`hello nama saya${this.nama}, dan umur saya${this.umur}`)
//     }
// }

// const mahasiswa = function() {
//     this.nama = 'Dawa';
//     this.umur = 18;
//     this.sayHello = function () {
//         console.log(`halo, nama saya${this.nama}, umur saya ${this.umur}`);
//     };
//     // Function declaration
//     setInterval( () => {
//         console.log(this.umur++);
//     }, 500);

// };
// const Mahasiswa = new mahasiswa();

// This Pada Arrow function
// const box = document.querySelector('.box');
// box.addEventListener('click', function() {
// let satu = 'size';
// let dua = 'caption'

// if(this.classList.contains(satu)) {
//     [satu, dua] = [dua, satu]
// }

//     this.classList.toggle(satu);
//     setTimeout(() => {
//         this.classList.toggle(dua);
//     }, 600);
// });
