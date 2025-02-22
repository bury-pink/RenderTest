<template>
    <div class="header">
        <nav class="navbar">
            <router-link class="nav-link" :to="'/'">My Site</router-link>
            <router-link class="nav-link" :to="'/about'">About</router-link>
            <router-link class="nav-link" :to="'/user'">User</router-link>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style>
.header {
    width: 100%;
    margin: 0px;
    background-color: #6500c4;
    height: 50px;
}

.navbar {
    display: flex;
    margin: 0px;
    padding: 0px;
    width: 100%;
}

.nav-link {
    flex: 1;
    padding: auto;
    width: auto;
    color: #ffffff;
    font-size: 24px;
    font-weight: bold;
    padding-top: 10px;
}
</style>