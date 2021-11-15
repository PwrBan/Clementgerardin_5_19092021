fetch("http://localhost:3000/api/teddies")
    .then(res => {
        if(res.ok) {
            return res.json();
        }
    })
    .then(value => {
        distribue(value)
    })
    .catch(err => console.log(err));