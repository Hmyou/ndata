<template>
    <div class="nobel-map-data">
        <h1>Nobel Prize: The distribution of winner over countries</h1>
        <div class="map-chart" ref="MapChart"></div>
        <div class="map-ctr">
            <div @click="handleShowNum" class="show-num">{{showNum?'Hide Num':'Show Num'}}</div>
        </div>
    </div>
</template>
<script>
    import echarts from "echarts"
    import 'echarts/map/js/world.js'

    export default {
        name: 'MapChart',
        data() {
            return {
                chart: null,
                showNum: false
            }
        },
        props: ['mapData'],
        watch: {
            mapData: function () {
                this.initChart()
            }
        },
        mounted() {
            this.initChart()
        },
        methods: {
            initChart() {
                this.chart = echarts.init(this.$refs.MapChart)
                const option = {
                    backgroundColor: "#69c3fb",
                    // title: {
                        // text: 'Nobel Prize: The distribution of winner over countries',
                        // subtext: '',
                        // sublink: '',
                        // top: "10px",
                        // left: 'center',
                        // textStyle: {color: '#fff'}
                    // },
                    visualMap: {
                        type: 'continuous',
                        min: 0,
                        left: 10,
                        max: 350,
                        realtime: false,
                        calculable: true,
                        color: ['#f94843', '#f99543', '#e1f943', '#43f7f9']
                    },
                    toolbox: {  //工具栏
                        show: true,
                        orient: 'vertical',
                        left: 'right',
                        top: 50,
                        itemGap: 20,
                        feature: {
                            dataView: {readOnly: false},
                            restore: {},
                            saveAsImage: {}
                        }
                    },
                    tooltip: {  //提示框组件
                        trigger: 'item',
                        formatter: (params) => {
                            return `Country: ${params.name}<br/>Num: ${params.value || 0}`
                        }
                    },
                    series: [{
                        name: "NobelPrizeNum",
                        type: 'map',
                        mapType: 'world',
                        roam: true,
                        mapLocation: {y: 100},
                        data: this.mapData,   //绑定数据
                        // nameMap: {
                        //     'China': '中国',
                        // },
                        symbolSize: 12,
                        label: {
                            normal:{
                                show: this.showNum,
                                formatter: function(params){ // 自定义标签内容
                                    return params.value || ''
                                },
                                fontSize: 12,
                                lineHeight: 12,
                                backgroundColor:'rgba(255,255,255,.8)',
                                color: '#111'
                            },
                            emphasis: {show: false}
                        },
                        itemStyle: {
                            emphasis: {
                                borderColor: '#fff',
                                borderWidth: 1
                            }
                        },
                        render:function (params) {
                            console.log(params)
                        }
                    }],
                };
                this.chart.setOption(option);
            },

            handleShowNum() {
                this.showNum = !this.showNum
                this.initChart();
            }
        }
    }
</script>
<style lang="scss">
    .nobel-map-data h1 {
        font-size: 18px;
        text-align: center;
        margin: 20px;
    }
    .map-chart {
        width: 1100px;
        height: 600px;
        margin: 0 auto;
    }
    .map-ctr {
        width: 1000px;
        margin: 0 auto;
        .show-num {
            background: #fda15d;
            cursor: pointer;
            padding: 3px 6px;
            border-radius: 4px;
            font-size: 12px;
            float: left;
            position: relative;
            top: -30px;
            left: 40px;
            z-index: 9999;
        }
    }
</style>
