import PublicDraggable from "../PublicDraggable/PublicDraggable";
import Container from "./Container";

export default function ContainerDraggable() {
  return (
    <PublicDraggable
      name="基础容器"
      imgUrl="https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*MLt3R6m9huoAAAAAAAAAAAAADrJ8AQ/original"
      RenderingComponents={Container}
    />
  );
}
