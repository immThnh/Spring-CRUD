var id = 2;

function Test1(callback) {
    callback();
}

Test1((id) => {console.log(id);})

