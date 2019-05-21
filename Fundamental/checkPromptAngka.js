do {
        var check = false
        menu = parseInt(prompt("Masukan Angka diantara 1 - 10"))
        
        if (!Number.isInteger(menu)) {
            check = true
            alert('Masukan Angka')
        } else if (menu < 1 || menu > 10){
            check = true
            alert('Masukan Angka 1 - 10')
        }
    
} while (check);

alert('Angka anda adalah : ' + menu)