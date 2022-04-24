import "./Card.css";

function Card(props) {
  const classes = "card " + props.className;

  return <div className={classes}>{props.children}</div>;
  // props의 children은 이미 지정된 예약어임. 이걸 써줘야 div로 감싼 root 엘리먼트(warping element)처럼 쓸 수 있음.
  // 자세한 이유는 JSX가 React.createElement()를 사용하기 때문인데 return에는 하나만 반환할 수 있기 때문임.
}

export default Card;
