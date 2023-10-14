<template>
    <div class="bg" @click="close($event)" v-show="show">
        <div class="window">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "ModalWindow",
    props: {
        show: Boolean
    },
    methods: {
        close(event) {
            if (event.target === event.currentTarget) {
                this.$emit("closeModal")
            }
        }
    }
}
</script>

<style scoped>
.bg {
    background-color: rgba(20, 20, 20, 0.7);
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.window {
    background-color: white;
    border-radius: 10px;
    padding: 40px 20px;
}
</style>
