// 导入koa，和koa 1.x不同，在koa2中，我们导入的一个class，因此用答谢的Koa表示
const Koa = require('koa');

// 引入koa-bodyparser，来解析原始request请求，然后把解析后的参数，绑定到ctx.request.body中
const bodyParser = require("koa-bodyparser");

const controller = require('./controller');

// 创建一个Koa对象表示web app本身
const app = new Koa();

// 对于任何请求，app将调用该异步函数处理请求
app.use(async (ctx, next) =>{
    // console.log(`Process ${ctx.require.method} ${ctx.request.url}...`);
    await next();
    // ctx.response.type = 'text/html';
    // ctx.response.body = '<h1>Hello, koa2!</h1>';
})

app.use(bodyParser())

// add controllers:
app.use(controller());

// 在端口3000监听
app.listen(3000);
console.log('app started at port 3000')
