//let carousel = document.getElementById("carousel");

let counter = 1;
while (true) {
    var delayInMilliseconds = 1000;

    //setTimeout(switcher, delayInMilliseconds);
}

function switcher() {
    counter += 1;
    if (counter > 7) {
        counter = 1;
    }
    console.log(counter);
}