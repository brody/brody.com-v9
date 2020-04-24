<template>
  <Layout>
    <section class="mb-16 md:mb-24 lg:mb-40 reative">
      <g-image class="h-16 w-auto absolute mb-3 -mt-20" alt="Brody MacLean" src="~/assets/img/memoji/memoji6.png" />

      <!-- <img class="h-16 absolute mb-3 -mt-20" src="/img/memoji6.png" alt="" /> -->

      <h2 class="mb-6">
        Hey, I’m
        <Peek text="Brody MacLean" imageURL="intro/intro-brody.jpg" />.
      </h2>
      <p>
        I’m a digital product designer living in
        <Peek text="Sydney" imageURL="intro/intro-sydney.jpg" />. Currently, I’m building a design system at
        <Peek text="Deputy" imageURL="intro/intro-deputy.jpg" />. Previously I've made things at places like JobAdder, Hudl and CloudBees.
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
      <p>I sometimes jot down my thoughts on things ranging from design, technology and life in general.</p>
      <ul class="list-dash">
        <li>
          <a href="/post.html">How to work remotely for office workers</a>
          <div>Inceptos per class lectus malesuada est enim feugiat mollis nunc pulvinar.</div>
        </li>
        <li>
          <a href="/post.html">Münchhausen Trilemma</a>
          <div>Nisl sodales nostra ad laoreet sociis velit penatibus nascetur, natoque phasellus dapibus maecenas.</div>
        </li>
        <li>
          <a href="/post.html">GM’s CEO offers to make ventilators in WWII-style mobilization</a>
          <div>
            Congue sagittis risus inceptos netus nunc accumsan ad class
            laoreet, habitant facilisis luctus turpis rhoncus ligula ultricies
            sapien, vitae venenatis fusce pellentesque massa porttitor vivamus
            iaculis.
          </div>
        </li>
      </ul>

      <p class="mt-4">
        <a href="#">
          See more entries
          <span class="opacity-50">→</span>
        </a>
      </p>
    </section>

    <section class="mb-16 md:mb-24 lg:mb-32">
      <h2 class="mb-3">Featured work</h2>
      <p>I sometimes jot down my thoughts on things ranging from design, technology and life in general.</p>
      <ul class="list-dash">
        <li>
          <a href="/post.html">How to work remotely for office workers</a>
          <div>Inceptos per class lectus malesuada est enim feugiat mollis nunc pulvinar.</div>
        </li>
        <li>
          <a href="/post.html">Münchhausen Trilemma</a>
          <div>Nisl sodales nostra ad laoreet sociis velit penatibus nascetur, natoque phasellus dapibus maecenas.</div>
        </li>
        <li>
          <a href="/post.html">GM’s CEO offers to make ventilators in WWII-style mobilization</a>
          <div>
            Congue sagittis risus inceptos netus nunc accumsan ad class
            laoreet, habitant facilisis luctus turpis rhoncus ligula ultricies
            sapien, vitae venenatis fusce pellentesque massa porttitor vivamus
            iaculis.
          </div>
        </li>
      </ul>

      <p class="mt-4">
        <a href="#">
          See more work
          <span class="opacity-50">→</span>
        </a>
      </p>
    </section>

    <!-- <section>
            <h1>Latest entries</h1>
            <ul>
                <li>
                    <a href="#">
                        <h2>Get Around Easily With A New York Limousine Service</h2>
                        <date>2019.10.11</date>
                        <p>Test</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <h3>Apricot Kernel Oil</h3>
                        <date>2019.10.11</date>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <h3>The Basics Of Western Astrology Explained</h3>
                        <date>2019.10.11</date>
                    </a>
                </li>
            </ul>
            <p class="mb-3">
                <a href="#">
              More entries
              <span class="opacity-50">→</span>
            </a>
            </p>
    </section>-->

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <!-- <g-image alt="Example image" src="~/favicon.png" width="135" />
    
        <h1>Hello, world!</h1>
    
        <p class="h-64">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores</p>
    
        <p class="home-links">
            <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
            <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>-->
  </Layout>
</template>

<script>
import Peek from "~/components/Peek.vue";
export default {
  metaInfo: {
    title: "Brody MacLean"
  },
  components: {
    Peek
  }
};
</script>

<style>
</style>


