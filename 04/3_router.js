var router = new VueRouter({
    routes: [
        { path: "/", component: Index },
        { path: "/details", component: Details },
        { path: "/products", component: Products },
        { path: "/*", component: Notfound },
    ]
})

