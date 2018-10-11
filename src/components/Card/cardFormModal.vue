<template>
  <div class="modal-open">
    <div class="modal-backdrop fade show"></div>
    <div class="modal fade show d-block" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title"><i class="fa fa-file-alt"></i> Edit card</h4>
            <button type="button" class="close">
              <span>&times;</span>
              <span class="sr-only">Close</span>
              </button>
          </div>
          <div class="modal-body">
            <strong>Deck: </strong>
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
            <!-- <div class="dropdown">
              <span class="deckName">Deck1</span>
            </div> -->
            <hr />
            <div class="disclaimer">
              <div>
                <strong>This card is a duplicity</strong><br/>
                <strong>Deck:</strong> <span>test</span><br/>
                <strong>Front:</strong> <span>test</span><br/>
                <strong>Back:</strong> <span>test</span><br/>
              </div>
              <div>
                <span class="mr-2">Delete and move to current deck</span> 
                <button class="btn btn-secondary btn-sm">Move</button>
                <span class="mx-2">or delete original card</span>
                <button class="btn btn-secondary btn-sm">Delete</button>
              </div>
            </div>
            <div class="form-group">
              <label class="control-label">Front</label>
              <textarea class="form-control" tabindex="1"></textarea>
            </div>
            <div class="form-group">
              <label class="control-label">Back</label>
              <textarea class="form-control" tabindex="2"></textarea>
            </div>
            <div class="form-group">
              <label class="control-label">Tags</label>
              <input type="text" class="form-control" tabindex="3">
            </div>
            <div class="modal-footer d-flex justify-content-between">
              <div>
                <button type="button" class="btn btn-secondary mr-2" title="Switch card sides">
                  <i class="fa fa-exchange-alt"></i>
                </button>
                <a href="./browser.html" target="_blank" role="button" class="btn btn-outline-secondary" title="Browse deck">
                  <i class="fa fa-globe-americas"></i>
                </a>
              </div>
              <div>
                <button type="button" class="btn btn-outline-secondary mr-2">Close</button>
                <button type="button" class="btn btn-secondary" tabindex="4">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'cardFormModal',
}
</script>
