import Ding from 'dings';
import { assign } from 'lodash';
import { apiSync } from 'utils'
import PageConst from './PageConst';

export default {
    defaults(props) {
        return {  empty: true, loading: false, ...PageConst, 
            buttonText: ' 当前页面: display ', 
            inputText: '钉钉微应用点击 (手机端)}', 
        }
    },

    initData({setState}){
        setState({name: "licenseliang", age: 10});
    }


    /*
    async getUser({ setState, Api, }) { // Api数据请求
        setState({ loading: true });
        let state = await apiSync( Api.user.get, {},)
        setState( _.assign(state,{ loading: false }));
    },
    */
};
