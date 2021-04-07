<template>
  <UserCreate />
  <UserList />
</template>

<script>
import UserCreate from "@/components/UserCreate.vue";
import UserList from "@/components/UserList.vue";
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    UserCreate,
    UserList,
  },
};
</script>
