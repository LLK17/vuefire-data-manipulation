<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <inputField></inputField>
    <!-- <liveUpdater></liveUpdater> -->
    <form @submit.prevent="updateFirebase">
            <input type="text" name="title" placeholder="Give me a title" v-model="formData.title">
            <input type="text" name="content" placeholder="Whaddya wanna say?" v-model="formData.content">
            <input type="text" name="signature" placeholder="What's your name?" v-model="formData.name">
            <button type="submit" v-on:click="getData">Add it up</button>
    </form>
    <h3>Hall of Fame</h3>

    <div id="grid">
      <div id="db-item" v-for="(dbData) in firebaseData" :key='dbData.id'>
        {{dbData.title}}
        <br>
        <span class="strong">{{dbData.content}}</span>
        <br>
        By: {{dbData.name}}
        <br>
        <button v-on:click="deleteItem(dbData.id)">Erase History</button>
        <br>
      </div>
    </div>

  </div>
</template>

<script>
import { db } from './db'
import inputField from './components/inputField.vue'
// import liveUpdater from './components/liveUpdater.vue'

export default {
  name: 'App',
  components: {
    'inputField':inputField,
    // 'liveUpdater':liveUpdater,
  },

  data(){
    return{
      firebaseData: null,
      formData: {},
      state: 'loading',
      // dbDocs: [

      // ],
    }
  },

  firestore(){
    return{
      firebaseData: db.collection('contents'),
    }
  },

  methods: {

    getData(){
      db.collection('contents').onSnapshot(this.dbDoc.push)
      
    },

    async updateFirebase() {
      try{
        await db.collection('contents').add({
          title: this.formData.title,
          content: this.formData.content,
          name: this.formData.name,
          })
        this.state = 'synced'
      } catch(error){
        this.errorMessage = JSON.stringify(error)
        this.state = 'error'
      }
    },

    async deleteItem(id) {
      db.collection('contents').doc(id).delete().then(function(){
        console.log("He's")
      }).catch(function(error){
        console.error("Error removing document:", error)
      })
    },

  },
}
</script>

<style>
inputField{
  height: 15em;
  width: 20em;
}

#grid{
  display: grid;
  grid-template-columns: auto auto auto;
}

#db-item{
  border: 1px solid #35495e;
  align-content: center;
}

.values{
  width: 23em;
  height: 8em;
  outline: 1px solid black;
  margin: 1em;
}

.strong{
  font-weight: 700;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
