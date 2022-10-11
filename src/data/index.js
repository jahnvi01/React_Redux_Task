export const View1 = "View1";
export const View2 = "View2";
export const TableSlug1 = "test-view1";
export const TableSlug2 = "test-view2";
export const TableSlug3 = "test-view3";

export const view1Data = {
  description: null,
  id: "232814739811",
  name: "Test View1",
  slug: "test-view1",
  view: {
    id: "1",
    name: "Test View1",
    slug: "test-views1",
    tables: [
      {
        order_number: 1,
        size: null,
        table: {
          id: "1939184701937",
          name: "Test View1",
          node_type: "table",
          order_number: 1,
          slug: "test-view1",
          table: {
            title: "Test Table1",
          },
        },
      },
      {
        order_number: 2,
        size: null,
        table: {
          id: "1939184701938",
          name: "Test View2",
          node_type: "table",
          order_number: 2,
          slug: "test-view2",
          table: {
            title: "Test Table2",
          },
        },
      },
    ],
  },
  users: [
    {
      email: "test@gmail.com",
      id: "12489128413821823",
      joined_at: "2022-08-09",
      name: "Test1",
      role: "admin",
      status: "active",
    },
  ],
  workspace_id: 19841279847129,
};

export const view2Data = {
  description: null,
  id: "232814739812",
  name: "Test View2",
  slug: "test-view2",
  view: {
    id: "1",
    name: "Test View2",
    slug: "test-views2",
    tables: [
      {
        order_number: 3,
        size: null,
        table: {
          id: "1939184701939",
          name: "Test View3",
          node_type: "table",
          order_number: 3,
          slug: "test-view3",
          table: {
            title: "Test Table3",
          },
        },
      },
    ],
  },
  users: [
    {
      email: "test@gmail.com",
      id: "12489128413821823",
      joined_at: "2022-08-09",
      name: "Test1",
      role: "admin",
      status: "active",
    },
  ],
  workspace_id: 19841279847129,
};

export const table1Data = {
  actions: [
    {
      id: 773113,
      location: "per_row",
      mapping: {
        id: "d_id",
      },
      name: "View 1",
      slug: "view-details",
      view: {
        description: "View 1",
        id: "23232",
        name: "View 1",
        slug: "details",
      },
      type: "view",
    },
  ],
  columns: [
    {
      dataIndex: "first_name",
      id: 1,
      key: "first_name",
      label: "First Name",
      name: "first_name",
      order: 10,
      title: "First Name",
      type: "text",
    },
    {
      dataIndex: "last_name",
      id: 2,
      key: "last_name",
      label: "Last Name",
      name: "last_name",
      order: 20,
      title: "Last Name",
      type: "text",
    },
    {
      dataIndex: "dob",
      id: 3,
      key: "dob",
      label: "Date of Birth",
      name: "dob",
      order: 30,
      title: "Date of Birth",
      type: "date",
    },
  ],
  count: 3,
  result: [
    {
      dob: "01/16/2010",
      first_name: "Tomme",
      id: 2873821321,
      last_name: "Teststs",
    },
    {
      dob: "01/16/2010",
      first_name: "Tomme",
      id: 2873821322,
      last_name: "Teststs",
    },
    {
      dob: "01/16/2010",
      first_name: "Tomme",
      id: 2873821323,
      last_name: "Teststs",
    },
  ],
};

export const table2Data = {
  actions: [],
  columns: [
    {
      dataIndex: "gender",
      id: 4,
      key: "gender",
      label: "Gender",
      name: "gender",
      order: 40,
      title: "Gender",
      type: "text",
    },
    {
      dataIndex: "telephone",
      id: 260,
      key: "telephone",
      label: "Telephone",
      name: "telephone",
      order: 45,
      title: "Telephone",
      type: "text",
    },
    {
      dataIndex: "email",
      id: 264,
      key: "email",
      label: "Email",
      name: "email",
      order: 48,
      title: "Email",
      type: "text",
    },
  ],
  count: 3,
  result: [
    {
      email: "jen@gmail.com",
      gender: "M",
      id: 2873821321,
      telephone: "283-283-0293",
    },
    {
      email: "alan@gmail.com",
      gender: "M",
      id: 2873821322,
      telephone: "283-283-0293",
    },
    {
      email: "claire@gmail.com",
      gender: "M",
      id: 2873821323,
      telephone: "283-283-0293",
    },
  ],
};

export const table3Data = {
  actions: [
    {
      id: 773113,
      location: "per_row",
      mapping: {
        id: "d_id",
      },
      name: "View 1",
      slug: "view-details",
      view: {
        description: "View 1",
        id: "23232",
        name: "View 1",
        slug: "details",
      },
      type: "view",
    },
  ],
  columns: [
    {
      dataIndex: "street_address",
      id: 5,
      key: "street_address",
      label: "Street Address",
      name: "street_address",
      order: 50,
      title: "Street Address",
      type: "text",
    },
    {
      dataIndex: "zip",
      id: 8,
      key: "zip",
      label: "Zip",
      name: "zip",
      order: 80,
      title: "Zip",
      type: "text",
    },
    {
      dataIndex: "account_number",
      id: 246,
      key: "account_number",
      label: "Account Number",
      name: "account_number",
      order: 150,
      title: "Account Number",
      type: "text",
    },
  ],
  count: 3,
  result: [
    {
      account_number: "3741237461278",
      id: 2873821321,
      street_address: "1432832 test ST APT 214",
      zip: "90503",
    },
    {
      account_number: "3741237461278",
      id: 2873821322,
      street_address: "1432832 test ST APT 214",
      zip: "90503",
    },
    {
      account_number: "3741237461278",
      id: 2873821323,
      street_address: "1432832 test ST APT 214",
      zip: "90503",
    },
    {
      account_number: "3741237461278",
      id: 2873821321,
      street_address: "221 bakers street",
      zip: "90201",
    },
    {
      account_number: "3741237461278",
      id: 2873821322,
      street_address: "221 bakers street",
      zip: "90201",
    },
    {
      account_number: "3741237461278",
      id: 2873821323,
      street_address: "221 bakers street",
      zip: "90201",
    },
    {
      account_number: "3741237461278",
      id: 2873821321,
      street_address: "21 beverly hills, CA",
      zip: "21204",
    },
    {
      account_number: "3741237461278",
      id: 2873821322,
      street_address: "21 beverly hills, CA",
      zip: "21204",
    },
    {
      account_number: "3741237461278",
      id: 2873821323,
      street_address: "21 beverly hills, CA",
      zip: "21204",
    },
  ],
};
