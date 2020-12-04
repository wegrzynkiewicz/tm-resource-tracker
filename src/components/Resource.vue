<template>
    <div :class="$style.root">
        <div :class="$style.container">

            <div :class="$style.item">
                <slot name="production-item">
                    <div
                        :class="$style.selectable"
                        data-type="production"
                        :data-resource="name"
                    >
                        <Production
                            :name="name"
                        />
                    </div>
                </slot>
            </div>

            <div :class="$style.item">
                <slot name="icon-item">
                    <Icon
                        v-bind="icon"
                    />
                </slot>
            </div>

            <div :class="$style.item">
                <div
                    :class="$style.selectable"
                    data-type="state"
                    :data-resource="name"
                >
                    <Counter :id="state"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Counter from "./Counter";
import Icon from "./Icon";
import Production from "./Production";

export default {
    components: {
        Counter,
        Icon,
        Production,
    },
    computed: {
        state() {
            return `state_${this.name}`;
        },
    },
    props: {
        name: String,
        icon: Object,
    },
}
</script>

<style lang="scss" module>

.root {
    flex-basis: 14.28571428571428%;
}

.container {
    align-content: center;
    display: flex;
    align-items: center;
    flex-direction: row;
    height: 100%;

    @media (orientation: landscape) {
        flex-direction: column;
    }
}

.item {
    flex-basis: 33.333333%;
    height: 100%;
    width: 100%;
}

.selectable {
    align-items: center;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    height: 100%;
    padding: 6px;
}

:global .resource--selectable__outline {
    border-color: #ffffff !important;
    border-radius: 10px;
    box-shadow: inset 0 0 25px #ffffff;
}

</style>
