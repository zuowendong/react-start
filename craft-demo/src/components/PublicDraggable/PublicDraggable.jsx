import { useEditor } from "@craftjs/core";

export default function PublicDraggable({ name, imgUrl, RenderingComponents }) {
  if (!name || !imgUrl || !RenderingComponents) {
    throw new Error("参数校验失败");
  }

  const { connectors } = useEditor();

  return (
    <div
      ref={(ref) => connectors.create(ref, <RenderingComponents />)}
      className="public-draggable"
    >
      <div className="title">{name}</div>
      <div className="public-thumbnail-container">
        <img src={imgUrl} className="public-thumbnail"></img>
      </div>
    </div>
  );
}
