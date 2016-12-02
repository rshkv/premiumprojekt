const windowExtent = function() {
	const width = parseInt(d3.select(".chart").style("width"));
	const height = parseInt(d3.select(".chart").style("height"));
	return [width, height];
}

const svg = d3.select(".chart")
	.append("svg")

d3.json("data/berlin.json", (berlin) => {
	const [width, height] = windowExtent();

	svg
		.attr("width", width)
		.attr("height", height)
		.datum(berlin);

	const heatmap = new Heatmap(svg);

	heatmap
		.setProperty("Frauen")
		.render();

	$(".legend input").click(function(event) {
		const property = $(this).attr('id');
		heatmap
			.setProperty(property)
			.update();
	});

	$(window).resize(() => {
		const [width, height] = windowExtent();
		svg
			.attr("width", width)
			.attr("height", height)
		heatmap.update()
	});
});
