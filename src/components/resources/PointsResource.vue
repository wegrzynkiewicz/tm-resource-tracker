<template>
    <Resource
        v-bind="$props"
    >
        <template v-slot:production-item>{{ '' }}</template>
    </Resource>
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
