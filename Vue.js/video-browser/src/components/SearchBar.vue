<template>
    <div>
        <input @input="onInput" />
        <!-- @input entspricht v-on:input -->
    </div>
</template>

<script>
    export default {
        name: 'SearchBar',
        methods: {
            onInput: function(event){
                this.$emit('termChange', event.target.value);
                // "search term", entered text
            }
        }
    };
</script>

<style scoped>
input {
    width: 75%;
}

div {
    text-align: center;
    margin: 20px;
}

</style>