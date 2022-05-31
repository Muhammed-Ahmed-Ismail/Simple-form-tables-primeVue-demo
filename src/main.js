import { createApp } from 'vue'
import App from './App.vue'


import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import RadioButton from 'primevue/radiobutton';
import InputText from "primevue/inputtext";
import InputNumber from "primevue/inputnumber";
import DataTable from "primevue/datatable";
import Column from "primevue/column";

import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'




const app=createApp(App);

app.use(PrimeVue)
app.component("PrButton",Button)
app.component("RadioButton",RadioButton)
app.component('InputText',InputText)
app.component('InputNumber',InputNumber)
app.component('DataTable',DataTable)
app.component('PrColumn',Column)

app.mount('#app')
