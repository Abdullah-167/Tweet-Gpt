import { useState } from "react";
import dynamic from "next/dynamic";
import CopyIcon from "../../../public/copy.svg";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import Image from "next/image";

function insertStar() {
  const cursorPosition = this.quill.getSelection().index;
  this.quill.insertText(cursorPosition, "★");
  this.quill.setSelection(cursorPosition + 1);
}

function copyText() {
  const editor = this.quill;
  const range = editor.getSelection();
  const selectedText = editor.getText(range.index, range.length);
  navigator.clipboard.writeText(selectedText);
}

const CustomToolbar = () => (
  <div id="toolbar" className="flex justify-end my-3 mx-4">
    <button className="ql-italic" />
    <button className="ql-bold" />
    <button className="ql-underline" />
    <button className="ql-link" />
    <Image className=" cursor-pointer ml-1" src={CopyIcon} alt="" />
  </div>
);
const RichText = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <ReactQuill
        value={value}
        onChange={setValue}
        modules={RichText.modules}
        formats={RichText.formats}
        theme={"snow"}
      />
      <CustomToolbar />
    </div>
  );
};

export default RichText;

RichText.modules = {

  toolbar: {
    container: "#toolbar",
    handlers: {
      insertStar: insertStar,
      copyText: copyText,
    },
  },
  clipboard: {
    matchVisual: true,
  },
};

RichText.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "color",
];
