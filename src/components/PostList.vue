<template>
    <div v-if="posts.length > 0">
        <h3>Список постов</h3>
        <transition-group name="post-list">
            <post-item 
            @remove="$emit('remove', post)" 
            v-for="post in posts" 
            :key="post.id" 
            :post="post" />
        </transition-group>
    </div>
    
        <h1 v-else class="h1">
            Список постов пуст
        </h1>

</template>

<script>
import PostItem from '@/components/PostItem'
export default {
    components: {
        PostItem
    },

    props: {
        posts: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
.h1{
    text-align: center;
}

.post-list-item{
    display: inline-block;
    margin-right: 10px;
}

.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.4s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}


.post-list-move, /* apply transition to moving elements */
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.3s ease;
}
</style>