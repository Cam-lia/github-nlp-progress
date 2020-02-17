<!-- themePath/layouts/GlobalLayout.vue -->
<template>
    <div id="global-layout">
        <header class="bk-dark">
            <div class="content">
                <h1 class="title">NLP-progress</h1>
                <h2 class="tagline">Repository to track the progress in Natural Language Processing (NLP), including the datasets and the current state-of-the-art for the most common NLP tasks.</h2>
            </div>
        </header>
        <component :is="layout"></component>
        <footer class="bk-dark">
            <div class="content">
                <p>NLP-progress maintained by <a href="https://github.com/sebastianruder">sebastianruder</a></p>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    computed: {
        layout() {
            if (this.$page.path) {
                if (this.$frontmatter.layout) {
                    // 你也可以像默认的 globalLayout 一样首先检测 layout 是否存在
                    return this.$frontmatter.layout;
                }
                return 'Layout';
            }
            return 'NotFound';
        }
    }
};
</script>
<style lang='less' scoped>
    .bk-dark {
        background: linear-gradient(to top, #373737, #212121);
        color: #fff;
    }
    .content {
        max-width: 740px;
        margin: 0 auto;
        padding: 3rem 2.5rem;
    }
    @media (max-width: 959px) {
        .content {
            padding: 2rem;
        }
    }
    h1,
    h2,
    p {
        border: none;
        margin: 0;
        padding: 0;
    }
    .title {
        margin-bottom: 20px;
    }
    .tagline {
        font-weight: 400;
    }

</style>
