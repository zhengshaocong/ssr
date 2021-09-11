//挂载激活 服务器返回的vue
import createApp from "./app";
const { app, router } = createApp();
router.onReady(() => {
  app.$mount("#app");
});
