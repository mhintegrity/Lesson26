<template>
    <div id="app">
        <div id="nav">
            <img alt="Active Martial Arts Logo" src="./assets/ActiveLogo.png">
            <router-link to="/">Home</router-link> | 
            <router-link to="/about">About</router-link>
        </div>
        <router-view/>
    </div>
</template>

<style scoped>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-color:grey;
}
#nav {
    padding: 30px;
    box-sizing: border-box;
    display: flex;
    align-self: auto;
    flex-direction: row;
    align-items: center;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>
