import React, { useMemo, useState } from "react";
import { Slate, Editable, withReact } from "slate-react";
import {
  createEditor,
  Editor,
  Transforms,
  Element as SlateElement,
  Text,
  Node,
} from "slate";
import { withHistory } from "slate-history";
import Toolbar from "./Toolbar";
import Button from "./Button";

const initialValue = [
  {
    type: "paragraph",
    children: [{ text: "" }],
  },
];

const LIST_TYPES = ["numbered-list", "bulleted-list"];

const serialize = (node) => {
  if (Text.isText(node)) {
    let string = node.text;
    if (node.bold) {
      string = `<strong>${string}</strong>`;
    }
    if (node.italic) {
      string = `<em>${string}</em>`;
    }
    return string;
  }

  const children = node.children.map((n) => serialize(n)).join("");

  switch (node.type) {
    case "paragraph":
      return `<p>${children}</p>`;
    case "bulleted-list":
      return `<ul class="list-disc pl-6 my-2">${children}</ul>`;
    case "numbered-list":
      return `<ol class="list-decimal pl-6 my-2">${children}</ol>`;
    case "list-item":
      return `<li>${children}</li>`;
    case "block-quote":
      return `<blockquote>${children}</blockquote>`;
    default:
      return children;
  }
};

const toggleBlock = (editor, format) => {
  const isActive = isBlockActive(editor, format);
  const isList = LIST_TYPES.includes(format);

  Transforms.unwrapNodes(editor, {
    match: (n) =>
      LIST_TYPES.includes(
        !Editor.isEditor(n) && SlateElement.isElement(n) && n.type
      ),
    split: true,
  });

  const newProperties = {
    type: isActive ? "paragraph" : isList ? "list-item" : format,
  };
  Transforms.setNodes(editor, newProperties);

  if (!isActive && isList) {
    const block = { type: format, children: [] };
    Transforms.wrapNodes(editor, block);
  }
};

const isBlockActive = (editor, format) => {
  const { selection } = editor;
  if (!selection) return false;

  const [match] = Editor.nodes(editor, {
    match: (n) => n.type === format,
  });

  return !!match;
};

const MyEditor = ({ setDescription }) => {
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);
  const [value, setValue] = useState(initialValue);

  const handleEditorChange = (newValue) => {
    setValue(newValue);
    setDescription(newValue.map((n) => serialize(n)).join(""));
  };

  return (
    <Slate
      editor={editor}
      value={value}
      initialValue={initialValue}
      onChange={handleEditorChange}
      className={`h-64`}
    >
      <Toolbar>
        <Button
          active={isBoldMarkActive(editor)}
          onMouseDown={(event) => {
            event.preventDefault();
            toggleBoldMark(editor);
          }}
        >
          <strong>B</strong>
        </Button>
        <Button
          active={isItalicMarkActive(editor)}
          onMouseDown={(event) => {
            event.preventDefault();
            toggleItalicMark(editor);
          }}
        >
          <em>I</em>
        </Button>
        <Button
          active={isBlockActive(editor, "numbered-list")}
          onMouseDown={(event) => {
            event.preventDefault();
            toggleBlock(editor, "numbered-list");
          }}
        >
          <span>#</span>
        </Button>
        <Button
          active={isBlockActive(editor, "bulleted-list")}
          onMouseDown={(event) => {
            event.preventDefault();
            toggleBlock(editor, "bulleted-list");
          }}
        >
          <span>*</span>
        </Button>
      </Toolbar>
      <Editable
        renderLeaf={(props) => <Leaf {...props} />}
        renderElement={(props) => <Element {...props} />}
        placeholder="Napisz coś tutaj..."
        className="py-2 px-2 overflow-auto h-64"
      />
    </Slate>
  );
};

export default MyEditor;

const toggleBoldMark = (editor) => {
  const isActive = isBoldMarkActive(editor);
  Transforms.setNodes(
    editor,
    { bold: isActive ? null : true },
    { match: (n) => Text.isText(n), split: true }
  );
};

const isBoldMarkActive = (editor) => {
  const [match] = Editor.nodes(editor, {
    match: (n) => n.bold === true,
    universal: true,
  });
  return !!match;
};

const toggleItalicMark = (editor) => {
  const isActive = isItalicMarkActive(editor);
  Transforms.setNodes(
    editor,
    { italic: isActive ? null : true },
    { match: (n) => Text.isText(n), split: true }
  );
};

const isItalicMarkActive = (editor) => {
  const [match] = Editor.nodes(editor, {
    match: (n) => n.italic === true,
    universal: true,
  });
  return !!match;
};

const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }

  if (leaf.italic) {
    children = <em>{children}</em>;
  }

  return <span {...attributes}>{children}</span>;
};

const Element = ({ attributes, children, element }) => {
  switch (element.type) {
    case "block-quote":
      return <blockquote {...attributes}>{children}</blockquote>;
    case "bulleted-list":
      return (
        <ul {...attributes} className="list-disc my-2 pl-6">
          {children}
        </ul>
      );
    case "heading-one":
      return <h1 {...attributes}>{children}</h1>;
    case "heading-two":
      return <h2 {...attributes}>{children}</h2>;
    case "list-item":
      return <li {...attributes}>{children}</li>;
    case "numbered-list":
      return (
        <ol {...attributes} className="list-decimal my-2 pl-6">
          {children}
        </ol>
      );
    default:
      return <p {...attributes}>{children}</p>;
  }
};
