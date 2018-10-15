<template>
  <div class="container mt-3 mb-3">
    <finish-study-modal v-if="false"/>
    <navigation />
    <div class="d-flex flex-column study-card">
      <textarea class="h1 text-center flex-grow-1 border-0 my-4 shadow-sm" disabled>front</textarea>
      <textarea class="h1 text-center flex-grow-1 border-0 shadow-sm" disabled>back</textarea>
    </div>
    <div class="mt-3">
      <div class="d-flex justify-content-between">
        <span><strong>Due: 1</strong></span>
        <span>deck1</span>
      </div>

      <div class="d-flex justify-content-center position-relative pt-3 pb-4">
        <button type="button" class="btn btn-outline-secondary position-absolute" style="left: 0">
          <i class="fa fa-pencil-alt"></i>
        </button>
        <div>
          <button type="button" class="btn btn-outline-secondary" v-if="false">Show answer</button>
          <div v-if="true">
            <button type="button" class="btn btn-outline-secondary mr-4">
              <i class="fa fa-sync-alt"></i>
              Again
            </button>
            <button type="button" class="btn btn-outline-secondary">
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
import Navigation from '../components/nav.vue'
import FinishStudyModal from '../components/finishStudyModal.vue'

export default {
  name: 'study',
  components: {
    'navigation': Navigation,
    'finish-study-modal': FinishStudyModal
  },
}
</script>
