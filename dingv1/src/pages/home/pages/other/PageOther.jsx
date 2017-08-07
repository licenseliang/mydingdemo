import { List, InputItem, Icon, Button, Flex, WingBlank, WhiteSpace } from 'antd-mobile';
import React from 'react';
import { Control, Route } from 'react-keeper';
import { createForm } from 'rc-form';


class OtherHtml extends React.Component {
    
    constructor(props) {
        super(props);   
    }

    backToList = function() {
        Control.go('/home/nav',);
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

  selectDepartment = () => {
    dd.biz.contact.departmentsPicker({
    title:"测试标题",            //标题
    corpId:"ding78ec64c1c3a39e30",              //企业的corpId
    multiple:true,            //是否多选
    limitTips:"超出了",          //超过限定人数返回提示
    maxDepartments:100,            //最大选择部门数量
    pickedDepartments:[],          //已选部门
    disabledDepartments:[],        //不可选部门
    requiredDepartments:[],        //必选部门（不可取消选中状态）
    appId:86117672,              //微应用的Id
    permissionType:"GLOBAL",          //选人权限，目前只有GLOBAL这个参数
    onSuccess: function(result) {
        console.log(JSON.stringify(result));
        /**
        {
            userCount:1,                              //选择人数
            departmentsCount:1，//选择的部门数量
            departments:[{"id":,"name":"","number":}]//返回已选部门列表，列表中每个对象包含id（部门id）、name（部门名称）、number（部门人数）
        }
        */
    },
   onFail : function(err) {
   alert(JSON.stringify(err));
      console.log(JSON.stringify(err));
   }
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
              <Button type="primary" inline  style={{ width: '50%' }} icon="check-circle-o" onClick={() => {this.selectDepartment()}}>
                  提交
              </Button>
              <Button type="ghost" inline  style={{ width: '50%'}} onClick={() => { this.backToList()}} icon="cross-circle">
                   取消
              </Button>
            </Flex>
          </div>

          
        )
    }

};
const other = createForm()(OtherHtml);
export default other;