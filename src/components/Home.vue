<!--
 * @Author: your name
 * @Date: 2021-09-01 16:12:13
 * @LastEditTime: 2021-09-02 10:03:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ssr\src\components\Home.vue
-->
<template>
  <div>
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      title: "home",
    };
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("create");
    setTimeout(() => {
      this.title = "666";
    }, 1000);
  },
  beforeMount() {
    console.log("beforeMount");
  },
  //   mounted() {//在服务端触发不了
  //     console.log("mounted");
  //   },
  //   beforeUpdate() {//在服务端触发不了
  //     console.log("beforeUpdate");
  //   },
  //   updated() {//在服务端触发不了
  //     console.log("updated");
  //   },
  //   beforeDestroy() {//在服务端触发不了
  //     console.log("beforeDestroy");
  //   },
  //   destroy() {//在服务端触发不了
  //     console.log("destroy");
  //   },
};
</script>
<style lang="scss" scoped></style>
