  <template>
    <div class="mgi_form">
      <div class="mgi_form-div" v-for="item in element">
        <label class="mgi_form-title">{{ item.title }}:</label>
        <span v-if="item.value === 'first_name'">{{ initData.first_name }}</span>
        <span v-else-if="item.value === 'last_name'">{{ initData.last_name }}</span>
        <span v-else-if="item.value === 'age'">{{ initData.age }}</span>
        <span v-else>{{ initData.address }}</span>
      </div>
      <div class="mgi_form-div">
        <label class="mgi_form-title">Sex:</label>
        <span v-for="item in sex">
        <span v-if="item.isActive === initData.sex">{{ item.name }}</span>
        </span>
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
      element: [
        { "title": "First name", "value": "first_name"},
        { "title": "Last name", "value": "last_name"},
        { "title": "Age", "value": "age"},
        { "title": "Address", "value": "address"}
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
