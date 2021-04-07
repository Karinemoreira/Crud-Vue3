<template>
  <div class="container d-flex flex-column justify-content-center">
    <h1 class="text-center mt-2">Cadastro de Usuário</h1>
    <div
      class="card card-body mt-3 d-flex flex-column justify-content-center"
      style="width: 25rem; margin: 0 auto"
    >
      <h5 class="card-title my-3 text-center">
        Adicione suas informações pessoais
      </h5>
      <form @submit.prevent="onSubmit">
        <div class="form-group">
          <label>Nome</label>
          <input
            v-model="form.name"
            class="form-control"
            placeholder="Digite seu nome"
            required
          />
        </div>

        <div class="form-group mt-2">
          <label>Idade</label>
          <input
            v-model="form.age"
            class="form-control"
            placeholder="Digite sua idade"
            required
          />
        </div>

        <div class="form-group mt-2">
          <label>Cargo</label>
          <input
            v-model="form.position"
            class="form-control"
            placeholder="Digite seu cargo"
            required
          />
        </div>

        <div class="form-group mt-2">
          <label>Email</label>
          <input
            v-model="form.email"
            class="form-control"
            placeholder="Digite seu email"
            required
          />
        </div>

        <button type="submit" class="btn btn-success mt-3">
          Criar usuário
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { createUser } from "@/firebase";
import { reactive } from "vue";

export default {
  setup() {
    const form = reactive({
      name: "",
      age: "",
      email: "",
      position: "",
    });

    const onSubmit = async () => {
      await createUser({ ...form });
      form.name = "";
      form.age = "";
      form.email = "";
      form.position = "";
    };

    return { form, onSubmit };
  },
};
</script>
