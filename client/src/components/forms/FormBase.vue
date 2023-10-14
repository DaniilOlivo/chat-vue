<template>
    <form>
        <input type="text" placeholder="Логин" v-model="user.username">
        <input type="password" placeholder="Пароль" v-model="user.password">
        <p class="warning" v-show="warning">{{ warning }}</p>
        <button @click.prevent="submit">{{ titleBtn }}</button>
    </form>
</template>

<script>
export default {
    name: "FormBase",
    props: {
        titleBtn: String,
        url: String
    },
    data() {
        return {
            user: {
                username: "",
                password: "",
            },
            warning: "",
        }
    },
    methods: {
        async submit() {
            if (!this.user.username) {
                this.warning = "Не заполнен логин"
                return
            }
            if (!this.user.password) {
                this.warning = "Не заполнен пароль"
                return
            }

            let response = await fetch(this.url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(this.user)
            });

            if (response.ok) {
                this.$emit("closeForm", this.user)
            }
            else {
                this.warning = "Упс! Что-то пошло не так!"
            }
        }
    }
}
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    gap: 2em;
    min-width: 300px;
}
.warning {
    color: brown;
}

input {
    border-radius: 10px;
    padding: 10px 20px;
    min-width: 200px;
    border: none;
}

button {
    background-color: chocolate;
    padding: 10px 20px;
    border-radius: 5px;
    color: white;
    border: none;
}
</style>
