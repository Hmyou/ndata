<template>
    <div id="app">
        <router-view/>
    </div>
</template>
<script>
    export default {
        name: 'App',
        data() {
            return {}
        },
        created() {
        },

}
</script>
<style lang="scss">
    @import '~@/assets/style/reset.css';

    html, body, #app {
        width: 100%;
        height: 100%;
    }
    body {
        background: #fff url("https://www.toptal.com/designers/subtlepatterns/patterns/email-pattern.png");
    }
</style>
