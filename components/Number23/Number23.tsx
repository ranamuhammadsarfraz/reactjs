"use client";
import { FormEvent, useState } from "react";
import Link from "next/link";
import { FaRegCopy } from "react-icons/fa";

function Number23() {
  const [valueInput, setValueInput] = useState<any>(),
    [result, setResult] = useState<any>(),
    [cpyB, setCpy_b] = useState<boolean>(true);
  function generate(e: FormEvent) {
    e.preventDefault();
    const abc = "abcdefghijklmnopqrstuvwxyz",
      writeLine = "1234567890~`!#$^()_-+={[}]|\:;'<,>.?/" + '"' + abc +
        abc.toUpperCase();
    let xyz_ = writeLine.split("").map((data) => {
      return writeLine[Math.ceil(Math.random() * writeLine.split("").length)];
    });
    setResult(xyz_.slice(0, valueInput).join(""));
  }
  function copyTo() {
    setCpy_b(false);
    navigator.clipboard.writeText(result);
    setTimeout(() => setCpy_b(true), 1000);
  }
  return (
    <main className="p-2.5 w-full h-screen bg-gray-600 flex justify-evenly items-center flex-col text-gray-200">
      <h1 className="text-4xl">Password Generator</h1>
      <form onSubmit={generate} className="grid">
        <input
          onChange={(turn) => setValueInput(turn.target.value)}
          value={valueInput}
          className="p-3 text-black w-56"
          type="number"
          required
          max="16"
          min="6"
          placeholder="Password Length *"
        />
        <button className="p-3 bg-blue-500">Generate</button>
        <div className="grid gap-6 p-2.5">
          <div onContextMenu={(e) => e.preventDefault()}>
            {result}
          </div>
          <abbr onClick={copyTo} className="cursor-pointer" title="copy">
            {cpyB ? <FaRegCopy /> : <strong>copied</strong>}
          </abbr>
        </div>
      </form>
      <Link href="https://rmsencode.com">
        Developed by Rana Muhammad Sarfraz
      </Link>
    </main>
  );
}

export default Number23;
