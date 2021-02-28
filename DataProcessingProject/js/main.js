var request = new XMLHttpRequest()

request.open('GET', 'https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyDFEfdc6-KyPDZO4BbWypvwzvodRJci-Ic', true)
request.onload = function () {
  
  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
    data.forEach((book) => {
      console.log(book.title)
    })
  } else {
    console.log('error')
  }
}

request.send()