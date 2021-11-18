const SuccesPageHTML = (color, text, type, icon) => {
    return `
    <html>
  <head>
  <link href="https://fonts.googleapis.com/css?family=Nunito+Sans:400,400i,700,900&display=swap" rel="stylesheet">
  <script src="https://kit.fontawesome.com/3ca77f9b40.js" crossorigin="anonymous"></script>
  <meta http-equiv="refresh" content="3;url=http://localhost:3000/home/" />
  </head>
    <style>
      body {
        text-align: center;
        padding: 40px 0;
        background: #EBF0F5;
      }
        h1 {
          color: #88B04B;
          font-family: "Nunito Sans", "Helvetica Neue", sans-serif;
          font-weight: 900;
          font-size: 40px;
          margin-bottom: 10px;
        }
        p {
          color: #404F5E;
          font-family: "Nunito Sans", "Helvetica Neue", sans-serif;
          font-size:20px;
          margin: 0;
        }
      i {
        color: ${color};
        font-size: 100px;
        line-height: 200px;
        margin-left:-15px;
        font-style:normal;
        margin:0 !important;
        padding:0;
      }
      .card {
        background: white;
        padding: 60px;
        border-radius: 4px;
        box-shadow: 0 2px 3px #C8D0D8;
        display: inline-block;
        margin: 0 auto;
      }
    </style>
    <body>
      <div class="card">
      <div style="border-radius:200px; height:200px; width:200px; background: #F8FAF5; margin:0 auto; display:flex; justify-content:center; align-items:center;">
      <i class=${icon}></i>
      </div>
        <h1>${type}</h1> 
        <p>${text};<br/> Redirecting you in 3 seconds!</p>
      </div>
    </body>
</html>
    `
}

module.exports = {
    SuccesPageHTML
}