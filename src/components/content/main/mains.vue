<template>
    <tabbar>
      <tabbaritem path='/home' color="red">
        <img slot="item-icon" src="../../../assets/img/tabbar/home.svg" alt="首页">
        <img slot="item-icon-active" src="../../../assets/img/tabbar/home_active.svg" alt="首页">
        <p slot="item-text">首页</p>
      </tabbaritem>
      <tabbaritem path='/cate' color="red">
        <img slot="item-icon" src="../../../assets/img/tabbar/category.svg" alt="分类">
        <img slot="item-icon-active" src="../../../assets/img/tabbar/category_active.svg" alt="分类">
        <p slot="item-text">分类</p>
      </tabbaritem>
      <tabbaritem path="/shop" color="red">
        <img slot="item-icon" src="../../../assets/img/tabbar/shopcart.svg" alt="购物车">
        <img slot="item-icon-active" src="../../../assets/img/tabbar/shopcart_active.svg" alt="购物车">
        <p slot="item-text">购物车</p>
      </tabbaritem>
      <tabbaritem path="/profile" color="red">
        <img slot="item-icon" src="../../../assets/img/tabbar/profile.svg" alt="我的">
        <img slot="item-icon-active" src="../../../assets/img/tabbar/profile_active.svg" alt="我的">
        <p slot="item-text">我的</p>
      </tabbaritem>
    </tabbar>
</template>

<script>
    import Tab from '@/components/common/tabbar/tabbar.vue'
    import Item from '@/components/common/tabbar/tabbaritem.vue'

    export default {
        name: 'mains',
        components: {
            tabbar: Tab,
            tabbaritem: Item
        }
    }
</script>

<style scoped>

</style>