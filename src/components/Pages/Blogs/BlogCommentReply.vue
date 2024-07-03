<template>
  <div class="flex single-comment">
    <!--            commenter profile image -->
    <NuxtImg :src="img" :alt="profile" class="profile-picture" />
    <!--            comment -->
    <div class="flex-grow-1">
      <p class="text-regular-3 text-primary-color-dark-gray mb-12px">
        {{ comment }}
      </p>
      <div class="flex flex-wrap justify-content-between align-items-center">
        <!--                commneter name -->
        <PagesBlogsBlogCommentProfile :profile="profile" :date="date" />
        <CommonExploreMoreButton label="Reply" />
      </div>
      <!--              reply section -->
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  date: string;
  profile: string;
  comment: string;
  img: string;
}>();
</script>

<style scoped lang="scss">
.single-comment {
  gap: 16px;
  .profile-picture {
    height: 40px;
    width: 40px;
    border-radius: 50%;
  }
  .meta-info {
    padding: 9px 22px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    .arrow-icon {
      font-size: 1.375rem;
    }
  }
}
</style>
