require('./PageDisplay.less');
import Icons from 'assets/icon';
import logic from './PageLogic';
import { Control } from 'react-keeper';
import { Component, LogicRender } from 'no-flux';  
import { List, InputItem, Flex, Button, NavBar, Icon, DatePicker } from 'antd-mobile';
import { createForm } from 'rc-form';
import moment from 'moment';
import 'moment/locale/zh-cn';

// import name from 'components/my_components';
// 如果不是使用 List.Item 作为 children
const maxDate = moment('2016-12-03 +0800', 'YYYY-MM-DD Z').utcOffset(8);
const minDate = moment('2015-08-06 +0800', 'YYYY-MM-DD Z').utcOffset(8);


class H5NumberInputExample extends Component {
    constructor(props) { super(props, logic);        
        this.handleSubmit = this.handleSubmit.bind(this);   
        //this.handleInputChange = this.handleInputChange.bind(this);
        //this.execute('initData');
        this.state={
                name: "licenseliang", 
                age: 10,
                birthday: moment('2016-12-03 +0800', 'YYYY-MM-DD Z').locale('zh-cn').utcOffset(8),
        fields:[
                {name: 'name', type: 'text', text: '姓名'},
                {name: 'age', type: 'number', text: '年龄'},
                {name: 'birthday', type: 'date', text: '出生日期'}
            ]
        };

    }

    handleSubmit() {
        console.log(this.state);
    }

    handleInputChange(event, vvvv) {
        console.log(event)
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
          [name]: value
        });
    }

     

    render() {
        const { getFieldProps } = this.props.form;
        //const size = fields.length;
        return (
          <div>
          <NavBar 
      mode="钉钉审单"
      onLeftClick={() => console.log('onLeftClick')}
    >NavBar</NavBar>
            <List>
            
            {
            this.state.fields.map((field) => {
            const name = field.name;
            const val = this.state[name];
            const type = field.type;

            if('number' === type){
                return (
                    <InputItem
                        {...getFieldProps('number')}
                        type="number"
                        placeholder={field.text}
                        value={val} onChange={(newVal) => {this.setState({[name]:newVal})}}
                      >{field.text}</InputItem>
                )
            }else if('date' === type){
               return (
                    <DatePicker
                          mode="date"
                          title="选择日期"
                          extra={field.text}
                          {...getFieldProps('date1', {

                          })}
                          minDate={minDate}
                          maxDate={maxDate}
                          name={name} value={val} onChange={(newVal) => {this.setState({[name]:moment(newVal, 'YYYY-MM-DD Z').locale('zh-cn').utcOffset(8)})}}
                        >
                        <List.Item arrow="horizontal">{field.text}</List.Item>
                     </DatePicker>
                )
            }else{
                return (
                    <InputItem placeholder={field.text} name={name} value={val} onChange={(newVal) => {this.setState({[name]:newVal})}}>{field.text}</InputItem>
                )
            }
                
            
            
            


            })}
            </List>

            <Flex style={{ position:'fixed',bottom:'0',width:'100%' }}>
              <Button type="primary" inline style={{ marginRight: '0.08rem', width: '50%' }} onClick={this.handleSubmit}>提交</Button>
              <Button type="primary" inline style={{  width: '50%' }}>取消</Button>
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

const Display = createForm()(H5NumberInputExample);
export default Display ;
