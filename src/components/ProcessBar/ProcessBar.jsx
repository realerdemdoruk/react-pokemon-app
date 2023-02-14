import { Container } from './style';

const ProcessBar = (props) => {
  return (
    <Container width={props.width}>
      <progress value={props.value} max={100} />
      <span>{props.value}</span>
    </Container>
  );
};

export default ProcessBar;
