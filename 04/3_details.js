var Details = {
    template: `<div style="background-color:#FF7F27 ">
    <h1>这是商品编号为{{lid}}的详情页</h1>
    <button @click="back">返回首页</button>
    </div>`,
    props: ["lid"],
    methods: {
        back() {
            this.$router.push("/");
            //this.$router.back();
        }
    }
}