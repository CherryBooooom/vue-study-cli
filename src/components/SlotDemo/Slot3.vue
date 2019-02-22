<template>
<div>
  <header>
    <slot name="header">child header</slot>
  </header>
  <main>
    <slot>child main</slot>
  </main>
  <footer>
    <slot name="footer">child footer</slot>
  </footer>
</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
    header{
        color:red;
    }
</style>
