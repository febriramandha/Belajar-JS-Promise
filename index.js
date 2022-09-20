// const janjiPertamaku = new Promise(
//     // terima fungsi yang menerima 2 buah parameter - resolve, reject
//     (resolve, reject) => {
//     // disini kita buat kondisi suksesnya aja (tanpa gagal)
    
//     setTimeout(() => {
//         resolve("Hore janji saya berhasil setelah 250m");
//     }, 250);
//     }
//     );
    
//     //kita panggil promise
//     janjiPertamaku
//     //kondisi berhasil
//     .then(
//     //kondisi menerima suatu fungsi yg didalamnya menerima data
//     (data) => {
//     console.log("tambah ah tulisannya", data, "setelah 2 detik");
//     }
//     );
    
//     //karena diatas fungsinya tidak ada logic recject, maka kita tidak perlu menggunakan catch utk menerima kondisi ketika janji gagal


//Bungkus si promise di dalam suatu fungsi
//karena ini fungsi berarti bisa menrima parameter
const gabungKata = (kataYangInginDiGabung) => {
	//hasil akhir dari si fungsi ini akan MENGEMBALIKAN (return) si Promise
	return new Promise(
	//fungsi
	(resolve, reject) => {
		// kondisi gagal = kataYangInginDiGabung adalah null
		if(kataYangInginDiGabung === null) {
		//kalau null artinya terjadi error
		reject("Maaf, terjadi error");
		}

		//Kondisi ketika terpenuhi
		else {
		resolve(kataYangInginDiGabung);
		}
	}
	);
};

gabungKata("Hello")
//Kondisi ketika berhasil
.then(
  //callback
(dataHasilResolve) => {
	console.log(dataHasilResolve);
}
)
.catch(
//callback
(pesanDitolak) => {
console.log("err:",  pesanDitolak);
}
);