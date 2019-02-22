<template>
<div>
  <slot name="todo" v-bind="user">
    child name
  </slot>
</div>
</template>

<script>
export default {
  data(){
    return{
      user:{
        name:'child'
      }
    }
  }
};
</script>

<style lang="scss" scoped>
    header{
        color:red;
    }
</style>
