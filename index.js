function submitData(userName, userEmail) {
  const userInfo = {
    name: userName,
    email: userEmail
  };

  const configUser = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(userInfo)
  };

  return fetch('http://localhost:3000/users', configUser)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const newElement = document.createElement('p');
      newElement.textContent = `ID: ${data.id}`;
      document.body.appendChild(newElement);
    })
    .catch(error => {
      const errorElement = document.createElement('p');
      errorElement.textContent = `Error: ${error.message}`;
      document.body.appendChild(errorElement);
    });
}

submitData('user', 'email');
