const app = {
  template: `
    <div>
    <h2>{{message}}</h2>
    <button @click="btnClick">按钮</button>
</div>
  `,
  data() {
    return {
      message: 'vue index'
    };
  },
  methods: {
    btnClick(){
      console.log('button click');
    }
  }
}

export default app;