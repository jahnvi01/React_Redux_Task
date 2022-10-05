import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { notification, Space, Spin, Table, Tooltip } from "antd";
import { getOrdersByUser } from "../../services/api";
import {
  fetchUserDetails,
  fetchUserOrderDetails,
  setLoading,
} from "../../actions/users";
import { EyeOutlined } from "@ant-design/icons";
import moment from "moment";

const Products = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.selectedUser);
  const loading = useSelector((state) => state.loading);
  const orders = useSelector((state) => state.orders);

  const userColumns = [
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
  ];

  const orderColumns = [
    {
      title: "Product Name",
      dataIndex: "product",
      key: "product",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Creation Date",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (_, record) => <span>{moment(_).format("YYYY/MM/DD")}</span>,
    },
  ];

  useEffect(() => {
    const fetchUsersList = async () => {
      if (!user) return;
      dispatch(setLoading(true));
      const res = await getOrdersByUser(user.id);
      if (res?.data) {
        dispatch(fetchUserOrderDetails(res.data));
      } else {
        notification.error({ message: "Something went wrong!" });
        dispatch(setError(true));
      }
    };
    fetchUsersList();
  }, [dispatch, user]);

  return (
    <div className="container">
      {loading && !user ? (
        <Spin size="large" />
      ) : (
        <>
          <Table columns={userColumns} dataSource={[user]} />
          <br />
          <Table columns={orderColumns} dataSource={orders} />
        </>
      )}
    </div>
  );
};

export default Products;
