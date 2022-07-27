document.getElementById('loadAll').addEventListener('click', function(e) {
  veges.map(vege => {
    const tag = document.createElement('li')
    const text = document.createTextNode(`${vege.name}`)
    const img = document.createElement('img')
  })
})

veges.filter


const veges = [
  {name: 'potato', price: 1.99, imgUrl: 'http://potato.com'},
  {name: 'tomato', price: 2.99, imgUrl: 'http://tomato.com'},
  {name: 'tomato', price: 2.99, imgUrl: 'http://tomato.com'}
]