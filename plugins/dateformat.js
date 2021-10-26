import Vue from "vue"
Vue.config.devtools = true

Vue.filter("dateformat", value => {
  return new Date(value).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })
})
