<template>
  <div :class="['mgi_form']">
    <div :class='["mgi_form-div"]'>
      <label :class='["mgi_form-title"]'>First name:</label>
      <input :class='["mgi_form-control"]' placeholder="First name" :value="initData.last_name"/>
    </div>
    <div :class='["mgi_form-div"]'>
      <label :class='["mgi_form-title"]'>Last name:</label>
      <input :class='["mgi_form-control"]' placeholder="Last name" :value="initData.first_name"/>
    </div>
    <div :class='["mgi_form-div"]'>
      <label :class='["mgi_form-title"]'>Sex:</label>
      <select v-model="chooseSex">
        <template v-for="item in sex">
          <option v-if="item.isActive === initData.sex">{{ item.name }}</option>
          <option v-else>{{ item.name }}</option>
        </template>
      </select>
    </div>
    <div :class='["mgi_form-div"]'>
      <label :class='["mgi_form-title"]'>Age:</label>
      <input :class='["mgi_form-control"]' placeholder="Age" :value="initData.age"/>
    </div>
    <div :class='["mgi_form-div"]'>
      <label :class='["mgi_form-title"]'>Address:</label>
      <input :class='["mgi_form-control"]' placeholder="Address" :value="initData.address"/>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    initData: {
      type: Object
    }
  },
  data() {
    return {
      sex: [
        { "name": "Female", "isActive": 0 },
        { "name": "Male", "isActive": 1 }
      ],
    }
  },
  watch: {
    isShow() {
      if (this.isShow) console.log("Show");
    },
  },
  created() {
    console.log("create");
  }
}
</script>
<style>
  .mgi_form-div{
    background: #cecece;
    padding: 10px;
  }
  label{
    padding: 10px;
    font-weight: bold;
    width: 100px;
    display: inline-block;
  }
  input, select, button{
    padding: 10px;
    margin-top: 5px;
  }
  button{
    background: #3490dc;
    color: #fff;
    border-radius: 5px;
  }
  .mgi_pd-120{
    padding-left: 120px;
  }
</style>
