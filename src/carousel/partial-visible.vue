<template>
  <div class="control-section partial-carousel-section">
    <div class="col-lg-12">
      <div class="carousel-sample">
        <ejs-carousel cssClass="partial-carousel" :partialVisible="true">
          <e-carousel-items>
            <e-carousel-item :template="itemTemplate1"></e-carousel-item>
            <e-carousel-item :template="itemTemplate2"></e-carousel-item>
            <e-carousel-item :template="itemTemplate3"></e-carousel-item>
            <e-carousel-item :template="itemTemplate4"></e-carousel-item>
            <e-carousel-item :template="itemTemplate5"></e-carousel-item>
          </e-carousel-items>
        </ejs-carousel>
        <div id="action-description">
          <p>
            This sample demonstrates the partial visible functionality of the
            <a
              href="https://www.syncfusion.com/vue-ui-components/vue-carousel"
              target="_blank"
              >vue Carousel</a
            >
            component.
          </p>
        </div>
        <div id="description">
          <p>
            The <code>Vue Carousel</code> component shows partially visible previous/next slides by setting the
            <code>partialVisible</code> property to true. By default, this property is set to <code>false</code>.
          </p>
          <p>See also</p>
          <p>
            <a
              target="_blank"
              href="https://ej2.syncfusion.com/vue/documentation/carousel/getting-started/"
              >Vue Carousel Getting Started</a
            >.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.partial-carousel-section .carousel-sample {
  margin: 0 auto 2em;
  max-width: 650px;
  height: 300px;
}

.partial-carousel .e-carousel-items .e-carousel-item .img-container {
  height: 100%;
  width: 100%;
  margin: 0 10px;
}

.partial-carousel .e-carousel-items .e-carousel-item .img-caption {
  bottom: 4em;
  color: #fff;
  font-size: 12pt;
  height: 2em;
  position: relative;
  padding: 0.3em 1em;
  text-align: center;
  width: 100%;
}

@media screen and (max-width: 480px) {
  .partial-carousel-section .carousel-sample {
    height: 110px;
  }

  .partial-carousel .e-carousel-items .e-carousel-item .img-caption {
    position: absolute;
    top: 0;
    font-size: 12px;
    text-align: left;
  }
}
</style>

<script>
import Vue from "vue";
import { CarouselPlugin } from "@syncfusion/ej2-vue-navigations";

Vue.use(CarouselPlugin);

var itemTemplate1Vue = Vue.component("itemTemplate1", {
  template:
    '<figure class="img-container">' +
    '<img src="src/carousel/images/bridge.jpg" alt="bridge" style="height:100%;width:100%;" />' +
    '<figcaption class="img-caption">Golden Gate Bridge, San Francisco</figcaption>' +
    "</figure>",
  data() {
    return {
      data: {},
    };
  },
});

var itemTemplate2Vue = Vue.component("itemTemplate2", {
  template:
    '<figure class="img-container">' +
    '<img src="src/carousel/images/trees.jpg" alt="trees" style="height:100%;width:100%;" />' +
    '<figcaption class="img-caption">Spring Flower Trees</figcaption>' +
    "</figure>",
  data() {
    return {
      data: {},
    };
  },
});

var itemTemplate3Vue = Vue.component("itemTemplate3", {
  template:
    '<figure class="img-container">' +
    '<img src="src/carousel/images/waterfall.jpg" alt="waterfall" style="height:100%;width:100%;" />' +
    '<figcaption class="img-caption">Oddadalen Waterfalls, Norway</figcaption>' +
    "</figure>",
  data() {
    return {
      data: {},
    };
  },
});

var itemTemplate4Vue = Vue.component("itemTemplate4", {
  template:
    '<figure class="img-container">' +
    '<img src="src/carousel/images/sea.jpg" alt="sea" style="height:100%;width:100%;" />' +
    '<figcaption class="img-caption">Anse Source d`Argent, Seychelles</figcaption>' +
    "</figure>",
  data() {
    return {
      data: {},
    };
  },
});

var itemTemplate5Vue = Vue.component("itemTemplate5", {
  template:
    '<figure class="img-container">' +
    '<img src="src/carousel/images/rocks.jpeg" alt="rocks" style="height:100%;width:100%;" />' +
    '<figcaption class="img-caption">Stonehenge, England</figcaption>' +
    "</figure>",
  data() {
    return {
      data: {},
    };
  },
});

export default Vue.extend({
  data: function () {
    return {
      itemTemplate1: function (e) {
        return {
          template: itemTemplate1Vue,
        };
      },
      itemTemplate2: function (e) {
        return {
          template: itemTemplate2Vue,
        };
      },
      itemTemplate3: function (e) {
        return {
          template: itemTemplate3Vue,
        };
      },
      itemTemplate4: function (e) {
        return {
          template: itemTemplate4Vue,
        };
      },
      itemTemplate5: function (e) {
        return {
          template: itemTemplate5Vue,
        };
      },
    };
  },
  methods: {},
});
</script>
