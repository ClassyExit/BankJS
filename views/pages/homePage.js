module.exports = () => {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link href="/css/main.css" rel="stylesheet">
          <title>Home Page</title>
      </head>
        <body>
                <div class="container">
                  <div class="row">
                    <!-- flex-container -->
                      <div class="col-md-12 flex-container">
                        <!-- flex-item -->
                          <div class="flex-item">
                            <div class="flex-item-inner">
                                <!-- card -->
                                <a href="#">
                                      <div class="card-front bg-violet">
                                          <i class="fa fa-pie-chart fa-3x tile-icon icon-white"></i>
                                          <h4>Quick</h4>
                                          <h4>No Hassle</h4>
                                      </div>
                                      <div class="card-back bg-violet">
                                          <p class="title">Open your account in mere minutes!</p>
                                          
                                      </div>
                                  </a>
                                  <!-- /card -->
                              </div>
                          </div>
                          <!-- /flex-item -->
                          
                          <!-- flex-item -->
                          <div class="flex-item">
                            <div class="flex-item-inner">
                                <!-- card -->
                                  <a href="#">
                                      <div class="card-front bg-magenta">
                                          <i class="fa fa-heart fa-3x tile-icon icon-white"></i>
                                          <h4>Customer Service At Your Fingertips</h4>
                                          
                                      </div>
                                      <div class="card-back bg-magenta">
                                          <p class="title">Enjoy a great customer experience with a click!</p>
                                          
                                      </div>
                                  </a>
                                  <!-- /card -->
                              </div>
                          </div>
                          <!-- /flex-item -->
                          
                          <!-- flex-item -->
                          <div class="flex-item">
                            <div class="flex-item-inner">
                                <!-- card -->
                                <a href="#">
                                      <div class="card-front bg-blue">
                                          <i class="fa fa-sun-o fa-3x tile-icon icon-white"></i>
                                          <h4>International? No problem!</h4>
                                          
                                      </div>
                                      <div class="card-back bg-blue">
                                          <p class="title">International transactions accepted with minimal fees!</p>
                                          
                                      </div>
                                  </a>
                                  <!-- /card -->
                              </div>
                          </div>
                          <!-- /flex-item -->
                          
                          <!-- flex-item -->
                          <div class="flex-item">
                            <div class="flex-item-inner">
                                <!-- card -->
                                  <a href="#">
                                      <div class="card-front bg-green">
                                          <i class="fa fa-bar-chart fa-3x tile-icon icon-white"></i>
                                          <h4>Power Your Finances With Technology</h4>
                                          
                                      </div>
                                      <div class="card-back bg-green">
                                          <p class="title">EVERYTHING YOU NEED ALL IN ONE PLACE!</p>
                                          
                                      </div>
                                  </a>
                                  <!-- /card -->
                              </div>
                          </div>
                          <!-- flex-item -->
                      </div>
                      <!-- /flex-container -->
                  </div>
              </div>

              <p> The Better Way To Bank </p>

              <!-- Sign in, Sign up buttons -->
            <div class="container-bttn">
              <form method="get" action="/signup">
                <button id="button" href="/signup">Signup</button>
              </form>
              <form method="get" action="/signin">
                  <button id="button" href="/signin">Signin</button>
              </form>
            </div>
      </body>
    </html>
  `;
};
