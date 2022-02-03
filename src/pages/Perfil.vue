<template>
  <q-page padding>
    <!-- content -->

      <q-card class="">


        <q-card-section>
          <div class="text-h4 text-center">PERFIL</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="row">
            <div class="col-12 col-md-6">
                <q-img src="../assets/imagens/perfil.png" class="imagem" ></q-img>
                <!-- <img src="../assets/imagens/7.png" id="imagem" /> -->
            </div>
            <hr />
            <div class="col-12 col-md-6">
              <br>
              <hr />
              <div class="text-h">Nome: Jose Junior</div>
              <hr/>
              <div class="text-h">Email: Jose.Junior@gmail.com</div>
              <hr/>

            </div>
          </div>
        </q-card-section>
      </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'Perfil',
}
</script>
