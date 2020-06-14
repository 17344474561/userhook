import React, { useEffect , useState } from 'react'
import { Table , Button , Modal} from 'antd';
import { connect } from 'react-redux';
import { homDatas } from '@/actions/home'


function Tab (props) {
  const [visible, setVisible] = useState(false)
  const { homDatas , list  } = props

  useEffect (() => {
    homDatas()
  }, [])

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '地址',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <Button>编辑</Button>
          <Button>删除</Button>
        </span>
      ),
    },
  ];
  const showModal = () => {
    setVisible(true)
  };

  const handleOk = e => {
    console.log(e);
    setVisible(false)
  };

  const handleCancel = e => {
    console.log(e);
    setVisible(false)
  };
  return (
    <div className="tables">
      <Button type="primary" onClick={showModal}>
        添加
      </Button>
      <Modal
        title="Basic Modal"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      <Table rowKey="id" columns={columns} dataSource={list} />
    </div>
  )
  
}

export default connect(({ fromData , loginData }) => {
  return {
    list: fromData.data,
    log: loginData.data.data
  }
},{
  homDatas
})(Tab)




