
document.addEventListener("DOMContentLoaded", function () {

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTU0NGNlN2M2NTEwNTRhZTIwZWEyOTgwYWYwMzczMiIsInN1YiI6IjY1MmYyZjIzMzU4ZGE3NWI1ZjdhZDNlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oWVtkOQUoNzCr2nRD8nse3rCi35S5v6I3xqrxYc4x84'
        }
    };
    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
        .then(response => response.json())
        .then(data => {
            data.results.forEach(movie => {
                //console.log(movie);

            //html붙이기
            const temp = document.querySelector("#card_wrap").insertAdjacentHTML(
                "afterbegin",

                `
                <div class="movie_card" id="movie_card" onclick="alert('영화 id : ${movie.id}')">
                <div class="movie_title_box"><div class="title">${movie.title}</div></div>
                    <p class="date">${movie.release_date}</p>
                    <div class="imgbox"><img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt=""/></div>
                    <p class="content">${movie.overview}</p>
                    <p class="score">review grade ${movie.vote_average}</p>
                </div>
                `
            );
                
            });
        })
        .catch(err => console.error(err));


//검색기능 시작
    //1.제목을 입력하고  검색 버튼을 누른 텍스트를 가져온다
document.querySelector("#search-btn").addEventListener("click",function(event){
    event.preventDefault();
    //2. 기존에 있는 html 비우기 
    document.getElementById("card_wrap").innerHTML = "";

    //3."#search-btn"버튼을 click하면 여기있는 코드가 실행.
    //3-1.input의 내용을 가져오기
    const searchMovie = document.querySelector(".input").value;
    //console.log(searchMovie);

    //4.영화데이터를 가져와야함
    //위에 사용한 것 그대로 복사 
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTU0NGNlN2M2NTEwNTRhZTIwZWEyOTgwYWYwMzczMiIsInN1YiI6IjY1MmYyZjIzMzU4ZGE3NWI1ZjdhZDNlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oWVtkOQUoNzCr2nRD8nse3rCi35S5v6I3xqrxYc4x84'
        }
    };
    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
        .then(response => response.json())
        .then(data => {
            data.results.forEach(movie => {
                //console.log("=====================")
                //입력한 텍스트 소문자 변환
                //console.log(searchMovie.toLowerCase())
                //영화 제목 소문자 변환
                //console.log(movie.title.toLowerCase())
                
                let textMovie = searchMovie.toLowerCase()
                let movieTitle = movie.title.toLowerCase()
               
                //입력한 텍스트랑 영화데이터의 제목이랑 비교한다.
                //제목이랑(일부라도)일치하면 화면에 보여준다.
    
                if (movieTitle.includes(textMovie) === true) {
                    
                //html붙이기
                const temp = document.querySelector("#card_wrap").insertAdjacentHTML(
                "afterbegin",

                `
                <div class="movie_card" id="movie_card" onclick="alert('영화 id : ${movie.id}')">
                <div class="movie_title_box"><div class="title">${movie.title}</div></div>
                    <p class="date">${movie.release_date}</p>
                    <div class="imgbox"><img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt=""/></div>
                    <p class="content">${movie.overview}</p>
                    <p class="score">review grade ${movie.vote_average}</p>
                </div>
                `
                );

                }
            });
        })
        .catch(err => console.error(err));
})

//엔터키 눌러도 검색창의 입력값 받아오기
function search(ele) {
    if(event.key === 'Enter') {
        event.preventDefault();
        if (ele.value.length > 1){
            location.href="...." + ele.value;
        }
    }
}








});//도큐먼트레디 끝



