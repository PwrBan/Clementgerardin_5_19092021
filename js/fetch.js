fetch("http://localhost:3000/api/teddies")
    .then(res => {
        if(res.ok) {
            return res.json();
        }
    })
    .then(value => {
        console.log(value[0]._id);
        createHomepageHtmlElt(value);
    })
    .catch(err => console.log(err));

    fetch("http://localhost:3000/api/teddies")
    .then(res => {
        if(res.ok) {
            return res.json();
        }
    })
    .then(value => {
        createCartPagesElt(value);
    })
    .catch(err => console.log(err));