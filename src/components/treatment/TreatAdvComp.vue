<template>
    <section class="TreatAdvComp text-center">
        <b-container class="bv-example-row">
            <b-row>
                <!-- left items -->
                <b-col cols="12" md="6" lg="4" class="protect-l-boxs">
                    <div class="pro-l">
                        <div class="text"><p>Avoid Close Contact</p></div>
                        <div class="icon"><font-awesome-icon :icon="['fas' , 'times-circle']"/></div>
                        <div class="pro-img"><img src="@/assets/images/donts-a.png" alt=""></div>
                    </div>
                    <div class="pro-l">
                        <div class="text"><p>Avoid Close Contact</p></div>
                        <div class="icon"><font-awesome-icon :icon="['fas' , 'times-circle']"/></div>
                        <div class="pro-img"><img src="@/assets/images/donts-a.png" alt=""></div>
                    </div>
                    <div class="pro-l">
                        <div class="text"><p>Avoid Close Contact</p></div>
                        <div class="icon"><font-awesome-icon :icon="['fas' , 'times-circle']"/></div>
                        <div class="pro-img"><img src="@/assets/images/donts-a.png" alt=""></div>
                    </div>
                </b-col>
                <!-- middle img -->
                <b-col cols="12" md="6" lg="4" class="center-img">
                    <img src="@/assets/images/protect.png" alt="">
                </b-col>
                <!-- right items -->
                <b-col cols="12" md="6" lg="4" class="protect-r-boxs">
                    <div class="pro-r">
                        <div class="pro-img"><img src="@/assets/images/dos-a.png" alt=""></div>
                        <div class="icon"><font-awesome-icon :icon="['fas' , 'check-circle']"/></div>
                        <div class="text"><p>Wash Your Hands</p></div>
                    </div>
                    <div class="pro-r">
                        <div class="pro-img"><img src="@/assets/images/dos-b.png" alt=""></div>
                        <div class="icon"><font-awesome-icon :icon="['fas' , 'check-circle']"/></div>
                        <div class="text"><p>Drink Much Watar</p></div>
                    </div>
                    <div class="pro-r">
                        <div class="pro-img"><img src="@/assets/images/dos-c.png" alt=""></div>
                        <div class="icon"><font-awesome-icon :icon="['fas' , 'check-circle']"/></div>
                        <div class="text"><p>Use Face Mask</p></div>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>
<script>
    export default {
        name: 'TreatAdvComp'
    }
</script>