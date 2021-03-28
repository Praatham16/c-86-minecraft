var canvas = new fabric.Canvas("mycanvas");
block_width= 30;
block_height= 30;
player_x=100;
player_y=100;
player_object=""
block_object=""

function update_player() {
    fabric.Image.fromURL("player.png",function (Img) {
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
canvas.add(player_object)
    });
}
function update_blocks(block) {
    fabric.Image.fromURL(block,function (Img) {
        block_object=Img;
        block_object.scaleToWidth(block_width);
        block_height.scaleToHeight(block_height);
        block_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_object)
    });
    

}