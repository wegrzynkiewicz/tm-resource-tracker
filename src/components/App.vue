<template>
    <div :class="$style.root">
        <Navbar/>
        <Resources/>
        <Toolbar/>
    </div>
</template>

<script>
import Navbar from "./Navbar";
import Resources from './Resources';
import Toolbar from "./Toolbar";

export default {
    components: {
        Navbar,
        Resources,
        Toolbar,
    },
}
</script>

<style lang="scss" module>

.root {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

</style>
