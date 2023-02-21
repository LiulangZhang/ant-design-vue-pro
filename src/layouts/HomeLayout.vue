<template>
  <div>
    <div class="header_midil">
      <div class="container-width">
        <div class="row d_flex">
          <div class="col-lg-9 col-md-12 col-sm-12">
            <nav class="navigation navbar navbar-expand-md navbar-dark">
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarsExample04"
                aria-controls="navbarsExample04"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarsExample04">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                    <a class="nav-link" href="index.html">首页</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="about.html">关于我们</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="wedo.html">联系我们 </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="blog.html">产品介绍 </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="portfolio.html">Portfolio</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="contact.html">Contact Us</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>

    <router-view />
  </div>
</template>

<script>
export default {
  name: 'BlankLayout'
}
</script>

<style scoped>
@import 'bootstrap/dist/css/bootstrap.css';
@import 'bootstrap/dist/css/bootstrap.min.css';
@import '../../public/css/style.css';
</style>
