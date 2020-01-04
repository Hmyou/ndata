<template>
    <div class="nobel-bar-data">
        <h1>Nobel Prize: The distribution of categories over countries</h1>
        <div class="bar-chart" ref="BarChart"></div>
    </div>
</template>
<script>
    import echarts from "echarts"
    export default {
        name: 'BarChart',
        data() {
            return {
                chart: null
            }
        },
        props: ['barData', 'categoryArr'],
        watch: {
            barData: function () {
                this.initChart()
            },
            barCategory: function () {
                this.initChart()
            }
        },
        mounted() {
            this.initChart()
        },
        methods: {
            initChart() {
                this.chart = echarts.init(this.$refs.BarChart)

                // 按照数量大小排个序
                let sortBarData = this.barData.slice(0)
                sortBarData = sortBarData.sort((a, b) => {
                    return a.value - b.value
                })

                const seriesData = []
                this.categoryArr.forEach(categoryName => {
                    const seriesItemData = {
                        name: categoryName,
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight',
                                formatter: function () {
                                    return ''
                                }
                            }
                        },
                        data: []
                    }
                    sortBarData.map((countryItem, index) => {
                        seriesItemData.data[index] = countryItem['categoryKeyValue'][categoryName] || 0
                    })
                    seriesData.push(seriesItemData)
                })

                const option = {
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    legend: {
                        data: this.categoryArr
                    },
                    grid: {
                        left: '1%',
                        right: '1%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis:  {
                        type: 'value'
                    },
                    yAxis: {
                        type: 'category',
                        data: sortBarData.map(item => {
                            return item.name
                        })
                    },
                    series: seriesData
                }
                this.chart.setOption(option)
            }
        }
    }
</script>
<style lang="scss">
    .bar-chart {
        width: 1000px;
        height: 2600px;
        margin: 0 auto;
    }
    .nobel-bar-data h1 {
        font-size: 18px;
        text-align: center;
        margin: 20px;
    }
</style>
