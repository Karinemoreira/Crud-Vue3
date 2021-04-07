<template>
  <div class="card mt-3">
    <table class="table">
      <thead class="text-center">
        <tr>
          <th scope="col">Nome</th>
          <th scope="col">Idade</th>
          <th scope="col">Cargo</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="{ id, name, age, position, email } in users" :key="id">
          <td>{{ name }}</td>
          <td>{{ age }}</td>
          <td>{{ position }}</td>
          <td>{{ email }}</td>
          <td>
            <router-link :to="`/edit/${id}`">
              <button class="btn btn-primary btn-sm me-2">Editar</button>
            </router-link>
            <button class="btn btn-danger btn-sm" @click="deleteUser(id)">
              Deletar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { useLoadUsers, deleteUser } from "@/firebase";

export default {
  setup() {
    const users = useLoadUsers();
    return { users, deleteUser };
  },
};
</script>
