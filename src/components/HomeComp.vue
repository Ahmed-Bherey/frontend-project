<template>
    <section class="covid-info">
        <div class="container covid">
            <div class="covid-text">
                <!-- Start Covid Text -->
                <div class="covid-name">
                    <h1>CORONA</h1>
                    <span>
                        <h3>COVID-19</h3>
                        <h2>VIRUS</h2>
                    </span>
                </div>
                <p>The Coronavirus (COVID-19) was first reported in Wuhan, Hubei, China in December 2019, the outbreak
                    was later recognized as a pandemic by the World Health Organization (WHO) on 11 March 2020.</p>
                <div class="buttons">
                    <a href="#" class="how">How to Protect
                        <font-awesome-icon :icon="['fas' , 'shield-alt']" /></a>
                    <a href="#" class="about">About Covid-19
                        <font-awesome-icon :icon="['fas' , 'arrow-right']" /></a>
                </div>
                <!-- End Covid Text -->

                <!-- Start Covid Count -->
                <div class="covid-count">
                    <b-row>
                        <b-col cols="12" md="4">
                            <p class="name">WORLDWIDE CASES</p>
                            <p class="count">8,949,671</p>
                        </b-col>
                        <b-col cols="12" md="4">
                            <p class="name">WORLDWIDE CASES</p>
                            <p class="count">8,949,671</p>
                        </b-col>
                        <b-col cols="12" md="4">
                            <p class="name">WORLDWIDE CASES</p>
                            <p class="count">8,949,671</p>
                        </b-col>
                    </b-row>
                </div>
                <!-- End Covid Count -->
                <p class="latest">
                    * Last updated: Jun 21, 2020, 09:24 AM America/Chicago
                </p>
            </div>

            <!-- Start Covid Img -->
            <div class="covid-img">
                <img src="../assets/images/header-a.png" alt="">
            </div>
            <!-- Start Covid Img -->
        </div>
    </section>
</template>
<script>
    export default {
        name: 'HomeComp'
    }
</script>
