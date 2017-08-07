require('./PageDisplay.less');
import Icons from 'assets/icon';
import logic from './PageLogic';
import { Control } from 'react-keeper';
import { Component, LogicRender } from 'no-flux';  
import { List, InputItem } from 'antd-mobile';
import { createForm } from 'rc-form';

// import name from 'components/my_components';

class H5NumberInputExample extends Component {
    constructor(props) { super(props, logic);        
        this.handleClick = this.handleClick.bind(this);   
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick( value ) {
        this.execute( 'inputText', value )
    }

    handleChange() {
        this.execute( 'setButtonText', '钉钉,使命必达!' )
    }

    state = {
        moneyfocused: false,
      }

    render() {
        const { getFieldProps } = this.props.form;
        return (
          <div>
            <List>
             
              <InputItem placeholder="22">普通键盘</InputItem>
              
            </List>
          </div>
        );
    }
    

    componentWillMount () {
    }

    componentDidMount () {
        dd.biz.navigation.setTitle({ title:'导航栏标题' })
        this.execute( 'printState' )
    }

}

const Display = createForm()(H5NumberInputExample);
export default Display ;
