<template>
    <div id="user">
        asdfalsdjf
        {{ data }}
    </div>
</template>

<script>
export default {
   name:"user" ,
   data () {
       return {
         data:''
       }
   },
   mounted() {
       this.axios.get('http://localhost:3000/api/post')
       .then((res)=>{
           console.log(res);
           this.data = res.data;
       })
       .catch((err)=>{
           console.log(err);
       })
   },
}
</script>