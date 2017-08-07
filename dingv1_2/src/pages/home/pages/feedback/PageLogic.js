import Ding from 'dings';
import { assign } from 'lodash';
import { apiSync } from 'utils'
import PageConst from './PageConst';

export default {
    defaults(props) {
        return {  empty: true, loading: false, ...PageConst, 
            buttonText: ' 当前页面: feedback ', 
            inputText: '钉钉微应用点击 (手机端)}', 
        }
    },

    setButtonText({setState}, value) {
        setState({ buttonText: value })
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
