<template>
    <section class="PrevStepsComp">
        <b-container class="prev-parent">
            <b-row>
                <!-- steps text -->
                <b-col cols="12" md="6" class="col-r">
                    <div class="steps-text">
                        <h2>Take steps to protect others</h2>
                        <ul>
                            <li>
                                <div class="step-icon"><font-awesome-icon :icon="['fas' , 'check-circle']"/></div>
                                <div>
                                    <p><span>Cover your mouth and nose</span> – with a tissue when you cough or sneeze (throw used tissues in the trash) or use the inside of your elbow.</p>
                                </div>
                            </li>
                            <li>
                                <div class="step-icon"><font-awesome-icon :icon="['fas' , 'check-circle']"/></div>
                                <div>
                                    <p><span>Wear a facemask if you are sick</span> – You should wear a facemask when you are around other people (e.g., sharing a room or vehicle) and before you enter a healthcare provider’s</p>
                                </div>
                            </li>
                            <li>
                                <div class="step-icon"><font-awesome-icon :icon="['fas' , 'check-circle']"/></div>
                                <div>
                                    <p><span>Clean AND disinfect frequently touched surfaces daily</span> – This includes phones, tables, light switches, doorknobs, countertops, handles, desks, toilets, faucets, and sinks.</p>
                                </div>
                            </li>
                            <li>
                                <div class="step-icon"><font-awesome-icon :icon="['fas' , 'check-circle']"/></div>
                                <div>
                                    <p><span>Clean the dirty surfaces</span> – Use detergent or soap and water prior to disinfection.</p>
                                </div>
                            </li>
                            <li>
                                <div class="step-icon"><font-awesome-icon :icon="['fas' , 'check-circle']"/></div>
                                <div>
                                    <p><span>Stay informed about the local COVID-19 situation</span> – Get up-to-date information about local COVID-19 activity from public health officials.</p>
                                </div>
                            </li>
                            <li>
                                <div class="step-icon"><font-awesome-icon :icon="['fas' , 'check-circle']"/></div>
                                <div>
                                    <p><span>Dedicated, lined trash can</span> – If possible, dedicate a lined trash can for the ill person. Use gloves when removing garbage bags, and handling & disposing of trash.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </b-col>
                <!-- steps img -->
                <b-col cols="12" md="6" class="col-l">
                    <div class="prev-img">
                        <img src="@/assets/images/steps.png" alt="">
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>
<script>
    export default {
        name: 'PrevStepsComp'
    }
</script>