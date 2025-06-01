<template>
  <v-footer
    class="google-footer"
    color="grey-lighten-4"
    app
  >
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <div class="d-flex flex-wrap">
            <v-btn
              variant="text"
              size="small"
              class="footer-link"
            >
              About
            </v-btn>
            <v-btn
              variant="text"
              size="small"
              class="footer-link"
            >
              Advertising
            </v-btn>
            <v-btn
              variant="text"
              size="small"
              class="footer-link"
            >
              Business
            </v-btn>
            <v-btn
              variant="text"
              size="small"
              class="footer-link"
            >
              How Search works
            </v-btn>
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <div class="d-flex flex-wrap justify-md-end">
            <v-btn
              variant="text"
              size="small"
              class="footer-link"
            >
              Privacy
            </v-btn>
            <v-btn
              variant="text"
              size="small"
              class="footer-link"
            >
              Terms
            </v-btn>
            <v-btn
              variant="text"
              size="small"
              class="footer-link"
            >
              Settings
            </v-btn>
          </div>
        </v-col>
      </v-row>
      
      <v-divider class="my-4" />
      
      <div class="text-center">
        <div class="text-caption text-medium-emphasis">
          Carbon neutral since 2007
        </div>
      </div>
    </v-container>
  </v-footer>
</template>

<script setup>
// No props or logic needed for now
</script>

<style scoped>
.google-footer {
  border-top: 1px solid #dadce0;
  background-color: #f2f2f2;
}

.footer-link {
  color: #70757a;
  text-transform: none;
  font-size: 14px;
  height: auto;
  min-height: 32px;
  padding: 8px 12px;
}

.footer-link:hover {
  color: #202124;
  text-decoration: underline;
}
</style>
