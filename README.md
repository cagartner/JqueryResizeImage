JqueryResizeImage
=================

Resize image's or elements with Jquery UI Slider

Usage
=================

* Step 1 - Create two elements into html.
    <pre>
        &lt;div class="container"&gt;
            &lt;div class="resize"&gt;&lt;/div&gt;
        &lt;/div&gt;
    </pre>

* Step 2 - Add a css style
    <pre>
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
    </pre>
  
  
* Step 3 - Instance the plugin
    <pre>
    $(function() {
        $('.resize').resizeImage({
            container: '.container',
            slider: {
                max: 300
            }
        });
    });
    </pre>
  

