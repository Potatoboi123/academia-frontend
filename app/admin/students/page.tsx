import React from "react";
import UsersTable from "@/components/pages/Admin/UsersTable";

export default function Page() {
  return (
    <>
      <main className="overflow-x-auto p-20 flex-1">
        <UsersTable role='student' />
      </main>
    </>
  );
}
