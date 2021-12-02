<template>
    <section class="box-spread">
        <b-container class="bv-example-row">
            <!--------------- Start Spread Boxs --------------->
            <b-row>
                <!-- start box 1 -->
                <b-col cols="12" md="6" lg="4" class="boxes">
                    <div class="box-img">
                        <img src="@/assets/images/spread-a.png" alt="">
                    </div>
                    <div class="img-con">
                        <h3>Person-to-person spread as close contact with infected</h3>
                        <p>The coronavirus is thought to spread mainly from person to person. This can happen between people who are in close contact with one another.</p>
                    </div>
                </b-col>
                <!-- end box 1 -->

                <!-- start box 2 -->
                <b-col cols="12" md="6" lg="4" class="boxes">
                    <div class="box-img">
                        <img src="@/assets/images/spread-b.png" alt="">
                    </div>
                    <div class="img-con">
                        <h3>Person-to-person spread as close contact with infected</h3>
                        <p>The coronavirus is thought to spread mainly from person to person. This can happen between people who are in close contact with one another.</p>
                    </div>
                </b-col>
                <!-- end box 2 -->

                <!-- start box 3 -->
                <b-col cols="12" md="6" lg="4" class="boxes">
                    <div class="box-img">
                        <img src="@/assets/images/spread-c.png" alt="">
                    </div>
                    <div class="img-con">
                        <h3>Person-to-person spread as close contact with infected</h3>
                        <p>The coronavirus is thought to spread mainly from person to person. This can happen between people who are in close contact with one another.</p>
                    </div>
                </b-col>
                <!-- end box 3 -->
            </b-row>
            <!--------------- End Spread Boxs --------------->

            <!-- spread buttons -->
            <div class="button">
                <a href="#" class="btn btn-primary"><font-awesome-icon :icon="['fas' , 'question-circle']"/> Have question about spreading?</a>
            </div>
        </b-container>
    </section>
</template>
<script>
export default {
    name: 'BoxComp'
}
</script>