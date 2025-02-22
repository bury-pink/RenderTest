<template>
    <div class="user-view">
        <div class="user">
            <h2>{{ user.username }}</h2>
            <p>{{ user.bio }}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'UserView',
    data() {
        return {
            user: {}
        }
    },
    async created() {
        await axios.get('/user')
        .then((res) => {
            this.user = res.data;
        })
        .catch((error) => {
            console.log(error);
        })
    }
}
</script>