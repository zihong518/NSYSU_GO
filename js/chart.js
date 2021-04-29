Chart.pluginService.register({
    beforeDraw: function(chart) {
        if (chart.config.options.elements.center) {
    // Get ctx from string
        var ctx = chart.chart.ctx;

        // Get options from the center object in options
        var centerConfig = chart.config.options.elements.center;
        var fontStyle = centerConfig.fontStyle || 'cwTeXYen';
        var txt = centerConfig.text;
        var color = centerConfig.color || '#000';
        var maxFontSize = centerConfig.maxFontSize || 75;
        var sidePadding = centerConfig.sidePadding || 20;
        var sidePaddingCalculated = (sidePadding / 100) * (chart.innerRadius * 2)
        // Start with a base font of 30px
        ctx.font = "35px " + fontStyle;

        // Get the width of the string and also the width of the element minus 10 to give it 5px side padding
        var stringWidth = ctx.measureText(txt).width;
        var elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;

        // Find out how much the font can grow in width.
        var widthRatio = elementWidth / stringWidth;
        var newFontSize = Math.floor(30 * widthRatio);
        var elementHeight = (chart.innerRadius * 2);

        // Pick a new font size so it will not be larger than the height of label.
        var fontSizeToUse = Math.min(newFontSize, elementHeight, maxFontSize);
        var minFontSize = centerConfig.minFontSize;
        var lineHeight = centerConfig.lineHeight || 25;
        var wrapText = false;

        if (minFontSize === undefined) {
            minFontSize = 20;
        }

        if (minFontSize && fontSizeToUse < minFontSize) {
            fontSizeToUse = minFontSize;
            wrapText = true;
        }

    // Set font settings to draw it correctly.
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        var centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
        var centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);
        ctx.font = fontSizeToUse + "px " + fontStyle;
        ctx.fillStyle = color;

        if (!wrapText) {
            ctx.fillText(txt, centerX, centerY);
            return;
        }

        var words = txt.split(' ');
        var line = '';
        var lines = [];

        // Break words up into multiple lines if necessary
        for (var n = 0; n < words.length; n++) {
            var testLine = line + words[n] + ' ';
            var metrics = ctx.measureText(testLine);
            var testWidth = metrics.width;
            if (testWidth > elementWidth && n > 0) {
            lines.push(line);
            line = words[n] + ' ';
            } else {
            line = testLine;
            }
        }

    // Move the center up depending on line height and number of lines
        centerY -= (lines.length / 2) * lineHeight;

        for (var n = 0; n < lines.length; n++) {
            ctx.fillText(lines[n], centerX, centerY);
            centerY += lineHeight;
        }
        //Draw text in center
        ctx.fillText(line, centerX, centerY);
        }
}
});
//圓餅圖    
var ctx = document.getElementById('myChart').getContext('2d');
ctx.height = 500;
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['平台行銷使用', '資訊系統使用', '平台運營費用'],
        datasets: [{
            data: [200000, 50000, 50000],
            backgroundColor: [
                'rgba(164, 179, 226,1)',
                'rgba(237, 190, 110,1)',
                'rgba(2, 71, 122,1)',
                
            ],
            hoverBackgroundColor:[
                'rgb(198, 204, 255)',
                'rgb(255, 213, 118)',
                'rgb(2, 93, 160)',

            ],
            borderColor: [
                'rgb(198, 204, 255)',
                'rgb(255, 213, 118)',
                'rgb(2, 93, 160)',
            ],
            borderWidth: 1,
        }]
    },
    options: {
        responsive: false,
        legend: {
            display:false,
            position: 'right',
            labels: {
                fontSize: 30,
            },
        },
        plugins: {
            datalabels: {
                color: '#fff',
                anchor:'center',
                align :'center',
                borderRadius:25,
                osition: 'outside',
                font:{
                    weight:'bold',
                    size:'15',
                    family:"GenSenRounded TW"
                },
                formatter: (value,ctx)=>{
                    let sum = 0;
                    let dataArr = ctx.chart.data.datasets[0].data;
                    dataArr.map(data => {
                        sum += data;
                    });
                    let percentage = (value*100 / sum).toFixed(2)+"%";
                    return '\t\t\t $'+value/1000 +',000'+'\n'+ ctx.chart.data.labels[ctx.dataIndex];
                }
            },
           
        },
        elements: {
            center: {
            text: '$300,000',
            color: '#000000', // Default is #000000
            fontStyle: 'GenSenRounded TW', // Default is Arial
            sidePadding: 20, // Default is 20 (as a percentage)
            minFontSize: 30, // Default is 20 (in px), set to false and text will not wrap.
            lineHeight: 25 // Default is 25 (in px), used for when text wraps
            }
        }
    }
});