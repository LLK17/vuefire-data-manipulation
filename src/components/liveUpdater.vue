<template>
    <div>
        <form>
            <input type="text" name="content" placeholder="Whaddya wanna say?">
            <input type="text" name="signature" placeholder="What's your name?">
            <button type="submit">Add it up</button>
        </form>
        <h3>Hall of Fame</h3>

        <button>Erase History</button>

    </div>
</template>

<script>
    // import { db } from '../db'
    export default{
        name: 'liveUpdater',

        data(){
            return{
                formData: {}
            }
        },
    }
</script>


<style scoped>

</style>