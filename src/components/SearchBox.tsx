/** @format */

import React from "react";
import { IoSearchSharp } from "react-icons/io5";

type Props = {};

export default function SearchBox({}: Props) {
  return (
    <form className="flex relative items-center justify-center h-10">
      <input type="text" />
      <button>
        <IoSearchSharp />
      </button>
    </form>
  );
}
