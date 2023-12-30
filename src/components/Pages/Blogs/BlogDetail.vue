<script setup lang="ts">
import type { Blog } from "~/contracts/api-contracts/BlogsInterfaces";

defineProps<{
  blog: Blog;
}>();
</script>
<template>
  <div class="single-blog">
    <NuxtImg
      :src="blog.detailImage[1]"
      alt="blog.title"
      class="blog-image mb-3"
    />
    <PagesBlogsBlogMetaInfos
      :time="blog.published_date"
      :views="blog.views"
      :comments="blog.comments"
    />
    <h3 class="mt-5 mb-3 font-heading-3 text-primary-color-dark-gray">
      {{ blog.title }}
    </h3>
    <p class="text-regular-3 text-primary-color-dark-gray">
      With summer in full swing, scorching hot days have become the norm—which
      means your air conditioner has been working overtime. Of course, for some
      air conditioning systems (like central AC), it's best to have a
      professional come and inspect the unit, check the ductwork, and make sure
      it's operating efficiently. But if you have a portable or window AC unit
      you can definitely clean and repair it yourself without spending money on
      repairs or a new system. <br /><br />
      "Companies like ours should come out and do the heavy maintenance on it,
      but in between, there are air conditioning maintenance tips people can
      follow themselves," says Dave Mejean, HVAC manager at B&W Plumbing and
      Heating Co., Inc., an Angi vendor. "It's like a car: You have to have your
      mechanic tune it up, but there are still things you can do to make sure
      it's running too." <br /><br />
      Whether you have central air or a window unit, check out these air
      conditioning maintenance tips and tricks you can easily do to protect
      yourself from the summer heat. <br /><br />
      The 9 Best Fans to Beat the Heat, According to Our Testing How Often to
      Clean a Window AC Unit There are two primary areas to focus on when it
      comes to cleaning a window AC unit: filters and coils. Filters remove the
      dust from the air and when they're clogged, they force your AC unit to
      work harder and use up more energy to cool your home—that costs more for
      you without delivering results. Coils help move the hot and cold air, so
      make sure they're not clogged with dirt and dust.<br /><br />
      "I would recommend cleaning every two weeks," says Giacomo Calzavara,
      Managing Director of JMATEK North America, a licensee of Honeywell
      portable cooling products.<br /><br />
      What You'll Need<br />
      Screwdriver<br />
      Cloth<br />
      Soft brush <br />Spray bottle<br />
      How to Clean a Window AC Unit<br />
      Turn off the unit. For safety purposes, it's always a good idea to turn
      off the power and unplug the cord before working on an electrical unit.
    </p>
    <NuxtImg
      :src="blog.detailImage[0]"
      :alt="blog.title"
      class="blog-image-2 my-4"
    />
    <p class="text-regular-3 text-primary-color-dark-gray">
      How Often to Clean a Central AC Unit For central AC units, Mejean
      recommends checking the filter every 30 to 60 days to see if it's dirty or
      dusty—lifestyle makes a big difference, since people who have kids or pets
      might have to change it every month, while those who don't have too many
      visitors or animals might only need to swap it out every two to three
      months. <br />
      <br />

      According to a recent survey by American Standard Heating & Air
      Conditioning of 2,000 American homeowners, only 36% of homeowners swap out
      their air filters. "We often tell our clients that simple preventative
      measures like this can take just minutes to do but can help ensure your
      system is working efficiently and can help save money in the long run,"
      Brian Kleinschmidt, home improvement expert and American Standard Heating
      & Air Conditioning partner, says.<br />
      <br />

      Cleaning the condenser unit outside is another important part of central
      AC maintenance. This typically only needs to be done once a year, but may
      need to be done more often depending on the location of your unit, and if
      it is prone to lots of debris. " It's important to keep the area
      surrounding [your condenser unit] clean and debris-free," Mika
      Kleinschmidt, home improvement expert and American Standard Heating & Air
      Conditioning partner, says. "A good rule of thumb is to not let any plants
      or other wildlife grow within a 2-foot radius of your air conditioner."
    </p>
    <div
      class="share-content flex align-items-center justify-content-between py-3 px-4 bg-color-product-front my-5"
    >
      <div class="social-medias flex align-items-center">
        <p class="font-heading-4-semi-bold pr-2">Share it on -</p>
        <i class="pi pi-facebook social-icon" />
        <i class="pi pi-facebook social-icon" />
        <i class="pi pi-facebook social-icon" />
        <i class="pi pi-facebook social-icon" />
      </div>
      <CommonExploreMoreButton label="Next Page" />
    </div>
  </div>
</template>

<style scoped lang="scss">
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
}
</style>
