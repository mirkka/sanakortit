<template>
  <div class="d-flex flex-column deck pt-1">
    <div class="d-flex">
      <div class="col-sm-9 col-xs-7">name test</div>
      <div class="col-sm-1 col-xs-2 text-danger"><strong>1</strong></div>
      <div class="col-sm-1 col-xs-3 text-primary">5</div>
    </div>
    <div class="col-sm-12 col-xs-12 py-3">
      <a href="./study.html" class="btn btn-secondary mr-2" role="button">Study</a>
      <button type="button" class="btn btn-outline-secondary mr-2">Add card</button>
      <button type="button" class="btn btn-outline-secondary mr-2">Edit</button>
      <button type="button" class="btn btn-outline-secondary">Delete</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'deckRow'
  }
</script>
