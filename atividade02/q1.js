const timeout = (duration) => {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, duration)
    })
  }
  
  timeout(3000)
    .then(function() { 
      console.log('A função foi executada após 3 milissegundos')
    })