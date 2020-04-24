<template>
  <div class>
    <main class="max-w-screen-sm">
      <slot />
    </main>

    <aside class="hidden lg:flex flex-col fixed bottom-0 right-0 text-right mr-12 mb-10">
      <a href="#" target="_blank" rel="noopener noreferrer" class="py-1">Home</a>
      <a href="#" target="_blank" rel="noopener noreferrer" class="py-1">About</a>
      <a href="#" target="_blank" rel="noopener noreferrer" class="py-1">Journal</a>
      <a href="#" target="_blank" rel="noopener noreferrer" class="py-1">Work</a>
      <a href="#" target="_blank" rel="noopener noreferrer" class="py-1">Email</a>
    </aside>

    <footer class="flex mt-20 md:mt-32 lg:mt-40 max-w-screen-md">
      <div class="hidden sm:flex flex-col sm:w-1/2 md:w-2/3 items-start">
        <g-image
          class="h-16 w-auto inline-flex mb-4"
          alt="Brody MacLean"
          src="~/assets/img/memoji/memoji1.png"
        />
        <p class="mb-2 pr-16 mt-0">
          Multi-focused designer working on user interfaces and design systems
          for digital products.
        </p>
        <p class="mb-2 pr-16 mt-0">Built with 💛, Gridsome and Tailwind CSS.</p>
      </div>

      <div class="w-1/2 sm:w-1/4 md:w-1/6 flex flex-col items-start">
        <p class="mb-4 mt-0">Navigate</p>
        <a href="#" target="_blank" rel="noopener noreferrer" class="py-1">Home</a>
        <a href="#" target="_blank" rel="noopener noreferrer" class="py-1">About</a>
        <a href="#" target="_blank" rel="noopener noreferrer" class="py-1">Journal</a>
        <a href="#" target="_blank" rel="noopener noreferrer" class="py-1">Work</a>
      </div>

      <div class="w-1/2 sm:w-1/4 md:w-1/6 flex flex-col items-start">
        <p class="mb-4 mt-0">Connect</p>
        <a href="#" target="_blank" rel="noopener noreferrer" class="py-1">Instagram</a>
        <a href="#" target="_blank" rel="noopener noreferrer" class="py-1">Twitter</a>
        <a href="#" target="_blank" rel="noopener noreferrer" class="py-1">LinkedIn</a>
        <a href="#" target="_blank" rel="noopener noreferrer" class="py-1">Email</a>
        <a href="#" target="_blank" rel="noopener noreferrer" class="py-1">Codepen</a>
        <a href="#" target="_blank" rel="noopener noreferrer" class="py-1">Github</a>
      </div>
    </footer>
  </div>

  <!-- <slot /> -->

  <!-- 
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
      </nav>
    </header>
    <slot />
  </div>-->
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
