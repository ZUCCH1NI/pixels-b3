var img;
var lastPixel;

function preload(){
    img = loadImage("koala-bear.jpg");
}

function setup(){
    createCanvas(img.width,img.height);
}

function draw(){
   image(img, 0, 0);
    loadPixels();
    
    for(var row = 0; row < height; row++){
        for(var col = 0; col < width;col++){
            var index = (col + row * width) * 4;
            
            
        var r = pixels[index];
        var g = pixels[index + 1];
        var b = pixels[index + 2];
        var a = pixels[index + 3];
        
        var lastPixel = pizels.length - 1;
        pixels[lastPixel - index - 3] = r;//red
        pixels[lastPixel - index - 2] = g; //green
        pixels[lastPixel - index - 1] = b; //blue
        pixels[lastPixel - index - 0] = a; //alpha
        }

             
        }
    }
    

  updatePixels();
