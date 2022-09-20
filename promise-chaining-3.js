// Fungsi Promise yang akan dichaining
const gabungKata = (kataYangInginDigabung) => {
  // Hasil akhir dari fungsi ini adalah dengan
  // mengembalikan Promise
  return new Promise((resolve, reject) => {
    // Kondisi gagal
    if (kataYangInginDigabung === null) {
      reject('Maaf, katanya Error !');
    }
    // Kondisi terpenuhi
    else {
      resolve(kataYangInginDigabung);
    }
  });
};

const arrayKata = ['Hello', 'World', 'Coba', 'Gabung', 'Kata'];

// Mari kita membuat chaining promise nya
// promise (i)
gabungKata(arrayKata[0])
  .then(
    // fnCallback resolved untuk promise gabungKata (i)
    (hasilPertama) => {
      // Ingat bahwa gabungKata ini sudah Promise
      // jadi tinggal di-return-kan saja
      return gabungKata(hasilPertama + ' ' + arrayKata[1]);
    }
  )
  // kemudian di .then lagi untuk mendapatkan hasil dari
  // gabungKata yang return new Promise di atas
  .then(
    // fnCallback resolved untuk promise gabungKata (ii)
    (hasilGabungan1) => {
      // Ingat bahwa gabungKata ini sudah Promise
      // jadi tinggal di-return-kan saja
      return gabungKata(hasilGabungan1 + ' ' + arrayKata[2]);
    }
  )
  // kemudian .then lagi untuk mendapatkan hasil dari
  // gabungKata yang return new Promise di atas
  .then(
    // fnCallback resolved untuk promise gabungKata (iii)
    // bila menggunakan arrow function
    (hasilGabungan2) => gabungKata(hasilGabungan2 + ' ' + arrayKata[3])
  )
  // Setelah dapat seluruh data dari promise
  .then((hasilTotal) => {
    // kita ingin cetak
    console.log(hasilTotal);
  })
  // Reject promise untuk gabungKata (i), (ii), dan (iii), jadi satu
  .catch((errorDariReject) => {
    console.log(errorDariReject);
  });
