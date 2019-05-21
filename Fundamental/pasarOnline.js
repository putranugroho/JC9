
    var barang = ['Ayam', 'Ikan', 'Sapi']
    var beliAyam = 0
    var beliIkan = 0
    var beliSapi = 0
    
do{
    var pilihan = prompt(
    'Selamat datang di pasarOnline\n'+
    'Daftar Menu : \n'+
    '1. Ayam @ Rp. 25.000\n'+
    '2. Ikan @ Rp. 50.000\n'+
    '3. Sapi @ Rp. 75.000\n\n'+
    'Silahkan pilih barang yang ingin dibeli : ')

    if(pilihan == '1') {
            var ayam = parseInt(prompt(
            'Masukan jumlah '+ barang[0] ))
            var pilihan2 = confirm(' Belanja lagi ? ')
            beliAyam = beliAyam + ayam            
    }
    else if(pilihan == '2') {
            var ikan = parseInt(prompt(
                'Masukan jumlah '+ barang[1]))
            var pilihan2 = confirm(' Belanja lagi ? ')
            beliIkan = beliIkan + ikan
        }
    else if(pilihan == '3') {
            var sapi = parseInt(prompt(
            'Masukan jumlah '+ barang[2]))  
            var pilihan2 = confirm(' Belanja lagi ? ')
            beliSapi = beliSapi + sapi    
        }
    else{
         alert('Masukan angka 1-3')
    }       
} while (pilihan > 3 || pilihan2)

    var totalAyam = beliAyam * 25000
    var totalIkan = beliIkan * 50000
    var totalSapi = beliSapi * 75000
    var totalBelanja = totalAyam+totalIkan+totalSapi

do {
    var bayar = prompt("Masukan uang yang harus di bayar : Rp. "+totalBelanja)
    if (bayar < totalBelanja) {
        alert('Uang yang dibayar kurang')
    }
} while (bayar < totalBelanja);

    var kembalian = bayar - totalBelanja

console.log('ayam yang dibeli : ');
console.log(beliAyam + ' x Rp. 25.000 = ' + totalAyam );
console.log('ikan yang dibeli : ');
console.log(beliIkan + ' x Rp. 50.000 = ' + totalIkan);
console.log('sapi yang dibeli : ');
console.log(beliSapi + ' x Rp. 75.000 = ' + totalSapi);
console.log('Total yang dibayar : ' + totalBelanja);
console.log('Uang yang dibayar : ' + bayar);
console.log('Kembalian : '+ kembalian);








