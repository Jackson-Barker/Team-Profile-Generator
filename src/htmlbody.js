function htmlBody(card) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <title>Document</title>
    </head>
    <body>
      <div class="jumbotron jumbotron-fluid">
      <div class="container text-center">
        <h1 class="display-4">Team Profiles!</h1>
    
      </div>
    </div>
    
    <div class="container">
      <div class="row">
      ${card}
      
  </div>
  
  </div>
  
  
  </body>
  </html>
    `
}

module.exports=htmlBody