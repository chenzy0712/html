function convertStringArrayToDoubleArray(StringArray) {
        var doubleArray = [];
        for (var i = 0; i < StringArray.length; i++) {
            doubleArray.push(parseFloat(StringArray[i]));
        }

        return doubleArray;
    };

$(function () {
    Highcharts.setOptions({
        timezoneOffset: -8
    });

   jsonString = '{"data":{"returnCode":"0000","returnMsg":"用户信息查询成功","requestCode":"GDT10003","cjBaseResultMedol":{"jzMaxLoad":2254,"jzMinLoad":0,"jzMaxLoadTime":"02:15:00","jzMinLoadTime":"16:45:00","xAxis":{"dataItem":["00:00:00","00:15:00","00:30:00","00:45:00","01:00:00","01:15:00","01:30:00","01:45:00","02:00:00","02:15:00","02:30:00","02:45:00","03:00:00","03:15:00","03:30:00","03:45:00","04:00:00","04:15:00","04:30:00","04:45:00","05:00:00","05:15:00","05:30:00","05:45:00","06:00:00","06:15:00","06:30:00","06:45:00","07:00:00","07:15:00","07:30:00","07:45:00","08:00:00","08:15:00","08:30:00","08:45:00","09:00:00","09:15:00","09:30:00","09:45:00","10:00:00","10:15:00","10:30:00","10:45:00","11:00:00","11:15:00","11:30:00","11:45:00","12:00:00","12:15:00","12:30:00","12:45:00","13:00:00","13:15:00","13:30:00","13:45:00","14:00:00","14:15:00","14:30:00","14:45:00","15:00:00","15:15:00","15:30:00","15:45:00","16:00:00","16:15:00","16:30:00","16:45:00","17:00:00","17:15:00","17:30:00","17:45:00","18:00:00","18:15:00","18:30:00","18:45:00","19:00:00","19:15:00","19:30:00","19:45:00","20:00:00","20:15:00","20:30:00","20:45:00","21:00:00","21:15:00","21:30:00","21:45:00","22:00:00","22:15:00","22:30:00","22:45:00","23:00:00","23:15:00","23:30:00","23:45:00"]},"series":{"seriesData":[{"name":"基准负荷","data":{"dataItem":["2222.80","1355.20","2118.00","1991.20","2149.20","1702.00","2224.00","2100.00","2116.00","2254.00","1911.20","2019.20","2172.80","1287.20","2198.00","1300.40","1337.20","2011.20","1285.20","1439.60","2094.40","1168.40","1338.40","2166.80","2012.00","2215.20","2001.60","1139.20","2199.60","1174.80","1148.00","2038.80","1176.80","176.80","157.20","201.20","170.80","158.40","168.00","207.60","186.80","153.60","184.00","175.60","176.40","160.40","180.80","106.40","109.60","160.80","182.00","160.40","191.60","178.80","171.20","137.20","172.00","187.20","226.00","200.80","147.20","149.60","179.60","125.20","182.80","138.80","93.60",0,"25.20","22.40","17.20","18.00","18.80","18.80","18.00","20.40","18.80","18.00","22.40","22.80","26.00","20.40","24.40","22.00","22.80","23.60","98.00","86.40","2156.40","2239.60","2244.00","301.20","1290.80","2089.60","2152.80","2250.40"]}},{"name":"额定容量","data":{"dataItem":[3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000]}},{"name":"安全运行容量","data":{"dataItem":[2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250]}}]}},"cjBaseResultMedol2":{"jzMaxLoad":2148.4,"jzMinLoad":0,"jzMaxLoadTime":"22:15:00","jzMinLoadTime":"16:45:00","xAxis":{"dataItem":["00:00:00","00:15:00","00:30:00","00:45:00","01:00:00","01:15:00","01:30:00","01:45:00","02:00:00","02:15:00","02:30:00","02:45:00","03:00:00","03:15:00","03:30:00","03:45:00","04:00:00","04:15:00","04:30:00","04:45:00","05:00:00","05:15:00","05:30:00","05:45:00","06:00:00","06:15:00","06:30:00","06:45:00","07:00:00","07:15:00","07:30:00","07:45:00","08:00:00","08:15:00","08:30:00","08:45:00","09:00:00","09:15:00","09:30:00","09:45:00","10:00:00","10:15:00","10:30:00","10:45:00","11:00:00","11:15:00","11:30:00","11:45:00","12:00:00","12:15:00","12:30:00","12:45:00","13:00:00","13:15:00","13:30:00","13:45:00","14:00:00","14:15:00","14:30:00","14:45:00","15:00:00","15:15:00","15:30:00","15:45:00","16:00:00","16:15:00","16:30:00","16:45:00","17:00:00","17:15:00","17:30:00","17:45:00","18:00:00","18:15:00","18:30:00","18:45:00","19:00:00","19:15:00","19:30:00","19:45:00","20:00:00","20:15:00","20:30:00","20:45:00","21:00:00","21:15:00","21:30:00","21:45:00","22:00:00","22:15:00","22:30:00","22:45:00","23:00:00","23:15:00","23:30:00","23:45:00"]},"series":{"seriesData":[{"name":"比较负荷","data":{"dataItem":["2114.80","1150.80","1995.20","1977.20","2027.60","1993.60","1975.60","2073.20","2062.40","1784.00","1954.40","1923.60","1819.60","2066.40","2082.00","1077.20","2021.20","2015.20","1827.60","2021.20","1951.60","1938.40","1145.60","1971.20","1909.20","1317.60","1991.20","1904.40","1876.40","1990.00","1990.80","1152.00","283.20","167.20","134.40","151.20","146.00","191.20","59.20","205.60","145.60","229.60","170.40","178.80","186.00","194.00","117.60","84.80","88.80","146.00","142.00","163.20","100.80","126.00","126.80","133.60","130.40","135.20","179.20","176.40","164.00","171.60","149.20","151.60","170.40","116.40","140.00",0,"25.20",0,"19.60","19.20","16.80","16.80","16.00","24.80","19.20","20.40","19.20","20.40","22.00","23.20","22.80","25.60","24.40","21.60","68.00","239.20","1247.20","2148.40","2148.00","1097.60","2114.00","2105.20","1720.80","2062.00"]}},{"name":"额定容量","data":{"dataItem":[3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000]}},{"name":"安全运行容量","data":{"dataItem":[2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250,2250]}}]}}}}';
    var obj = jQuery.parseJSON(jsonString);
    var baseValue = convertStringArrayToDoubleArray(obj.data.cjBaseResultMedol.series.seriesData[0].data.dataItem);
    var compareValue = convertStringArrayToDoubleArray(obj.data.cjBaseResultMedol2.series.seriesData[0].data.dataItem);
    myDate = new Date();

    console.log(obj);
    console.log(obj.data.cjBaseResultMedol.xAxis.dataItem);
    // console.log(obj.data.cjBaseResultMedol.series.seriesData[0].data.dataItem);
    // console.log(baseValue);
    // console.log(obj.data.cjBaseResultMedol2.series.seriesData[0].data.dataItem);
    // console.log(compareValue);
    // 
    
        $('#container').swipe({
            // swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
            //             $(this).text("You swiped " + direction);
            //         },

            swipeLeft:function(event, distance, duration, fingerCount, fingerData, currentDirection) {
                        console.log("swipeLeft from callback");
                        var chart = $('#container').highcharts();
                        var newData = [];
                        for (var i = 0; i < 96; i++) {
                            newData.push(i * 30 * Math.random());
                        }
                        chart.series[0].setData(newData);

                        var xAxis = chart.series[0].xAxis;
                        console.log(xAxis);
                        var xAxisCategory = chart.options.xAxis[0].data;
                        console.log(xAxisCategory);
                        // chart.plotOptions.pointStart = Date.UTC(myDate.getFullYear(), myDate.getMonth(), myDate.getDate() - 2, 0, 0, 0)

                    },
            swipeRight:function(event, distance, duration, fingerCount, fingerData, currentDirection) {
                        console.log("swipeRight from callback");
                        // var label = $(this).renderer.label('The chart was just redrawn', 100, 120);
                        alert('hello world');
                        console.log("swipeRight from callback2");
                    },

            threshold: 0
        });


        $('#container').highcharts({
            credits: {//hide copyright
                enabled: false
            },
            chart: {
                // zoomType: 'x'
                // event: {
                //     redraw: function() {
                        
                //     }
                // }
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
                // dateTimeLabelFormats: {
                //     millisecond: '%H:%M:%S.%L',
                //     second: '%H:%M:%S',
                //     minute: '%H:%M',
                //     hour: '%H:%M',
                //     day: '%m-%d',
                //     week: '%m-%d',
                //     month: '%Y-%m',
                //     year: '%Y'
                // },
                data: obj.data.cjBaseResultMedol.xAxis.dataItem
            },
            // plotOptions :{
            //     line: {
            //         marker: {
            //         enabled: false
            //     },
            //     pointInterval: 900000, // one hour
            //     pointStart: Date.UTC(myDate.getFullYear(), myDate.getMonth(), myDate.getDate() - 1, 0, 0, 0)
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

