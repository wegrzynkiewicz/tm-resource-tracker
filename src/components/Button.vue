<template>
    <button
        :id="id ? $shortcut(id) : null"
        v-bind="attributes"
        :class="[$styles.number, $styles.number__button, attributes.class]"
    >{{ label }}</button>
</template>

<script>
export default {
    props: {
        id: String,
        label: String,
        attributes: Object,
    },
}
</script>
