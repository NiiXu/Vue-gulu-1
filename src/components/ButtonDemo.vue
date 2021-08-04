<template>
    <div>Button 示例</div>
    <h1>示例1</h1>
    <div>
        <button>你好</button>
        <button theme="button">你好</button>
        <button theme="link">你好</button>
        <button theme="text">你好</button>
    </div>
</template>
<script lang="ts">
import Button from "../lib/Button.vue";
export default {
    components:{ Button },
    setup() {
        const onClick = () =>{
            console.log("hi");
            
        }
        return{onClick}
    }
}
</script>