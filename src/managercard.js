function managerCard(manager) {
    return `
    <div class="col-sm-4">
  <div class='card employee-card'>
    <div class='card-header'>
        <h2 class='card-title'>${manager.name}</h3>
        <h4>${manager.getRole()}<h4>
    </div>
    <div class="card-body">
    <ul class="list-group">
        <li class="list-group-item">${manager.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li> 
        <li class="list-group-item">${manager.officeNumber}</li>
    </ul>
    </div>



  </div>
</div> 
    `
}

module.exports  = managerCard