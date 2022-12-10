
import './App.css';
import { Button, Space,Card,Table, Tag, Tooltip } from 'antd';
import { useState } from 'react';
function App() {
  const dataSource = [
    {
      id: '1',
      first_name: 'Mike',
      last_name: 'Mike',
      email: 'xyg&gmail.com',
      gender:'Male',
      area: '10 Downing Street',
      ip_address: '163.52.44.56.78',
      airport_code: "CBB",
      time: Date.now(),
      status: "True",
      mobile: "3333333333",
      show:"false"
    },
    {
      id: '2',
      first_name: 'Hussey',
      last_name: 'Hussey',
      email: 'xyg&gmail.com',
      gender:'Male',
      area: '10 Downing Street',
      ip_address: '163.52.44.56.78',
      airport_code: "CBB",
      time: Date.now(),
      status: "True",
      mobile: "3333333333",
      show:"false"
    },
    {
      id: '3',
      first_name: 'Mike',
      last_name: 'Mike',
      email: 'xyg&gmail.com',
      gender:'Male',
      area: '10 Downing Street',
      ip_address: '163.52.44.56.78',
      airport_code: "CBB",
      time: Date.now(),
      status: "True",
      mobile: "3333333333",
      show:"false"
    },
    {
      id: '4',
      first_name: 'Mike',
      last_name: 'Mike',
      email: 'xyg&gmail.com',
      gender:'Male',
      area: '10 Downing Street',
      ip_address: '163.52.44.56.78',
      airport_code: "CBB",
      time: Date.now(),
      status: "True",
      mobile: "3333333333",
      show:"false"
    },
    {
      id: '5',
      first_name: 'Mike',
      last_name: 'Mike',
      email: 'xyg&gmail.com',
      gender:'Male',
      area: '10 Downing Street',
      ip_address: '163.52.44.56.78',
      airport_code: "CBB",
      time: Date.now(),
      status: "True",
      mobile: "3333333333",
      show:"false"
    },
    {
      id: '6',
      first_name: 'Mike',
      last_name: 'Mike',
      email: 'xyg&gmail.com',
      gender:'Male',
      area: '10 Downing Street',
      ip_address: '163.52.44.56.78',
      airport_code: "CBB",
      time: Date.now(),
      status: "True",
      mobile: "3333333333",
      show:"false"
    },
    {
      id: '7',
      first_name: 'Mike',
      last_name: 'Mike',
      email: 'xyg&gmail.com',
      gender:'Male',
      area: '10 Downing Street',
      ip_address: '163.52.44.56.78',
      airport_code: "CBB",
      time: Date.now(),
      status: "True",
      mobile: "3333333333",
      show:"false"
    },
    {
      id: '8',
      first_name: 'Mike',
      last_name: 'Mike',
      email: 'xyg&gmail.com',
      gender:'Male',
      area: '10 Downing Street',
      ip_address: '163.52.44.56.78',
      airport_code: "CBB",
      time: Date.now(),
      status: "True",
      mobile: "3333333333",
      show:"false"
    },
    {
      id: '9',
      first_name: 'Mike',
      last_name: 'Mike',
      email: 'xyg&gmail.com',
      gender:'Male',
      area: '10 Downing Street',
      ip_address: '163.52.44.56.78',
      airport_code: "CBB",
      time: Date.now(),
      status: "True",
      mobile: "3333333333",
      show:"false"
    },
   {
      id: '10',
      first_name: 'Mike',
      last_name: 'Mike',
      email: 'xyg&gmail.com',
      gender:'Male',
      area: '10 Downing Street',
      ip_address: '163.52.44.56.78',
      airport_code: "CBB",
      time: Date.now(),
      status: "True",
      mobile: "3333333333",
      show:"false"
},
     {
      id: '11',
      first_name: 'Mike',
      last_name: 'Mike',
      email: 'xyg&gmail.com',
      gender:'Male',
      area: '10 Downing Street',
      ip_address: '163.52.44.56.78',
      airport_code: "CBB",
      time: Date.now(),
      status: "True",
      mobile: "3333333333",
      show:"false"
    },
    {
      id: '12',
      first_name: 'Mike',
      last_name: 'Mike',
      email: 'xyg&gmail.com',
      gender:'Male',
      area: '10 Downing Street',
      ip_address: '163.52.44.56.78',
      airport_code: "CBB",
      time: Date.now(),
      status: "True",
      mobile: "3333333333",
      show:"false"
    },
    {
      id: '13',
      first_name: 'Mike',
      last_name: 'Mike',
      email: 'xyg&gmail.com',
      gender:'Male',
      area: '10 Downing Street',
      ip_address: '163.52.44.56.78',
      airport_code: "CBB",
      time: Date.now(),
      status: "True",
      mobile: "3333333333",
      show:"false"
    },
    {
      id: '14',
      first_name: 'Mike',
      last_name: 'Mike',
      email: 'xyg&gmail.com',
      gender:'Male',
      area: '10 Downing Street',
      ip_address: '163.52.44.56.78',
      airport_code: "CBB",
      time: Date.now(),
      status: "True",
      mobile: "3333333333",
      show:"false"
    },
    {
      id: '15',
      first_name: 'Mike',
      last_name: 'Mike',
      email: 'xyg&gmail.com',
      gender:'Male',
      area: '10 Downing Street',
      ip_address: '163.52.44.56.78',
      airport_code: "CBB",
      time: Date.now(),
      status: "True",
      mobile: "3333333333",
      show:"false"
    },
    {
      id: '16',
      first_name: 'Mike',
      last_name: 'Mike',
      email: 'xyg&gmail.com',
      gender:'Male',
      area: '10 Downing Street',
      ip_address: '163.52.44.56.78',
      airport_code: "CBB",
      time: Date.now(),
      status: "True",
      mobile: "3333333333",
      show:"false"
    },
    {
      id: '17',
      first_name: 'Mike',
      last_name: 'Mike',
      email: 'xyg&gmail.com',
      gender:'Male',
      area: '10 Downing Street',
      ip_address: '163.52.44.56.78',
      airport_code: "CBB",
      time: Date.now(),
      status: "True",
      mobile: "3333333333",
      show:"false"
    },
    {
      id: '18',
      first_name: 'Mike',
      last_name: 'Mike',
      email: 'xyg&gmail.com',
      gender:'Male',
      area: '10 Downing Street',
      ip_address: '163.52.44.56.78',
      airport_code: "CBB",
      time: Date.now(),
      status: "True",
      mobile: "3333333333",
      show:"false"
    },
    {
      id: '19',
      first_name: 'Mike',
      last_name: 'Mike',
      email: 'xyg&gmail.com',
      gender:'Male',
      area: '10 Downing Street',
      ip_address: '163.52.44.56.78',
      airport_code: "CBB",
      time: Date.now(),
      status: "True",
      mobile: "3333333333",
      show:"false"
    },
    {
      id: '20',
      first_name: 'Mike',
      last_name: 'Mike',
      email: 'xyg&gmail.com',
      gender:'Male',
      area: '10 Downing Street',
      ip_address: '163.52.44.56.78',
      airport_code: "CBB",
      time: Date.now(),
      status: "True",
      mobile: "3333333333",
      show:"false"
    },
    
  ];
  
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'First Name',
      dataIndex: 'first_name',
      key: 'first_name',
      sorter: (a, b) => a.first_name.length - b.first_name.length,
      sortDirections: ['ascend','descend'],
    },
    {
      title: 'Last Name',
      dataIndex: 'last_name',
      key: 'last_name',
      sorter: (a, b) => a.last_name.length - b.last_name.length,
      sortDirections: ['descend','ascend'],
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: 'IP Address',
      dataIndex: 'ip_address',
      key: 'ip_address',
    },
    {
      title: 'Airport Code',
      dataIndex: 'airport_code',
      key: 'airport_code',
    },
    {
      title: 'Time',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      
      render:(val,rec)=>{
        return <Tag color={val=="True"?"green":'red'}>{val}</Tag>
      }

    },
    {
      title: 'Mobile',
      dataIndex: 'mobile',
      key: 'mobile',
    },
    {
      title: 'Area',
      dataIndex: 'area',
      key: 'area',
    },
    {
      title: 'Show',
      dataIndex: 'show',
      key: 'show',
    },
   
  ];
  const [className, setClassName] = useState('');
  const [selectedKeys, setSelectedKeys] =useState([]);
  const myRowSelection = {
    selectedRowKeys: selectedKeys,
    onSelect: (record, selected) => {
     setClassName('row-className'+record.id)
    },
    onChange: (selectedRowKeys, selectedRows) => {
     console.log(selectedKeys," ",selectedRowKeys)
    }
  };
  return (
    <div className="App">
      <Card>
        <Table onRow={(record, rowIndex) => {
          
    return {
      onClick: (event) => setClassName('row-className'+record.id), // click row
     
    };
  }}
      dataSource={dataSource} columns={columns} rowClassName={className} />
      </Card>
    </div>
  );
}

export default App;
