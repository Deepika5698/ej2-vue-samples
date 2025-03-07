<template>
    <div class="schedule-vue-sample">
        <div class="col-md-12 control-section">
            <div class="content-wrapper">
                <ejs-schedule id="Schedule" ref="ScheduleObj" width='100%' height='550px' :selectedDate="selectedDate" :eventSettings='eventSettings' :readonly="readonly"
                    :cssClass='cssClass' :workHours="workHours">
                    <e-views>
                        <e-view option="Week" :eventTemplate="'weekTemplate'">
                            <template v-slot:weekTemplate="{ data }">
                                <div class="template-wrapper" :style="{background: data.SecondaryColor}">
                                    <div class="subject" :style="{background: data.PrimaryColor}">{{data.Subject}}</div>
                                    <div class="time" :style="{background: data.PrimaryColor}">Time: {{getTimeString(data)}}</div>
                                    <div class="image"><img :src="getImage(data)" /></div>
                                    <div class="description">{{data.Description}}</div>
                                    <div class="footer" :style="{background: data.PrimaryColor}"></div>
                                </div>
                            </template>
                        </e-view>
                        <e-view option="TimelineWeek" :eventTemplate="'monthTemplate'">
                            <template v-slot:monthTemplate="{ data }">
                                <div class="template-wrapper" :style="{background: data.PrimaryColor}">
                                    <div class="subject" :style="{background: data.SecondaryColor, borderColor: data.PrimaryColor}">{{data.Subject}}</div>
                                </div>
                            </template>
                        </e-view>
                    </e-views>
                </ejs-schedule>
            </div>
        </div>
        <div id="action-description">
            <p>This demo showcases the way of customizing the look of events that are displayed on Schedule. Any kind of text,
                images and links can be added to customize the look of the events. Here, the webinar sessions on specific
                topic that are scheduled on respective week days have been displayed on Scheduler across its respective time
                duration.
            </p>
        </div>

        <div id="description">
            <p>
                With the usage of template, the user can format and change the default appearance of the events by making use of the
                <code>template</code> option which is available within the
                <code>eventSettings</code> property. Here, the HTML template design is compiled and then the resultant output
                will be displayed directly on the events.
            </p>
        </div>

    </div>
</template>
<style>
    .schedule-vue-sample .schedule-event-template.e-schedule .e-vertical-view .e-content-wrap .e-appointment,
    .schedule-vue-sample .schedule-event-template.e-schedule .e-timeline-view .e-content-wrap .e-appointment {
        border-radius: 8px;
    }

    .schedule-vue-sample .schedule-event-template.e-schedule .e-vertical-view .e-content-wrap .e-appointment .e-appointment-details {
        padding: 0;
        height: 100%;
    }

    .schedule-vue-sample .schedule-event-template.e-schedule .template-wrapper {
        height: 100%;
        white-space: normal;
    }

    .schedule-vue-sample .schedule-event-template.e-schedule .template-wrapper .image {
        padding: 8px 0 4px;
    }

    .schedule-vue-sample .schedule-event-template.e-schedule .template-wrapper .image img {
        height: 100%;
        width: 100%;
        padding: 10px 25%;
    }

    .schedule-vue-sample .schedule-event-template.e-schedule .template-wrapper .subject {
        font-weight: 600;
        font-size: 15px;
        padding: 4px 4px 4px;
        height: 25px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }

    .schedule-vue-sample .schedule-event-template.e-schedule .template-wrapper .time {
        height: 50px;
    }

    .schedule-vue-sample .schedule-event-template.e-schedule .template-wrapper .time,
    .schedule-vue-sample .schedule-event-template.e-schedule .template-wrapper .description {
        font-size: 12px;
        padding: 4px 6px 4px;
        overflow: hidden;
    }

    .schedule-vue-sample .schedule-event-template.e-schedule .template-wrapper .footer {
        position: absolute;
        bottom: 0;
        height: 50px;
        width: 100%;
    }

    .schedule-vue-sample .schedule-event-template.e-schedule .e-timeline-view .e-appointment .e-appointment-details {
        padding: 0;
        height: 100%;
        width: 100%;
    }

    .schedule-vue-sample .schedule-event-template.e-schedule .e-timeline-view .template-wrapper {
        width: 100%;
    }

    .schedule-vue-sample .schedule-event-template.e-schedule .e-timeline-view .template-wrapper .subject {
        font-size: 16px;
        height: 36px;
        text-align: center;
        border-style: solid;
        border-width: 0 15px;
    }
</style>
<script>
    import Vue from "vue";
    import { Browser, Internationalization, extend } from '@syncfusion/ej2-base';
    import { webinarData } from './datasource';
    import { SchedulePlugin, Week, Day, TimelineViews, Resize, DragAndDrop } from '@syncfusion/ej2-vue-schedule';

    Vue.use(SchedulePlugin);

    var instance = new Internationalization();

    export default Vue.extend({
        data: function () {
            return {
                selectedDate: new Date(2021, 1, 15),
                cssClass: 'schedule-event-template',
                readonly: true,
                workHours: {
                    start: '08:00'
                },
                eventSettings: { dataSource: extend([], webinarData, null, true) }
            }
        },
        methods: {
            getImage: function (data) {
                return 'source/schedule/images/' + data.ImageName + '.svg';
            },
            getTimeString: function (data) {
                return instance.formatDate(data.StartTime, { skeleton: 'hm' }) + " - " + instance.formatDate(data.EndTime, { skeleton: 'hm' });
            }
        },
        provide: {
            schedule: [Week, Day, TimelineViews, Resize, DragAndDrop]
        }
    });

</script>