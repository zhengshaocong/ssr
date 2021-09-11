//创建获取vue实例 并通过promise返回
import createApp from "./app";

export default (context) => {
  return new Promise((resolve, reject) => {
    const { app, router } = createApp();
    router.push(context.url);
    router.onReady(() => {
      resolve(app);
    }, reject);
  });
};
