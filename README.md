[![](https://vsmarketplacebadge.apphb.com/version/bierner.markdown-mermaid.svg)](https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid)

Adds Graphviz support to VS Code's builtin markdown preview

![](https://github.com/qintang/vscode-markdown-graphviz/raw/master/docs/example.png)


# Usage
Create diagrams in markdown using `dot` code blocks:

~~~markdown
```dot
digraph abc{
  a;
  b;
  c;
  d;
 
  a -> b ->c;
  b -> d;
  c -> d;
}
```
~~~