# pandoc-filter-go

This is a simple filter implemented in Typescript on top of 
[pandoc-filter-node](https://github.com/mvhenderson/pandoc-filter-node).

## Some background

I'm using the static site generator [Hugo](https://gohugo.io/) for my
website. I've created a couple of shortcodes to include images into
the posts. As with the rest of  Hugo, these shortcodes uses the
[Golang](https://golang.org/) templates. You'll find constructs in the
text referencing images, which are enclosed in `{{<` and `>}}`. 

English is not my native language. Add to that, I'm a pretty bad
typist. It takes some passes through the text to get it reasonably
error free.

I've now started to use sites like [Grammarly](https://grammarly.com/)
and [Hemingway](http://www.hemingwayapp.com/) to check my writing.

Once I've finished writing a post within Emacs using Markdown
syntax, I'll use [Pandoc](https://pandoc.org) to create a simple plain
text version. The text can then be transferred with Copy & Paste from the
Emacs buffer to the editors of the above-mentioned services. 

In case I've used Hugo shortcodes, these will still be in the text and
are an obvious distraction. This is where this filter code comes into
play. It is used in combination with the Pandoc `--filter` option and
removes any text between `{{<` and `>}}` tags.

This is my first foray into Javascript and Typescript. The are really
a large number of moving pieces for a complete newbie. 

## Example 

Under Windows

```bash
pandoc -t markdown ..\ridderbusch.name\content\post\2016-06-21-nascom-continued-1.md --filter=.\filter-go.cmd -t plain
```

## License

Licensed under the [MIT License](LICENSE.txt).
