<template>
  <div>
    <div class="d-flex flex-column study-card">
      <textarea class="h1 text-center flex-grow-1 border-0 my-4 shadow-sm"
                disabled
                v-model="studyCard.front"/>
      <textarea class="h1 text-center flex-grow-1 border-0 shadow-sm"
                disabled
                v-if="showAnswer"
                v-model="studyCard.back"/>
    </div>
    <div class="mt-3">
      <div class="d-flex justify-content-between">
        <span><strong>Due: {{activeDeck.due}}</strong></span>
        <span>{{activeDeck.name}}</span>
      </div>

      <div class="d-flex justify-content-center position-relative pt-3 pb-4">
        <button type="button"
                class="btn btn-outline-secondary position-absolute"
                style="left: 0"
                @click="handleEditCard(studyCard)">
          <i class="fa fa-pencil-alt"></i>
        </button>
        <div>
          <button type="button"
                  class="btn btn-outline-secondary"
                  @click="toggleShowAnswer"
                  v-if="!showAnswer">Show answer</button>
          <div v-if="showAnswer">
            <button type="button"
                    class="btn btn-outline-secondary mr-4"
                    @click="handleUpdateStudyCard('again')">
              <i class="fa fa-sync-alt"></i>
              Again
            </button>
            <button type="button"
                    class="btn btn-outline-secondary"
                    @click="handleUpdateStudyCard('good')">
              <i class="fa fa-check text-success"></i>
              <span>{{getActionButtonText(studyCard)}}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getDeck, updateStudyCard, getStudyCard, toggleModal, setActiveCard, setActiveDeck } from '../methods'
import defaults from '../graphql/defaults';
import{ GET_STUDY_CARD, EDIT_CARD_SUBSCRIPTION } from  '../graphql/queries'

export default {
  name: 'study',
  data () {
    return {
      activeDeck: {},
      showAnswer: false,
      studyCard: {},
    }
  },
  apollo: {
    studyCard: {
      query: GET_STUDY_CARD,
      variables () {
        return {
          id: this.$route.params.deckId,
        }
      },
      subscribeToMore: [{
        document: EDIT_CARD_SUBSCRIPTION,
        variables () {
          return {
            id: this.$route.params.deckId,
          }
        },
        updateQuery: ({ studyCard }, { subscriptionData }) => {
          const { __typename, deckId,  level } = studyCard
          return {
            studyCard: {
              __typename,
              deckId,
              level,
              ...subscriptionData.data.onUpdateCard
            }
          }
        }
      }],
      fetchPolicy: 'no-cache'
    },
  },
  methods: {
    toggleModal,
    setActiveCard,
    getStudyCard,
    toggleShowAnswer: function () {
      this.showAnswer = !this.showAnswer;
    },
    getActionButtonText: studyCard => {
      var hour = 1000 * 60 * 60
      var day = hour * 24
      const levelWeights = [
          1000 * 60 * 10,
          1000 * 60 * 10,
          day,
          day * 3,
          day * 4,
          day * 7
      ];
      if (studyCard.level < 2) {
          return `Good (+${levelWeights[studyCard.level] / 1000 / 60}m)`
      } else {
          return `Good (+${levelWeights[studyCard.level] / 1000 / 60 / 60 / 24 }d)`
      }
    },
    handleUpdateStudyCard: async function (action) {
      const deckId = this.$route.params.deckId
      const cardInput = {
        action,
        id: this.studyCard.id,
        level: this.studyCard.level,
        deckId: this.studyCard.deckId
      }
      await updateStudyCard(cardInput)
      const newCard = await getStudyCard(deckId)
      if(!newCard.data.studyCard) {
        toggleModal('finishStudy')
        return;
      }
      const deck  = await getDeck(deckId)
      this.studyCard = { ...newCard.data.studyCard }
      this.activeDeck = { ...deck.data.getDeck }
    },
    handleEditCard: async studyCard => {
      await setActiveCard(studyCard)
      toggleModal('createCard')
    }
  },
  async created() {
    const deck = await getDeck(this.$route.params.deckId)
    await setActiveDeck(deck.data.getDeck)
    this.activeDeck = deck.data.getDeck
  },
  async destroyed() {
    await setActiveCard(defaults.ActiveCard)
  }
}
</script>
