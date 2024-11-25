// fetch('https://swapi.dev/api/people/1')
//     .then((res) => {
//         if (!res.ok) {
//             throw Error('Could not fetch the data for that resource');
//         }

//         // console.log(res);
        
//         return res.json();
//     })
//     .then((data) => {
//         console.log('json', data);

//         return fetch('https://swapi.dev/api/people/2');
//     })
//     .then((res) => {
//         console.log('response 2');

//         if (!res.ok) {
//             throw Error('Could not fetch the data for that resource');
//         }
        
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log('error', err);
//     })

const loadPeople = async () => {
    try {
        const res = await fetch('https://swapi.dev/api/people/1');
        const data = await res.json();
        console.log(data);
        
        const res2 = await fetch('https://swapi.dev/api/people/2');
        const data2 = await res2.json();
        console.log(data2);
    } catch(err) {
        console.log('error', err);
    }
}

loadPeople()