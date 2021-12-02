<template>
    <div class="news">
        <NewTextComp/>
        <NewItemComp/>
    </div>
</template>
<script>
import NewTextComp from '@/components/news/NewTextComp.vue'
import NewItemComp from '@/components/news/NewItemComp.vue'
export default {
    name: 'News',
    components:{
        NewTextComp,
        NewItemComp
    }
}
</script>