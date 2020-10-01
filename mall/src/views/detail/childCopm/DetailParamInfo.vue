<template>
  <div v-if="Object.keys(paramInfo).length !== 0" class="params-wrap">
    <div v-for="(item, index) in paramInfo.rule">
      <div v-for="(list, index) in item" class="flex">
        <div v-for="(listitem, index) in list" class="rule-list-item">
          {{listitem}}
        </div>
      </div>
    </div>
    <div v-for="(item, key, index) in paramInfo.info" :key="key" class="flex info-list-wrap">
      <div class="info-list-tit">{{key}}</div>
      <div class="info-list-value">{{item}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'DetailParamInfo',
    props: {
      paramInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .params-wrap {
    border-top: 4px solid #ececec;
    border-bottom: 4px solid #ececec;
  }
  .rule-list-item {
    font-size: 12px;
    width: 20%;
    border-bottom: 1px solid #ececec;
    padding: 10px 4px;
  }
  .info-list-wrap {
    font-size: 14px;;
    border-bottom: 1px solid #ececec;
    padding: 10px 4px;
    line-height: 20px;
    .info-list-tit {
      width: 18%;
    }
    .info-list-value {
      color: #eb4868;
    }
  }
</style>
