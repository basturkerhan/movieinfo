const movie = new Movie();
const ui = new UI();

const searchMovieInfo = document.getElementById('searchMovieInfo');

searchMovieInfo.addEventListener('keyup',(event)=>{
    let text = event.target.value;
    ui.clear();
    if(text !== ''){
        movie.getMovieInfo(text).then(data => {
            if(data.Error){
                ui.showError(data.Error);
            }else{
                ui.addToList(data);
            }
        });
    }
});

searchMovieInfo.addEventListener('focus', (event) => {
    event.target.style.background = '#f3f3f3';    
    });
  
searchMovieInfo.addEventListener('blur', (event) => {
    event.target.style.background = '';    
    });