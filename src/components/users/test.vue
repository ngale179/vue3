<template>
  <transition name="modal" role="dialog">
    <div class="modal" style="display: block">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Edit Contact</h5>
          </div>
          <div class="modal-body">
            <p>{{euser}}</p>
            <p>{{euser.id}}</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" @click="closeModal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>

export default {
  name: 'editUserTest',
  props: {
    euser: {
      type: Object,
    },
    showEdit: {
      'default' : false,
    }
  },
  data() {
    console.log("sfkhsfjhsjfhs");
    console.log(edit_user);
    return {
      edit_user: [],
    };
  },
  methods: {
    closeModal(){
      this.$emit('update:showEdit');
    },
  },
};
</script>
