console.log("Script loaded");
console.log("Das ist der zweite Aufruf");
const userlist = document.getElementById('user-list');
const imageList = document.getElementById('image-list');
const titleList = document.getElementById('album-title');


// Define an array for users
let users = [];
let images = []; // to be filled with images from api endpoint https://jsonplaceholder.typicode.com/photos
let titles = []; // to be filled with album title from api endpoint https://jsonplaceholder.typicode.com/albums

// define async function to fetch users data
async function fetchUserData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        // console.log(typeof(response);
        usersData = await response.json();
        // console.log(usersData);
        users = usersData;
        console.log(users);
        renderUsers();

    } catch (error) {
        console.log("Wir bekommen beim Aufruf der Users-APi den folgenden Fehler", error);
    }
}

// defina async function to fetch album title
async function fetchTitleData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums');
        // console.log(typeof(response);
        titlesData = await response.json();
        // console.log(titlesData);
        titles = titlesData;
        console.log(titles);
        renderTitles();

    } catch (error) {
        console.log("Wir bekommen beim Aufruf der Title-Api den folgenden Fehler", error);

    }
}


// define async function to fetch image data
async function fetchImageData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        imageData = await response.json();
        images = imageData.slice(0, 10);
        // console.log(images);
        renderImages();
    } catch (error) {
        console.log("Wir bekommen beim Fetching der Image API folgenden Fehler: ", error)
    }

}

fetchUserData();
fetchImageData();
fetchTitleData();

function renderUsers() {
    users.forEach((user) => {
        const userItem = document.createElement('li');
        userItem.innerHTML = user.name;
        // console.log(user);

        userlist.appendChild(userItem);
    });
}

function renderImages() {
    images.forEach((image) => {
        const imageItem = document.createElement('img');
        // console.log(imageItem);
        imageItem.setAttribute('src', image.url)
        imageList.appendChild(imageItem)

    });
}

function renderTitles() {
    titles.forEach((title) => {
        const titleItem = document.createElement('li');
        titleItem.innerHTML = title.title;
        // console.log(title);

        titleList.appendChild(titleItem)
    });
}

// showUsers();
