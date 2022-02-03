<template>
  <q-page padding>
    <!-- content -->

    <div class="q-pa-md">
    <q-table
      title="Produtos"
      :rows="rows"
      :columns="columns"
      row-key="name"
      selection="single"
      v-model:selected="selected"
      @row-click="onRowClick"
    >


      <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Pesquisar">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

    </q-table>


    <q-dialog
      v-model="dialog"
      persistent
      :maximized="maximizedToggle"
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card class="bg-dark text-white">
        <q-bar>
          <q-space />

          <q-btn dense flat icon="minimize" @click="maximizedToggle = false" :disable="!maximizedToggle">
            <q-tooltip v-if="maximizedToggle" class="bg-white text-primary">Minimize</q-tooltip>
          </q-btn>
          <q-btn dense flat icon="crop_square" @click="maximizedToggle = true" :disable="maximizedToggle">
            <q-tooltip v-if="!maximizedToggle" class="bg-white text-primary">Maximize</q-tooltip>
          </q-btn>
          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>

        <q-card-section>
          <div class="text-h6">{{produto.name}}</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="row">
            <div class="col-12 col-md-6">
                <q-img :src="imageSrc" class="imagem" ></q-img>
                <!-- <img src="../assets/imagens/7.png" id="imagem" /> -->
            </div>
            <hr />
            <div class="col-12 col-md-6">
              <p><b>Marca:</b> {{produto.marca}}</p>
              <p><b>Codigo Internacional:</b> {{produto.codigo_internacional}}</p>
              <p><b>Fabricante:</b> {{produto.fabricante}}</p>
              <p><b>Descricao:</b> {{produto.descricao}}</p>
              <p><b>Validade:</b> {{produto.validade}}</p>
              <p><b>Registado em:</b> {{produto.created_at}}</p>

            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>

    <div class="q-mt-md">
         <!-- <q-btn label="Maximized" color="primary" @click="dialog = true" /> -->
      <!-- Selected: {{ JSON.stringify(selected) }} -->
    </div>
  </div>
  </q-page>
</template>

<script>
import { ref } from 'vue'

const columns = [
  {
    name: 'desc',
    required: true,
    label: 'Nome',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'marca', align: 'center', label: 'Marca', field: 'marca', sortable: true },
  { name: 'fabricante', label: 'Fabricante', field: 'fabricante', sortable: true },
  { name: 'validade', label: 'Validade', field: 'validade', sortable: true },
  { name: 'codigo_internacional', label: 'Codigo Internacional', field: 'codigo_internacional', sortable: true },
  { name: 'descricao', label: 'Descricao', field: 'descricao', sortable: true },
  // { name: 'imagem', label: 'Imagem', field: 'imagem', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
  { name: 'created_at', label: 'Registado Em', field: 'created_at', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
]

const rows = [
  { id: 1, name: 'Microscopio', codigo_internacional: 'ñ especificado', marca: 'MedFarm', fabricante: 'MozFArmacos', validade: 'ñ especificado', descricao: 'por fazer', imagem: '7.png', created_at: '12/12/2021'},
  { id: 2, name: 'Mascara de Tecido', codigo_internacional: 'ñ especificado', marca: 'MedFarm ', fabricante: 'MozFArmacos', validade: 'ñ especificado', descricao: 'por fazer', imagem: 'mascara2.jpg', created_at: '12/12/2021'},
  { id: 3, name: 'Mascara N95', codigo_internacional: 'ñ especificado', marca: 'MedFarm ', fabricante: 'MozFArmacos', validade: 'ñ especificado', descricao: 'por fazer', imagem: 'mascara3.jpg', created_at: '12/12/2021'},
  { id: 4, name: 'Mascara', codigo_internacional: 'ñ especificado', marca: 'MedFarm ', fabricante: 'MozFArmacos', validade: 'ñ especificado', descricao: 'por fazer', imagem: 'mascara1.jpg', created_at: '12/12/2021'},
  { id: 5, name: 'Suplementos', codigo_internacional: 'ñ especificado', marca: 'MedFarm ', fabricante: 'MozFArmacos', validade: 'ñ especificado', descricao: 'por fazer', imagem: '8.png', created_at: '12/12/2021'},
  { id: 6, name: 'Termometro', codigo_internacional: 'ñ especificado', marca: 'MedFarm', fabricante: 'MozFArmacos', validade: 'ñ especificado', descricao: 'por fazer', imagem: '10.png', created_at: '12/12/2021'},
  { id: 8, name: 'Caminhante de aço', codigo_internacional: 'ñ especificado', marca: 'MedFarm ', fabricante: 'MozFArmacos', validade: 'ñ especificado', descricao: 'por fazer', imagem: '9.png', created_at: '12/12/2021'},

]

let filter = null;
export default {
  setup () {
    return {
      selected: ref([]),
      columns,
      rows,
      filter,
      dialog: ref(false),
      maximizedToggle: ref(true),
      imageSrc: 'img/7.png'
    }
  },
  methods:{
     onRowClick (evt, row) {
      console.log('clicked on', row)
      this.produto = row;
      // let x = document.getElementById('imagem');
      this.imageSrc = 'img/'+this.produto.imagem
      console.log( this.imageSrc)
      this.dialog = true;
    }
  },
  data(){
    return {
      produto:{id:'',name:'', codigo_internacional:'', marca:'', fabricante:'', validade:'', descricao:'', imagem:'', created_at:''},
    }
  }
}
</script>
