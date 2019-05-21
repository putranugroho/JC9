// ====================================== Latihan Pertemuan 2 ======================================

// //Solve #2
// var inputUser = prompt('Silahkan masukan angka berapapun : ')
// var kuadrat = Math.pow(inputUser,2)
// alert('Kuadrat dari '+ inputUser + ' = ' + kuadrat);


// //Solve #3
// var inputUser = prompt('Silahkan masukan angka berapapun : ')
// var kuadrat = Math.cbrt(inputUser)
// alert('Akar 3 dari '+ inputUser + ' = ' + kuadrat);


// //Solve #4
// var hari = 510
// var tahun = Math.floor(hari/360)
// var bulan = Math.floor((hari-(tahun*360))/30)
// var minggu = Math.floor((hari-(tahun*360)-(bulan*30))/7)
// var harian = Math.floor((hari-(tahun*360)-(bulan*30)-(minggu*7)))

// console.log(tahun + ' Tahun, ' + bulan + ' Bulan, ' + minggu + ' Minggu, ' + harian + ' Hari');


// //Solve #5
// // A + B = 49
// // rasio = 0.4 | 4 : 10 | 2 : 5
// // totalRasio = 2 + 5 = 7
// // Andi = totalUmur * (rasioAndi / totalRasio)
// // Budi = totalUmur * (rasioBudi / totalRasio)
// var rasioAndi = 2
// var rasioBudi = 5
// var totalRasio = 7
// var totalUmur = 49

// var umurAndi = totalUmur * (rasioAndi / totalRasio) + 2
// var umurBudi = totalUmur * (rasioBudi / totalRasio) + 2

// console.log('Umur Andi 2 tahun kemudian = ' + umurAndi);
// console.log('Umur Budi 2 tahun kemudian = ' + umurBudi);


// //Solve #6
// var today = new Date()
// var tomorow = new Date()
// var yesterday = new Date()

// tomorow.setDate(today.getDate()+1)
// yesterday.setDate(today.getDate()-1)

// console.log('Hari ini tanggal = ' + today.getDate() + ' - ' + (today.getMonth()+1) + ' - ' +today.getFullYear());
// console.log('Hari besok tanggal = ' + tomorow.getDate() + ' - ' + (tomorow.getMonth()+1) + ' - ' +tomorow.getFullYear());
// console.log('Hari kemarin tanggal = ' + yesterday.getDate() + ' - ' + (yesterday.getMonth()+1) + ' - ' +yesterday.getFullYear());


// //Solve #7
// //Cara #1
// var text = 'Halo Dunia'
// var hasil = new RegExp('a','g') // reguler expression , global ['g'] = akan mencari ke seluruh karakter
// var found = text.match(hasil)
// console.log(found);

// //Cara #2
// var kata = 'Halo Dunia Kita Semua'
// var panjang1 = kata.length
// var kata2 = kata.replace(/a/g, '')
// var panjang2 = kata2.length

// var hasil = panjang1 - panjang2
// console.log(hasil);


// //Solve #8
// var mobilA = 60
// var mobilB = 40
// var kecepatan = mobilA + mobilB
// var jarak = 120

// var tabrakan = jarak / kecepatan * 60
// console.log(tabrakan);


// //Solve #9
// var nilaiRandom = Math.random() * 100
// var bulatan = Math.floor(nilaiRandom)

// console.log(bulatan);

// ====================================== Latihan Pertemuan 2 ======================================

/*
Nilai Ujian

Akan meminta inputan untuk mata pelajaran dibawah ini:
Nama siswa
Nilai Matematika
Nilai Bahasa Indonesia
Nilai Bahasa Inggris
Nilai Ilmu Pengetahuan Alam

Nilai di rata2

(Lulus: A - C, tidak lulus D - E)
85 ke atas A
84 - 76 B
75 - 66 C
65 - 50 D
sisanya E

Nama : Alvin
Dengan nilai akhir : 76
Index Nilai : B
Selamat, Anda dinyatakan lulus.

Nama : Alvin
Dengan nilai akhir : 49
Index Nilai : E
Mohon maaf, Anda dinyatakan tidak lulus.
*/

// ====================================== Latihan Pertemuan 3 ======================================

// #solve it 16
// var bintang = ''
// for (let i = 1; i <= 5; i++) {
//     for (let j = 0; j < i; j++){
//         bintang += ' * '
//     }   bintang += '\n'
// } console.log(bintang);

// #solve it 17
// var bintang = ''
// for (let i = 5; i > 0; i--) {
//     for (let j = 0; j < i; j++){
//         bintang += ' * '
//     }   bintang += '\n'
// } console.log(bintang);

// # solve it 17 b
// var bintang = ''
// for (let i = 0; i <= 5; i++) {
//     for (let j = 0; j < 5 - i ; j++){
//         bintang += ' * '
//     }   bintang += '\n'
// } console.log(bintang);

// #solve it 18a
// var bintang = ''
// for (let i = 0; i <= 5; i++) {
//     for (let j = 0; j < i; j++){
//         bintang += ' * '
//     }   bintang += '\n'
// }
// for (let k = 4; k >= 0; k--) {
//     for (let l = 0; l < k; l++){
//         bintang += ' * '
//     }   bintang += '\n'
// }
// console.log(bintang);

// # solve it 18b
// var bintang = ''
// for (let k = 5; k > 0; k--) {
//     for (let l = 0; l < k; l++){
//         bintang += ' * '
//     }   bintang += '\n'
// }
// for (let i = 2; i <= 5; i++) {
//     for (let j = 0; j < i; j++){
//         bintang += ' * '
//     }   bintang += '\n'
// } console.log(bintang);         








