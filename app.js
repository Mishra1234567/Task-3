
document.getElementById('contactForm').addEventListener('submit', function (event) {
    let valid = true;

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email.includes('@')) {
        valid = false;
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
    } else {
        document.getElementById('emailError').textContent = '';
    }

    if (password.length < 6) {
        valid = false;
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters long.';
    } else {
        document.getElementById('passwordError').textContent = '';
    }

    if (!valid) {
        event.preventDefault();
    }
});
document.getElementById('loadContent').addEventListener('click', function () {
    const newContent = document.createElement('p');
    newContent.textContent = 'This is dynamically loaded content.';
    document.getElementById('contentArea').appendChild(newContent);
});


document.getElementById('fetchData').addEventListener('click', function () {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', true);
    xhr.onload = function () {
        if (this.status == 200) {
            const data = JSON.parse(this.responseText);
            document.getElementById('dataArea').textContent = `Title: ${data.title}`;
        }
    };
    xhr.send();
});
