<template> 
    <div class="note" :style ="note"></div>
</template>

<script>
export default {
name: 'productdetailspage',
data() {
 return {
  note: {
   backgroundImage: "url(" + require("../../iamges/1.jpg") + ")",
  backgroundRepeat: "no-repeat",
  backgroundSize: "25px auto",
  marginTop: "5px",
  },
 }
},
}
</script>
