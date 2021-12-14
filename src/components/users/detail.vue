  <template>
    <div :class="['mgi_form']">
      <div :class='["mgi_form-div"]'>
        <label :class='["mgi_form-title"]'>First name:</label>
        <span>{{initData.first_name}}</span>
      </div>
      <div :class='["mgi_form-div"]'>
        <label :class='["mgi_form-title"]'>Last name:</label>
        <span>{{ initData.last_name }}</span>
      </div>
      <div :class='["mgi_form-div"]'>
        <label :class='["mgi_form-title"]'>Sex:</label>
        <span v-for="item in sex">
        <span v-if="item.isActive === initData.sex">{{ item.name }}</span>
        </span>
      </div>
      <div :class='["mgi_form-div"]'>
        <label :class='["mgi_form-title"]'>Age:</label>
        <span>{{ initData.age }}</span>
      </div>
      <div :class='["mgi_form-div"]'>
        <label :class='["mgi_form-title"]'>Address:</label>
        <span>{{ initData.address }}</span>
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
      ]
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
