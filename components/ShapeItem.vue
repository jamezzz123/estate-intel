<template>
  <div class="col-md-3 col-sm-6 m-auto text-center p-2">
    <div
      id="rectangle"
      v-if="shape === 'rectangle'"
      :style="{ background: color }"
      class="m-auto"
    ></div>
    <div
      id="circle"
      :style="{ background: color }"
      v-if="shape === 'circle'"
      class="m-auto"
    ></div>
    <div
      id="triangle-up"
      :style="{ borderBottom: `100px solid ${color}` }"
      v-if="shape === 'triangle'"
      class="m-auto"
    ></div>
    <div
      id="square"
      :style="{ background: color }"
      v-if="shape === 'square'"
      class="m-auto"
    ></div>
    <div
      id="oval"
      :style="{ background: color }"
      v-if="shape === 'oval'"
      class="m-auto"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    shape: {
      type: String,
      default: 'rectangle',
    },
    color: {
      type: String,
      default: 'blue',
    },
  },
}
</script>

<style scoped>
#rectangle {
  width: 150px;
  height: 75px;
  /* background: red; */
}
#circle {
  width: 100px;
  height: 100px;
  /* background: red; */
  border-radius: 50%;
}
#triangle-up {
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  /* border-bottom: 100px solid red; */
}

#square {
  width: 100px;
  height: 100px;
  /* background: red; */
}

#oval {
  width: 150px;
  height: 75px;
  /* background: red; */
  border-radius: 100px / 50px;
}
</style>
