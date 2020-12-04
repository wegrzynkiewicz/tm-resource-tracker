<template>
    <div :class="$style.root">
        <div :class="$style.wrapper">
            <div :class="$style.container">
                <component
                    v-for="{component, icon, name, position} of resources"
                    v-bind:is="component"
                    :key="position"
                    :name="name"
                    :icon="icon"
                />
            </div>
        </div>
    </div>
</template>

<script>
import energy from "../images/energy.sprite.svg";
import gold from "../images/gold.sprite.svg";
import heat from "../images/heat.sprite.svg";
import plant from "../images/plant.sprite.svg";
import points from "../images/points.sprite.svg";
import steel from "../images/steel.sprite.svg";
import titan from "../images/titan.sprite.svg";
import BasicResource from "./resources/BasicResource";
import PointsResource from "./resources/PointsResource";

export default {
    data() {
        return {
            resources: [
                {
                    name: 'points',
                    position: 0,
                    component: PointsResource,
                    icon: {
                        url: points.url,
                        sources: [],
                        width: 64,
                        height: 64,
                    }
                },
                {
                    name: 'gold',
                    position: 1,
                    component: BasicResource,
                    icon: {
                        url: gold.url,
                        sources: [],
                        width: 64,
                        height: 64,
                    },
                },
                {
                    name: 'steel',
                    position: 2,
                    component: BasicResource,
                    icon: {
                        url: steel.url,
                        sources: [],
                        width: 64,
                        height: 64,
                    },
                },
                {
                    name: 'titan',
                    position: 3,
                    component: BasicResource,
                    icon: {
                        url: titan.url,
                        sources: [],
                        width: 64,
                        height: 64,
                    },
                },
                {
                    name: 'plant',
                    position: 4,
                    component: BasicResource,
                    icon: {
                        url: plant.url,
                        sources: [],
                        width: 64,
                        height: 64,
                    },
                },
                {
                    name: 'energy',
                    position: 5,
                    component: BasicResource,
                    icon: {
                        url: energy.url,
                        sources: [],
                        width: 64,
                        height: 64,
                    },
                },
                {
                    name: 'heat',
                    position: 6,
                    component: BasicResource,
                    icon: {
                        url: heat.url,
                        sources: [],
                        width: 64,
                        height: 64,
                    },
                },
            ],
        };
    },
}
</script>

<style lang="scss" module>

.root {
    background-position: center center;
    background-size: cover;
    height: 100%;

    @media (orientation: portrait) {
        :global(.webp) & {
            background-image: url('../images/bg-portrait.conv.jpg?webp');
        }
        background-image: url('../images/bg-portrait.conv.jpg');
    }

    @media (orientation: landscape) {
        :global(.webp) & {
            background-image: url('../images/bg-landscape.conv.jpg?webp');
        }
        background-image: url('../images/bg-landscape.conv.jpg');
    }
}

.wrapper {
    background-color: rgb(255 149 30 / 44%);
    height: 100%;
    padding: 10px;
}

.container {
    display: flex;
    height: 100%;

    @media (orientation: portrait) {
        flex-direction: column;
    }

    @media (orientation: landscape) {
        flex-direction: row;
        justify-content: space-evenly;
    }
}

</style>
