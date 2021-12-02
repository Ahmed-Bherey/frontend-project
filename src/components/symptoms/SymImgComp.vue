<template>
    <section class="img-comp">
        <b-container class="bv-example-row">
            <!------------------- Start Symptoms Boxs ---------------->
            <b-row>
                <!-- start box 1 -->
                <b-col cols="12" md="6" lg="4" class="sym-boxs position-relative">
                    <div class="sym-img position-absolute">
                        <img src="@/assets/images/symptom-a.png" alt="">
                    </div>
                    <div class="sym-text">
                        <h3>Fever</h3>
                        <p><span>High Fever</span> – this means you feel hot to touch on your chest or back (you do not need to
                            measure your temperature). It is a common sign and also may appear in 2-10 days if you
                            affected.</p>
                    </div>
                </b-col>
                <!-- end box 1 -->

                <!-- start box 2 -->
                <b-col cols="12" md="6" lg="4" class="sym-boxs position-relative">
                    <div class="sym-img position-absolute">
                        <img src="@/assets/images/symptom-b.png" alt="">
                    </div>
                    <div class="sym-text">
                        <h3>Fever</h3>
                        <p><span>High Fever</span> – this means you feel hot to touch on your chest or back (you do not need to
                            measure your temperature). It is a common sign and also may appear in 2-10 days if you
                            affected.</p>
                    </div>
                </b-col>
                <!-- end box 2 -->

                <!-- start box 3 -->
                <b-col cols="12" md="6" lg="4" class="sym-boxs position-relative">
                    <div class="sym-img position-absolute">
                        <img src="@/assets/images/symptom-c.png" alt="">
                    </div>
                    <div class="sym-text">
                        <h3>Fever</h3>
                        <p><span>High Fever</span> – this means you feel hot to touch on your chest or back (you do not need to
                            measure your temperature). It is a common sign and also may appear in 2-10 days if you
                            affected.</p>
                    </div>
                </b-col>
                <!-- end box 3 -->
            </b-row>
            <!------------------- End Symptoms Boxs ---------------->
        </b-container>
    </section>
</template>
<script>
    export default {
        name: 'SymImgComp'
    }
</script>
