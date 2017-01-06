function convertStringArrayToDoubleArray(stringArray) {
        var doubleArray = [];
        for (var i = 0; i < stringArray.length; i++) {
            doubleArray.push(parseFloat(stringArray[i]));
        }

        return doubleArray;
    };
function convertStringMonthArrayToDatetimeArray(stringMonth) {
    var datetimeArray = [];

    for (var i = 0; i < stringMonth.length; i++) {
        var timestamp = Date.parse(new Date(stringMonth[i]));
        var newDate = new Date();
        newDate.setTime(timestamp);
        // console.log(newDate);
        datetimeArray[i] = newDate;
    }

    return datetimeArray;
};

function hideChart() {
    $('#container').hide();
};
$(function () {
    Highcharts.setOptions({
        timezoneOffset: -8
    });

   jsonString = '{ "data": { "returnCode": "0000", "returnMsg": "用户信息查询成功", "requestCode": "GDT10003","cjBaseResultMedol": { "jzMaxLoad": 2254, "jzMinLoad": 0, "jzMaxLoadTime": "02:15:00","jzMinLoadTime": "16:45:00", "xAxis": { "dataItem": [ "2016-01", "2016-02", "2016-03", "2016-04", "2016-05", "2016-06", "2016-07", "2016-08","2016-09", "2016-10", "2016-11", "2016-12" ] }, "series": { "seriesData": [ { "name": "基准负荷", "data": {"dataItem": [ "2222.80", "1355.20", "2118.00", "1991.20", "2149.20", "1702.00", "2224.00","2100.00", "2116.00", "2254.00", "1911.20", "2019.20" ] } }, { "name": "额定容量", "data": {"dataItem": [] } }, { "name": "安全运行容量", "data": { "dataItem": [] } } ] } },"cjBaseResultMedol2": { "jzMaxLoad": 2148.4, "jzMinLoad": 0, "jzMaxLoadTime": "22:15:00","jzMinLoadTime": "16:45:00", "xAxis": { "dataItem": [ "00:00:00", "00:15:00", "00:30:00","00:45:00", "01:00:00", "01:15:00", "01:30:00", "01:45:00", "02:00:00", "02:15:00", "02:30:00","02:45:00" ] }, "series": { "seriesData": [ { "name": "比较负荷", "data": { "dataItem": ["2114.80", "1150.80", "1995.20", "1977.20", "2027.60", "1993.60", "1975.60", "2073.20","2062.40", "1784.00", "1954.40", "1923.60" ] } }, { "name": "额定容量", "data": { "dataItem": []} }, { "name": "安全运行容量", "data": { "dataItem": [] } } ] } } } }';
    var obj = jQuery.parseJSON(jsonString);
    var baseValue = convertStringArrayToDoubleArray(obj.data.cjBaseResultMedol.series.seriesData[0].data.dataItem);
    var compareValue = convertStringArrayToDoubleArray(obj.data.cjBaseResultMedol2.series.seriesData[0].data.dataItem);
    var xAxisValue = convertStringMonthArrayToDatetimeArray(obj.data.cjBaseResultMedol.xAxis.dataItem);

    console.log(obj);
    console.log(obj.data.cjBaseResultMedol.xAxis.dataItem);
    console.log(xAxisValue);
    
        $('#container').swipe({
            // swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
            //             $(this).text("You swiped " + direction);
            //         },

            swipeLeft:function(event, distance, duration, fingerCount, fingerData, currentDirection) {
                        console.log("swipeLeft0 from callback");
                        var chart = $('#container').highcharts();
                        var baseData = [];
                        for (var i = 0; i < 12; i++) {
                            // var value = (i * 2000 * Math.random());
                            baseData.push((i * 2000 * Math.random()).toFixed(2));
                            // baseData.push(value);
                        }
                        console.log(baseData);
                        

                        var compareDate = [];
                        for (var i = 0; i < 12; i++) {
                            // newData1.push(i * 2000 * Math.random());
                            compareDate.push((i * 2000 * Math.random()).toFixed(2));
                        }
                        console.log(compareDate);

                        
                        var window_width = $(window).width();
                        $('#container').animate({left: -100}, 500);
                        chart.redraw();
                        chart.series[0].setData(convertStringArrayToDoubleArray(baseData), 'false');
                        chart.series[1].setData(convertStringArrayToDoubleArray(compareDate), 'false');
                        chart.redraw();
                        // hideChart();
                        // $('#container').hide();
                        $('#container').toggle(0, false);
                        $('#container').animate({left: 0}, 500);
                        $('#container').toggle(0, false);
                    },
            swipeRight:function(event, distance, duration, fingerCount, fingerData, currentDirection) {
                        console.log("swipeRight from callback");
                        // alert('hello world');
                        // console.log("swipeRight from callback2");
                        var chart = $('#container').highcharts();
                        var window_width = $(window).width();
                        $('#container').animate({left: 100}, 'slow');
                        // chart.redraw();
                    },

            threshold: 0
        });


        $('#container').highcharts({
            global: {
                useUTC: false
            },
            credits: {//hide copyright
                enabled: false
            },
            chart: {
            //     // zoomType: 'x'
            //     event: {
            //         redraw: function() {
                        
            //         }
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
                dateTimeLabelFormats: {
                    millisecond: '%H:%M:%S.%L',
                    second: '%H:%M:%S',
                    minute: '%H:%M',
                    hour: '%H:%M',
                    day: '%m-%d',
                    week: '%m-%d',
                    month: '%Y-%m',
                    year: '%Y'
                },
                categories: obj.data.cjBaseResultMedol.xAxis.dataItem
            },
            // plotOptions :{
            //     line: {
            //         marker: {
            //         enabled: false
            //     },
            //     pointInterval: 1000 * 3600 * 24 * 30 , // one hour
            //     pointStart: Date.UTC(xAxisValue[0].getFullYear(), xAxisValue[0].getMonth(), xAxisValue[0].getDate(), 0, 0, 0)
            //     }
            // },
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
                valueSuffix: ' 千瓦',
                shared: true
            },
            yAxis: {
                labels: {
                    enabled: false,
                },
                enabled: false,
                title: {
                    text: ''// text: '' 隐藏Y轴
                }
            },
            legend: {
                enabled: true,
                align: 'left',
                verticalAlign: 'top'
            },
            series: [{
                type: 'line',
                name: '基准负荷',
                data: baseValue,
                color: '#049888'
            },
            {
                type: 'line',
                name: '对比负荷',
                data: compareValue,
                color: '#F5A623'
            }]
        });
    });

