<template>
  <div class="container">
    <h1>Filters</h1>
    <div class="row">
      <div class="col">
        <h4>Shape</h4>
        <button
          type="button"
          class="border btn btn-sm rounded-pill mr-2"
          v-for="(shape, index) in shapes"
          :key="index"
          :class="shapeFilter.includes(shape) ? 'btn-dark' : 'btn-light'"
          @click="shapeClick(shape)"
        >
          {{ shape }}
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <h4>Color</h4>
      </div>
      <div class="col d-flex">
        <div
          v-for="(color, index) in colors"
          :key="index"
          :style="{ backgroundColor: color }"
          :class="colorFilter.includes(color) ? 'active-color' : ''"
          @click="colorClick(color)"
          class="rounded rounded-circle circle-size mx-1"
        ></div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h3 class="text-capitalize">{{ title }} : ({{ filteredItems.length }})</h3>
      </div>
    </div>
    <div class="row">
      <ShapeItem
        v-for="(item, index) in filteredItems"
        :key="index"
        :shape="item.shape"
        :color="item.color"
      ></ShapeItem>
    </div>
  </div>
</template>

<script>
import data from '~/assets/data.json'
export default {
  data() {
    return {
      items: data,
      shapes: ['oval', 'rectangle', 'circle', 'square', 'triangle'],
      colors: ['red', 'green', 'blue', 'yellow'],
      shapeFilter: [],
      colorFilter: [],
    }
  },
  computed: {
    filteredItems() {
      return this.items.filter((item) => {
        if (!this.shapeFilter.length > 0 && !this.colorFilter.length > 0) {
          return item
        }  

        else if(!this.shapeFilter.length > 0 && this.colorFilter.length > 0 || this.shapeFilter.length > 0 && !this.colorFilter.length > 0) {
         return this.shapeFilter.includes(item.shape) || this.colorFilter.includes(item.color)
        }
         
        return (
          this.shapeFilter.includes(item.shape) &&
          this.colorFilter.includes(item.color)
        )
      })
    },
    title() {
      // when there is no filter
      if (this.shapeFilter.length === 0 && this.colorFilter.length === 0) {
          return 'All items'
        }
      if (this.shapeFilter.length === this.shapes.length && this.colorFilter.length === this.colors.length) {
        return 'All Items'
      }

      if (this.shapeFilter.length === 1  && this.colorFilter.length === 1) {
        return `${this.shapeFilter[0]} ${this.colorFilter[0]} items`;
      }


      if (this.shapeFilter.length > 0  && this.colorFilter.length === 1) {
        return `Multiple ${this.colorFilter[0]} items`;
      }

      if (this.colorFilter.length > 0  && this.shapeFilter.length === 1) {
        return `Multiple ${this.shapeFilter[0]} items`;
      }




      if (this.shapeFilter.length === this.shapes.length && this.colorFilter.length === 1) {
        return `All ${this.colorFilter[0]} items`;
      }

      if (this.colorFilter.length === this.colors.length && this.shapeFilter.length === 1) {
        return `All ${this.shapeFilter[0]} items`;
      }
      

      

      else {
        return 'Multiple Items'
      }
      // when there is shape filter

    },
  },
  methods: {
    shapeClick(shape) {
      if (this.shapeFilter.includes(shape)) {
        this.shapeFilter = this.shapeFilter.filter((item) => item !== shape)
      } else {
        this.shapeFilter.push(shape)
      }
      // this.filter()
    },
    colorClick(color) {
      if (this.colorFilter.includes(color)) {
        this.colorFilter = this.colorFilter.filter((item) => item !== color)
      } else {
        this.colorFilter.push(color)
      }
      // this.filter()
    },
  },
}
</script>

<style scoped>
.circle-size {
  height: 50px;
  width: 50px;
}
.active-color {
  border: 3px solid black;
}
</style>
