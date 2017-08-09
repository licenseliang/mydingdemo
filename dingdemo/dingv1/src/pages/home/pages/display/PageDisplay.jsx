require('./PageDisplay.less');
import Icons from 'assets/icon';
import logic from './PageLogic';
import { Control } from 'react-keeper';
import { Component, LogicRender } from 'no-flux';  
import { List, InputItem, Flex, Button } from 'antd-mobile';
import { createForm } from 'rc-form';

// import name from 'components/my_components';

class H5NumberInputExample extends Component {
    constructor(props) { super(props, logic);        
       // this.handleSubmit = this.handleSubmit.bind(this);   
        //this.handleInputChange = this.handleInputChange.bind(this);
        //this.execute('initData');
        //this.state={name: "licenseliang", age: 10};
        this.state = this.props.state;
    }


    handleInputChange(value) {
    console.log(this.props)
        this.setState({
          name:value
        });
    }

    

    render() {
        return (
          <div>
            <List>
             
              <InputItem {...this.props} onChange={(ev) => {this.handleInputChange(ev)}}></InputItem>
            </List>

            
          </div>
        );
    }
    

    componentWillMount () {
    }

    componentDidMount () {
        dd.biz.navigation.setTitle({ title:'导航栏标题' })
        
    }

}

const Display = createForm()(H5NumberInputExample);
export default Display ;
