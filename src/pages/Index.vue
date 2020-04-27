<template>
  <Layout>
    <section class="mb-16 md:mb-24 lg:mb-40">

      <Memoji class="h-16 w-auto absolute mb-3 -mt-20" />

      <h2 class="mb-6">
        G'day, I’m
        <Peek text="Brody MacLean" imageURL="intro/intro-brody.jpg" class="text-brand-main bg-neutral-800" imageClass="max-w-xs sm:max-w-sm" />.
      </h2>
      <p>
        I’m a multi-disciplinary product designer living in
        <Peek text="Sydney, Australia" imageURL="intro/intro-sydney.jpg" class="text-brand-main bg-neutral-800" imageClass="max-w-xs sm:max-w-sm" />. Currently, I’m Lead Product Designer, building software for the insurance industry, at
        <Peek text="Intelligent Thought" imageURL="intro/intro-intelligentthought.jpg" class="text-brand-main bg-neutral-800" imageClass="max-w-xs sm:max-w-sm" />. Previously I've made things at places like Deputy, Hudl and CloudBees.
      </p>
      <p class="mt-4">
        <a href="/about">
          More about me
          <span class="opacity-50">→</span>
        </a>
      </p>
    </section>

    <section class="mb-16 md:mb-24 lg:mb-32">
      <h2 class="mb-3">Journal</h2>
      <p class="text-neutral-600 mt-2 mb-4">I sometimes jot down my thoughts on things ranging from design, technology and life in general.</p>

      <div class="my-2 py-2">
        <a href="/post.html">How to work remotely for office workers</a>
        <div>Inceptos per class lectus malesuada est enim feugiat mollis nunc pulvinar.</div>
        <div class="text-neutral-700 text-sm mt-1">1 Nov 2019 • Personal</div>
      </div>

      <div class="my-2 py-2">
        <a href="/post.html">Münchhausen Trilemma</a>
        <div>Nisl sodales nostra ad laoreet sociis velit penatibus nascetur, natoque phasellus dapibus maecenas.</div>
        <div class="text-neutral-700 text-sm mt-1">1 Nov 2019 • Personal</div>

      </div>

      <div class="my-2 py-2">
        <a href="/post.html">GM’s CEO offers to make ventilators in WWII-style mobilization</a>
        <div>
          Congue sagittis risus inceptos netus nunc accumsan ad class
          laoreet, habitant facilisis luctus turpis rhoncus ligula ultricies
          sapien, vitae venenatis fusce pellentesque massa porttitor vivamus
          iaculis.
        </div>
        <div class="text-neutral-700 text-sm mt-1">1 Nov 2019 • Personal</div>

      </div>

      <p class="mt-4">
        <a href="#">
          See more entries
          <span class="opacity-50">→</span>
        </a>
      </p>
    </section>

    <section class="mb-16 md:mb-24 lg:mb-32" id="featured-work">
      <h2 class="mb-3">Featured work</h2>
      <p class="text-neutral-600 mt-2 mb-4">I sometimes jot down my thoughts on things ranging from design, technology and life in general.</p>

      <div class="my-2 py-2">
        <a href="/post.html">
          <Peek text="JobAdder Design System" imageURL="work/ja-ds.png" imageClass="hidden md:block max-w-lg" />
        </a>
        <div>Inceptos per class lectus malesuada est enim feugiat mollis nunc pulvinar.</div>
        <div class="text-neutral-700 text-sm">2019 • Head of Design</div>
      </div>

      <div class="my-2 py-2">
        <a href="/post.html">
          <Peek text="JobAdder Navigation" imageURL="work/ja-nav.png" imageClass="hidden md:block max-w-lg" />
        </a>
        <div>Nisl sodales nostra ad laoreet sociis velit penatibus nascetur, natoque phasellus dapibus maecenas.</div>
        <div class="text-neutral-700 text-sm">2018 • Lead Product Designer</div>
      </div>

      <div class="my-2 py-2">
        <a href="/post.html">
          <Peek text="Vivid Sydney" imageURL="work/vivid.png" imageClass="hidden md:block max-w-lg" />
        </a>
        <div>
          An entire redesign with personalisation onboarding, AR location discover & artwork.
        </div>
        <div class="text-neutral-700 text-sm">2018 • Lead Product Designer</div>
      </div>

      <div class="my-2 py-2">
        <a href="/post.html">
          <Peek text="Hudl Design Challenge" imageURL="work/hudl.png" imageClass="hidden md:block max-w-lg" />
        </a>
        <div>Improve organizing, filtering, sorting and managing video within Hudl Technique.</div>
        <div class="text-neutral-700 text-sm">2015 • Product Designer</div>
      </div>

    </section>

  </Layout>
</template>

<script>
import Peek from "~/components/Peek.vue";
import Memoji from "~/components/Memoji.vue";

export default {
  metaInfo: {
    title: "Brody MacLean"
  },
  components: {
    Peek,
    Memoji
  }
};
</script>

<style>
</style>


