<template>
  <control-banel @choose="choose"></control-banel>
  <template v-if="shownComponent==='form'">
    <div class="container">
      <register-form @submit="addUser"></register-form>
    </div>
  </template>
  <div class="container">
    <template v-if="shownComponent==='admins'">
      <users-table :users="admins" @delete="deleteUser" :key="'admin'"></users-table>
    </template>
  </div>
  <div class="container">
    <template v-if="shownComponent==='students'">
      <users-table :users="students" @delete="deleteUser" :key="'student'"></users-table>
    </template>
  </div>
</template>


<script>

import RegisterForm from "@/components/RegisterForm";
import UsersTable from "@/components/UsersTable";
import ControlBanel from "@/components/ControlBanel";
import {ref} from 'vue'


export default {
  name: 'App',
  components: {
    ControlBanel,
    RegisterForm,
    UsersTable,
  },
  setup() {
    const shownComponent = ref('form')
    const admins = ref([])
    const students = ref([])

    function choose(name) {
      shownComponent.value = name
    }

    function addStudent(student) {
      let newStudent = {
        name: student.name,
        age: student.age,
        address: student.address,
        userType: student.userType
      }
      console.log('from add student fun', student)

      students.value.push(newStudent)
    }

    function addAdmin(admin) {
      let newAdmin = {
        name: admin.name,
        age: admin.age,
        address: admin.address,
        userType: admin.userType
      }
      console.log('from add admin fun', admin)
      admins.value.push(newAdmin)
    }

    function addUser(user) {
      console.log(user.userType)
      if (user.userType === 'admin') {
        addAdmin(user)
      } else if (user.userType === 'student') {
        addStudent(user)
      }
      // console.log('admins', JSON.stringify(this.admins))
      // console.log('students', JSON.stringify(this.students))
    }

    function deleteUser(user) {
      console.log(user.userType)
      if (user.userType === 'admin') {
        console.log('admin deleted')
        deleteAdmin(user.name)
      } else if (user.userType === 'student') {
        console.log('student deleted')
        deleteStudent(user.name)
      }
    }

    function deleteAdmin(name) {
      let index = admins.value.findIndex((admin) => admin.name === name)
      admins.value.splice(index, 1)
    }

    function deleteStudent(name) {
      let index = students.value.findIndex((student) => student.name === name)
      students.value.splice(index, 1)
    }

    return {
      shownComponent,
      admins,
      students,
      choose,
      addUser,
      deleteUser,
    }
  }
  // data() {
  //   return {
  //     shownComponent: "form",
  //     admins: [],
  //     students: []
  //   }
  // },
//   methods: {
//     // choose(name) {
//     //   this.shownComponent = name
//     // },
//     addStudent(student) {
//       let newStudent={
//         name:student.name,
//         age:student.age,
//         address:student.address,
//         userType:student.userType
//       }
//       console.log('from add student fun',student)
//
//       this.students.push(newStudent)
//     },
//     addAdmin(admin) {
//       let newAdmin={
//         name:admin.name,
//         age:admin.age,
//         address:admin.address,
//         userType:admin.userType
//       }
//       console.log('from add admin fun',admin)
//       this.admins.push(newAdmin)
//     },
//     addUser(user) {
//       console.log(user.userType)
//       if (user.userType === 'admin') {
//         this.addAdmin(user)
//       } else if (user.userType === 'student') {
//         this.addStudent(user)
//       }
//       console.log('admins', JSON.stringify(this.admins))
//       console.log('students', JSON.stringify(this.students))
//     },
//     deleteUser(user) {
//       console.log(user.userType)
//       if (user.userType === 'admin') {
//         console.log('admin deleted')
//         this.deleteAdmin(user.name)
//       }else if(user.userType === 'student') {
//         console.log('student deleted')
//         this.deleteStudent(user.name)
//       }
//     },
//     deleteAdmin(name) {
//       let index = this.admins.findIndex((admin) => admin.name === name)
//       this.admins.splice(index, 1)
//     },
//
//     deleteStudent(name) {
//       let index = this.students.findIndex((student) => student.name === name)
//       this.students.splice(index, 1)
//     }
//   }
// }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center
}
</style>
