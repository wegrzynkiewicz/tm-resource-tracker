<template>
    <label>
        <input
            :class="[$styles.number, $styles.number__counter]"
            :id="id"
            value="0"
            readonly
        />
    </label>
</template>

<script>
export default {
    props: {
        id: String,
    },
}
</script>
