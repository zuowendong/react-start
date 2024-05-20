import "./layout.css";

export default function Layout({ LeftMenu, Editor, RightMenu }) {
  if (!LeftMenu) {
    console.warn("LeftMenu没有传入");
  }
  if (!Editor) {
    console.warn("Editor没有传入");
  }
  if (!RightMenu) {
    console.warn("RightMenu没有传入");
  }

  return (
    <div className="layout">
      <div className="header">craft-demo</div>
      <div className="left-menu">{LeftMenu ? <LeftMenu /> : null}</div>
      <div className="editor">{Editor ? <Editor /> : null}</div>
      <div className="right-menu">{RightMenu ? <RightMenu /> : null}</div>
    </div>
  );
}
