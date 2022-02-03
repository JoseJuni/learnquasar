<template>
  <q-page class="">
    <div class="row">
      <div class="col-12 col-md-4">
        <q-card  bordered class="bg-primary">
          <q-card-section>
            <div class="text-h6">Encomendas</div>
          </q-card-section>

          <q-separator dark inset />

          <q-card-section>
            <div class="text-subtitle2">{{ 10 }}</div>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 col-md-4">
        <q-card  bordered class="bg-primary">
          <q-card-section>
            <div class="text-h6">Produtos</div>
          </q-card-section>

          <q-separator dark inset />

          <q-card-section>
            <div class="text-subtitle2">{{ 29 }}</div>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 col-md-4">
        <q-card bordered class="bg-primary">
          <q-card-section>
            <div class="text-h6">Vendas</div>
          </q-card-section>

          <q-separator dark inset />

          <q-card-section>
            <div class="text-subtitle2">{{ 16 }}</div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
});
</script>

<style scoped>
.col-md-4 {
  padding: 8px;
}
.row{
  padding-top: 4px;
  color: white;
}
</style>
