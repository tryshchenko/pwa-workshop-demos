const db = new Dexie("demo06");
db.version(1).stores({
    users: 'name,surname'
});

db.users.put({name: "Gregorz", surname: 'Brzęczyszczykiewicz'}).then (() =>
    db.users.get('Gregorz')
).then(user =>
    console.log('User: ', user)
).catch(error =>
    console.error(error)
);

document.querySelector('#button').addEventListener('click', async () => {
    const nameInput = document.querySelector('#name');
    const surnameInput = document.querySelector('#surname');
    const user = {
        name: nameInput.value,
        surname: surnameInput.value
    };
    await db.users.put(user);
    nameInput.value = '';
    surnameInput.value = '';
});