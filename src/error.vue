<script lang="ts" setup>
interface ErrorProps {
  error: {
    description?: string;
    message?: string;
    statusCode: string;
    statusMessage: string;
    url: string;
  };
}

const { error } = defineProps<ErrorProps>();

const component = computed(() => {
  return parseInt(error.statusCode) === 404
    ? defineAsyncComponent(
        () => import("~/components/Layouts/error/NotFound.vue"),
      )
    : defineAsyncComponent(
        () => import("~/components/Layouts/error/ServerError.vue"),
      );
});

definePageMeta({
  layout: "empty",
  title: "Error",
});
</script>

<template>
  <div>
    <Head>
      <Title>{{ error.statusMessage }}</Title>
    </Head>

    <NuxtLayout>
      <div :style="{ margin: '80px 0' }">
        <Component :is="component" :error="error" />
      </div>
    </NuxtLayout>
  </div>
</template>
