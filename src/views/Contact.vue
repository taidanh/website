<template>
  <div>
    <h1>Get In Touch</h1>
    <p>
      I'm always open to discussing software projects, collaborations, or just general tech talk.
      Feel free to reach out through any of the platforms below:
    </p>

    <div class="contact-buttons">
      <div class="mb-3">
        <a href="mailto:taid100@gmail.com" class="btn btn-light">
          <b-icon-envelope-fill class="mr-2"></b-icon-envelope-fill>
          taid100@gmail.com
        </a>
      </div>

      <div class="mb-3">
        <a
          href="https://github.com/taidanh"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-github"
        >
          <b-icon-github class="mr-2"></b-icon-github>
          taidanh
        </a>
      </div>

      <div class="mb-3">
        <a
          href="https://linkedin.com/in/taidanh"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-linkedin"
        >
          <b-icon-linkedin class="mr-2"></b-icon-linkedin>
          Tai Danh
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact {
  padding: 20px;
}

.btn-light {
  color: #333;
  transition:
    color 0.3s ease,
    background-color 0.3s ease;
}

.btn-light:hover {
  color: #fff;
  background-color: #007bff;
}

.btn-github {
  background-color: #24292e; /* GitHub's color */
  color: #fff;
}

.btn-github:hover {
  background-color: #191c20; /* Darken on hover */
}

.btn-linkedin {
  background-color: #0077b5; /* LinkedIn's color */
  color: #fff;
}

.btn-linkedin:hover {
  background-color: #005a87; /* Darken on hover */
}
</style>
