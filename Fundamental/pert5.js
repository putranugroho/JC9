//  ====================================== PERTEMUAN 5 ======================================
//  ========================================= Array =========================================

// Array menyimpan berbagai variable
// Index array dimulai dari [0]
// Dapat menyimpan berbagai macam jenis type data & bisa dicampur
// var arrayMobil = ['Honda', 'Toyota', 'Ford']

// console.log(arrayMobil);
// console.log(arrayMobil[0]);
// console.log(arrayMobil[1]);
// console.log(arrayMobil[2]);
// console.log(arrayMobil.toString()); // Memanggil data dalam array dengan bentuk string
// console.log(arrayMobil.join('-'));  // Menggabungkan data dalam array
// console.log(arrayMobil.length);     // Mencari tau jumlah data dalam array
// console.log(arrayMobil);

// var warna = ['Aquablue', 'Green', 'Blue', 'Cream', 'Teal']
// var warnaLength = warna.length

// for (let i = 0; i < warnaLength; i++) { // Memanggil data dalam array dengan menggunakan Looping For
//     console.log(warna[i]);
// }

// var w = warna.length
// var x = warna.sort()             // Mengurutkan data didalam array
// var y = warna.reverse()          // Membalikan urutan didalam array
// var z = warna.indexOf('Green')   // Mencari tau index data didalam array

// let buah = ['Banana', 'Orange', 'Apple', 'Lemon', 'Manggo']

// buah.pop()               // Menghilangkan data dalam index terakhir array
// console.log(buah);

// buah.push('Kiwi')        // Memasukan data kedalam index array terakhir
// console.log(buah);   

// buah.shift()             // Menghilankan data dalam index pertama array
// console.log(buah);

// buah.unshift('Lemon')    // Memasukan data kedalam index array pertama
// console.log(buah);

// buah.splice(0,0,'Lemon', 'Kiwi') // array.splice( X(number) , Y(number) , Z(string) );   
// console.log(buah);  // X = dimulai dari index keberapa, Y = berapa data yang mau dihapus, Z = data yang mau d masukan)                

// buah.splice(0,1)    
// console.log(buah);  

// delete buah[0]      // mengosongkan data dalam index yang ditentukan
// console.log(buah);

// let buah1 = buah.slice(2)   // Slice = Memotong dan membuat array baru
// console.log(buah1);         // Slice(X) = Memotong array dari index ke-X sampai akhir

// let buah2 = buah.slice(1,3) // Slice(X,Y) = Memotong array dari index ke-X sampai batas array ke-Y
// console.log(buah2);        

// buah [5] = 'Grape' // Merubah array[X] menjadi data baru
// console.log(buah);

// buah[buah.length] = 'Berry'
// console.log(buah);

// var nama1 = ['Andi', 'Budi']
// var nama2 = ['Chandra', 'Dodi']
// var nama3 = ['Endang', 'Faris']

// var hasil1 = nama1.concat(nama2)        // Menggabungkan array A dengan array B
// var hasil2 = nama2.concat(nama1)        // Menggabungkan array B dengan array A
// var hasil3 = nama1.concat(nama2,nama3)  // Menggabungkan array A dengan array B dan array C

// console.log(hasil1);
// console.log(hasil2);
// console.log(hasil3);


var arrNumber = [13, 56, 37, 29, 1, 7, 4]

// console.log(arrNumber.sort(function(a,b){return a-b})); //ASC
// console.log(arrNumber.sort(function(a,b){return b-a})); //DESC