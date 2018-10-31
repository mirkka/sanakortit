<template>
  <div class="modal-open">
    <div class="modal-backdrop fade show"></div>
    <div class="modal fade show d-block" tabindex="-1" role="dialog" @click="toggleModal('exportDeck')">
      <div class="modal-dialog modal-lg" @click="$event.stopPropagation()">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title"><i class="fa fa-file-alt"></i> Export / Import deck</h4>
            <button type="button" class="close" @click="toggleModal('exportDeck')">
              <span>&times;</span>
              <span class="sr-only">Close</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-6">
                <h4 class="modal-title">Export</h4>
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

              <form class="col-sm-6" action="">
                <h4 class="modal-title">Import</h4>
                <input type="file">
                <p class="text-danger warningMessage"><strong>Invalid deck file!</strong></p>
              </form>
            </div>
          </div>
            <div class="p-3 d-flex">
              <div class="col-sm-6">
                <button type="button" class="btn btn-secondary btn-sm">Export</button>
              </div>
              <div class="col-sm-4">
                <button type="button" class="btn btn-secondary btn-sm">Import</button>
              </div>
              <div class="col-sm-2">
                <button type="button" class="btn btn-outline-secondary btn-sm" @click="toggleModal('exportDeck')">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { toggleModal } from '../../methods.js'

export default {
  name: 'exportDeckModal',
  methods: { toggleModal }
}
</script>
