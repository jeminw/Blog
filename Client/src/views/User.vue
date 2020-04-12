<template>
    <div id="user">
        </div>
</template>

<script>
export default {
   name:"user" ,
   data () {
       return {

       }
   },
   mounted() {
       this.axios.get('http://localhost:3000/api/post').then((data)=>{
           console.log(data);
       })
   },
}
</script>