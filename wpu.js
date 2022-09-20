// contoh1
// let ditepati = false;
// const janji1 = new Promise((resolve, reject) =>{
//     if(ditepati){
//         resolve('Janji ditepati');
//     }else{
//         reject('Ingkar Janji');
//     }
// });

// janji1
//     .then(response => console.log('OK : ' +response))
//     .catch(response => console.log('NOT OK: ' + response));

// Contoh 2
// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//     if(ditepati){
//         setTimeout(() =>{
//             resolve('Ditepati setelah beberapa waktu');
//         }, 2000);
//     } else{
//         setTimeout(() =>{
//             resolve('Tidak Ditepati setelah beberapa waktu');
//         }, 2000);
//     }
// });

// console.log('mulai');
// // console.log(janji2.then(() => console.log(janji2)));
// janji2
//     .finally(() => console.log('Selesai Menunggu'))
//     .then(response => console.log('OK : ' +response))
//     .catch(response => console.log('NOT OK: ' + response));
// console.log('selesai');


// Promise All
const film = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            judul : 'Avengers',
            sutradara: 'Febri',
            pemeran: 'Rama'
        }])
    }, 1000);
});

const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            kota: 'Padang',
            temp: 26,
            kondisi: 'Cerah'
        }]);
    }, 500);
});

// film .then(response => console.log(response));
// cuaca .then(response => console.log(response));

Promise.all([film, cuaca])
    // .then(response => console.log(response));
    .then(response => {
        const [film, cuaca] = response;
        console.log(film);
        console.log(cuaca);
    });