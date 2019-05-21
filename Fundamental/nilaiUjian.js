        
        
        var nama = prompt("Masukan Nama Siswa ")
        // console.log('Nama Siswa = '+nama)
        var mtk = parseInt(prompt('Masukan Nilai Matematika'))
        // console.log('Nilai Matematika = '+mtk)
        var bInd = parseInt(prompt('Masukan Nilai Bahasa Indonesia'))
        // console.log('Nilai Bahasa Indonesia = '+bInd)
        var bIng = parseInt(prompt('Masukan Nilai Bahasa Inggris'))
        // console.log('Nilai Bahasa Inggris = '+bIng)
        var ipa = parseInt(prompt('Masukan Nilai IPA'))
        // console.log('Nilai Bahasa Inggris = '+ipa)

        var nilai = (mtk + bInd + bIng + ipa) / 4

        if (nilai > 84){
            console.log('Nama Siswa : '+nama);
            console.log('Dengan nilai akhir : '+nilai);
            console.log('Index Nilai : A');
            console.log('Selamat, Anda dinyatakan Lulus');
        } else if (nilai > 74 && nilai < 85){
            console.log('Nama Siswa : '+nama);
            console.log('Dengan nilai akhir : '+nilai);
            console.log('Index Nilai : B');
            console.log('Selamat, Anda dinyatakan Lulus');
        } else if (nilai > 64 && nilai < 75){
            console.log('Nama Siswa : '+nama);
            console.log('Dengan nilai akhir : '+nilai);
            console.log('Index Nilai : C');
            console.log('Selamat, Anda dinyatakan Lulus');
        } else if (nilai > 49 && nilai < 65){
            console.log('Nama Siswa : '+nama);
            console.log('Dengan nilai akhir : '+nilai);
            console.log('Index Nilai : D');
            console.log('Selamat, Anda dinyatakan Lulus');
        } else {
            console.log('Nama Siswa : '+nama);
            console.log('Dengan nilai akhir : '+nilai);
            console.log('Index Nilai : E');
            console.log('Anda dinyatakan Tidak Lulus');
        }
