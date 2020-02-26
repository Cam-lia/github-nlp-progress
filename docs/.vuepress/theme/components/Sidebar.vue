<template>
    <div class="sidebar-wrap" :class="sideAbs ? 'sidebar-wrap-absolute' : ''">
        <sidebar :items="items"></sidebar>
    </div>
</template>
<script>
import SideBar from '@parent-theme/components/Sidebar.vue';
export default {
    components: {
        sidebar: SideBar
    },
    props: ['items'],
    data() {
        return {
            sideAbs: true
        };
    },
    mounted() {
        window.addEventListener('scroll', () => {
            let top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
            if (top > 424) {
                this.sideAbs = false;
            } else {
                this.sideAbs = true;
            }
        });
    }
};
</script>
<style lang="stylus">
.sidebar-wrap
    right 0
    left auto
    top 0
    width 200px
    padding-right 20px
    position fixed
    bottom 0
    z-index 1
    overflow auto
    &-absolute
        position absolute
        top 112px

@media (max-width: 1300px)
    .sidebar-wrap
        display none

.sidebar
    position relative
    border-right 0
    padding-right 0
    background transparent
    display block
    width 100%
    p, ul, ol
        line-height 1.4
    ul, li
        margin 0
    *
        font-size 12px!important
    .sidebar-heading,
    .sidebar-heading *
        padding 0
        margin 0
        border 0
    .sidebar-heading
        margin-bottom 15px
    .sidebar-group.depth-0 > ul
        border-left 1px solid #E6ECF0
        & > li:first-of-type > a
            margin-top 0
    a.sidebar-link
        padding 0!important
        border-left-width 2px
        margin-bottom 15px
    .sidebar-group a.sidebar-link,
    .sidebar-sub-headers
        padding-left 12px!important;
    .sidebar-sub-header a
        margin-bottom 10px;
        margin-top 0;
    .sidebar-sub-header:last-of-type a
        margin-bottom 15px

</style>
