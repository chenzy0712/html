function generateFactorArray(amtLists) {
	var tolAmtArray = [];
	
	for (var i = 0; i < amtLists.length; i++) {
		tolAmtArray[i] = parseInt(amtLists[i].actualPf) / 100;//江苏值为百分制，需转换为1分制
	}
	
	return tolAmtArray;
};

function generateStdFactorArray(amtLists) {
	var stdFactorArray = [];
	
	for (var i = 0; i < amtLists.length; i++) {
		stdFactorArray[i] = parseFloat(amtLists[i].pfStdCode.slice(4));//保留两位小数
	}
	
	return stdFactorArray;
};


function generateYmArray(amtLists) {
	var ymArray = [];
	
	for (var i = 0; i < amtLists.length; i++) {
		ymArray[i] = amtLists[i].ym.slice(-2);//删除年份，X轴仅展示月
	}
	
	return ymArray;
};

var ymArray = [];
var stdFactorArray = [];
var factorArray = [];

function generateChartData(amtLists) {
	for (var i = 0; i < amtLists.length; i++) {
		ymArray[i] = amtLists[i].ym.slice(-2);//删除年份，X轴仅展示月
		factorArray[i] = parseInt(amtLists[i].actualPf) / 100;//江苏值为百分制，需转换为1分制
		stdFactorArray[i] = parseFloat(amtLists[i].pfStdCode.slice(4));//保留两位小数
	}
}

// $(function() {
//
// });

$(function() {
    Highcharts.setOptions({
        timezoneOffset: -8
    });

   jsonString = '{"dataInfo":{"consNo":"0400000404","consName":"汤山白水泥厂","orgNo":"3240101","recordCount":"6","msg":"正常处理","orgName":"南京供电公司市区","amtLists":[{"mpName":"计量点 2","adjFactor":"0.01","ym":"201601","pfStdCode":"考核标准0.9","pfApq":"151025","actualPf":"88","mpId":"110000797664","pfAdjAmt":"1576.12","pfRpq":"81585"},{"mpName":"计量点 2","adjFactor":"-0.0015","ym":"201602","pfStdCode":"考核标准0.9","pfApq":"121695","actualPf":"91","mpId":"110000797664","pfAdjAmt":"-182.86","pfRpq":"56595"},{"mpName":"计量点 2","adjFactor":"0.02","ym":"201603","pfStdCode":"考核标准0.9","pfApq":"62160","actualPf":"86","mpId":"110000797664","pfAdjAmt":"1774.71","pfRpq":"36295"},{"mpName":"计量点 2","adjFactor":"0.015","ym":"201604","pfStdCode":"考核标准0.9","pfApq":"117460","actualPf":"87","mpId":"110000797664","pfAdjAmt":"1764.66","pfRpq":"63560"},{"mpName":"计量点 2","adjFactor":"0.01","ym":"201605","pfStdCode":"考核标准0.9","pfApq":"118405","actualPf":"88","mpId":"110000797664","pfAdjAmt":"1198.56","pfRpq":"59780"},{"mpName":"计量点 2","adjFactor":"0.02","ym":"201606","pfStdCode":"考核标准0.9","pfApq":"129220","actualPf":"86","mpId":"110000797664","pfAdjAmt":"2636.82","pfRpq":"71575"}],"returnCode":"0","elecAddr":"坟头排山"},"returnCode":"0","returnMsg":"正常处理","requestCode":"JS111"}';
	var obj = jQuery.parseJSON(jsonString);
	console.log(obj)
	console.log(obj.dataInfo.amtLists);
	
	generateChartData(obj.dataInfo.amtLists);
	// var factorArray = generateFactorArray(obj.data.dataInfo.amtLists);
	// console.log(factorArray);
	// var stdFactorArray = generateStdFactorArray(obj.data.dataInfo.amtLists);
	// console.log(stdFactorArray);
	// var ymArray = generateYmArray(obj.data.dataInfo.amtLists);
	// console.log(ymArray);
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
					// enableMouseTracking: false,
					dataLabels: {
						// enabled: true,
						color : '#787878'
					},
					
                    marker: {
                    	enabled: true
                	},
            //     pointInterval: 1000 * 3600 * 24 * 30 , // one hour
            //     pointStart: Date.UTC(xAxisValue[0].getFullYear(), xAxisValue[0].getMonth(), xAxisValue[0].getDate(), 0, 0, 0)
                }
            },
            tooltip: {
                dateTimeLabelFormats: {
                    millisecond: '%H:%M:%S.%L',
                    second: '%H:%M:%S',
                    minute: '%H:%M',
                    hour: '%H:%M',
                    day: '%Y-%m-%d',
                    week: '%m-%d',
                    month: '%Y-%m',
                    year: '%Y'
                },
                pointFormat: '{series.name}: <b>{point.y}</b><br/>',
                // valueSuffix: ' 元',
                shared: true,
				crosshairs: {
					color: '#787878',
					width: 1
				}
            },
            yAxis: {
                // labels: {
//                     enabled: false,
//                 },
                // enabled: false,
                title: {
                    text: ''// text: '' 隐藏Y轴
                },
				// gridLineWidth: 0
            },
            legend: {
                enabled: true,
                align: 'left',
                verticalAlign: 'top'
            },
            series: [{
                type: 'line',
                name: '实际功率因数',
                data: factorArray,
				color: '#049888'
            },
			{
				type: 'line',
				name: '考核功率因数',
				data: stdFactorArray,
				color: '#D0021B',
				marker: {
					enabled: false
				},
				dashStyle: 'Dash'
			}
		]
        });
    });
	
	
	function connectWebViewJavascriptBridge(callback) {
		if (window.WebViewJavascriptBridge) {
				callback(WebViewJavascriptBridge)
		} else {
			document.addEventListener('WebViewJavascriptBridgeReady', function() { callback(WebViewJavascriptBridge) }, false)
		}
	}
	connectWebViewJavascriptBridge(function(bridge) {
	/* Init your app here */
	bridge.init(function(message, responseCallback) {
				alert('Received message: ' + message)   
			if (responseCallback) {
				responseCallback("Right back atcha")
			}
	})
	bridge.send('Hello from the javascript')
	bridge.send('Please respond to this', function responseCallback(responseData) {
		console.log("Javascript got its response", responseData)
	})
	})

