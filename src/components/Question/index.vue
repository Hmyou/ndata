<template>
    <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="1. Les gens gagnent surtout le prix Nobel à quel âge?" name="1">
            <div>
                Les gens gagnent le prix Nobel surtout à l'âge de 61. On peut obtenir ce résultat par le dataviz “Distribution of age of win Nobel prize”.
            </div>
            <el-image :src="img1"></el-image>
        </el-collapse-item>
        <el-collapse-item title="2. Le rang de nombre de gagnants est-il presque le même dans chaque catégorie?" name="2">
            <div>
                <p>Chemistry: USA, UK, GERMANY</p>
                <p>Physics: USA, UK, FRANCE</p>
                <p>Economics: USA</p>
                <p>Medicine: USA, UK, FRANCE</p>
                <p>Littérature & Peace: la plupart d'entre eux n'ont pas d'informations sur les pays dans ce jeu de données</p>
                <p>Donc on peut voir : Le rang de nombre de gagnants est presque le même dans chaque catégorie.</p>
            </div>
            <el-image :src="img2"></el-image>
        </el-collapse-item>
        <el-collapse-item title="3. Est-ce que la plupart des gagnants sont mort dans le même pays où ils sont nés?" name="3">
            <div>
                Oui. On peut voir dans le dataviz “The born and death country difference”, il y a 246 personnes sont mort dans un autre pay que leurs pays de naissance, et il y 355 gagnants sont mort dans leur pays de naissance. Donc la plupart des gagnants sont mort dans le même pays où ils sont nés.
            </div>
            <el-image :src="img3"></el-image>
        </el-collapse-item>
        <el-collapse-item title="4. Quel est l’âge du plus jeune gagnant? le plus vieux?" name="4">
            <div>
                L’âge du plus jeune gagnant est 17 et le plus vieux est 90.
            </div>
            <el-image :src="img4"></el-image>
        </el-collapse-item>
        <el-collapse-item title="5. Y a-t-il de plus en plus de femmes gagnantes?" name="5">
            <div>
                Oui. Il y a de plus en plus de femmes gagnant et le montant totale du gagnant est aussi augmenté.
            </div>
            <el-image :src="img5"></el-image>
        </el-collapse-item>
        <el-collapse-item title="6. Y a-t-il de différence de distribution de gender dans chaque catégorie？" name="6">
            <div>
                Oui. On peut voir dans le dataviz “The distribution of gender over category” qu’il y a plus de femme gagnants dans les catégories literature, medicine et peace et il y a moins de femme gagnants dans les catégories economics, chemistry and physics.
            </div>
            <el-image :src="img6"></el-image>
        </el-collapse-item>
        <el-collapse-item title="7. Dans quelle gatégorie il y la plus de personnes en Amerique？" name="7">
            <div>
                Dans la catégorie de médecine il y a le plus de personnes pour Amérique. On peur le voir dans “la distribution of categories over countries”.
            </div>
            <el-image :src="img7"></el-image>
        </el-collapse-item>
    </el-collapse>
</template>
<script>
    import img1 from '@/static/i1.png'
    import img2 from '@/static/i2.png'
    import img3 from '@/static/i3.png'
    import img4 from '@/static/i4.png'
    import img5 from '@/static/i5.png'
    import img6 from '@/static/i6.png'
    import img7 from '@/static/i7.png'
    export default {
        data() {
            return {
                activeNames: ['1'],
                img1,
                img2,
                img3,
                img4,
                img5,
                img6,
                img7
            };
        },
        methods: {
            handleChange(val) {
                console.log(val);
            }
        }
    }
</script>
<style>
    .el-collapse-item__header {
        font-size: 18px;
    }
    .el-collapse-item__content {
        font-size: 14px;
    }
</style>
