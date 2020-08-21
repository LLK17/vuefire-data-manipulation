<template>
    <div>
        <input @keyup.enter='populate' v-model='contents' placeholder='Say something'> <p>You've said: {{ contents }}, hit 'Enter' to add!</p>
        
        <li class="values" v-for="item in items" :key='item'>
            {{item}}
            <br>
        </li>

        <button id="delete" v-on:click='eradicate'> Please do not press this we have so much to live for </button>

    </div>
</template>

<script>
export default{
    name: 'inputField', 

    methods: {
        populate: function(){
            this.items.push(this.contents)
        },

        eradicate: function(){
            this.items.pop()
            console.log(this.items)
        },
    },

    data(){
        return{
            contents: "",

            items: [
                
            ],
        }
    },
}

</script>

<style scoped>

</style>