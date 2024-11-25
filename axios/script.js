// axios.get('https://swapi.dev/api/people/1')
//     .then((res) => {
//         console.log(res.data);
//     })
//     .catch((err) => {
//         console.log(err.message);
//     })

const getPeople = async (id) => {
    try {
        const res = await axios.get(`https://swapi.dev/api/people/${id}`);
        console.log(res.data);
    } catch (err) {
        console.log(err);
        console.log(err.message);
        console.log(err.response.status);
        console.log(err.response.data);
    }
}