console.log("Script Started");

$.ajax({
    url: 'https://randomuser.me/api/?results=50',
    dataType: 'json',
    success: function(data) {
        
        console.log(data);
        for (person of data['results']){
            
           
            
            
            $("#randoms").append(`<div class="col-2 text-center">
            <img class="rounded-circle" src="${person.picture.large}" />
            <p>${person.name.first} ${person.name.last}</p> 
             <span class="flag-icon flag-icon-${person.nat.toLowerCase()}"></span> <br/>
             <i class="fab fa-github ${person.gender}"></i> <i class="fab fa-facebook-f ${person.gender}"></i> <i class="fab fa-twitter ${person.gender}"></i></div>`) 
             
             
            
        }
        
    }
  });
  