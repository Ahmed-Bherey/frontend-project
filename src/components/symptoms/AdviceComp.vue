<template>
    <section class="advice-comp">
        <b-container>
            <!--------------------- Start Advice Content ---------------->
            <b-row class="align-items-center"> 
                <!-- con-text -->
                <b-col cols="12" md="6" class="con">
                    <div class="icon"><font-awesome-icon :icon="['fas' , 'exclamation-triangle']"/></div>
                    <p><span>Stay at home and call your doctor:</span> If you think you have been exposed to COVID-19 and develop a fever and any symptoms, such as cough or difficulty breathing, call your healthcare provider as soon as possible for medical advice.</p>
                </b-col>
                <!-- button -->
                <b-col cols="12" md="6" class="button">
                    <a href="#" class="btn btn-primary">Have question? Find answer.</a>
                </b-col>
            </b-row>
            <!--------------------- End Advice Content ---------------->
        </b-container>
    </section>
</template>
<script>
    export default {
        name: 'AdviceComp'
    }
    // let btnn = document.querySelector(".button");
    // btnn.addEventListener("click" , ()=>{
    //     console.log("hi")
    // })
</script>