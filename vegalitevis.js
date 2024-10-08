var vg_1 = "https://raw.githubusercontent.com/ianllow/A2/main/visualization.vl.json";
var vg_2 = "https://raw.githubusercontent.com/ianllow/A2/main/linechart.vg";
var vg_3 = "https://raw.githubusercontent.com/ianllow/A2/main/bubbleplot.vg";

vegaEmbed("#choropleth_map", vg_1).then(function(result) {
// Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed("#linechart", vg_2).then(function(result) {
// Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed("#bubbleplot", vg_3).then(function(result) {
// Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
