<template>
    <section class="covid-disease">
        <div class="container">
            <div class="row justify-content-between">
                <!-------------- Start Disease Text ------------------>
                <div class="col-12 col-lg-6 disease">
                    <h5>ABOUT THE DISEASE</h5>
                    <h2>CORONAVIRUS (COVID-19)</h2>
                    <p><span>COVID-19 is a new illness that can affect your lungs and airways. </span> It's caused by a
                        virus called coronavirus. It was discovered in December 2019 in Wuhan, Hubei, China.</p>
                    <p>Common signs of infection include respiratory symptoms, fever, cough, shortness of breath and
                        breathing difficulties. In more severe cases, infection can cause pneumonia, severe acute
                        respiratory syndrome, kidney failure and even death.</p>
                    <p>Standard recommendations to prevent infection spread include regular hand washing, covering mouth
                        and nose when coughing and sneezing, thoroughly cooking meat and eggs. Avoid close contact with
                        anyone showing symptoms of respiratory illness such as coughing and sneezing.</p>
                </div>
                <!-------------- End Disease Text ------------------>

                <!-------------- Srart Disease Nav ------------------>
                <div class="col-12 col-lg-6 know">
                    <ul>
                        <li>What you need to know</li>
                        <a href="#spread">
                            <li class="justify-content-between"><span>How coronavirus is spread</span>
                                <font-awesome-icon :icon="['fas' , 'arrow-right']"/>
                            </li>
                        </a>
                        <a href="#symptoms">
                            <li class="justify-content-between"><span>Symptoms of coronavirus</span>
                                <font-awesome-icon :icon="['fas' , 'arrow-right']"/>
                            </li>
                        </a>
                        <a href="#protect">
                            <li class="justify-content-between"><span>How to protect yourself</span>
                                <font-awesome-icon :icon="['fas' , 'arrow-right']"/>
                            </li>
                        </a>
                        <a href="#treatment">
                            <li class="justify-content-between"><span>Treatment for coronavirus</span>
                                <font-awesome-icon :icon="['fas' , 'arrow-right']"/>
                            </li>
                        </a>
                        <a href="#FAQ">
                            <li class="justify-content-between"><span>Myth-Busters of coronavirus</span>
                                <font-awesome-icon :icon="['fas' , 'arrow-right']"/>
                            </li>
                        </a>
                        <a href="#FAQ">
                            <li class="justify-content-between"><span>Questions & answers</span>
                                <font-awesome-icon :icon="['fas' , 'arrow-right']"/>
                            </li>
                        </a>
                    </ul>
                </div>
                <!-------------- End Disease Nav ------------------>
            </div>
        </div>
    </section>
</template>
<script>
    export default {
        name: 'DiseaseComp'
    }
</script>