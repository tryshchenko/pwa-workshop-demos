const printUser = user =>
    document.querySelector('div').innerHTML = `${user.name} ${user.surname}`;

const retreiveDataES2015 = async () => {
    fetch('data2015.json')
        .then(response => response.json())
        .then(printUser)
};

const retreiveDataES2017 = async () => {
    const response = await fetch('data2017.json');
    const user = await response.json();
    printUser(user);
};

document.querySelector('#es2015-button').addEventListener('click', retreiveDataES2015);
document.querySelector('#es2017-button').addEventListener('click', retreiveDataES2017);