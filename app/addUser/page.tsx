"use client"
import React, { useState } from "react";
import { IUser } from "../types/IUser";
import axios from "axios";
import { useRouter } from "next/navigation";

type Props = {};

export default function addUser({}: Props) {
  const router = useRouter()
  const [firstName, setFirstname] = useState<string>("");
  const [lastName, setLastname] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");

const handleAdd = async (e: React.MouseEvent<HTMLButtonElement>) =>{
  e.preventDefault()
  const data : IUser = {
    first_name:firstName,
    last_name:lastName,
    phone_number:phoneNumber,
    email:email,
  }

  const response = await axios.post(`https://663489de9bb0df2359a1d038.mockapi.io/api/v1/users`, data);
  if (response.status === 201) {
    alert("Add user Success");
    router.push("/");
  } else {
    alert("Add user Unsuccess");
  }
}

  return (
    <>
      <h1>Add User</h1>
      <form>
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          required
          onChange={(e) => {
            setFirstname(e.target.value);
          }}
          value={firstName}
        />
        <br />
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          required
          onChange={(e) => {
            setLastname(e.target.value);
          }}
          value={lastName}
        />
        <br />
        <label>Phone Number</label>
        <input
          type="number"
          name="phoneNumber"
          required
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
          value={phoneNumber}
        />
        <br />
        <label>Email</label>
        <input
          type="email"
          name="email"
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
        <br />
        <button type="submit" onClick={handleAdd}>
          Add
        </button>
      </form>
    </>
  );
}
