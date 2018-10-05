<template>
  <div class="modal-open">
    <div class="modal-backdrop fade show"></div>
      <div class="modal fade show d-block" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">
              <i class="fa fa-file-alt"></i> Copy / Move card(s)
            </h4>
            <button type="button" class="close">
              <span>&times;</span>
              <span class="sr-only">Close</span>
            </button>            
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-4 col-xs-12">
                <h4 class="modal-title">To existing deck</h4>
                <div class="dropdown">
                  <button class="btn btn-secondary dropdown-toggle" type="button">
                    Dropdown button
                  </button>
                  <div class="dropdown-menu">
                    <div class="dropdown-item">Action</div>
                    <div class="dropdown-item">Another action</div>
                    <div class="dropdown-item">Something else here</div>
                  </div>
                </div>
              </div>

              <div class="col-sm-2 col-xs-12 or">
                  <h4 class="modal-title">or</h4>
              </div>

              <div class="form-group col-sm-6 col-xs-12">
                <h4 class="modal-title">To new deck</h4>
                <input type="text" class="form-control">
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary">Discard</button>
            <button type="button" class="btn btn-secondary">Copy</button>
            <strong> or </strong>
            <button type="button" class="btn btn-secondary">Move</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'copyMoveModal',
}
</script>