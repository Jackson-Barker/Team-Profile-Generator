function engineerCard(engineer) {
    return ` 
   
    <div class="col-sm-4">
      <div class='card employee-card'>
        <div class='card-header'>
            <h2 class='card-title'>${engineer.name}</h3>
              <h4>${engineer.getRole()}</h4>
        </div>
        <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">${engineer.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li> 
            <li class="list-group-item"><a<a href="https://github.com/${engineer.github}">${engineer.github}</a></li> 
        </ul>
        </div>
    </div>
   </div>


    `
}

module.exports=engineerCard
