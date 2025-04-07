import { Link } from "react-router-dom";

import GradientText from "@/reactbits/GradiantText.tsx";

export default function ButtonProjects() {
  return (
    <GradientText
      animationSpeed={3}
      className="custom-class"
      colors={["#6020A0", "#FF4ECD", "#AE7EDE", "#c7aaf0", "#F2EAFA"]}
      showBorder={true}
    >
      <Link style={{ whiteSpace: "nowrap" }} to="/projects">
        Mes projets
      </Link>
    </GradientText>
  );
}
