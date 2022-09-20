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
  .then((dataHasilResolve) => {
    // Misalnya kita bungkus dalam promise lagi
    return new Promise((resolve, reject) => {
      gabungKata(dataHasilResolve + ' ' + arrayKata[1])
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  })
  // di sini kita menggunakan .then lagi (chaining)
  // kita tahu bahwa dari atas yang di return adalah sebuah promise
  // dengan ada kembalian .then berupa data yang baru
  // dan .catch nya adalah suatu error
  // .then nya ditangkap oleh .then yang di bawah ini
  // .catch nya ditangkap oleh .catch untuk Reject promise (i)
  .then((dataKembalianPromiseBaru) => {
    return new Promise((resolve, reject) => {
      gabungKata(dataKembalianPromiseBaru + ' ' + arrayKata[2])
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  })

  .then((dataHasilKembalianPromiseDiAtas) => {
    // Sama dengan atas
    return new Promise((resolve, reject) => {
      gabungKata(dataHasilKembalianPromiseDiAtas + ' ' + arrayKata[3])
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  })
  // Setelah dapat seluruh data dari promise
  .then((dataKeseluruhan) => {
    // kita ingin cetak
    console.log(dataKeseluruhan);
  })

  // Reject promise (i)
  .catch((errorDariReject) => {
    console.log(errorDariReject);
  });
