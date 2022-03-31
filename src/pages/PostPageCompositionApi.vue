<template>
  <div>
    <h1>Страница с постами</h1>
    <!-- <my-input v-model="searchQuery" placeholder="Поиск..."/>

<div class="app__btns">
    <my-button @click="showDialog">Создать пост</my-button>
    <my-select :options="sortOptions" v-model="selectedSort"></my-select>
</div>
<my-dialog v-model:show="dialogVisible">  
  <post-form @create="createPost" />
</my-dialog>


<post-list @remove="removePost" :posts="sortedAndSearchedPosts" v-if="!isPostLoading" />
<div v-else>Идет загрузка...</div>
<div v-intersection="loadMorePosts" class="observer"></div> -->

  </div>
</template>

<script>
import PostForm from '@/components/PostForm'
import PostList from '@/components/PostList'
import MyButton from '@/components/UI/MyButton'
import axios from 'axios'
import MySelect from '@/components/UI/MySelect'
import MyInput from '@/components/UI/MyInput'
import {ref} from 'vue'
import usePosts from '@/hooks/usePosts'
import useSortedPosts from '@/hooks/useSortedPosts'
import useSortedAndSearchedPosts from '@/hooks/useSortedAndSearchedPosts'
export default {
  
  components: {
    PostForm,
    PostList,
    MyButton,
    MySelect,
    MyInput
  }, 

  data() {
    return{
      dialogVisible: false,
      sortOptions: [
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По описанию'},
      ]
    }
  },

  setup(props) {
    const {posts, totalPages, isPostLoading} = usePosts(10)
    const {sortedPosts, selectedSort} = useSortedPosts(posts)
    const {seatchQuery, sortedAndSearchedPosts} = useSortedAndSearchedPosts(sortedPosts)
      return{ 
        posts, totalPages, isPostLoading,
        sortedPosts, selectedSort,
        seatchQuery, sortedAndSearchedPosts
      }
      }
}

</script>

<style>
.app__btns{
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
}


.page__wrapper{
  display: flex;
  margin-top: 15px;
  text-align: center;
  justify-content: center;
}

.page{
  border: 1px solid black;
  padding: 10px;
  margin-right: 3px;
  cursor: pointer;
}

.current-page{
  border: 2px solid teal;
}

.observer{
  height: 30px;
  background: green;
}
</style>
