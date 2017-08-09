require('./PageEntry.less');
import Icons from 'assets/icon';
import logic from './PageLogic';
import { Control } from 'react-keeper';
import { Component, LogicRender } from 'no-flux';  
import { WhiteSpace, WingBlank, Flex, Button } from "antd-mobile"; 
import Display from '../display/PageDisplay';

// import name from 'components/my_components';

class Entry extends Component {
    constructor(props) { super(props, logic);        
        this.handleSubmit = this.handleSubmit.bind(this);   
        this.handleChange = this.handleChange.bind(this);
        this.state={name: "licenseliang", age: 10};
    }

    handleSubmit() {
        console.log(this.state);
    }

    handleChange() {
        this.execute( 'setButtonText', '钉钉,使命必达!' )
    }

    render() {
        const {state:{ buttonText, inputText, myConts }} = this; 
        console.log( '常量状态:', myConts );

        return (
            <div className="entry">
                <Display value={this.state.name}>
                </Display>

                <Flex style={{ marginBottom: '0.16rem' }}>
              <Button type="primary" inline style={{ marginRight: '0.08rem', width: '50%' }} onClick={this.handleSubmit}>提交</Button>
              <Button type="primary" inline style={{ marginRight: '0.08rem', width: '50%' }}>取消</Button>
            </Flex>
            </div>
        );
    }

    componentWillMount () {
    }

    componentDidMount () {
        dd.biz.navigation.setTitle({ title:'导航栏标题' })

    }

}

export default Entry ;
