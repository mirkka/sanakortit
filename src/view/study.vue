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
        <button type="button" class="btn btn-outline-secondary position-absolute" style="left: 0">
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
              Good
              (+<span>10 minutes</span>)
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getStudyCard, getDeck, updateStudyCard } from '../methods'

export default {
  name: 'study',
  data () {
    return {
      activeDeck: {},
      showAnswer: false,
      studyCard: {}
    }
  },
  methods: {
    toggleShowAnswer: function () {
      this.showAnswer = !this.showAnswer;
    },
    handleUpdateStudyCard: async function (action) {
      const cardInput = {
        action,
        id: this.studyCard.id,
        level: this.studyCard.level,
        deckId: this.studyCard.deckId
      }
      await updateStudyCard(cardInput)
      const newCard = await getStudyCard(this.$route.params.deckId)
      this.studyCard = newCard.data.studyCard
    }
  },
  async created() {
    const [card,deck] = await Promise.all([
      getStudyCard(this.$route.params.deckId),
      getDeck(this.$route.params.deckId)
    ])
    this.studyCard = card.data.studyCard
    this.activeDeck = deck.data.getDeck
  },
}
</script>
