import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { notification, Space, Spin, Table, Tooltip } from "antd";
import { getAllUsers } from "../../services/api";
import {
  fetchUserDetails,
  fetchUsers,
  setError,
  setLoading,
} from "../../actions/users";
import { EyeOutlined } from "@ant-design/icons";
import moment from "moment";
import { useHistory } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const users = useSelector((state) => state.users);
  const loading = useSelector((state) => state.loading);
  const columns = [
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Last Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Birth Date",
      dataIndex: "birthDate",
      key: "birthDate",
      render: (_, record) => <span>{moment(_).format("YYYY/MM/DD")}</span>,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space
          onClick={() => {
            dispatch(fetchUserDetails(record));
            history.push(`/details/${record.id}`);
          }}
          size="middle"
        >
          <Tooltip title="View Details">
            <EyeOutlined color="blue" style={{ cursor: "pointer" }} />
          </Tooltip>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    const fetchUsersList = async () => {
      dispatch(setLoading(true));
      const res = await getAllUsers();
      if (res?.data) {
        dispatch(fetchUsers(res.data));
      } else {
        notification.error({ message: "Something went wrong!" });
        dispatch(setError(true));
      }
    };
    fetchUsersList();
  }, [dispatch]);

  return (
    <div className="container">
      {loading ? (
        <Spin size="large" />
      ) : (
        <Table columns={columns} dataSource={users} />
      )}
    </div>
  );
};

export default Home;
