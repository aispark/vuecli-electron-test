import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false


const edge = require('electron-edge-js')
      
var helloWorld = edge.func(`
    async (input) => { 
        return ".NET Welcomes " + input.ToString(); 
    }
`);
 
const add7 = edge.func(`
    using System.Threading.Tasks;
 
    public class Startup
    {
        public async Task<object> Invoke(object input)
        {
            int v = (int)input;
            return Helper.AddSeven(v);
        }
    }
 
    static class Helper
    {
        public static int AddSeven(int v) 
        {
            return v + 7;
        }
    }
`);

const path = require('path')

const projectRootPath = path.resolve(__dirname)

// var add8 = edge.func(require('path').join(__dirname, '../lib/ClassLibrary1.dll'));

helloWorld('JavaScript', function (error, result) {
    if (error) throw error;
    console.log(result);
});  


add7(8, (error, result) => {
    if (error) throw error;
    console.log(result);
});  
add7(8, (error, result) => {
    if (error) throw error;
    console.log(result);
});  


    

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
