<template>
    <Resource
        v-bind="$props"
    />
</template>

<script>
import Resource from "../Resource";

export default {
    components: {
        Resource,
    },
    props: {
        ...Resource.props,
    },
}
</script>
