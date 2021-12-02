<template>
    <section class="TreatCareComp">
        <b-container class="bv-example-row">
            <b-row>
                <b-col cols="12" lg="6" class="traet-l-taxt">
                    <h5>BE CAREFULL & STAY SAFE</h5>
                    <h2>TREATMENT FOR CORONAVIRUS</h2>
                    <p><span>To date, there is no vaccine and no specific antiviral medicine to prevent or treat COVID-2019.</span> However, those affected should receive care to relieve symptoms. People with serious illness should be hospitalized. Most patients recover thanks to supportive care.</p>
                    <p>Antibiotics do not help, as they do not work against viruses. Treatment aims to relieve the symptoms while your body fights the illness. You'll need to stay in isolation, away from other people, until you have recovered.</p>
                </b-col>
                <b-col cols="12" lg="6" class="traet-r-taxt">
                    <h6>Self Care</h6>
                    <p>If you have mild symptoms, stay at home until you’ve recovered. You can relieve your symptoms if you:</p>
                    <ul>
                        <li>
                            <div class="treat-icon"><font-awesome-icon :icon="['fas' , 'arrow-right']"/></div>
                            <div class="text">Rest and sleep</div>
                        </li>
                        <li>
                            <div class="treat-icon"><font-awesome-icon :icon="['fas' , 'arrow-right']"/></div>
                            <div class="text">Keep warm</div>
                        </li>
                        <li>
                            <div class="treat-icon"><font-awesome-icon :icon="['fas' , 'arrow-right']"/></div>
                            <div class="text">Drink plenty of liquids</div>
                        </li>
                        <li>
                            <div class="treat-icon"><font-awesome-icon :icon="['fas' , 'arrow-right']"/></div>
                            <div class="text">Use a room humidifier or take a hot shower to help ease a sore throat and cough</div>
                        </li>
                    </ul>
                    <h6>Medical Treatments</h6>
                    <p>If you develop a fever, cough, and have difficulty breathing, promptly seek medical care. Call in advance and tell your health provider of any recent travel or recent contact with travelers.</p>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>
<script>
    export default {
        name: 'TreatCareComp'
    }
</script>