import { useState } from "react";

type FileNode = {
  name: string;
  type: "file" | "folder";
  children?: FileNode[];
};

const repoTree: FileNode[] = [
  {
    name: "src",
    type: "folder",
    children: [
      {
        name: "components",
        type: "folder",
        children: [
          { name: "Navbar.tsx", type: "file" },
          { name: "HeroSection.tsx", type: "file" },
          { name: "CTASection.tsx", type: "file" },
        ],
      },
      {
        name: "pages",
        type: "folder",
        children: [
          { name: "Index.tsx", type: "file" },
          { name: "Analyze.tsx", type: "file" },
        ],
      },
    ],
  },
  {
    name: "backend",
    type: "folder",
    children: [{ name: "main.py", type: "file" }],
  },
  { name: "README.md", type: "file" },
];

const getIcon = (name: string, type: string) => {
  if (type === "folder") return "📁";

  if (name.endsWith(".tsx") || name.endsWith(".jsx")) return "⚛️";
  if (name.endsWith(".py")) return "🐍";
  if (name.endsWith(".md")) return "📄";

  return "📦";
};

const RepoExplorer = () => {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  const renderNode = (node: FileNode, level = 0) => {
    return (
      <div key={node.name}>
        <div
          style={{ paddingLeft: `${level * 18}px` }}
          className="flex items-center gap-2 py-1 px-2 rounded cursor-pointer font-mono text-sm hover:bg-muted transition-colors"
          onClick={() => node.type === "file" && setSelectedFile(node.name)}
        >
          <span>{getIcon(node.name, node.type)}</span>
          <span className="text-muted-foreground hover:text-white">
            {node.name}
          </span>
        </div>

        {node.children &&
          node.children.map((child) => renderNode(child, level + 1))}
      </div>
    );
  };

  return (
    <div>

      <div className="font-semibold text-white mb-3">
        📦 Repository Explorer
      </div>

      <div className="border rounded-md p-3 bg-card">
        {repoTree.map((node) => renderNode(node))}
      </div>

      {selectedFile && (
        <div className="mt-6 border-t pt-4">
          <div className="font-semibold text-white mb-2">
            {selectedFile}
          </div>

          <p className="text-muted-foreground text-sm">
            AI explanation will appear here once backend analysis is connected.
          </p>
        </div>
      )}
    </div>
  );
};

export default RepoExplorer;