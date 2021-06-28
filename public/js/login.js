const body = document.querySelector("body");
body.setAttribute("style", "display: flex; flex-direction: column;");
console.log('Logged in JS');
const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    console.log('Login JS user loggedin', response);
    
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Incorrect email or password, please click on signup');
    }
  }
};

document.querySelector('.login').addEventListener('click', loginFormHandler);
