<template>
    <div id="tab_bar">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'tabbar'
}
</script>

<style scoped>
    #tab_bar{
        display: flex;
        justify-content: center;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        box-shadow: 0 -1px 5px #ccc;
        background: #f6f6f6 ;
    }
</style>