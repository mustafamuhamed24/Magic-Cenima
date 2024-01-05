$("#bar-icon").click(()=>{
    $(".navlist").toggleClass('showNav')
})

fetch("data.json")
    .then(res => res.json())
    .then(data => {
        console.log(data.movies);
        let showData = () => {
            for(let i =0; i < data.movies.length; i++){
            let x = data.movies[i];
            $("#movie-cards").append(`
                    <div id="card${i}" class="card">
                    <a href="movie-info.html"><img src="${x.poster}" alt="" srcset=""></a>
                    <div class="card-text">
                    <a href="movie-info.html"><b>${x.name}</b></a>
                    <p>Category : ${x.category}</p>
                    </div>
                    <a href="movie-info.html"><button>Click Card</button></a>
                    </div>
                    `);

                    $(`#card${i}`).click(()=>{
                        localStorage.setItem("movie_id",i);   
                    });
        };}
        showData();
        



        let movieCard = () => {
            let i = localStorage.getItem("movie_id");
            let x = data.movies[i];
                $("#booking-movie").append(`
                <div class="movie-info">
                <div class="card">
                    <img id="movie-img" src="${x.poster}" alt="movieImg"></a>
                </div>
                <div class="movie-about">
                    <h1 id="movie-name">${x.name}</h1>
                    <br>
                    <b>Category : &nbsp<span id="movie-category" style="font-weight: normal;">${x.category}</span></b>
                    <br>
                    <b>Movie Actors : &nbsp<span style="font-weight: normal;" id="movie-actor">${x.actors[0]} - ${x.actors[1]} - ${x.actors[2]} - ${x.actors[3]}</span></b>
                    <br>
                    <b>Magic Cenima - Show Time : </b><br>
                    <b id="show-time">${x.time[0]}</b><br>
                    <b id="show-time">${x.time[1]}</b>

                </div>
                `);

                $("#booking-info").append(`
                <form action="">
                    <input type="text" placeholder="Your First Name" id="first-name"><br>
                    <input type="text" placeholder="Your Last Name" id="last-name"><br>
                    <input style="margin-top" type="email" placeholder="Your Email" id="email"><br>
                    <input type="tel" placeholder="Your Phone Number" id="phone-number"><br>
                    <button type="sumbit" id="Booking" onclick"Booking(${i})">Booking Now</button>
                    </form>
                `)
        }
        movieCard();


        var swiper = new Swiper(".mySwiper", {
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });

        
    });
    
