<template>
    <section class="PrevTImgComp">
        <b-container class="text-center">
            <b-row>
                <!-- box1 -->
                <b-col cols="12" md="6" lg="4" xl="3">
                    <div class="box-img">
                        <img src="@/assets/images/advice-a.png" alt="">
                    </div>
                    <div class="box-text">
                        <h5>Wash your hands frequently</h5>
                        <p>Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water for at least 20 seconds.</p>
                    </div>
                </b-col>
                <!-- box2 -->
                <b-col cols="12" md="6" lg="4" xl="3">
                    <div class="box-img">
                        <img src="@/assets/images/advice-b.png" alt="">
                    </div>
                    <div class="box-text">
                        <h5>Wash your hands frequently</h5>
                        <p>Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water for at least 20 seconds.</p>
                    </div>
                </b-col>
                <!-- box3 -->
                <b-col cols="12" md="6" lg="4" xl="3">
                    <div class="box-img">
                        <img src="@/assets/images/advice-c.png" alt="">
                    </div>
                    <div class="box-text">
                        <h5>Wash your hands frequently</h5>
                        <p>Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water for at least 20 seconds.</p>
                    </div>
                </b-col>
                <!-- box4 -->
                <b-col cols="12" md="6" lg="4" xl="3">
                    <div class="box-img">
                        <img src="@/assets/images/advice-d.png" alt="">
                    </div>
                    <div class="box-text">
                        <h5>Wash your hands frequently</h5>
                        <p>Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water for at least 20 seconds.</p>
                    </div>
                </b-col>
            </b-row>
            <!-- buttons -->
            <b-row class="row align-items-center">
                <b-col cols="12" md="6" class="check">
                    <a href="#"><button>Check how you wash hand <font-awesome-icon class="prev-icon" :icon="['fas' , 'arrow-right']"/></button></a>
                </b-col>
                <b-col cols="12" md="6" class="q-a">
                    <a href="#">Q&A on Coronaviruses <font-awesome-icon class="prev-icon" :icon="['fas' , 'arrow-right']"/></a>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>
<script>
    export default {
        name: 'PrevTImgComp'
    }
</script>