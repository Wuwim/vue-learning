var Index = {
    template: `<div style="background-color: aquamarine">
    <h1>这是首页... ...</h1>
    <button @click="goDetail_1">查看商品1的详情</button>
    <router-link to="/details/2">查看商品2的详情</router-link>
    </div>`,
    methods:{
        goDetail_1(){
            this.$router.push("/details/1");
        }
    }
}