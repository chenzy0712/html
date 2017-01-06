require(['jquery', 'echarts/theme/macarons', 'echarts', 'echarts/chart/line', 'widget/util/jsonUtil', 'page/zhejiang/h_daily_load/data', 'widget/util/formatUtil'],
function($, theme, ECharts, Line, JsonUtil, testData, formatUtil) {

    var app = {

        hasData1: true,
        hasData2: true,
        noDataToShow: function() {
            var rs = {};
            rs.series = [];
            rs.legend = [];
            rs.xAxis = ["00:00:00"];
            rs.series.push({
                name: '无数据1',
                type: 'line',
                data: [null]
            });
            rs.series.push({
                name: '无数据2',
                type: 'line',
                data: [null]
            });
            rs.legend.push('基准负荷');
            rs.legend.push('对比负荷');
            $('#tip').css("position", "absolute").css('top', $('#container').height() / 2).css('left', $('#container').width() / 2 - 10).text("暂无数据...");
            this.hasData1 = false;
            this.hasData2 = false;
            return rs;
        },
        convertData: function(data) {

            var rs = {};
            rs.series = [];
            rs.legend = [];
            rs.color = [];
            if (!data) {
                return this.noDataToShow();
            }
            data = data.data;
            dt1 = data.cjBaseResultMedol;
            dt2 = data.cjBaseResultMedol2;

            this.hasData1 = dt1 != null && dt1 != undefined && dt1 != "";
            this.hasData2 = dt2 != null && dt2 != undefined && dt2 != "";

            if (dt1) {
                rs.xAxis = dt1.xAxis.dataItem;
                console.info('dt1 xAxis ====' + dt1.xAxis.dataItem);
            } else if (dt2) {
                rs.xAxis = dt2.xAxis.dataItem;
            } else {
                return this.noDataToShow();
            }

            if (dt1) {
                d1 = dt1.series.seriesData;
                //基准负荷
                var name1 = d1[0].name;
                rs.series.push({
                    name: name1,
                    type: 'line',
                    itemStyle: {
                        normal: {
                            lineStyle: {
                                width: 3
                            }
                        }
                    },
                    smooth: false,
                    data: d1[0].data.dataItem
                });
                rs.legend.push(name1);
                rs.color.push('#049888');
            }

            if (dt2) {
                d2 = dt2.series.seriesData;
                //对比负荷
                //var  name2 = d2[0].name;//传过来的数据叫“比较负荷”
                rs.series.push({
                    name: '对比负荷',
                    type: 'line',
                    itemStyle: {
                        normal: {
                            lineStyle: {
                                width: 3
                            }
                        }
                    },
                    smooth: false,
                    data: d2[0].data.dataItem
                });
                rs.legend.push('对比负荷');
                rs.color.push('#f5a623');
            }
            return rs;
        },

        /**
         *
         * @param data
         */
        createChart: function(data1) {
            var _this = this,
            data = this.convertData(data1),
            chart = ECharts.init($('#container').get(0)),
            option = {
                title: {
                    subtext: '单位:千瓦',
                    x: 20,
                    y: 20
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        lineStyle: {
                            color: '#787878',
                            width: 1
                        }
                    },
                    formatter: function(arg, arg2) {
                        var html = [];
                        var num0 = formatUtil.toCommaPrice('' + arg[0].data);
                        var num1 = formatUtil.toCommaPrice('' + arg[1].data);
                        html.push('<span class="text-title">' + arg[0].name + '</span><br/>');
                        if (_this.hasData1) {
                            html.push('基准负荷：<span class="text-label-1">' + num0 + '</span>千瓦<br/>');
                        } else {
                            html.push('基准负荷：<span class="text-label-1">无数据</span><br/>');
                        }
                        if (_this.hasData2) {
                            html.push('对比负荷：<span class="text-label-2">' + num1 + '</span>千瓦');
                        } else {
                            html.push('对比负荷：<span class="text-label-2">无数据</span>');
                        }
                        return html.join('');
                    }
                },
                noDataLoadingOption: {
                    text: '',
                    effect: 'bubble',
                    effectOption: {
                        effect: {
                            n: 0
                        }
                    }
                },
                dataZoom: {
                    zoomLock: true,
                    handleSize: 0,
                    show: true,
                    start: 0,
                    end: 16
                },
                legend: {
                    x: 15,
                    y: 15,
                    textStyle: {
                        color: '#a6a6a6',
                        fontSize: 12
                    },
                    data: data.legend
                },
                color: data.color,
                grid: {
                    x: 15,
                    y: 40,
                    x2: 15,
                    y2: 60
                },
                xAxis: [{
                    splitLine: {
                        show: false
                    },
                    splitArea: {
                        show: false
                    },
                    type: 'category',
                    boundaryGap: false,
                    axisLine: {
                        lineStyle: {
                            width: 1,
                            color: '#e3e3e5'
                        }
                    },
                    axisLabel: {
                        //                show: false,
                        formatter: function(value) {
                            //去掉秒
                            var idx = value.lastIndexOf(':00');
                            if (idx > 0 && idx === value.length - 3) {
                                value = value.substring(0, value.length - 3);
                                if (value.lastIndexOf(':00') === value.length - 3 || value.lastIndexOf(':30') === value.length - 3) {
                                    return value;
                                }
                                return '';
                            }
                            return value;
                        },
                        interval: 0,
                        //rotate: 45,
                        textStyle: {
                            color: '#a6a6a6',
                            fontStyle: 'normal'
                        }
                    },
                    data: data.xAxis
                }],
                yAxis: [{
                    scale: true,
                    //max:1000,
                    //min:0,
                    //boundaryGap: [1,0],
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: '#c8c7cc',
                            width: 1,
                            type: 'dotted'
                        }
                    },
                    splitArea: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            width: 1,
                            color: '#e3e3e5'
                        }
                    },
                    axisLabel: {
                        show: false,
                        formatter: function(value) {
                            //优化显示
                            if (value > 100000) {
                                return parseFloat((value / 10000).toFixed(2)) + 'w';
                            }
                            if (value > 1000) {
                                return parseFloat((value / 1000).toFixed(2)) + 'k';
                            }
                            return value + '';
                        },
                        textStyle: {
                            color: '#a6a6a6',
                            fontStyle: 'normal'
                        }
                    },
                    type: 'value'
                }],
                series: data.series
            };

            chart.setTheme(theme);
            chart.setOption(option);
            this.chart = chart;
        },

        refreshData: function(data) {
            $('#tip').text('');
            this.createChart(data);
        },

        /**
         * 初始化后触发获取bridge数据
         */
        initData: function() {
            if (window.jsObj) {
                window.jsObj.showDailyChart();
            } else {
                // Test Only
                //console.log(testData);
                //this.refreshData(testData.data1,testData.data2);
            }
            $(document).triggerHandler('pageReady'); //触发IOS初始化
        },

        /**
         * 绑定bridge事件
         */
        bindEvent: function() {
            var _this = this;
            //android init
            window['refreshChartData'] = function(referenceLoadDataStr, contrastLoadDataStr) {
                _this.refreshData(JsonUtil.parse(referenceLoadDataStr), JsonUtil.parse(contrastLoadDataStr));
            };
            //IOS init TODO
            $(document).on('WebViewJavascriptBridgeReady',
            function(e, result) {
                result = JsonUtil.parse(result);
                _this.refreshData(result);
            });
        },

        initElements: function() {
            //现在处理是client会取html的高度,这里初始化时不能按webview高度设置
            //$('#container').height($(window).height()).width($(window).width());
        },

        init: function() {
            this.initElements();
            this.bindEvent();
            this.initData();
        }
    };

    $(function() {
        app.init();
    });

});