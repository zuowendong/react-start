import { useNode } from "@craftjs/core";
import { Form, Input, InputNumber } from "antd";
import { useEffect } from "react";

export default function ContainerSetting() {
  const {
    props,
    actions: { setProp },
  } = useNode((node) => ({
    props: node.data.props,
  }));

  const { backgroundImage, height } = props;

  // 定义一个回调函数，用于处理表单数据改变时的逻辑
  const handleFormChange = (changedValues, allValues) => {
    const { backgroundImage, height } = allValues;
    //将表单中的数据传给编辑区中的渲染组件
    setProp((props) => {
      props.backgroundImage = backgroundImage ? backgroundImage : "";
      props.height = height ? height : 0;
    }, 500);
  };

  console.log("设置组件的参数", props);

  const [form] = Form.useForm();

  useEffect(() => {
    let formValue = {
      backgroundImage,
      height: height ? height : 0,
    };
    form.setFieldsValue(formValue);
  }, []);

  return (
    // 使用Form组件，绑定表单实例和回调函数
    <Form form={form} onValuesChange={handleFormChange}>
      <Form.Item label="背景图" name="backgroundImage">
        <Input />
      </Form.Item>
      <Form.Item label="高度" name="height">
        <InputNumber />
      </Form.Item>
    </Form>
  );
}
