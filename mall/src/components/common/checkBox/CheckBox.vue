<template>
  <div class="check-bok">
    <label>
      <input type="checkbox" class="check" v-model="checked" @click="clickCheckBox">&ensp;{{label}}
    </label>
  </div>

</template>

<script>
  export default {
    name: "CheckBox",
    props: {
      label: {
        type: String,
        default: ''
      },
      check: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        checked : this.check
      }
    },
    methods: {
      clickCheckBox(){
        this.checked = !this.checked
        this.$emit('clickCheckBox', this.checked)
      }
    },
    watch: {
      check: function(val, old){
        if(this.checked != this.check) {
          this.checked = this.check
        }
      }
    }
  }
</script>

<style scoped>
  .check {
    width: 18px;
    height: 18px;
    overflow: hidden;
    border-radius: 100%;
    vertical-align: bottom;
    border: 1px solid #ececec;
  }
  .check:checked {
    border: 1px solid var(----color-high-text);
    background: url(~assets/img/detail/check_active.png) no-repeat center;
    background-size: cover;
  }
</style>
