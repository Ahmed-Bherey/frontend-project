<template>
  <div class="about">
    <Disease/>
    <SpreedComp/>
    <BoxComp/>
  </div>
</template>
<script>
import Disease from '@/components/about/DiseaseComp.vue' 
import SpreedComp from '@/components/about/SpreedComp.vue' 
import BoxComp from '@/components/about/BoxComp.vue' 
export default {
  name:'Home',
    components:{
        Disease,
        SpreedComp,
        BoxComp
    }
}
</script>
