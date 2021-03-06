import useCounter from '../hooks/use-counter';

import Card from './Card';

const ForwardCounter = () => {
  const counter = useCounter(); // not a singleton !
  return <Card>{counter}</Card>;
};

export default ForwardCounter;
