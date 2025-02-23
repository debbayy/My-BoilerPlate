import Lottie from "lottie-react";
import { ImageLanding  } from "../../assets";

interface IBirdLoading {
  height?: number;
}

const LandingImage = ({ height }: IBirdLoading) => (
  <Lottie animationData={ImageLanding} loop={true} style={{ height }} />
);

export default LandingImage;
