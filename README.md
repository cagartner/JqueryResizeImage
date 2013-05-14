JqueryResizeImage
=================

Resize image's or elements with Jquery UI Slider

Usage
=================

* Step 1 - Create two elements into html.
  
  <div class="container">
      <div class="resize"></div>
  </div>
  

* Step 2 - Add a css style
  
  <style>
    .container {
        width: 300px;
        height: 300px;
        background: #f2f2f2;
        border: solid 1px #CCC;
        position: relative;
    }
    .resize {
        width: 50%;
        height: 50%;
        position: absolute;
        top: 0px;
        left: 0px;
        background: red;
    }
  </style>
  
  
* Step 3 - Instance the plugin
  
  $(function() {
      $('.resize').resizeImage({
          container: '.container',
          slider: {
              max: 300
          }
      });
  });
  
  

