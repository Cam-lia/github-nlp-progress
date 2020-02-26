<!-- themePath/layouts/GlobalLayout.vue -->
<template>
    <div id="global-layout">
        <header class="bk-dark">
            <video autoplay loop muted>
                <source src="/github-nlp-progress/bk.mp4" type="video/mp4"></source>
            </video>
            <div class="header-content">
                <h1>NLP-PROGRESS</h1>
                <h2>Repository to trasck the progress in Natural Language Processing (NLP), including the datasets and the current state-of-the-art for the most common NLP tasks.</h2>
                <a class="btn" href="#">
                    <i class="iconfont icon-github"></i>
                    View on GitHub
                </a>
            </div>
        </header>
        <component :is="layout"></component>
        <footer class="bk-dark">
            <div class="footer-content">
                <p>NLP-progress maintained by <a href="https://github.com/sebastianruder">sebastianruder</a></p>
                <p>Published with <a href="https://github.com/sebastianruder">GitHub Pages</a></p>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    beforeUpdate() {
        if (this.$page.title) {
            this.$page.title = '目录';
        }
    },
    computed: {
        layout() {
            if (this.$page.path) {
                const layout = this.$page.frontmatter.layout;
                if (layout && (this.$vuepress.getLayoutAsyncComponent(layout)
                    || this.$vuepress.getVueComponent(layout))) {
                    return layout;
                }
                return 'Layout';
            }
            return 'NotFound';
        }
    },
    mounted() {
        console.log(this.$el.getElementsByTagName('aside')[0]);
    }
};
</script>
<style lang='stylus' scoped>
#global-layout
    padding-bottom 80px
    min-height 100%
    footer
        position absolute
        left 0
        width 100%
        bottom 0
        z-index 2

.bk-dark
    background #071B34
    color #fff
h1, h2
    background transparent
    border none
    padding 0!important
    margin 0
header
    text-align center
    height 288px
    position relative
    overflow hidden
    .header-content
        position absolute
        width 800px
        left 50%
        top 50%
        transform translate3d(-50%, -50%, 0)
    h1
        line-height 64px
        font-size 48px
        margin-bottom 6px
    h2
        font-size 14px
        line-height 26px
        margin auto
        margin-bottom 20px
        width 600px
    video
        width 100%
        height 100%
        position absolute
        left 50%
        top 50%
        transform translate3d(-50%, -50%, 0)
        width 1440px
        height 288px
footer
    .footer-content
        overflow hidden
        max-width  800px
        margin auto
        padding 29px 20px;
        a:hover
            text-decoration underline
        p
            margin 0
            float right
            line-height 22px
            &:first-of-type
                float left
.btn
    height 40px
    border 1px solid #fff
    color #fff
    line-height 38px
    padding 0 20px
    display inline-block
    border-radius 20px
    transition all .3s ease-in
    font-weight 400
    &:hover
        background #fff
        color #071B34

@media (max-width: 719px)
    footer .footer-content p
        font-size 12px
    header
        .header-content
            width 100%
            box-sizing border-box
            padding 0 1.5rem
            font-size 12px
        h1
            font-size 18px
            line-height 28px
        h2
            font-size 12px
            width 100%
        .btn
            font-size 12px
            height 28px
            line-height 26px
            padding 0 10px

</style>
