# remarkbase

Theming and templating base for [remarkjs](https://github.com/gnab/remark).

## Getting started

```bash
$ git clone git@github.com:qckanemoto/remarkbase.git
$ cd remarkbase
$ npm install --global gulp   # if you need
$ npm install
$ gulp serve   # the sample slide will be shown on your browser
```

## Usage

### Create new slide

```bash
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
$ mkdir themes/your-own-theme
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
