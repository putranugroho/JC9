//  ====================================== PERTEMUAN 5 ======================================
//  ======================================== Object =========================================

// // Mampu menyimpan banyak data seperti array
// // Jika pada array menggunakan index, object menggunakan property
// // Mampu menyimpan data apapun (String, Number, Boolean, undefined)

// var manusia = {namaDpn: 'Andi', namaBlkg: 'Susilo', Usia: 50, job: 'Artist'}

// console.log(manusia);
// console.log(manusia.Usia);

// var manusia2 = {
//     namaDpn: 'Baron',
//     namaBlkg: 'Purwa',
//     Usia: 22,
//     job: 'Leader Academic',
//     alive: true,
//     namaFull: function() {
//         return this.namaDpn+" "+ this.namaBlkg
//     },
//     sayHello: function(nama) {
//         console.log('Hai ' + nama);
//     }
// }

// // Property : namaDpn, namaBlkg, Usia, Job
// // Method adalah sebuah function didalam object, Contoh : namaFull 

// var namaLngkp = manusia2.namaFull()

// console.log(namaLngkp);
// manusia2.sayHello('Alex')
// manusia2.sayHello(namaLngkp);

// // Object literal

// var orang = {namaDpn: 'Janita', namaBlkng : 'Maemunah'}

// // keyword 'new'

// var warna = new Object()
// warna.pertama = 'Red'
// warna.kedua = 'Green'
// warna.ketiga = 'Blue'

// // Object Constractor

// var manusia3 = function(nama, usia, job) {
//     this.namaDpn = nama
//     this.umur = usia
//     this.pekerjaan = job
// }

// var satu = new manusia3('Andi', 30, 'PNS')
// console.log(satu);
// console.log(satu.umur);

// // Adding Properties
// satu.alamat = 'BSD'
// console.log(satu);

// // Changing Properties
// satu.umur = function() {
//     console.log('telah berubah menjadi function');
    
// }
// console.log(satu.umur);

// // Deleting Properties
// delete satu.umur
// console.log(satu);

// var objOne = {
//     propOne : 'String Biasa',
//     propTwo : {
//         subPropOne : 23,
//         subPropTwo : function(a) {
//             console.log('Sub Property Two '+a);
//         }
//     },
//     propThree : ['Red', 'Green', 'Blue'],
//     propFour : [
//         12,
//         {insideOne: 44, insideTwo: 45}
//     ]
// }


// console.log(objOne.propTwo.subPropOne); // 23
// objOne.propTwo.subPropTwo(objOne.propTwo.subPropOne) // Sub Property Two 23
// console.log(objOne.propFour[1].insideTwo); // 45

// function orang(arr1, arr2, obj1, obj2) {
//     this.nama = [arr1, arr2];
//     this.usia = {satu: obj1, dua: obj2};
// }

// var obj2 = new orang ('red', 'Green', 23, 24)
// console.log(obj2);

// var hari = {
//     pertama : 'senin',
//     kedua : 'selasa',
//     ketiga : 'rabu',
//     keempat : 'kamis',
//     kelima : 'jumat',
//     keenam : 'sabtu',
//     ketujuh : 'minggu',
// }
// var namaProp // untuk menampun nama property didalam obj hari
// // Looping for in
// for (namaProp in hari) {
//     console.log(namaProp + ': ' + hari[namaProp]); 
//     // namaProp berubah menjadi nama property dalam hari, kemudian memanggil isinya dengan hari[namaProp]
// }

// function people (name, age, job) {
//     this.nama = name,
//     this.usia = age,
//     this.pekerjaan = job
// }

// people.prototype.address = 'jakarta'

// var alvin = new people('Alvin', 22, 'Freelancer')
// console.log(alvin);
// console.log(alvin.address);

//  ========================================== Class ===========================================

// class manusia {
//     constructor(nama, usia, pekerjaan){
//         this.name = nama,
//         this.age = usia,
//         this.job = pekerjaan
//     }

//     sayHello(){
//         console.log('Hello, my name is '+this.name);
        
//     }

// }

// var manusia1 = new manusia ('abdul', 30, 'kang cilor')

// console.log(manusia1);
// manusia1.sayHello()

// manusia , hewan dan tumbuhan
// tempat tinggal   > Property
// bernyawa         > Method
// Makan            > Method
// Bernafas         > Method
// Berkembang Biak  > Method

class makhlukHidup{
    constructor(tmptTgl, nyawa){
        this.tempatTinggal = tmptTgl,
        this.bernyawa = nyawa
    }

    makan(){
        console.log('Sedang makan');
        
    }

    bernafas(){
        console.log('Sedang bernafas');
        
    }
}

class manusia extends makhlukHidup{
    constructor(tmptTgl, nyawa, akal){
        super(tmptTgl, nyawa) // Menjalankan Constructor dari Makhluk Hidup
        this.akal = akal
    }

    bekerja(){
        console.log('Sedang Bekerja');
        
    }
}
var budi = new manusia('Kota', true, true)
console.log(budi);
budi.makan()
budi.bernafas()
budi.bekerja()
console.log();


// buar class hewan
    // properties : bertelur, beranak
    // method : berburu

// buat class tumbuhan
    // properties : berbunga, berbuah
    // method : fotosintesis


class hewan extends makhlukHidup{
    constructor(tmptTgl, nyawa, bertelur, beranak){
        super(tmptTgl, nyawa)
        this.unggas = bertelur
        this.mamalia = beranak
    }
    berburu(){
        console.log('Sedang berburu');
        
    }
}
var ayam = new hewan('Peternakan', true, true, false)
console.log(ayam);
var singa = new hewan('Savana', true, false, true)
console.log(singa);
singa.berburu()

class tumbuhan extends makhlukHidup{
    constructor(tmptTgl, nyawa, berbunga, berbuah){
        super(tmptTgl, nyawa)
        this.bunga = berbunga
        this.buah = berbuah
    }
    fotosintesis(){
        console.log('Sedang berfotosintesis');       
    }
}
var anggrek = new tumbuhan('Taman', true, true, false)
console.log(anggrek);
anggrek.fotosintesis()
