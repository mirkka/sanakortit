<template>
  <div class="modal-open">
    <div class="modal-backdrop fade show"></div>
    <div class="modal fade show d-block" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Options</h4>
            <button type="button" class="close">
              <span>&times;</span>
              <span class="sr-only">Close</span>
            </button>
          </div>

          <div class="modal-body">
            <div class="form-group">
              <label class="control-label">Rename:</label>
              <input type="text" class="form-control">
            </div>
            <div class="form-group">
              <label class="control-label">Flip all cards:</label>
              <div>
                <button type="button" class="btn btn-secondary">
                  <i class="fa fa-exchange-alt"></i>
                </button>
              </div>
            </div>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary">Discard</button>
            <button type="button" class="btn btn-secondary">Save</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>

export default {
  name: 'editDeckModal',
}
</script>