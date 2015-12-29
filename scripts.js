<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js">
	const colourIncrease = 2;
	const blockWidth = 10;
	const blockHeight = 20;
	$(document).ready(function() {
		$('#advert1').appendTo("#content p:eq(1)");
		$('#advert1').css("display", "block");
		var myCanvas = document.createElement("canvas");
		myCanvas.width = screen.width;
		myCanvas.height = screen.height;
		var ctx = myCanvas.getContext("2d");
		var currentColour = 0;
		for (i = 0 ; i < Math.floor(screen.width / blockWidth); i+= blockWidth){
			for (j = 0; j < Math.floor(screen.height / blockHeight); i+= blockHeight){
				var grd = ctx.createLinearGradient(0,0,200,0);
				grd.addColorStop(0, getRandomColor());
				grd.addColorStop(1,"white");
				ctx.fillRect(i, j, blockWidth, blockHeight);
			}
		}
	});

	//"#"+((1<<24)*Math.random()|0).toString(16)
	function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
</script>