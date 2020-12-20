<template>
    <div class="tab_bar_item" @click="aaa">
        <div v-if="!isactive"><slot name="item-icon"></slot></div>
        <div v-else><slot name="item-icon-active"></slot></div>
        <div :style="acolor"><slot name="item-text"></slot></div>
    </div>
</template>

<script>
export default {
    name: 'tabbaritem',
    props: {
        path: String,
        color: {
            type: String,
            default: 'red'
        }
    },
    data(){
        return {
            // isactive: true
        }
    },
    methods: {
        aaa(){
            this.$router.push(this.path)
        }
    },
    computed: {
        isactive(){
            return this.$route.path.indexOf(this.path) !== -1
        },
        acolor() {
            return this.isactive ? {color: this.color} : {}
        }
    }
}
</script>

<style scoped>
    .tab_bar_item{
        flex: 1;
        height: 49px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }
    .tab_bar_item img{
        flex: 1;
        width: 24px;
        height: 24px;
        margin-top: 3px;
    }
    .tab_bar_item div{
        flex: 1;
        font-size: 12px;
        display: flex;
        align-items: center;
    }
</style>