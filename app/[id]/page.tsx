"use client"
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IUser } from "../types/IUser";
import axios from "axios";

type Props = {};

export default function page({}: Props) {
  const param = useParams<{ id: string }>();
  const [dataById, setDataById] = useState<IUser | null>(null);

  const getDataById = async () => {
    const response = await axios.get(
      `https://663489de9bb0df2359a1d038.mockapi.io/api/v1/users/${param.id}`
    );
    setDataById(response.data);
  };
  useEffect(() => {
    getDataById();
  });
  return (
    <>
      <div style={{ margin: "10px" }}>
        <h2>Detail</h2>
        <label>First Name</label> {dataById?.first_name} <br />
        <label>Last Name</label> {dataById?.last_name} <br />
        <label>Phone Number</label> {dataById?.phone_number} <br />
        <label>Email</label> {dataById?.email} <br />
      </div>
    </>
  );
}
