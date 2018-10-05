<template>
  <div id="app">
    <copy-move-modal />
    <router-view>
    </router-view>
  </div>
</template>

<script>
import axios from 'axios'
import DeleteCardModal from './components/deleteCardModal'
import CardFormModal from './components/cardFormModal'
import CopyMoveModal from './components/copyMoveModal'

export default {
  name: 'app',
  components: {
    'delete-card-modal': DeleteCardModal,
    'card-form-modal': CardFormModal,
    'copy-move-modal': CopyMoveModal,
  },
  // data () {
  //   return {
  //     example1: ''
  //   }
  // },
  methods: {
    async getLanguage () {
      try {
        const res = await axios.post(
          'http://localhost:4000/graphql', {
          query: '{ language }'
        })
        console.log(res.data.data)
        this.example1 = res.data.data.language
      } catch (e) {
        console.log('err', e)
      }
    }
  }
}

</script>

<style>
  body {
    background-color: rgb(218, 218, 218);
  } 

  .container {
    background-color: white;
    box-shadow: 0px 0px 40px #888888;
    max-width: 960px;
  }

  .header {
    font-size: 18px;
    line-height: 1;
    background-color: rgb(234, 103, 26, 1);
  }

  .deck:nth-child(2n) {
    background-color: rgb(240, 240, 240);
  }

  a {
    color: grey;
  }

  a:focus {
    outline: 0;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
    color: grey;
  }

  .list {
    list-style: none;
    padding: 0;
  }

  .disclaimer {
    font-size: 14px;
    padding: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 1px solid #eee;
    border-left-color: rgb(220, 53, 69);
    border-left-width: .25rem;
    border-radius: .25rem;
  }

  .glyphicon {
    display: none;
  }

  .has-error .glyphicon {
    display: block;
  }

  .resultsWidth {
    width: 80%;
  }

  /* helpers */
  .pointer {
    cursor: pointer;
  }

</style>
