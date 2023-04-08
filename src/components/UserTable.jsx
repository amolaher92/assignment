import React from "react";
import { Table } from "flowbite-react";
import { Link } from "react-router-dom";

const TableHead = ({ title }) => {
  return <Table.HeadCell>{title}</Table.HeadCell>;
};

const tableHead = ["Avatar", "First Name", "Last Name", "Email", "Action"];

export default function UserTable({ users = [] }) {
  return (
    <section className="bg-blue-50 p-6 md:p-12">
      <div className="flex justify-evenly">
        <h1 className="text-2xl font-bold font-serif">Users Lists</h1>
        <Link
          type="button"
          to={"/add-user"}
          className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
        >
          <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute" />
          <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
            <span className="relative text-white">Add User</span>
          </span>
        </Link>
      </div>
      <div className="flex justify-center py-12">
        <Table>
          <Table.Head>
            {tableHead.map((el, i) => (
              <TableHead title={el} key={i} />
            ))}
          </Table.Head>
          <Table.Body className="divide-y">
            {users.map((el, i) => (
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={i}>
                <Table.Cell>
                  <img src={el?.avatar} className="w-24 h-24 rounded-full mx-auto" alt="img" />
                </Table.Cell>
                <Table.Cell>{el?.first_name}</Table.Cell>
                <Table.Cell>{el?.last_name}</Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {el?.email}
                </Table.Cell>
                <Table.Cell>
                  <Link
                    to={`/users/${el?.id}`}
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >
                    View
                  </Link>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </section>
  );
}
