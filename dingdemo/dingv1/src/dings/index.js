
import jsapi from './jsapi.json';
import { assign } from 'lodash';

const { CORP_ID, AUTH_URL, APP_URL } = require(`config/${ENV}.json`);

class DingClient {

    sync( dingtalkFunciton, parameter ){
        return new Promise( (resolve, reject) => {
            parameter={ ...parameter, ...CORP_ID, 
                onSuccess: res => { resolve(res) },
                onFail: err => { reject(err) } 
            };
            
            dingtalkFunciton( parameter );
        })
    }

    ddConfig(){
        return new Promise( (resolve, reject) => {
            let jsapiArr= new Array();
            for (var i in jsapi ) { jsapi[i]
                ? jsapiArr.push(i)  
                : ""  
            };      

            ( async () => { 

                const res = await fetch( AUTH_URL+"login2/auth2.do",  {   
                    method:"post",
                    mode: "cors", 
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },  
                    body:APP_URL.url
                });

                const text= await res.text();
                const data= JSON.parse(text);

                dd.config({            
                    agentId: data.agentId,
                    corpId: data.corpId,
                    timeStamp:data.timeStamp,
                    nonceStr: data.nonceStr,
                    signature: data.signature,
                    jsApiList: jsapiArr
                })

                dd.error( function (error) {
                alert(JSON.stringify(error)) 
                    reject("DingTalk jsApi concent : ",JSON.stringify(error)) 
                });

                dd.ready( function () { 
                    alert("ready") 
                    resolve('DingTalk jsApi concent  ok: ') 
                });

            })();
        });
    };
};

export default new DingClient();
   