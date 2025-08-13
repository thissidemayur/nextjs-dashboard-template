import BreadcrubNav from "@/app/components/BreadcrubNav";
import { columns, Payment } from "./column";
import { DataTable } from "./data-table";

async function getData(): Promise<Payment[]> {
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
      userName: "mayur",
    },
    {
      id: "728ed5f",
      amount: 1000,
      status: "success",
      email: "m@example.com",
      userName: "shankar",
    },
    {
      id: "728e2f",
      amount: 23400,
      status: "success",
      email: "m@example.com",
      userName: "bhawani",
    },
    {
      id: "7282f",
      amount: 98700,
      status: "failed",
      email: "m@example.com",
      userName: "prabhu",
    },
    {
      id: "72f",
      amount: 100,
      status: "success",
      email: "m@example.com",
      userName: "prahalad",
    },
    {
      id: "7f",
      amount: 9876650,
      status: "pending",
      email: "m@example.com",
      userName: "shishupal",
    },
    {
      id: "f",
      amount: 10909870,
      status: "success",
      email: "m@example.com",
      userName: "mayur",
    },

    {
      id: "7282fdd",
      amount: 98700,
      status: "failed",
      email: "m@example.com",
      userName: "prabhu",
    },
    {
      id: "7dd2f",
      amount: 100,
      status: "success",
      email: "m@example.com",
      userName: "prahalad",
    },
    {
      id: "74fmdf",
      amount: 9876650,
      status: "failed",
      email: "m@example.com",
      userName: "shishupal",
    },
    {
      id: "f",
      amount: 1090983470,
      status: "processing",
      email: "m@example.com",
      userName: "mayur",
    },

    {
      id: "vbfgf",
      amount: 0,
      status: "failed",
      email: "m@example.com",
      userName: "prabhu",
    },
    {
      id: "vfvfv",
      amount: 0,
      status: "success",
      email: "m@example.com",
      userName: "prahalad",
    },
    {
      id: "74fmdvff",
      amount: 0,
      status: "failed",
      email: "m@example.com",
      userName: "shishupal",
    },
    {
      id: "fvf",
      amount: 0,
      status: "processing",
      email: "m@example.com",
      userName: "mayur",
    },
    //
    {
      id: "mjhg",
      amount: 100,
      status: "pending",
      email: "m@sexample.com",
      userName: "mayur",
    },
    {
      id: "mj",
      amount: 1000,
      status: "success",
      email: "m@exsqample.com",
      userName: "shankar",
    },
    {
      id: "sd",
      amount: 23400,
      status: "success",
      email: "m@example.com",
      userName: "bhawani",
    },
    {
      id: "sds",
      amount: 98700,
      status: "failed",
      email: "ms@example.com",
      userName: "prabhu",
    },
    {
      id: "hgfd",
      amount: 100,
      status: "success",
      email: "m@swqexample.com",
      userName: "prahalad",
    },
    {
      id: "7fgbd",
      amount: 9876650,
      status: "pending",
      email: "am@example.com",
      userName: "shishupal",
    },
    {
      id: "fgf",
      amount: 10909870,
      status: "success",
      email: "vm@example.com",
      userName: "mayur",
    },

    {
      id: "hfg",
      amount: 98700,
      status: "failed",
      email: "bm@example.com",
      userName: "prabhu",
    },
    {
      id: "fdf",
      amount: 100,
      status: "success",
      email: "xm@example.com",
      userName: "prahalad",
    },
    {
      id: "fdf",
      amount: 9876650,
      status: "failed",
      email: "dm@example.com",
      userName: "shishupal",
    },
    {
      id: "dsf",
      amount: 1090983470,
      status: "processing",
      email: "em@example.com",
      userName: "mayur",
    },

    {
      id: "asw",
      amount: 0,
      status: "failed",
      email: "rm@example.com",
      userName: "prabhu",
    },
    {
      id: "hjhh",
      amount: 0,
      status: "success",
      email: "tm@example.com",
      userName: "prahalad",
    },
    {
      id: "bgf",
      amount: 0,
      status: "failed",
      email: "ym@example.com",
      userName: "shishupal",
    },
    {
      id: "cdf",
      amount: 0,
      status: "processing",
      email: "um@example.com",
      userName: "mayur",
    },
  ];
}

// breadcrub
const breadcrubNavItems = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Payment" },
];

export default async function PaymentPage() {
  const data = await getData();

  return (
    <div className="pr-4 pl-2">
      <BreadcrubNav items={breadcrubNavItems} />
      <div className="mb px-4 py-2 bg-muted rounded-md">
        <h1 className="font-semibold pb-5">All Payments</h1>
        <div>
          <DataTable columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
}
