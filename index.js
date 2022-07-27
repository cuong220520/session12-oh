let users = []

document.getElementById('registerForm').addEventListener('submit', (e) => {
  e.preventDefault()

  let isValid = true
  let message = ''

  let username = document.getElementById('registerUsrn').value
  let password = document.getElementById('registerPwd').value
  let confirmPassword = document.getElementById('registerCPwd').value

  if (localStorage.getItem(username)) {
    alert('username exist in local storage')
  }

  if (!username || username.length < 8) {
    isValid = false
    message += 'username must be at least 8 characters \n'
  }

  if (!password || password.length < 6) {
    isValid = false
    message += 'password must be at least 6 characters \n'
  }

  if (confirmPassword !== password) {
    isValid = false
    message += 'confirmPassword not match \n'
  }

  if (users && users.length > 0) {
    if (users.filter((user) => user.username === username).length > 0) {
      isValid = false
      message += 'username is existed \n'
    }
  }

  if (!isValid) {
    alert(`Invalid input:\n${message}`)
  } else {
    const user = {
      username,
      password,
    }

    users.push(user)

    localStorage.setItem(username, JSON.stringify(user))

    console.log(users)

    alert('Register success')

    document.getElementById('registerUsrn').value = ''
    document.getElementById('registerPwd').value = ''
    document.getElementById('registerCPwd').value = ''

    location.href = './'
  }
})

