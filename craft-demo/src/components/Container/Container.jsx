import { useNode } from "@craftjs/core";
import ContainerSetting from "./ContainerSetting";

function Container({ backgroundImage, height }) {
  console.log("渲染组件的参数：", backgroundImage, height);

  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <div
      ref={(ref) => connect(drag(ref))}
      className="base-container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height: `${height}rem`,
      }}
    ></div>
  );
}

Container.craft = {
  custom: {
    name: "Container",
  },
  related: {
    settings: ContainerSetting,
  },
};

export default Container;
