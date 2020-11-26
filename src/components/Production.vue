<template>
    <div :class="$style.root">
        <div :class="[$style.box, $styles.background__production]">
            <Counter :id="productionId"/>
        </div>
    </div>
</template>

<script>
import Counter from "./Counter";

export default {
    components: {
        Counter,
    },
    computed: {
        productionId() {
            return `production_${this.name}`;
        },
    },
    props: {
        name: String,
    },
}
</script>

<style lang="scss" module>

.root {
    border-image-source: linear-gradient(to top, #bdb0a6 0%, #483f3e 100%);
    border-image-slice: 1;
    border-style: inset;
    border-width: 2px;
    border-collapse: collapse;
    background: linear-gradient(135deg, rgba(127, 70, 35, 1) 0%, rgba(147, 94, 44, 1) 100%);
    height: 100%;
    padding: 1px;
    width: 100%;
}

.box {
    align-items: center;
    background-size: 58px 51px;
    display: flex;
    flex-wrap: nowrap;
    height: 100%;
    justify-content: center;
    padding: 6px 3px;
}

</style>
