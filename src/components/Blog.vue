<template>
  <div class="Blog">
    <input type="text" class="Blog-search" v-model="blogSearch"/>
      <div class="Blog-Box">
        <div>{{blogsLen}}</div>
        <!-- <select>
          <option :v-for="showItemNum in showItemNums">{{ showItemNum.num }}</option>
        </select> -->

        <div class="Blog-Item" v-for="blog in filterBlogs" :key="blog.id"> 
            <div class="Blog-Item-title">{{ blog.id }}  |  {{ blog.title | to-uppercase }}</div>
            <div class="Blog-Item-content">{{ blog.body | snippet}}</div>
        </div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'Blog',
  data () {
    return {
      blogs:[],
      blogSearch:"",
      blogsLen:"",
todos: [
      { id: 1, },
      { id: 2, },
      { id: 3, }
    ],
      showItemSelect:"20"
    }
  },
  props: {
    msg: String
  },
  created() {
    // fetch("http://jsonplaceholder.typicode.com/posts")
    //   .then(json=>console.log(json))
    this.axios.get("http://jsonplaceholder.typicode.com/posts")
    .then((data)=>{
      this.blogs = data.data.slice(0,this.showItemSelect)
      this.blogsLen = data.data.length
      console.log(this.blogs)
    })
  },
  computed: {
    filterBlogs: function() {
      return this.blogs.filter((blog)=>{
        return blog.title.match(this.blogSearch)
      })
    } 
  },
  // methods: {
  //   showItemNumFun: ()=> {
  //     this.$nextTick(()=>{
  //       this.showItemSelect = "100" 
  //     })
  //   }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.Blog{
  overflow: hidden;
}
.Blog-Item{
  width:80vw;
  margin: auto;
  height:auto;
  overflow-y:scroll;
  margin-bottom:20px;
  border-bottom: 1px solid #ccc;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
