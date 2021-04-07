<template>
  <div class="mx-auto card card-body mt-4" style="width: 50rem">
    <h3>Editar Usuário</h3>
    <form @submit.prevent="update">
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

      <button type="submit" class="btn btn-primary mt-3">Atualizar</button>
    </form>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getUser, updateUser } from "@/firebase";
export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const userId = computed(() => route.params.id);
    const form = reactive({
      name: "",
      email: "",
      age: "",
      position: "",
    });
    onMounted(async () => {
      const user = await getUser(userId.value);
      console.log(user, userId.value);
      form.name = user.name;
      form.email = user.email;
      form.age = user.age;
      form.position = user.position;
    });
    const update = async () => {
      await updateUser(userId.value, { ...form });
      router.push("/");
      form.name = "";
      form.email = "";
      form.age = "";
      form.position = "";
    };
    return { form, update };
  },
};
</script>