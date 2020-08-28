class UI{
    constructor(){
        this.list = document.getElementById('list');
    }
    
    addToList(data){
        let html = `<div class="row mt-4">
                        <div class="col-md-4">
                            <div class="card posterArea">
                                <img src="${data.Poster}" class="img-fluid card-img-top rounded mx-auto d-block">
                                
                                <div class="card-body">
                                <h5>Country and Language</h5>
                                <p>${data.Country} - ${data.Language}</p>
                                </div>
                            </div>        
                        </div>
                        <div class="col-md-8">
                            <ul class="list-group">
                                <li class="list-group-item bg-light">
                                <h4>${data.Title} | ${data.Year}</h4>
                                </li>
                                <li class="list-group-item">
                                    <div class="row">
                                        <div class="col-md-6" id="ratings">
                                        <p>${data.Ratings[0].Source} - ${data.Ratings[0].Value}</p>
                                        </div>
                                        <div class="col-md-6">
                                        <p>IMDB: ${data.imdbRating}</p>
                                        <p>Votes: ${data.imdbVotes}</p>
                                        <p>Released: ${data.Released}</p>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">Genre: ${data.Genre}</li>
                                <li class="list-group-item">Runtime: ${data.Type} | ${data.Runtime}</li>
                                <li class="list-group-item">Director: ${data.Director}</li>
                                <li class="list-group-item">Writer: ${data.Writer}</li>
                                <li class="list-group-item">Actors: ${data.Actors}</li>
                                <li class="list-group-item">Production: ${data.Production}</li>
                                <li class="list-group-item">Awards: ${data.Awards}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="card plot mt-4">
                        <div class="card-header"><h4>Plot</h4></div>
                        <div class="card-body"><p>${data.Plot}</p></div>
                    </div>`;
        this.list.innerHTML = html;
        this.showRatings(data);
    }

    showError(error){
        let html = `<ul class="list-group">
        <li class="list-group-item bg-light">${error}</li></ul>`;
        this.list.innerHTML = html;
    }

    showRatings(data){
        const ratings = document.getElementById('ratings');
        let rates= data.Ratings;
        let html="";
        rates.forEach(rate => {
            html+=`<p>${rate.Source} - ${rate.Value}</p>`;
        });
        ratings.innerHTML = html;
    }

    clear(){
        this.list.innerHTML="";
    }
}


//${data.Title} | ${data.Year} | ${data.Director}
/*
<a href="#" class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-md-2"><img src="${data.Poster}" class="img-fluid"></div>
                <div class="col-md-8">${data.Title} | ${data.Year} | ${data.Director}</div>
        
    </div>
        </a>
*/