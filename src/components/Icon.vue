<template>
    <picture :class="$style.root">
        <source
            v-for="source of sources"
            :key="''"
            v-bind="source.attributes"
        >
        <img
            alt=""
            :class="$style.image"
            :height="height"
            :src="url"
            :width="width"
        />
    </picture>
</template>

<script>
export default {
    props: {
        url: String,
        sources: Array,
        width: Number,
        height: Number,
    },
}
</script>

<style lang="scss" module>

.root {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
}

.image {
    max-height: 64px;
    max-width: 64px;
}

</style>
