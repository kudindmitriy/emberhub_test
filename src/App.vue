<template>
    <div id="app" class="text-center my-4 mx-auto text-blue-700">
        <h2 class="text-center text-black font-extrabold">Emerhub form</h2>
        <PostForm/>
    </div>
</template>

<script>
import PostForm from "./components/Form";

export default {
    name: "app",
    components: {PostForm}
};
</script>

<style>
#app {
    width: 450px;
}

h2 {
    text-shadow: 4px 4px 5px #ccc;
    font-size: 40px !important;
    line-height: 36px !important;
    margin: 0 0 24px !important;
}
</style>
