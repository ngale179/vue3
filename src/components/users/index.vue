<template>
  <!--  <button id="show-modal" @click="showModal = true">Show Modal</button>-->
  <table>
    <thead>
    <th>Full name</th>
    <th>Sex</th>
    <th>Age</th>
    <th>Address</th>
    <th>Action</th>
    </thead>
    <tbody>
    <tr v-for="item in listsUser" :key="item.id">
<!--      <td :class="['mgi_center']"><router-link :to="'/user/detail/' + item.id">{{ item.last_name }} {{ item.first_name }}</router-link></td>-->
      <td :class="['mgi_center']">
        <a href="javacript:void(0);" @click="detailUser(item)" :title="'View detail'">{{ item.last_name }} {{ item.first_name }}</a>
      </td>
      <td :class="['mgi_center']" v-if="item.sex === 1">Male</td>
      <td :class="['mgi_center']" v-else>Female</td>
      <td :class="['mgi_center']">{{ item.age }}</td>
      <td :class="['mgi_center']">{{ item.address }}</td>
      <td :class="['mgi_center']">
        <button :class="['mgi_btn']" :title="'Edit'" @click="editUser(item)"><i class="fa-solid fa-pen-to-square"></i></button>
        <button :class="['mgi_btn']" :title="'Delete'" @click="deleteUser(item)"><i class="fa-solid fa-trash"></i></button>
      </td>
    </tr>
    </tbody>
  </table>

  <!--Detail User-->
  <va-modal
      v-model="showModalDetail"
      size="large"
      :title="'Detail User'"
      :okText="Oke"
      :id="initData.id"
  >
    <Detail v-if="showModalDetail" :initData="initData"/>
  </va-modal>
  <!--Edit User-->
  <va-modal
      v-model="showModalEdit"
      size="large"
      :title="'Edit User'"
      :okText="Save"
      :cancelText="Cancel"
  >
    <Edit v-if="showModalEdit" :initData="initData"/>
  </va-modal>

  <!--Delete User-->
  <va-modal
      v-model="showModalDelete"
      size="large"
      :title="'Delete User'"
      :message="'Are you sure you want to delete?'"
  >
    <Delete v-if="showModalDelete" :initData="initData"/>
  </va-modal>
</template>
<script>
import Detail from './detail.vue';
import Edit from './edit.vue';
export default {
  data() {
    return {
      listsUser: [
        {"id": "1", "last_name": "Jone 1", "first_name": "Alex", "sex": 1, "age": 18, "address": "Chicago"},
        {"id": "2", "last_name": "Jone 2", "first_name": "Alex", "sex": 1, "age": 38, "address": "Chicago"},
        {"id": "3", "last_name": "Jone 3", "first_name": "Alex", "sex": 0, "age": 42, "address": "Chicago"},
        {"id": "4", "last_name": "Jone 4", "first_name": "Alex", "sex": 0, "age": 22, "address": "Chicago"},
        {"id": "5", "last_name": "Jone 5", "first_name": "Alex", "sex": 1, "age": 18, "address": "Chicago"},
        {"id": "6", "last_name": "Jone 6", "first_name": "Alex", "sex": 1, "age": 42, "address": "Chicago"},
        {"id": "7", "last_name": "Jone 7", "first_name": "Alex", "sex": 0, "age": 18, "address": "Chicago"},
        {"id": "8", "last_name": "Jone 8", "first_name": "Alex", "sex": 1, "age": 78, "address": "Chicago"},
        {"id": "9", "last_name": "Jone 9", "first_name": "Alex", "sex": 0, "age": 74, "address": "Chicago"},
        {"id": "10", "last_name": "Jone 10", "first_name": "Alex", "sex": 1, "age": 89, "address": "Chicago"}
      ],
      showModalDetail : false,
      showModalDelete : false,
      showModalEdit : false,
      initData: {
        id: '',
        last_name: '',
        first_name: '',
        sex: 0,
        age: 0,
        address: ''
      }
    }
  },
  methods: {
    detailUser(item) {
      this.initData = item;
      this.showModalDetail = true;
    },
    editUser(item) {
      this.initData = item;
      this.showModalEdit = true;
    },
    deleteUser(item){
      this.initData = item;
      this.showModalDelete = true;
    }
  },
  components:{
    Detail,
    Edit,
    Delete:{
      props: {
        initData: {
          type: Object
        }
      },
      template: `<h1>{{ initData.first_name }} {{ initData.last_name }}</h1>`
    }
  }
}
</script>
