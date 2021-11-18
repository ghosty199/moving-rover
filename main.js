var backgroundimagetag, roverimagetag

canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
mars=["https://mars.nasa.gov/system/news_items/main_images/8944_1-PIA24546-1280.jpg",
"https://s3.amazonaws.com/cms.ipressroom.com/173/files/20217/6116b7c42cfac272327a7594_Mars+surface+photo%2C+credit+NASA/Mars+surface+photo%2C+credit+NASA_hero.jpg",
"https://ichef.bbci.co.uk/news/976/cpsprodpb/2808/production/_118684201_mars_perseverance_zl0_0036_0670134061_053eby_n0031392zcam03107_1100luj.jpg",
"https://static.scientificamerican.com/sciam/cache/file/2EDA8A7F-C06F-49B2-ACEA1AEA69A15589_source.jpg"]
rover_x=10
rover_y=10
roverwidth=150
roverheight=150
rover="rover.png"
randomnumber=Math.floor(Math.random()*4)
backgroundimage=mars[randomnumber]
function add(){
    backgroundimagetag=new Image()
    backgroundimagetag.onload=uploadbackground
    backgroundimagetag.src=backgroundimage

    roverimagetag=new Image()
    roverimagetag.onload=uploadrover
    roverimagetag.src=rover
}
function uploadbackground(){
    ctx.drawImage(backgroundimagetag,0,0,canvas.width, canvas.height)
}
function uploadrover(){
    ctx.drawImage(roverimagetag, rover_x, rover_y, roverwidth, roverheight)
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode
    if (keyPressed=='38') {
      up()  
      console.log('up')
  }
  if (keyPressed=='40') {
    down()  
    console.log('down')
}
if (keyPressed=='37') {
    left()  
    console.log('left')
}
if (keyPressed=='39') {
    right()  
    console.log('right')
}
}
function up(){


if (rover_y>=0) {
  rover_y=rover_y-10
  uploadbackground()  
  uploadrover()
}
}
function down(){


    if (rover_y<=600) {
      rover_y=rover_y+10
      uploadbackground()  
      uploadrover()
    }
    }
    function left(){


        if (rover_x>=0) {
          rover_x=rover_x-10
          uploadbackground()  
          uploadrover()
        }
        }
        function right(){


            if (rover_y>=800) {
              rover_y=rover_y+10
              uploadbackground()  
              uploadrover()
            }
            }