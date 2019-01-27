# SCSS Style Guide

See the book [Scalable and Modular Architecture for CSS](https://smacss.com/) for details on our SCSS structure.

## SCSS Structure

### Globals

### Theme

### Module

## Selector Structure

### Kebab Case

Selector names should follow kebab case formatting, see below for example.

```
.class-name {

}
```

SASS variables should also utilize kebab case formatting, as shown below.

```
$variable-color: white;
```

### "id" and "data-" Selectors

Avoid using either "id" selectors or "data-" selectors for styling. These attributes should be used purely for controlling or reading the content itself and should not be used for styling the content.

## SASS Lint Rules

Where possible, avoid the use of "!important" as it leads to unnecessary code smell.
