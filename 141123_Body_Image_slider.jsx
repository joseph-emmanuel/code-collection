//html
            //script
             <script>
                  const images = [
                    'https://i.ibb.co/74zXxww/pexels-ylanite-koppens-796614.jpg',
                    'https://i.ibb.co/xqp28Rt/pexels-valeriia-miller-2516643.jpg',
                    'https://i.ibb.co/wrdD5h3/pexels-pixabay-261434.jpg',
                    'https://i.ibb.co/5LYHDH4/pexels-samer-daboul-1627933.jpg',
                    'https://i.ibb.co/YDyGq5S/pexels-negative-space-134577.jpg',
                    'https://i.ibb.co/9VCSdgH/pexels-wendy-wei-2813135.jpg',
                    'https://i.ibb.co/0YDyg0r/pexels-igor-haritanovich-1695052.jpg',
                    'https://i.ibb.co/y41Gjtg/pexels-burst-374147.jpg'
                  ]
                  window.onload = () => {
                    // preloading
                    document.getElementById('bgChangeId').style.backgroundImage = `url(${images[0]})`
                    document.querySelector('.hidden').src = images[1]
                    let i = 1
                    setInterval(() => {
                      document.getElementById('bgChangeId').style.backgroundImage = `url(${images[i++]})`

                      if (i === images.length) i = 0
                      else {
                        // preload the next image, so that it transitions smoothly
                        document.querySelector('.hidden').src = images[i]
                      }
                    }, 7000)
                  }
                </script>


            //html content
             <div class="appBg" id="bgChangeId"><img class="hidden" alt="preloading" /></div>

//css


              .hidden {
                display: none;
              }
              .appBg {
                background: #222;
                font-family: 'Fredericka the Great', serif;
                margin: 0;
                height: 100vh;
                background-position: center;
                background-size: cover;
                background-repeat: no-repeat;
                transition: background-image 1s;
              }


//js

 // $(".appBg").css("opacity", "1");
                // set body background as white color
                // $("body").css("background", "#fff");

