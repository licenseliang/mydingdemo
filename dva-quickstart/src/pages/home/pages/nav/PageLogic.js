import Ding from 'dings';
import { assign } from 'lodash';
import { apiSync } from 'utils'
import PageConst from './PageConst';

export default {
    defaults(props) {
        return {  empty: true, loading: false, ...PageConst, 
            buttonText: ' 当前页面: nav ', 
            inputText: '钉钉微应用点击 (手机端)}', 
        }
    },

    setButtonText({setState}, value) {
        setState({ buttonText: value })
        dd.biz.contact.departmentsPicker({
            title:"测试标题",            //标题
            corpId:"ding78ec64c1c3a39e30",              //企业的corpId
            multiple:true,            //是否多选
            limitTips:"超出了",          //超过限定人数返回提示
            maxDepartments:100,            //最大选择部门数量
            pickedDepartments:[],          //已选部门
            disabledDepartments:[],        //不可选部门
            requiredDepartments:[],        //必选部门（不可取消选中状态）
            appId:158,              //微应用的Id
            permissionType:"GLOBAL",          //选人权限，目前只有GLOBAL这个参数
            onSuccess: function(result) {
                alert(JSON.stringify(result));
                /**
                {
                    userCount:1,                              //选择人数
                    departmentsCount:1，//选择的部门数量
                    departments:[{"id":,"name":"","number":}]//返回已选部门列表，列表中每个对象包含id（部门id）、name（部门名称）、number（部门人数）
                }
                */
            },
           onFail : function(err) {}
        });
    },

    printState({ getState }) {
        console.log( '当前状态:', getState() )
    },

    async inputText({setState, getState}) {
        const p = { message: "随便输入写什么吧!", title: "提示", buttonLabels: ['确定', '取消'], };
        const res = await Ding.sync( dd.device.notification.prompt, p );
        setState({ inputText: res.value});
    }

    /*
    async getUser({ setState, Api, }) { // Api数据请求
        setState({ loading: true });
        let state = await apiSync( Api.user.get, {},)
        setState( _.assign(state,{ loading: false }));
    },
    */
};
