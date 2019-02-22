<template>
  <div>
    <slot1>parent</slot1>
    <slot2>parent</slot2>
    <slot2></slot2>
    <slot3>
      <template v-slot:header>parent header</template>
      <template v-slot:default>parent default</template>
      <template v-slot:footer>parent footer</template>
    </slot3>
    <ul>
      <li v-for="item in list" :key="item.id">
        <todo>
            <!-- v-slot 的简写 -->
            <!-- 传参表示，在父组件里使用插槽的值 -->
          <template #todo="user">
              <p>from child:{{user.name}}</p>
              <p>from parent:{{item.name}}</p>
            </template>
        </todo>
      </li>
    </ul>
  </div>
</template>

<script>
import Slot1 from "@/components/SlotDemo/Slot1";
import Slot2 from "@/components/SlotDemo/Slot2";
import Slot3 from "@/components/SlotDemo/Slot3";
import todo from "@/components/SlotDemo/todo";

export default {
  components: {
    Slot1,
    Slot2,
    Slot3,
    todo
  },
  data() {
    return {
      slotprops: {
        header: "hhh",
        main: "666",
        footer: "fff"
      },
      list:[
          {name:'todo1',id:1},
          {name:'todo2',id:2},
          {name:'todo3',id:3},
      ]
    };
  }
};
</script>

<style>
</style>
