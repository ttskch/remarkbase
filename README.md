# remarkbase

Theming and templating base for [remarkjs](https://github.com/gnab/remark).

## Getting started

```bash
$ git clone git@github.com:ttskch/remarkbase.git
$ cd remarkbase
$ npm install --global gulp   # if you need
$ npm install
$ gulp theme   # link the default theme
$ gulp slide   # link the sample slide
$ gulp serve   # the sample slide will be shown on your browser
```

## Usage

### Create new slide

```bash
$ mkdir slides
$ vi slides/some-new-slide.md   # and edit it
$ cat slides/some-new-slide.md
# Page 1
Hello Remarkjs
---
# Page 2
Hello remarkbase
$ gulp slide --target slides/some-new-slide.md   # you also can use `-t` instead of `--target`
$ gulp serve
```

### Create your own theme

```bash
$ mkdir -p themes/your-own-theme
$ vi themes/your-own-theme/style.css   # and edit it
$ cat themes/your-own-theme/style.class
.remark-slide-content {
    background-color: #000;
    color: #fff;
}
$ gulp theme -t themes/your-own-theme
$ gulp serve
```

`gulp theme` command builds `.css` (or `.scss`) and `.js` files in your theme directory.

### Edit slide or theme comfortably

Run `gulp serve` and edit your slide or theme. When you save some changes gulp automatically builds it and reloads browser.

### Export to PDF (via Google Chrome)

1. `⌘+P`
2. Set `Print to PDF` to `Destination`
3. Set `None` to `Margins`
4. **Now maybe your preview is not beautiful** :sweat:
5. Then, change your window size and `⌘+P` again
6. Now maybe your preview was changed :flushed:
7. So **you can adjust window size to beautify the preview**

Maybe the best window size is different for each environment. Just to tell you, on my environment, 910 x 682 of viewport size is the best.

FYI, to change window size [Window Resizer](https://chrome.google.com/webstore/detail/window-resizer/kkelicaakdanhinjdeammmilcgefonfh) Extension is so useful.

> See also [gnab/remark#50](https://github.com/gnab/remark/issues/50) for details of this feature.

## Features of template

### Emoji ready

On remarkbase, `:smile:` will be automatically converted to :smile: in your slide.

### Utility classes

remarkbase provides some utility classes by default.

#### `.font-{ratio}`

This class adjusts font-size with ratio.

```markdown
# .font-60[A very very very very very very very very very long heading]
```
```html
<h1><span class="font-60" style="font-size: 60%;">A very very very very very very very very very long heading</span></h1>
```

#### `.width-{percent}`

This class sets width by percent to child elements.

```markdown
.width-50[
![image](/path/to/some/image.png)
]
```
```html
<div class="width-50">
    <img src="/path/to/some/image.png" alt="image" style="width: 50%;">
</div>
```

#### `.pull-left` / `.pull-right`

These classes float elements to left or right.

```markdown
.pull-left[
![image](/path/to/image-left.png)
]

.pull-right[
![image](/path/to/image-right.png)
]

On next paragraph, floats are automatically cleared.
```

```html
<div class="pull-left" style="float: left; width: 48%;">
    <img src="/path/to/image-left.png" alt="image" style="max-width: 100%;">
</div>
<div class="pull-right" style="float: right; width: 48%;">
    <img src="/path/to/image-right.png" alt="image" style="max-width: 100%;">
</div>
<p style="clear: both;">On next paragraph, floats are automatically cleared.</p>
```

## See also

* [Official wiki of remarkjs](https://github.com/gnab/remark/wiki)

## License

* [MIT License](./LICENSE)
