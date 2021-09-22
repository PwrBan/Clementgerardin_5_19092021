fetch("http://localhost:3000/api/teddies")
    .then(function(res) {
        if(res.ok) {
            return res.json();
        }
    })
    .then(function teddys_Object(value) {
        console.log(value[0]._id);
        product(value);
    })
    .catch(function(err) {
        console.log(err)
    });