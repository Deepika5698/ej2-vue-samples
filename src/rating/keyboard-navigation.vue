<template>
    <div class="col-lg-12 control-section">
        <div id="nav-rating-control">
            <ejs-rating id='rating1' value="3.0" :allowReset="true"/> 
        </div>
        <div id="action-description">
            <p>
                This demo showcases the keyboard shortcuts applicable in the Rating component.
            </p>
        </div>
        <div id="description">
            <i>The below key combinations can be used in Rating to perform various actions. </i>
            <ul>
                <li>
                    <span class="key-class"><kbd>Tab</kbd></span>
                    <span> - Focus.</span>
                </li>
                <li>
                    <span class="key-class"><kbd>Left Arrow</kbd></span>
                    <span> - Increase in RTL and decrease in LTR.</span>
                </li>
                <li>
                    <span class="key-class"><kbd>Right Arrow</kbd></span>
                    <span> - Decrease in RTL and increase in LTR.</span>
                </li>
                <li>
                    <span class="key-class"><kbd>Down arrow</kbd></span>
                    <span> - Decreases the value.</span>
                </li>
                <li>
                    <span class="key-class"><kbd>Up arrow</kbd></span>
                    <span> - Increases the value.</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<style scoped>
    #nav-rating-control {
        text-align: center;
        margin: 6% auto;
    }
</style>
<script>
import Vue from "vue";
import { RatingPlugin } from "@syncfusion/ej2-vue-inputs";

Vue.use(RatingPlugin);

export default Vue.extend({});
</script>
