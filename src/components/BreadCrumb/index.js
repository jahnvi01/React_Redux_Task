import React from "react";
import { Breadcrumb } from "antd";

const BreadCrumbMenu = (props) => {
  return (
    <Breadcrumb style={{ margin: "10px 0px" }}>
      {props?.list?.map((listItem, i) => (
        <Breadcrumb.Item key={i}>
          <a href={listItem.link}>{listItem.title}</a>
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export default BreadCrumbMenu;
