var data = [95.2, 88, 71, 100];
var squareScale = d3.scale.linear()
	.domain([0,100])
	.range([0,1225]);


var vis = d3.select(".vis")
	.append("svg")
	.attr("width", 1190)
	.attr("height", 670);

var radarVis = vis.append("g")
	.attr("id","radars")
	.attr("transform", "translate(0,0)");

var allRadars = radarVis.append("svg:g")
	.attr('id', 'radarGroup')
	.style("fill", "##DEDC2A")
	.attr("transform", "translate(322, 66)");

allRadars.append("rect")
	.attr("x", -35)
	.attr("y", -35)
	.attr("width", 71)
	.attr("height",71)
	.style("fill", "#fff");

iconSquares = allRadars.selectAll(".iconSquares")
	.data(data)					
	.enter()
	.append('g')
	.attr('class','iconSquares')
	.attr('id',function(d1,i){ return 'square_'+i;} );

iconSquares.append('rect')
	.attr("width", function(d){console.log(squareScale(d)); return Math.sqrt(squareScale(d));})
	.attr("height", function(d){return Math.sqrt(squareScale(d));})
	.attr("x", function(d,i){return (i==0||i==3)? -Math.sqrt(squareScale(d)) -1: 1; })
	.attr("y", function(d,i){return (i<2)? -Math.sqrt(squareScale(d))-1: 1;})
	.attr("rx",function(d){return (Math.sqrt(squareScale(d)) * 4)/35;})
	.attr("ry",function(d){return (Math.sqrt(squareScale(d)) * 4)/35;});


iconSquares.append('rect')
	.attr("width", function(d){return (Math.sqrt(squareScale(d)) * 4)/35;})
	.attr("height", function(d){return (Math.sqrt(squareScale(d)) * 4)/35;})
	.attr("x", function(d,i){return (i==0||i==3)? -(Math.sqrt(squareScale(d)) * 4)/35-1: 1; })
	.attr("y", function(d,i){return (i<2)? -(Math.sqrt(squareScale(d)) * 4)/35 -1: 1;});

var lineAxes = allRadars.append('svg:g').attr("class","axis");
lineAxes.append("line")
	.attr("x1", 0)
	.attr("y1", -36)
	.attr("x2", 0)
	.attr("y2", 36);
lineAxes.append("line")
	.attr("x1", -36)
	.attr("y1", 0)
	.attr("x2", 36)
	.attr("y2", 0);

var labels = allRadars.append("svg:text")
	.attr("class","label")
	.attr("text-anchor", "middle")
	.attr("y",-38)
	.text("Foo Country");