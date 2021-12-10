<template>
  <table>
    <thead>
    <th>Full name</th>
    <th>Sex</th>
    <th>Age</th>
    <th>Address</th>
    <th>Action</th>
    </thead>
    <tbody v-for="item in listsUser">
    <tr>
      <td :class="['mgi_center']"><a href="#">{{ item.last_name }} {{ item.first_name }}</a></td>
      <td :class="['mgi_center']" v-if="item.sex === 1">Male</td>
      <td :class="['mgi_center']" v-else>Female</td>
      <td :class="['mgi_center']">{{ item.age }}</td>
      <td :class="['mgi_center']">{{ item.address }}</td>
      <td :class="['mgi_center']">
        <button :class="['mgi_btn']" :title="Detail" @click="edit(item)"><i class="fa-solid fa-pen-to-square"></i>
        </button>
        <button :class="['mgi_btn']" :title="Detail" @click="deleteUser(item)"><i class="fa-solid fa-trash"></i>
        </button>
      </td>
    </tr>
    </tbody>
  </table>
</template>
<script>
// import Detail from './detail.vue';
// import Edit from './edit.vue';
export default {
  props: {
    listsUser: {
      type: Object,
    }
  },
  data() {
    return {
      listsUser: [
        {"last_name": "Jone 1", "first_name": "Alex", "sex": 1, "age": 18, "address": "Chicago"},
        {"last_name": "Jone 2", "first_name": "Alex", "sex": 1, "age": 38, "address": "Chicago"},
        {"last_name": "Jone 3", "first_name": "Alex", "sex": 0, "age": 42, "address": "Chicago"},
        {"last_name": "Jone 4", "first_name": "Alex", "sex": 0, "age": 22, "address": "Chicago"},
        {"last_name": "Jone 5", "first_name": "Alex", "sex": 1, "age": 18, "address": "Chicago"},
        {"last_name": "Jone 6", "first_name": "Alex", "sex": 1, "age": 42, "address": "Chicago"},
        {"last_name": "Jone 7", "first_name": "Alex", "sex": 0, "age": 18, "address": "Chicago"},
        {"last_name": "Jone 8", "first_name": "Alex", "sex": 1, "age": 78, "address": "Chicago"},
        {"last_name": "Jone 9", "first_name": "Alex", "sex": 0, "age": 74, "address": "Chicago"},
        {"last_name": "Jone 10", "first_name": "Alex", "sex": 1, "age": 89, "address": "Chicago"}
      ]
    }
  },
  methods: {
    detail() {
      console.log("detail");
      console.log(this);
    },
    edit(item) {
      console.log("edit");
      console.log(item);
    },
    deleteUser(item) {
      if(confirm("Are you sure you want to delete?")){
        console.log("Agree");
      } else {
        console.log("Cancel");
      }
    }
  },

}
</script>
