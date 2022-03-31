<template>
<div class="navbar">
    <div @click="$router.push('/')">Vue 3</div>
        <div class="nav__btns">
            <my-button @click="$router.push('/posts')">Посты</my-button>
            <my-button @click="$router.push('/about')" style="margin-left: 20px">О сайте</my-button>
            <my-button @click="$router.push('/composition')" style="margin-left: 20px">Composition</my-button>
        </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.navbar{
    height: 50px;
    display: flex;
    background: lightgrey;
    box-shadow: 2px 2px 4px grey;
    align-items: center;
    padding: 0 15px;
}

.nav__btns{
    margin-left: auto;
}
</style>