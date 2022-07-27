let users = [
  { username: '12345678', password: '123456' },
  { username: 'cuong123456', password: '123456' },
]

//const HOST = process.env.HOST || 'http://127.0.0.1:5500'

document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault()

  let isValid = true
  let message = ''

  const usrEl = document.getElementById('loginUsrn')
  const pwdEl = document.getElementById('loginPwd')

  const username = usrEl.value
  const password = pwdEl.value

  if (!username || username.length < 8) {
    isValid = false
    message += 'username must be at least 8 characters \n'
  }

  if (!password || password.length < 6) {
    isValid = false
    message += 'password must be at least 6 characters \n'
  }

  if (
    !users ||
    users.length <= 0 ||
    users.filter((user) => user.username === username).length <= 0
  ) {
    console.log('username does not exist')

    isValid = false
    message += 'username does not exist\n'

    alert(`Invalid input:\n${message}, please register`)
    window.location.href = './register.html'
  } else {
    console.log('username exist')

    const user = users.filter((user) => user.username === username)[0]

    if (user.password !== password) {
      isValid = false
      message += 'password is incorrect\n'
    }
  }

  if (!isValid) {
    alert(`Invalid input:\n${message}`)
  } else {
    alert('Login success')

    usrEl.value = ''
    pwdEl.value = ''

    window.location.href = './'
  }
})
