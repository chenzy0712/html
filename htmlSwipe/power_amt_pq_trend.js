function generateAmtArray(amtLists) {
	var tolAmtArray = [];
	
	for (var i = 0; i < amtLists.length; i++) {
		tolAmtArray[i] = Number((parseFloat(amtLists[i].tolAmt)).toFixed(2));//保留两位小数
	}
	
	return tolAmtArray;
}

function generatePowerArray(amtLists) {
	var tolAmtArray = [];
	
	for (var i = 0; i < amtLists.length; i++) {
		tolAmtArray[i] = parseInt(amtLists[i].tolElec);
	}
	
	return tolAmtArray;
}

function generateYmArray(amtLists) {
	var ymArray = [];
	
	for (var i = 0; i < amtLists.length; i++) {
		ymArray[i] = amtLists[i].amtYm.slice(-2);//删除年份，X轴仅展示月
	}
	
	return ymArray;
}

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

$(function (data) {
    Highcharts.setOptions({
        timezoneOffset: -8
    });

   jsonString = 'tolPq@{"data":{"type":"000","returnMsg":"操作成功","requestCode":"GDT08116","amtLists":{"amtList":[{"amtYm":"201601","tolAmt":"2000.89999999999","tolElec":"40000"},{"amtYm":"201602","tolAmt":"900.12","tolElec":"10000"},{"amtYm":"201603","tolAmt":"4000.26","tolElec":"38900"},{"amtYm":"201604","tolAmt":"11000.11","tolElec":"19900"},{"amtYm":"201605","tolAmt":"40012.01","tolElec":"3400"},{"amtYm":"201606","tolAmt":"1000.01","tolElec":"10300"},{"amtYm":"201607","tolAmt":"20012.10","tolElec":"50101"},{"amtYm":"201608","tolAmt":"8000.1","tolElec":"4000"},{"amtYm":"201609","tolAmt":"2000.99","tolElec":"34000"},{"amtYm":"201610","tolAmt":"3000.99","tolElec":"7800"}]}}}';
    var dataArray = jsonString.split("@");
	var obj = jQuery.parseJSON(dataArray[1]);
	console.log(obj);
	
	// console.log(obj.data.amtLists);
	var tolAmtArray = generateAmtArray(obj.data.amtLists.amtList);
	var tolElecArray = generatePowerArray(obj.data.amtLists.amtList);
	var ymArray = generateYmArray(obj.data.amtLists.amtList);
	var type = dataArray[0];
	console.log(tolAmtArray);
// 	console.log(tolElecArray);
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

