<template>
  <div class="contact">
    <h1>Get In Touch</h1>
    <p>
      I'm always open to discussing software projects, collaborations, or just general tech talk.
      Feel free to reach out through any of the platforms below:
    </p>

    <ul class="contact-list">
      <li>
        <i class="bi bi-envelope-fill"></i>
        <a href="mailto:taid100@gmail.com">taid100@gmail.com</a>
      </li>
      <li>
        <i class="bi bi-github"></i>
        <a href="https://github.com/taidanh" target="_blank" rel="noopener noreferrer"
          >Github: taidanh</a
        >
      </li>
      <li>
        <i class="bi bi-linkedin"></i>
        <a href="https://linkedin.com/in/taidanh" target="_blank" rel="noopener noreferrer"
          >LinkedIn: Tai Danh</a
        >
      </li>
      <!-- Add other links as desired, e.g., Twitter, personal blog, etc. -->
    </ul>
  </div>
</template>

<style scoped>
.contact-list {
  list-style-type: none;
  padding-left: 0;
}

.contact-list li {
  margin: 10px 0;
  font-size: 18px;
}

.contact-list i {
  margin-right: 10px;
  color: #007bff; /* This is the default bootstrap primary color. Adjust as needed. */
}

.contact-list a {
  color: #333; /* Adjust color as needed */
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-list a:hover {
  color: #007bff; /* Adjust hover color as needed */
}
</style>
