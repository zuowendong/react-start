import { Editor } from "@craftjs/core";
import Layout from "../Layout/Layout";
import { editableComponents } from "../components";
import LeftMenu from "../editor/LeftMenu/LeftMenu";
import EditingArea from "../editor/EditingArea/EditingArea";
import RightMenu from "../editor/RightMenu/RightMenu";
import RenderNode from "../editor/RenderNode/RenderNode";

export default function App() {
  return (
    <Editor resolver={editableComponents} onRender={RenderNode}>
      <Layout LeftMenu={LeftMenu} Editor={EditingArea} RightMenu={RightMenu} />
    </Editor>
  );
}
