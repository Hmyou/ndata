<template>
    <div class="home-container">
        <div class="nav">
            <div :class="{current: current==='intro'}" @click="navClick('intro')">Intro</div>
            <div :class="{current: current==='question'}" @click="navClick('question')">Question</div>
            <div :class="{current: current==='map'}" @click="navClick('map')">MapChart</div>
            <div :class="{current: current==='bar'}" @click="navClick('bar')">BarChart</div>
        </div>
        <div style="clear: both;"></div>
        <div class="map-box" v-show="current === 'map'">
            <map-chart :mapData="formatData"></map-chart>
        </div>
        <div class="bar-box" v-show="current === 'bar'">
            <bar-chart :barData="formatData" :categoryArr="categoryArr"></bar-chart>
        </div>
        <div style="clear:both;"></div>
        <div class="question-box" v-show="current === 'question'">
            <question></question>
        </div>
        <intro v-show="current === 'intro'"></intro>
    </div>
</template>

<script>
    import { getData_countryCodeToName, getData_nobelPrizeByWinner } from '@/utils/index'
    import MapChart from '@/components/MapChart'
    import BarChart from '@/components/BarChart'
    import Question from '@/components/Question'
    import Intro from '@/components/Intro'
    export default {
        name: 'home',
        components: {
            MapChart,
            BarChart,
            Question,
            Intro
        },
        data() {
            return {
                codeToName: {},
                formatData: [],
                categoryArr: [],
                current: 'intro'
            }
        },
        created() {
            getData_countryCodeToName().then(data => {
                // 国家码对应echarts使用的国家名
                data.forEach(item => {
                    this.codeToName[item.country_code] = item.echarts_name
                })
                console.log('codeToName', this.codeToName)

                // 处理原数据转成echarts使用的数据格式
                getData_nobelPrizeByWinner().then(data => {
                    this.handleEchartData(data)
                }).catch(err => {
                    console.error(err)
                })

            }).catch(err => {
                console.error(err)
            })
        },
        methods: {
            // 原数据转成ehcarts使用的数据格式
            handleEchartData(originData) {
                const countryKeyData = {}
                const categoryArr = []
                originData.forEach(item => {
                    if(item.category && categoryArr.indexOf(item.category) < 0) {
                        categoryArr.push(item.category)
                    }

                    const countryCode = item.bornCountryCode
                    if(countryCode && !countryKeyData[countryCode]) {
                        countryKeyData[countryCode] = {
                            code: countryCode,
                            name: this.codeToName[countryCode],
                            value: 1,
                            categoryKeyValue: {}
                        }
                        countryKeyData[countryCode]['categoryKeyValue'][item.category] = 1
                    }
                    if(countryCode && countryKeyData[countryCode]) {
                        countryKeyData[countryCode].value++

                        if (countryKeyData[countryCode]['categoryKeyValue'][item.category]) {
                            countryKeyData[countryCode]['categoryKeyValue'][item.category]++
                        } else {
                            countryKeyData[countryCode]['categoryKeyValue'][item.category] = 1
                        }
                    }
                })

                for (let key in countryKeyData) {
                    this.formatData.push(countryKeyData[key])
                }
                this.categoryArr = categoryArr

                console.log('formatData', this.formatData)
                console.log('categoryArr', this.categoryArr)
            },

            navClick(nav) {
                this.current = nav
            }
        }
    }
</script>
<style lang="scss">
    .home-container {
        height: 100%;
    }
    .nav {
        background: #353535;
        height: 48px;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999999;
        > div {
            color: #fff;
            font-weight: bold;
            float: left;
            margin-left: 100px;
            line-height: 48px;
            cursor: pointer;

            &.current {
                color: #48b8fd;
            }
        }
    }
    .question-box {
        width: 1100px;
        margin: 0 auto;
        padding: 68px 20px 20px 20px;
        background: #fff;
        border-radius: 6px;
    }
    .map-box,.bar-box {
        padding-top: 68px;
        background: #fff;
        min-height: 100%;
    }
</style>
