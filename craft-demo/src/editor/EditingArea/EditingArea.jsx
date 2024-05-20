import { Frame, Element } from "@craftjs/core";

export default function EditingArea() {
  return (
    <>
      <div>11</div>
      <Frame>
        {/* 生成一个div元素，是一个canvas节点，可以编辑*/}
        <Element is="div">
          <div>123</div>
          <div>456</div>
        </Element>
      </Frame>
    </>
  );
}
