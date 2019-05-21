//  ====================================== PERTEMUAN 5 ======================================
//  ========================================== ES6 ==========================================
// LET KEYWORD

// let nilai = 5
// // let nilai = 10 // syntax error karna LET tidak mengizinkan membuat 2 variable dengan nama yang sama
// nilai = 15 // merubah nilai variabel

// console.log(nilai);

// const pi = 3.14
// // pi = 10 // Syntax error karna CONST tidak mengizinkan merubah variable yang sudah dideklarasikan

// console.log(pi);

// // VARIABLE SCOPE

// // Var > dibatasi oleh Function
// // Let > dibatasi oleh Function, dibatasi oleh {}
// // Const > dibatasi oleh Function, dibatasi oleh {}

// var angka = 10
// function nomer() {
//     var angka = 5
//     console.log('nomer ' + angka);
// }

// console.log(angka);
// nomer()

// function hitung() {             
//     var awal = 'String biasa'    
//     let tgh = 'String aja'      
//     const akhir = 'String lain'           
// }

// // console.log(awal);    // Syntax Error
// // console.log(tgh);     // Syntax Error
// // console.log(akhir);   // Syntax Error

// if (true) {
//         var awal = 'String biasa'
//         let tgh = 'String aja'
//         const akhir = 'String lain'
    
// }

// console.log(awal);       // Bisa digunakan 
// // console.log(tgh);     // Syntax Error
// // console.log(akhir);   // Syntax Error

// // TEMPLATE STRING

// var nama = 'Gordo', umur = 23, job = 'Mahasiswa'

// var teks1 = 'namaku ' + nama + ', umurku ' + umur + ', pekerjaanku ' + job
// // Menggunakan ``(tanda petik dibawah tombol ESC) agar lebih mudah menggabungkan variable dengan string
// var teks2 = `
// namaku ${nama}
// umurku ${umur}
// pekerjaanku ${job}
// umurku 5 tahun kedepan ${umur + 5}` 

// console.log(teks1);
// console.log(teks2);

// // SPREAD OPERATOR

// let arrBuah = ['apel', 'mangga', 'jeruk', 'anggur']

// console.log(arrBuah);
// console.log(...arrBuah);

// var arrNama = [arrBuah, 'andi', 'budi', 'chandra']
// console.log(arrNama); // memasukan arrBuah kedalam arrNama

// var arrHari = [...arrBuah, 'senin', 'selasa', 'rabu'] 
// console.log(arrHari); // menggunakan [...VAR] untuk menggabungkan arrBuah kedalam arrHari

// let number = [1,2,3]

// function jumlah(x,y,z) {
//     console.log(x+y+z);
// }

// jumlah(number[0], number[1], number[2]) // Memasukan variable dari array number kedalam function
// jumlah(...number)                       // Melakukan tugas yang sama tetapi dengan cara yang lebih mudah

// // DEFAULT PARAMETER

// function rumus(a,b=2,c=3) {
//     return (a+b)*c
// }
// console.log(rumus(1));      // A mendapat nilai baru, B & C menjalankan nilai yand telah dideklarasi
// console.log(rumus(3,2,1));  // A, B & C semua memiliki nilai variable yang baru

// // ARROW FUNCTION

// function rumus(a,b=2,c=3) {     // Old Function
//     return (a+b)*c
// }

// var hitung = (a,b=2,c=3) => {   // Arrow Function
//     return (a+b)*c
// }

// var hi = () => {console.log('Hi');}
// var hai = (nama) => {console.log(`Hai ${nama}`)}
// var hello = nama => console.log(`Hello ${nama}`); 

// // Arrow function > tidak perlu {} jika hanya sebaris saja 
// // Arrow function > tidak perlu () jika hanya 1 variable saja
// hi(); hai('bahlul'); hello('samsul')

// var pi = () => {
//     return 3.14
// }
// var g = () => 9.8
// var rumus = () => (1+2+3)*4

// // Arrow function > tidak perlu menuliskan kata RETURN dalam function
// console.log(pi()); console.log(g()); console.log(rumus());

