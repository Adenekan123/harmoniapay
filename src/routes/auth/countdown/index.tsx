import Countdown, {CountdownRendererFn } from "react-countdown";

interface IProps {
  seconds: number; // Seconds until the countdown ends. If it's 0, the countdown will end.
  renderer: CountdownRendererFn;
}

const CustomCountdown = (props: IProps) => {
  const { seconds, renderer } = props;

  return <Countdown date={Date.now() + seconds} renderer={renderer} />;
};

export default CustomCountdown;
