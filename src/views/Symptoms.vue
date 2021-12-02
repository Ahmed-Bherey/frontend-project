<template>
    <div class="symptoms">
        <SymTextComp/>
        <SymImgComp/>
        <AdviceComp/>
    </div>
</template>
<script>
import SymTextComp from '@/components/symptoms/SymTextComp.vue'
import SymImgComp from '@/components/symptoms/SymImgComp.vue'
import AdviceComp from '@/components/symptoms/AdviceComp.vue'
export default {
    name: 'Symptoms',
    components:{
        SymTextComp,
        SymImgComp,
        AdviceComp
    }
}
</script>