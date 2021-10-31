function internCard(employee) {
    return`<div class="col-sm-4">
    <div class='card employee-card'>
      <div class='card-header'>
          <h2 class='card-title'>${employee.name}</h3>
            <h4>${employee.getRole()}</h4>
      </div>
      <div class="card-body">
      <ul class="list-group">
          <li class="list-group-item">${employee.id}</li>
          <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>   
          <li class="list-group-item">${employee.school}</li>
      </ul>
      </div>
  </div>
  </div>
    `
}

module.exports=internCard