<template>
  <div>
    <section class="hero bg-primary text-white text-center py-3 d-flex align-items-center justify-content-center">
      <div class="image-container">
        <img src="@/assets/me.jpg" alt="Tai Danh" class="hero-image" />
      </div>
      <div class="content-container">
        <h1>Tai Danh</h1>
        <p class="lead">Code, Cuisine, Cameras – A Glimpse into my Diverse Universe.</p>
        <a href="/about" class="btn btn-light">Learn More</a>
      </div>
    </section>
    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <h3>About me</h3>
            <p>
              Hi! I'm Tai Danh, a recent graduate from the University of California, Santa Cruz with
              a B.S. in Computer Science.
            </p>
            <a href="/about" class="btn btn-light">Learn More</a>
          </div>
          <div class="col-lg-4">
            <h3>Beyond the Code</h3>
            <p>
              While my academic journey at UC Santa Cruz honed my skills in computer science, my
              passions venture far beyond the screen. From capturing candid moments in street
              photography, to cruising through San Francisco on a skateboard or bike, and savoring
              the culinary art inspired by my family's restaurant — dive deeper into my story to
              discover the many facets that shape me.
            </p>
            <a href="/about" class="btn btn-light">Learn More</a>
          </div>
          <div class="col-lg-4">
            <h3>My Professional Journey</h3>
            <p>
              From crafting tools like Rex for more intuitive regular expressions, optimizing a
              language with C Mini, to transforming code annotations into digestible documents with
              Decoder, my experiences encompass a blend of innovation and practical solutions.
              Delving into my projects provides a glimpse into my approach to solving real-world
              problems through tech. Discover a journey marked by continuous learning and
              application.
            </p>
            <a href="/resume" class="btn btn-light">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  justify-content: center;
}

.image-container, .content-container {
  flex: 0 0 40vw;
  max-width: 40vw;
}

.image-container {
  overflow: hidden;
  padding: 0.5rem 1rem;
  width: 30vw;
  height: 30vw;
}

.hero-image {
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
}

.btn-normal {
  width: auto;
  padding: 0.375rem 0.75rem;
}

.content-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 1rem;
}
</style>
