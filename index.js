function configure(){
    Webcam.set({
       width: 320,
       height: 240,
       image_format: 'jpeg',
       jpeg_quality: 90
    });
    Webcam.attach( '#my_camera' );
    Webcam.attach( '#my_camera-1' );

 }


 var shutter = new Audio();
 shutter.autoplay = false;
 shutter.src = navigator.userAgent.match(/Firefox/) ? 'shutter.ogg' : 'shutter.mp3';

 function take_snapshot() {
    // play sound effect
    shutter.play();

    // take snapshot and get image data
    Webcam.snap( function(data_uri) {
       // display results in page
       document.getElementById('results').innerHTML = 
           '<img id="imageprev" src="'+data_uri+'"/>';
           document.getElementById('results-1').innerHTML = 
           '<img id="imageprev" src="'+data_uri+'"/>';

           
     } );

     Webcam.reset();
 }

function saveSnap(){
   // Get base64 value from <img id='imageprev'> source
   var base64image = document.getElementById("imageprev").src;

   Webcam.upload( base64image, 'upload.php', function(code, text) {
        console.log('Save successfully');
       //console.log(text);
   });

}