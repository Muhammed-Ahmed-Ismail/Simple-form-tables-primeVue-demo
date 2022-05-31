<template>
  <div class="form-container">
    <form @submit.prevent="$emit('submit',user)" id="reg-form">
      <div class="p-float-label">
            <InputText id="username" type="text" v-model="user.name"/>
            <label for="username">Username</label>
        </div>
<!--      <input type="number" placeholder="Enter Age" v-model="user.age"/>-->
      <span class="p-float-label">

        <InputNumber id="integeronly" v-model="user.age" />
        <label for="integeronly">age</label>
      </span>
      <span class="p-float-label">
            <InputText id="username" type="text" v-model="user.address"/>
            <label for="username">Address</label>
        </span>
      <div class="radio-container">
        <RadioButton id="student" name="user-type" value="student" v-model="user.userType"/>
        <label for="student">Student</label><br>
        <RadioButton id="admin" name="user-type" value="admin" v-model="user.userType"/>
        <label for="css">Admin</label><br>
      </div>
      <div class="submit-container">
      <PrButton type="submit" label="Submit" icon="pi pi-check" iconPos="right"/>
      </div>

    </form>
  </div>
</template>

<script>
export default {
  name: "RegisterForm",
  data() {
    return {
      user: {
        name: '',
        age: null,
        address: '',
        userType: ''
      }
    }
  },
  methods:{
    submitForm(){
      document.getElementById('reg-form').submit()
    }
  }
}
</script>

<style scoped>
.form-container {
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  border: 3px solid gray;
  border-radius: 25px;
  padding: 10px;

}

.form-container form {

  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;
  margin-top: 25px;
}

.radio-container {
  display: flex;
  justify-content: center;
  gap: 20px

}

.p-float-label {
  display: flex;
 /*justify-content: center;*/
  align-items: center;
  align-self: center;

}
.submit-container{
  display: flex;
  /*justify-content: center;*/
  align-items: center;
  align-self: center;
}
</style>