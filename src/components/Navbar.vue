<template>
    <div :class="$style.root">
        <div :class="$style.container">
            <div
                :class="$style.logo"
            >{{ $label('Resource Tracker') }}</div>
            <Button
                :attributes="{'class': $style.button, 'data-reset':''}"
                label="Reset"
            />
        </div>
    </div>
</template>

<script>
import Button from "./Button";

export default {
    components: {
        Button,
    },
    props: {
        counter: {
            id: String,
        }
    },
}
</script>

<style lang="scss" module>

.root {
    background: linear-gradient(to bottom, #d8782e 0%, #b26127 37%, #88441d 88%, #88441d 100%);
    border-bottom: 1px solid #6d381a;
}

.container {
    padding: 4px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo {
    color: #ffffff;
    flex-grow: 10;
    font-family: Goldman, sans-serif;
    text-shadow: 2px 2px 2px #291202;
    text-transform: uppercase;
}

.button {
    font-size: 14px;
    margin: 3px 3px;
}

</style>
