<template>
  <div class="modal-open">
    <div class="modal-backdrop fade show"></div>
    <div class="modal fade show d-block" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Create new deck</h4>
            <button type="button" class="close">
              <span>&times;</span>
              <span class="sr-only">Close</span>
            </button>
          </div>

          <div class="modal-body p-3">
            <div class="form-group">
              <label class="control-label">Name:</label>
              <input type="text" class="form-control" id="deck-name">
            </div>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal" id="new">Save</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>

export default {
  name: 'newDeckModal',
}
</script>