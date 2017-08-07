import { List, InputItem, Icon, Button, Flex, WingBlank, WhiteSpace } from 'antd-mobile';
import React from 'react';
import logic from './PageLogic';
import { Control, Route } from 'react-keeper';
import { createForm } from 'rc-form';


class entryHtml extends React.Component {
	
	constructor(props) {
		super(props, logic);   
	}

	backToList = function() {
		Control.go('/home',);
	}

	state = {
	    moneyfocused: false,
	}

	onErrorClick = () => {
    if (this.state.hasError) {
      Toast.info('Please enter 11 digits');
    }
  }
  onChange = (value) => {
    if (value.replace(/\s/g, '').length < 11) {
      this.setState({
        hasError: true,
      });
    } else {
      this.setState({
        hasError: false,
      });
    }
    this.setState({
      value,
    });
  }

	render() {

		const { getFieldProps } = this.props.form;

		return (
		
		 <div>
        <List renderHeader={() => 'Format'}>
          <InputItem
            {...getFieldProps('money', {
              initialValue: '222',
            })}
            type="money"
            placeholder="money keyboard"
            clear
            maxLength={10}
            locale={{ confirmLabel: '计算' }}
          />
          <InputItem placeholder="22">普通键盘</InputItem>
          <InputItem
            {...getFieldProps('money2', {
              normalize: (v, prev) => {
                if (v && !/^(([1-9]\d*)|0)(\.\d{0,2}?)?$/.test(v)) {
                  if (v === '.') {
                    return '0.';
                  }
                  return prev;
                }
                return v;
              },
            })}
            type="money"
            placeholder="money format"
            onFocus={() => {
              this.setState({
                moneyfocused: false,
              });
            }}
            focused={this.state.moneyfocused}
          >数字键盘</InputItem>
          <List.Item>
            <div
              style={{ width: '100%', color: '#108ee9', textAlign: 'center' }}
              onClick={() => {
                this.setState({
                  moneyfocused: true,
                });
              }}
            >
              click to focus
            </div>
          </List.Item>
          <InputItem
            {...getFieldProps('moneynatural', {
              normalize: (v) => {
                if (v && (v.charAt(0) === '0' || v.indexOf('.') >= 0)) {
                  return v.replace(/^0*(\d*).*$/, '$1');
                }
                return v;
              },
            })}
            type="money"
            placeholder="money format natural"
          >正整数</InputItem>
        </List>

        <List renderHeader={() => 'Confirm when typing'}>
          <InputItem
            type="phone"
            placeholder="input your phone"
            error={this.state.hasError}
            onErrorClick={this.onErrorClick}
            onChange={this.onChange}
            value={this.state.value}
          >手机号码</InputItem>
        </List>

		    <Flex style={{ position: 'fixed', bottom: '0', width: '100%', zIndex: '100'}}>
	          <Button type="primary" inline  style={{ width: '50%' }} icon="check-circle-o">
		          提交
	          </Button>
	          <Button type="ghost" inline  style={{ width: '50%'}} onClick={() => { this.backToList()}} >
	          	<Icon type="cross-circle" size="xs" color="red" style={{marginTop: '0.2rem'}} />
	               取消
	          </Button>
          	</Flex>
		  </div>

		  
		)
	}

};
const entry = createForm()(entryHtml);
export default entry;