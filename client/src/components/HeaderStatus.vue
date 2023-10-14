<template>
    <header>
        <h2 class="title username" v-if="user">{{ user.username }}</h2>
        <div class="auth-block" v-else>
            <h3 class="title warning" @click="login">Войти</h3>
            <h3 class="title warning" @click="register">Регистрация</h3>
        </div>
        <h3 class="title warning" v-if="user" @click="exit">Выйти</h3>
    </header>
</template>

<script>
export default {
    name: "HeaderStatus",
    props: {
        user: Object
    },
    methods: {
        register() {
            this.$emit("clickRegister")
        },
        login() {
            this.$emit("clickLogin")
        },
        async exit() {
            let response = await fetch("/auth/logout", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(this.user)
            })

            if (!response.ok) console.log("Возникли ошибки при выходе")
            this.$emit("exitAccount")
        }
    }
}
</script>


<style scoped>
header {
    background-color: chocolate;
    height: 50px;
    padding-left: 50px;
    padding-right: 50px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.title {
    font-family: Georgia, 'Times New Roman', Times, serif;
    letter-spacing: 2px;
    transition: 200ms;
}

.auth-block {
    display: flex;
    gap: 20px;
}
.warning {
    cursor: pointer;
}

.warning:hover {
    text-decoration: underline;
    color: bisque;
}
</style>
