<template>

  <div class="table-container">
    <DataTable :value="users" responsiveLayout="scroll">
      <PrColumn field="name" header="Name"></PrColumn>
      <PrColumn field="age" header="Age"></PrColumn>
      <PrColumn field="address" header="Address"></PrColumn>
      <PrColumn  field="" header="options">
        <template #body="slotProps">
<!--          <Button icon="pi pi-pencil" class="p-button-rounded p-button-success mr-2" @click="editProduct(slotProps.data)" />-->
          <PrButton icon="pi pi-trash" class="p-button-rounded p-button-warning" @click="$emit('delete',{name:slotProps.data.name,userType:slotProps.data.userType})" />
        </template>
      </PrColumn>
    </DataTable>
  </div>

</template>

<script>
export default {
  name: "UsersTable",
  props: ['users'],
  emits:['delete'],



}
</script>

<style scoped>
.table-container
{
  width:50%
}
</style>