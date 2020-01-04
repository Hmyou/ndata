<template>
    <div class="intro-content">
        <h1>
            Introduction de dataset
        </h1>
        <div class="intro-txt">
            <p>
                Ce jeu de données montre tous les gagnants du prix Nobel depuis la création du prix en 1901 jusqu'à 2016. Les lauréats sont annoncés début octobre et une cérémonie a lieu le 10 décembre de chaque année. Le prix Nobel a été créé en 1895 par l'inventeur suédois Alfred Nobel et décerné pour la première fois en 1901.
            </p>
            <p>
                Il reconnaît les personnes dans les domaines de la physique, de la chimie, de la physiologie ou de la médecine, de la littérature, de la paix et de l'économie. Ce jeu de données a des attributs : id, firstname, surname, born, died, bornCountry, bornCountryCode, bornCity, diedCountry, diedCountryCode, diedCity, gender, year, category, overallMotivation, share, motivation, name, city, country.
            </p>
            <p>
                Tableau en ligne : <a href="https://eu-west-1a.online.tableau.com/#/site/meichen/workbooks/248493?:origin=card_share_link">https://eu-west-1a.online.tableau.com/#/site/meichen/workbooks/248493?:origin=card_share_link</a>
            </p>
        </div>
        <el-image :src="img0"></el-image>
    </div>
</template>
<script>
    import img0 from '@/static/i0.png'
    export default {
        data() {
            return {
                img0
            };
        },
        methods: {

        }
    }
</script>
<style lang="scss">
    .intro-content {
        padding: 68px 20px 20px 20px;
        background: #fff;
        width: 1100px;
        margin: 0 auto;
    }
    h1 {
        text-align: center;
    }
    .intro-txt {
        margin-top: 20px;
        p {
            line-height: 1.6em;
            text-indent: 2em;
        }
    }
</style>