// var satu = (number, fn, nama) => {
//     console.log( `Nilai number adalah ${number}`);
    
//     fn(nama)
// }
// var dua = nama => console.log(`haluuuu ${nama}`);

// satu(25, dua, 'dondo')

// // CALLBACK FUNCTION

// var hitung = (x,y,fn) => {
//     return fn(x,y)   // jangan lupa di return agar hasilnya bisa keluar dari function
// }

// var kali = (a,b) => {
//     return a*b
// }

// var bagi = (a,b) => {
//     return a/b
// }

// var hasilkali = hitung(4,5,kali)
// var hasilbagi = hitung(50,10,bagi)

// console.log(hasilkali);
// console.log(hasilbagi);

// var retFunc = (teks) => {
//     return (txt) => console.log(`teks yang masuk ${teks}, dan txt yang masuk ${txt}`);
// }

// var hasil = retFunc('antara lain')
// hasil('sebagai berikut')

// // ARRAY FILTERING
// // arr.Filter() = sebuah func yang menerima satu argument
// // argument tersebut adalah func yang harus me-return (true/false)
// // arr.filter() = akan me-return sebuah array  baru
// // data pada array yang menghasilkan TRUE akan di push ke new array 

// var arr = [0,1,2,3,4,5]

// var hasilFilter = arr.filter((val)=> {return val > 3})
// var hasilFilter2 = funFilter(arr, (val)=> {return val > 3})
// var hasilGenap = arr.filter((val)=> val % 2 == 0)
// var hasilGanjil = arr.filter(val=> val % 2 != 0)

// console.log(hasilFilter);
// console.log(hasilFilter2);
// console.log(hasilGenap);
// console.log(hasilGanjil);

// var funfilter = (arr, fn) => {
//     var newArr = []
//     for (let i = 0; i < arr.length; i++) {
//         if (fn(arr[i])) {
//             newArr.push(arr[i])
//         }
        
//     }
//     return newArr

// }

// var hasilfun = funfilter(arr,(val) => {return val > 3})
// var hasilJS = arr.filter((val) => {return val > 3})

// console.log(hasilfun);
// console.log(hasilJS);

// // ARRAY MAPPING
// // Func yang masuk ke .map tidak harus True/False
// // mengubah bentuk setiap data pada array
// // menghasilkan new array


// var arrNumb = [1,3,5,7,11,13,17,19]

// var funMap = (arrNumb, fun) => {
//     var newArr2 = []
//     for (let i = 0; i < arrNumb.length; i++) {
//         newArr2.push(fun(arrNumb[i]))    
//     }
//     return newArr2

// }

// var hasilJM = arrNumb.map(val => val *2)
// var hasilFM = funMap(arrNumb, (val) => {return val *2})

// console.log(hasilJM);
// console.log(hasilFM);

// var hasilMap1 = arrNumb.map(val => val * 2)
// var hasilMap2 = arrNumb.map(val => val > 10)

// console.log(hasilMap1);
// console.log(hasilMap2);

// // PROMISE

// var library = new Promise(function(berhasil,gagal) {
//     var buku = ['Math', 'Fisika', 'Kimia']
//     if (buku.length == 0) {
//         gagal('Buku tidak tersedia')
//     } else {
//         berhasil('Buku tersedia')
//     }
// })

// library.then(res => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// })

// OBJECT LITERAL (Properties)

var merk = 'yamaha' 
var tahun = 2015

var vixion = {
    merk ,tahun
}

var mio = {
    prod : merk,
    buat : tahun
}

console.log(vixion);
console.log(mio);

// OBJECT LITERAL (Method)
var something = {
    sayHello(x){
        return 'Hellooo ' + x;
    }
}

console.log(something.sayHello('Andi'));

// DESTRUCTURING ARRAY

var buah = ['Apel', 'Banana', 'Cherry']
var [a,b,c] = buah

console.log(a);
console.log(b);
console.log(c);

// DESTRUCTURING OBJECT

var andi = {
    nama : 'Andi',
    usia : 23,
    job : 'Mahasiswa'
}

var {nama, usia, job} = andi

console.log(nama);
console.log(usia);
console.log(job);




