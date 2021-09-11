const express = require("express");
const Vue = require("vue");
// 创建express
const app = express();
// 创建渲染器
const renderer = require("vue-server-renderer").createRenderer();
const page = new Vue({
  template: "<div>hello,vue ssr</div>",
  //   render: (h) => h(App),
});

app.get("/", async (req, res) => {
  try {
    const html = await renderer.renderToString(page);
    res.send(html);
  } catch (error) {
    res.status(500).send("服务器内部错误");
  }
});

app.listen(3000, () => {
  console.log("启动成功");
});
