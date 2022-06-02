<template>
  <div class="control-container">

    <PrButton @click="$emit('choose','form')" label="Form" icon="pi pi-check" iconPos="right"/>
    <PrButton label="Students" icon="pi pi-user" iconPos="right" @click="$emit('choose','students')" :style="{backgroundColor:'#8338ec',border:'none'}"/>
    <PrButton label="Admins" icon="pi pi-user" iconPos="right" @click="$emit('choose','admins') " :style="{backgroundColor:'#fb5607',border:'none'}"/>
  </div>
</template>

<script>

export default {
  name: "ControlBanel",
 emits:['choose'],

}

</script>

<style scoped>
.control-container
{
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom:20px
}
.control-button
{
  height: 50px;
  width: 100px;
}
</style>