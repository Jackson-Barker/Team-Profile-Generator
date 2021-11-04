function internCard(intern) {
    return`
    <div class="col-sm-4">
    <div class='card employee-card'>
      <div class='card-header'>
          <h2 class='card-title'>${intern.name}</h3>
            <h4>${intern.getRole()}</h4>
      </div>
      <div class="card-body">
      <ul class="list-group">
          <li class="list-group-item">${intern.id}</li>
          <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>   
          <li class="list-group-item">${intern.school}</li>
      </ul>
      </div>
    </div>
  </div>
`
}

module.exports=internCard