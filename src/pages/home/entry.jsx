import { WingBlank, WhiteSpace } from 'antd-mobile';

const PlaceHolder = props => (
  <div
    style={{
      backgroundColor: '#ebebef',
      color: '#bbb',
      textAlign: 'center',
      height: '0.6rem',
      lineHeight: '0.6rem',
      width: '100%',
    }}
    {...props}
  >Block</div>
);

const entry = () => (
  <div style={{ padding: '0.3rem 0',margin: '0 0 3rem 0' }}>
    <WingBlank><PlaceHolder /></WingBlank>

    <WhiteSpace size="lg" />
    <WingBlank size="md"><PlaceHolder /></WingBlank>

    <WhiteSpace size="lg" />
    <WingBlank size="sm"><PlaceHolder /></WingBlank>
  </div>
);

export default entry;