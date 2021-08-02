<script>
import Options from '@/components/options'
import Balance from '@/components/balance'
import Links from '@/components/links'
import CardMenu from '@/components/card-menu'
import CardDetails from '@/components/card-details'
import RecentTransactions from '@/components/recent-transactions.vue'
import Register from '@/views/register.vue'
export default {
  name: 'Home',
  components: {
    Options,
    Balance,
    Links,
    CardMenu,
    CardDetails,
    RecentTransactions,
    Register,
  },
  data: () => {
    return {
      fullWidth: 0,
      show: false,
    }
  },
  computed: {
    isMobile() {
      return this.fullWidth <= 1023
    },
  },
  methods: {
    handleResize() {
      this.fullWidth = screen.width
    },
  },
  mounted() {
    this.fullWidth = screen.width
    window.addEventListener('resize', this.handleResize)
  },
}
</script>

<template>
  <div class="layout">
    <div
      class="page-container"
      :class="{
        'login-page': !show && isMobile,
        'login-desktop': !show && !isMobile,
      }"
    >
      <div v-if="!show">
        <header class="app-header login-header">
          <img
            v-if="isMobile"
            src="../assets/aspire-card-logo.png"
            alt="Aspire Singapore"
            class="logo"
          />
        </header>
        <main class="main-page">
          <register @updateShowValue="show = $event"></register>
        </main>
      </div>
      <div v-if="show">
        <header class="app-header">
          <div v-if="isMobile" class="header-bar">
            <div class="toolbar row no-wrap items-center">
              <div class="space"></div>
              <img
                src="../assets/aspire-mobile-logo.jpeg"
                alt="Aspire Singapore"
                class="header-logo"
              />
            </div>
          </div>
          <div class="header-content">
            <div class="header-title">
              <balance />
              <links s v-if="isMobile" />
            </div>
          </div>
        </header>
        <main class="main-page">
          <links v-if="!isMobile" />
          <div v-else>
            <card-menu />
            <card-details />
            <recent-transactions />
          </div>
        </main>
        <div v-if="!isMobile" class="text-white menu-container">
          <aside class="menu-bar">
            <div class="menu-content fit full-height">
              <div class="px-xl menu-background scrollarea">
                <div class="scroll relative-position fit hide-scrollbar">
                  <div class="absolute full-width text-justify">
                    <img
                      src="../assets/aspire-desktop-logo.png"
                      class="desktop-sidebar-logo mt-xl mb-lg"
                    />
                    <div class="menu-text">
                      Trusted way of banking for 3,000+ SMEs and startups in
                      Singapore
                    </div>
                    <Options class="options" />
                  </div>
                  <!---->
                </div>
                <!---->
                <div
                  aria-hidden="true"
                  class="
                    scrollarea__bar scrollarea__bar--v
                    absolute-right
                    scrollarea__bar--invisible
                  "
                ></div>
                <div
                  aria-hidden="true"
                  class="
                    scrollarea__thumb scrollarea__thumb--v
                    absolute-right
                    scrollarea__thumb--invisible
                  "
                  style="height: 959px; top: 0px"
                ></div>
              </div>
            </div>
          </aside>
        </div>
        <footer v-if="isMobile">
          <options />
        </footer>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.logo {
  width: 250px;
}
.layout {
  min-height: 800px;
  position: relative;
  width: 100%;
}
.page-container {
  padding-top: 100px;
  padding-left: 350px;
  display: block;
  min-height: 750px;
}
.app-header {
  left: 350px;
  color: #212121;
  background-color: initial;
  top: 0;
  right: 0;
  position: absolute;
}
.header-content {
  padding: 0 1.5rem;
}
.toolbar {
  display: flex;
  position: relative;
  width: 100%;
}
.items-center {
  align-items: center;
}
.options {
  padding-top: 50px;
}
.no-wrap {
  flex-wrap: nowrap;
}
.space {
  flex-grow: 1 !important;
}
.header-logo {
  width: 3.5rem;
  border-style: none;
  margin-right: 25px;
}
.menu-text {
  opacity: 0.5;
  font-size: 16px;
}
.text-justify {
  text-align: justify;
}
.menu-container {
  text-align: center;
  justify-content: center;
  padding-left: 0;
  padding-right: 0;
  min-width: 0;
}
.menu-bar {
  width: 350px;
  transform: translateX(0px);
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  background: #fff;
  z-index: 1000;
  display: block;
}
.full-height {
  height: 100% !important;
}
.fit {
  width: 100% !important;
}
.full-width {
  width: 100% !important;
  margin-left: 0 !important;
  margin-right: 0 !important;
}
.hide-scrollbar {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.hide-scrollbar::-webkit-scrollbar {
  width: 0;
  height: 0;
  display: none;
}
.menu-background {
  background: #0c365a !important;
}
.px-xl {
  padding-left: 48px;
  padding-right: 48px;
}
.desktop-sidebar-logo {
  width: 7.8rem;
  font-size: 50px;
}
.mt-xl {
  margin-top: 20px;
}
.mb-lg {
  margin-bottom: 5px;
}
img {
  border-style: none;
}
.text-white {
  color: #fff !important;
}
.scroll {
  will-change: scroll-position;
  overflow: auto;
}
.scrollarea {
  position: relative;
}
.relative-position {
  position: relative;
}
.text-weight-bolder {
  font-weight: 900;
}
.text-h4 {
  font-size: 1.5rem;
}
.mb-xs {
  margin-bottom: 4px;
}
div {
  font-size: 14px;
}
@media (min-width: 1024px) {
  .header-content[data-v-a7bf3106] {
    padding: 3.75rem 3.75rem 2.5rem;
  }

  .login-desktop {
    padding-top: 0px !important;
    padding-left: 50px !important;
    padding-right: 50px !important;
  }
}
@media (max-width: 1023px) {
  .app-header {
    padding-bottom: 4rem;
    color: #fff;
    background-color: #0c365a !important;
    z-index: 0;
    left: 0;
    position: fixed;
  }
  .page-container {
    padding-top: 470px;
    padding-left: 0px;
  }
  .login-page {
    padding-top: 120px !important;
  }
  footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    box-shadow: 12px 10px 16px #403c3c;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .main-page {
    // margin-top: -2rem;
    border-top-left-radius: 1.5rem;
    border-top-right-radius: 1.5rem;
    // padding: 1.5rem;
    background: #fff;
    min-height: 719px;
    position: relative;
    overflow-y: scroll;
    margin-left: -8px;
    margin-right: -8px;
  }
}
</style>
