<template>
    <div :class="$style.root">
        <div :class="$style.container">

            <div :class="$style.item">
                <slot name="production-item">
                    <div
                        :class="$style.counters"
                        :data-production="name"
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
                    :class="$style.counters"
                    :data-state="name"
                >
                    <Counter :id="stateId"/>
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
        stateId() {
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
    border-width: 3px;
    border-style: solid;
    border-color: transparent;
    height: 100%;
    width: 100%;
}

.item__outline {
    border-color: #ffffff !important;
    border-radius: 10px;
    box-shadow: inset 0 0 25px #ffffff;
}

.counters {
    align-items: center;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    height: 100%;
}

</style>
