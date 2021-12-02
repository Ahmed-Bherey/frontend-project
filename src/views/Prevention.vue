<template>
    <div class="prevention">
        <PrevTextComp/>
        <PrevTImgComp/>
        <PrevStepsComp/>
        <PrevHandComp/>
    </div>
</template>
<script>
import PrevTextComp from '@/components/prevention/PrevTextComp.vue'
import PrevTImgComp from '@/components/prevention/PrevTImgComp.vue'
import PrevStepsComp from '@/components/prevention/PrevStepsComp.vue'
import PrevHandComp from '@/components/prevention/PrevHandComp.vue'
export default {
    name: 'Prevention',
    components:{
        PrevTextComp,
        PrevTImgComp,
        PrevStepsComp,
        PrevHandComp
    }
}
</script>