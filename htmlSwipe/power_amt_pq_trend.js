// function generateAmtArray(amtLists) {
// 	var tolAmtArray = [];
//
// 	for (var i = 0; i < amtLists.length; i++) {
// 		tolAmtArray[i] = Number((parseFloat(amtLists[i].tolAmt)).toFixed(2));//保留两位小数
// 	}
//
// 	return tolAmtArray;
// }
//
// function generatePowerArray(amtLists) {
// 	var tolAmtArray = [];
//
// 	for (var i = 0; i < amtLists.length; i++) {
// 		tolAmtArray[i] = parseInt(amtLists[i].tolElec);
// 	}
//
// 	return tolAmtArray;
// }
//
// function generateYmArray(amtLists) {
// 	var ymArray = [];
//
// 	for (var i = 0; i < amtLists.length; i++) {
// 		ymArray[i] = amtLists[i].amtYm.slice(-2);//删除年份，X轴仅展示月
// 	}
//
// 	return ymArray;
// }

function getUnitName(type) {
    var unitName = "";
	
    if (type == "tolAmt") {
    	unitName = "元";
    } 
	else if (type == "tolElec") {
    	unitName = "度";
    }
    
	return unitName;
}

function getYaxisData(type, tolAmt, tolElec) {
	if (type == "tolAmt") {
		return tolAmt;
	}
	else if (type == "tolPq") {
		return tolElec
	}
}

var ymArray = [];
var tolAmtArray = [];
var tolElecArray = [];
function generateChartData(amtLists) {
	for (var i = 0; i < amtLists.length; i++) {
		ymArray[i] = amtLists[i].amtYm.slice(-2);//删除年份，X轴仅展示月
		tolAmtArray[i] = Number((parseFloat(amtLists[i].tolAmt)).toFixed(2));//保留两位小数
		tolElecArray[i] = parseInt(amtLists[i].tolPq);
	}
	
	return ymArray;
}

$(function (data) {
    Highcharts.setOptions({
        timezoneOffset: -8
    });

   jsonString = 'tolPq@{"data":{"returnCode":"0","returnMsg":"正常处理","requestCode":"JS110","dataInfo":{"consNo":"0400000404","consName":"汤山白水泥厂","orgNo":"3240101","orgName":"南京供电公司市区","elecAddr":"坟头排山","recordCount":"6","amtLists":[{"amtYm":"201512","tolAmt":"166439.5","tolPq":"151615"},{"amtYm":"201601","tolAmt":"128034.92","tolPq":"122299"},{"amtYm":"201602","tolAmt":"94035.14","tolPq":"62771"},{"amtYm":"201603","tolAmt":"125618.38","tolPq":"118060"},{"amtYm":"201604","tolAmt":"127326.72","tolPq":"119025"},{"amtYm":"201605","tolAmt":"141264.47","tolPq":"129825"}]}}}';
    var dataArray = jsonString.split("@");
	var obj = jQuery.parseJSON(dataArray[1]);
	
	
	generateChartData(obj.data.dataInfo.amtLists);
	var type = dataArray[0];
	console.log(obj.data.dataInfo.amtLists);
	console.log(tolAmtArray);
	console.log(tolElecArray);
// 	console.log(ymArray);
	
        $('#container').highcharts({
            global: {
                useUTC: false
            },
            credits: {//hide copyright
                enabled: false
            },
            chart: {
            //     // zoomType: 'x'
            //     }
            },
            title: {
                text: ''//hide title
            },
            //subtitle: {//delete subtitle
            //    text: document.ontouchstart === undefined ?
            //    '鼠标拖动可以进行缩放' : '手势操作进行缩放'
            //},
            xAxis: {
                type: 'category',
                labels: {
                    step: 1,
                    formatter: function() {
                        return this.value;
                    }
                },
                // dateTimeLabelFormats: {
//                     millisecond: '%H:%M:%S.%L',
//                     second: '%H:%M:%S',
//                     minute: '%H:%M',
//                     hour: '%H:%M',
//                     day: '%m-%d',
//                     week: '%m-%d',
//                     month: '%m',
//                     year: '%Y'
//                 },
                categories: ymArray
            },
            plotOptions :{
				
                line: {
					enableMouseTracking: false,
					dataLabels: {
						enabled: true,
						color : '#787878'
					},
					
                    // marker: {
  //                   	enabled: true
  //               	},
            //     pointInterval: 1000 * 3600 * 24 * 30 , // one hour
            //     pointStart: Date.UTC(xAxisValue[0].getFullYear(), xAxisValue[0].getMonth(), xAxisValue[0].getDate(), 0, 0, 0)
                }
            },
            // tooltip: {
//                 dateTimeLabelFormats: {
//                     millisecond: '%H:%M:%S.%L',
//                     second: '%H:%M:%S',
//                     minute: '%H:%M',
//                     hour: '%H:%M',
//                     day: '%Y-%m-%d',
//                     week: '%m-%d',
//                     month: '%Y-%m',
//                     year: '%Y'
//                 },
//                 pointFormat: '{series.name}: <b>{point.y}</b><br/>',
//                 valueSuffix: ' 元',
//                 shared: true
//             },
            yAxis: {
                labels: {
                    enabled: false,
                },
                enabled: false,
                title: {
                    text: ''// text: '' 隐藏Y轴
                },
				gridLineWidth: 0
            },
            legend: {
                enabled: false,
                align: 'left',
                verticalAlign: 'top'
            },
            series: [{
                type: 'line',
                name: '月电费',
                data: getYaxisData(type, tolAmtArray, tolElecArray),
				color: '#049888'
            }
		]
        });
    });

