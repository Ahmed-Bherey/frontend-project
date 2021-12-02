<template>
    <div class="treatment">
        <TreatCareComp/>
        <TreatTextComp/>
        <TreatAdvComp/>
    </div>
</template>
<script>
import TreatCareComp from '@/components/treatment/TreatCareComp.vue'
import TreatTextComp from '@/components/treatment/TreatTextComp.vue'
import TreatAdvComp from '@/components/treatment/TreatAdvComp.vue'
export default {
    name: 'Treatment',
    components:{
        TreatCareComp,
        TreatTextComp,
        TreatAdvComp
    }
}
</script>