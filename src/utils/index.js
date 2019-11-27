import {writeAuthCode} from './cql'

export default{
    install(Vue){
        Vue.prototype.$writeAuthCode =writeAuthCode
    }
}