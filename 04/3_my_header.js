Vue.component("my-header",{
    template:`<div>
    <h1>这里是页头</h1>
    <ul>
    <li><router-link to="/">首页</router-link></li>
    <li><router-link to="details">商品详情页</router-link></li>
    <li><router-link to="products">商品列表页</router-link></li>
    </ul>
    </div>`
})