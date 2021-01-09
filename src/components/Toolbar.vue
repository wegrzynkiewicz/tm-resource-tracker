<template>
    <div :class="$style.root">
        <div :class="$style.container">
            <div :class="$style.groups">
                <div :class="[$style.buttons, $style.buttons__plus]">
                    <Button
                        :attributes="{...modifierButtonAttributes, 'data-change': 1}"
                        id="modifier-plus-one"
                        label="+1"
                    />
                    <Button
                        :attributes="{...modifierButtonAttributes, 'data-change': 5}"
                        id="modifier-plus-five"
                        label="+5"
                    />
                    <Button
                        :attributes="{...modifierButtonAttributes, 'data-change': 10}"
                        id="modifier-plus-ten"
                        label="+10"
                    />
                </div>
                <div :class="[$style.buttons, $style.buttons__minu]">
                    <Button
                        :attributes="{...modifierButtonAttributes, 'data-change': -1}"
                        id="modifier-minus-one"
                        label="-1"
                    />
                    <Button
                        :attributes="{...modifierButtonAttributes, 'data-change': -5}"
                        id="modifier-minus-five"
                        label="-5"
                    />
                    <Button
                        :attributes="{...modifierButtonAttributes, 'data-change': -10}"
                        id="modifier-minus-ten"
                        label="-10"
                    />
                </div>
            </div>
            <div :class="[$style.buttons, $style.buttons__center]">
                <Button
                    :attributes="{class: [$styles['number__toolbar-button']], 'data-produce': ''}"
                    label="Produce"
                />
            </div>
        </div>
    </div>
</template>

<script>
import Button from "./Button";

export default {
    components: {
        Button,
    },
    computed: {
        modifierButtonAttributes() {
            return {
                disabled: 'disabled',
                class: [
                    this.$styles['number__toolbar-button'],
                    this.$styles['number__toolbar-button-modifier'],
                ],
            };
        },
    },
}
</script>

<style lang="scss" module>

.root {
    background: linear-gradient(to bottom, #d8782e 0%, #b26127 37%, #88441d 88%, #88441d 100%);
    border-top: 1px solid #ff9440;
    width: 100%;
}

.container {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 10px;

    @media (orientation: landscape) {
        justify-content: center;
    }
}

.groups {
    display: flex;

    @media (orientation: portrait) {
        flex-direction: column;
    }

    @media (orientation: landscape) {
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
    }
}

.buttons {

    @media (orientation: landscape) {
        &__center {
            position: absolute;
        }
        &__minus {
            order: 2
        }
        &__plus {
            order: 1
        }
    }
}

</style>
