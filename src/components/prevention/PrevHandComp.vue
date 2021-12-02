<template>
    <section class="PrevHandComp">
        <div class="container">
            <div class="hand text-center">
                <h2>Follow steps to wash hands</h2>
                <a href="#">Why do I need wash hand
                    <font-awesome-icon class="prev-icon" :icon="['fas' , 'arrow-right']" /></a>
            </div>
            <b-row class="hand-imgs text-center">
                <b-col cols="12" md="6" lg="4" xl="2">
                    <div class="hand-img">
                        <img src="@/assets/images/hand-a.png" alt="">
                    </div>
                    <div class="hand-text">
                        <p>Soap on Hand</p>
                    </div>
                </b-col>
                <b-col cols="12" md="6" lg="4" xl="2">
                    <div class="hand-img">
                        <img src="@/assets/images/hand-b.png" alt="">
                    </div>
                    <div class="hand-text">
                        <p>Palm to Palm</p> 
                    </div>
                </b-col>
                <b-col cols="12" md="6" lg="4" xl="2">
                    <div class="hand-img">
                        <img src="@/assets/images/hand-c.png" alt="">
                    </div>
                    <div class="hand-text">
                        <p>Between Fingers</p> 
                    </div>
                </b-col>
                <b-col cols="12" md="6" lg="4" xl="2">
                    <div class="hand-img">
                        <img src="@/assets/images/hand-d.png" alt="">
                    </div>
                    <div class="hand-text">
                        <p>Back to Hands</p> 
                    </div>
                </b-col>
                <b-col cols="12" md="6" lg="4" xl="2">
                    <div class="hand-img">
                        <img src="@/assets/images/hand-e.png" alt="">
                    </div>
                    <div class="hand-text">
                        <p>Clean with Water</p> 
                    </div>
                </b-col>
                <b-col cols="12" md="6" lg="4" xl="2">
                    <div class="hand-img">
                        <img src="@/assets/images/hand-f.png" alt="">
                    </div>
                    <div class="hand-text">
                        <p>Focus on Wrist</p> 
                    </div>
                </b-col>
            </b-row>
        </div>
    </section>
</template>
<script>
    export default {
        name: 'PrevHandComp'
    }
</script>