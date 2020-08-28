class Movie{
    constructor(){
        this.apikey = "34c1f811";
    }

    async getMovieInfo(text){
        let endpoint = `http://www.omdbapi.com/?t=${text}&apikey=${this.apikey}`;
        let response = await fetch(endpoint);
        let data = await response.json();
        return data;
    }

}