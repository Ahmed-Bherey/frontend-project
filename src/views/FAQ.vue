<template>
    <div class="faq">
        <FaqTextComp/>
        <FaqItemComp/>
    </div>
</template>
<script>
import FaqTextComp from '@/components/faq/FaqTextComp.vue'
import FaqItemComp from '@/components/faq/FaqItemComp.vue'
export default {
    name: 'FAQ',
    components:{
        FaqTextComp,
        FaqItemComp
    }
}
</script>