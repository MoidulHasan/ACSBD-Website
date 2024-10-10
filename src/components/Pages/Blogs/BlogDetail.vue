<script lang="ts" setup>
import type { IBlog } from "~/pages/our-blogs/index.vue";

defineProps<{
  blog: IBlog;
}>();
</script>
<template>
  <div class="single-blog">
    <div>
      <NuxtImg :alt="blog.title" :src="blog.image" class="blog-image mb-3" />
      <PagesBlogsBlogMetaInfos
        :comments="blog.comments ?? 2"
        :time="blog.created_at"
        :views="blog.views ?? 2"
      />
      <h3 class="mt-5 mb-3 font-heading-3 text-primary-color-dark-gray">
        {{ blog.title }}
      </h3>

      <div v-html="blog.description" />

      <div
        class="share-content flex align-items-center justify-content-between py-3 px-4 bg-color-product-front my-5"
      >
        <div class="w-full flex align-items-center justify-content-between">
          <p class="font-heading-4-semi-bold pr-2">Share it on -</p>

          <div>
            <i class="pi pi-facebook social-icon" />
            <i class="pi pi-facebook social-icon" />
            <i class="pi pi-facebook social-icon" />
            <i class="pi pi-facebook social-icon" />
          </div>
        </div>

        <!--        <NuxtLink :to="`/our-blogs/${blog.slug}`">-->
        <!--          <CommonExploreMoreButton label="Next Page" />-->
        <!--        </NuxtLink>-->
      </div>
      <!--      <div class="comment-section">-->
      <!--        <h2 class="font-heading-3 text-primary-color-navy-blue mb-3">-->
      <!--          {{ blog.comments }} Comments-->
      <!--        </h2>-->
      <!--        <div class="comments">-->
      <!--          &lt;!&ndash;          a single comment &ndash;&gt;-->
      <!--          <div class="flex justify-content-between single-comment">-->
      <!--            &lt;!&ndash;            commenter profile image &ndash;&gt;-->
      <!--            <NuxtImg-->
      <!--              :src="blog.profile1"-->
      <!--              :alt="blog.tag"-->
      <!--              class="profile-picture"-->
      <!--            />-->
      <!--            &lt;!&ndash;            comment &ndash;&gt;-->
      <!--            <div class="flex-grow-1">-->
      <!--              <p class="text-regular-3 text-primary-color-dark-gray mb-12px">-->
      <!--                The standard chunk of Lorem Ipsum used since the 1500s is-->
      <!--                reproduced below for those interested. Sections 1.10.32 and-->
      <!--                1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also-->
      <!--                reproduced in their exact original form, accompanied by English-->
      <!--                versions from the 1914 translation-->
      <!--              </p>-->
      <!--              <div-->
      <!--                class="flex flex-wrap justify-content-between align-items-center"-->
      <!--              >-->
      <!--                &lt;!&ndash;                commneter name &ndash;&gt;-->
      <!--                <PagesBlogsBlogCommentProfile-->
      <!--                  profile="Dulal Hossain"-->
      <!--                  :date="blog.published_date"-->
      <!--                />-->
      <!--                <CommonExploreMoreButton label="Reply" />-->
      <!--              </div>-->
      <!--              &lt;!&ndash;              reply section &ndash;&gt;-->
      <!--              <PagesBlogsBlogCommentReply-->
      <!--                class="mt-22px"-->
      <!--                profile="Dulal Hossain"-->
      <!--                comment="The standard chunk of Lorem Ipsum used since the 1500s is reproduced below"-->
      <!--                :date="blog.published_date"-->
      <!--                :img="blog.profile2"-->
      <!--              />-->
      <!--            </div>-->
      <!--          </div>-->
      <!--        </div>-->
      <!--      </div> -->
      <PagesBlogsBlogCommentForm class="mt-6" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.single-blog {
  .blog-image {
    width: 100% !important;
    max-height: 455px;
    border-radius: 4px;
  }

  .blog-image-2 {
    width: 100%;
    max-height: 431px;
    border-radius: 4px;
  }

  .share-content {
    color: var(--dark-gray-80);
    border-radius: 4px;

    .social-icon {
      font-size: 30px;
      margin-right: 12px;
    }
  }

  .comment-section {
    .single-comment {
      gap: 12px;

      .profile-picture {
        height: 60px;
        width: 60px;
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
  }
}
</style>
