import React, { Component } from 'react';
import { Icon,Modal,Form, Input, Radio,Upload,Button,message,Select } from 'antd';
const FormItem = Form.Item;

/*获取图片等base64地址*/
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}
/*限制上传图片的格式*/
function beforeUpload(file) {
  const isImg = file.type.indexOf('image/')==0;
  if (!isImg) {
    message.error('图片格式不正确!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('单张图片不能大于 2MB!');
  }
  return isImg && isLt2M;
  // return isLt2M;
}

class MyForm extends Component {
	constructor(props) {
		super(props);
		this.state={
			formLayout:'horizontal',
			previewVisible: false,
			previewImage: '',
			fileList: [{
			  uid: -1,
			  name: 'xxx.png',
			  status: 'done',
			  url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
			}],
		}
		this.handleChange=this.handleChange.bind(this);
	}
	render() {
	    const { visible, onCancel, onSave, form, saveing } = this.props;
	    const { formLayout,previewVisible, previewImage, fileList } = this.state;
	    const { getFieldDecorator } = form;
	    const formItemLayout = formLayout === 'horizontal' ? {
	      labelCol: { span: 4 },
	      wrapperCol: { span: 19 },
	    } : null;

	    const uploadButton = (
	      <div>
	        <Icon type="plus" />
	        <div className="ant-upload-text">点击选择</div>
	      </div>
	    );

	    return (
	      <Modal
	        visible={visible}
	        title="编辑"
	        okText="确定"
	        onCancel={ onCancel }
	        width={ 600 }
	        footer={[
	        	<Button 
	        		key="back" 
	        		size="large" 
	        		onClick={onCancel}>
	        			取 消
	        	</Button>,
	        	<Button 
	        		key="submit" 
	        		type="primary" 
	        		size="large" 
	        		loading={saveing} 
	        		onClick={onSave}>
	        			提交
	        	</Button>,
	        ]}
	      >
	        <Form layout={ formLayout }>
	        	<FormItem
	        	  { ...formItemLayout }
	        	  label="图片:"
	        	  className="ant-form-item-required"
	        	>
	        		<Upload
    	              action="//jsonplaceholder.typicode.com/posts/"
    	              listType="picture-card"
    	              fileList={ fileList }
    	              onPreview={ this.handlePreview.bind(this) }
    	              beforeUpload={ beforeUpload }
    	              onChange={ this.handleChange }
    	            >
    	              { fileList.length >= 1 ? null : uploadButton }
    	            </Upload>
    	            <Modal
    	            	visible={ previewVisible } 
    	            	footer={ null } 
    	            	onCancel={ this.handleCancel.bind(this) }
    	            >
	            		<img alt="example" style={{ width: '100%' }} src={ previewImage } />
    	            </Modal>
	        	</FormItem>
                <FormItem 
                	label="链接:" 
                	{...formItemLayout}
                >
                  { 
                  	getFieldDecorator('link',{
                  		rules: [{ 
      	              		required: true, 
      	              		message: '请输入连接'
      	              	}],
                  	})(<Input type="Input" />) 
                  }
                </FormItem>
                <FormItem label="备注:" { ...formItemLayout }>
                  {
                  	getFieldDecorator('beizhu',{
                  		rules: [{ 
      	              		required: true, 
      	              		message: '请输入备注' 
      	              	}],
                  	})(<Input type="textarea" />) 
                  }
                </FormItem>

	        </Form>
	      </Modal>)
	}
	handleChange({ file,fileList,event }){
		console.log(event);
		this.setState({ fileList })
	}
	handlePreview(file){
	    this.setState({
	    	previewImage: file.url || file.thumbUrl,
	    	previewVisible: true,
	    });
	}
	handleCancel() {
		this.setState({ 
			previewVisible: false 
		})
	}
}
const EditForm = Form.create()(MyForm);

export { EditForm }