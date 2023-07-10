# What is CSS BEM?

CSS BEM (Block Element Modifier) is a naming convention & methodology used in writing modular and maintainable CSS code. BEM helps to create a clear and predictable structure for CSS classes, making it easier to understand and manage stylesheets, especially in large projects.

## Block

BLOCK: standalone component or a higher-level module that represents a distinct part of the user interface. It is a self-contained entity that can be reused across different parts of a website or application.

The class name for a block is written in lowercase and seperated by hyphens (-)

## Element

A part of a block that has no standalone meaning and is semantically tied to the block.

Elements are denoted by two underscores (\_\_) and are written after the block name. .block\_\_element. Elements cannot exist outside of their parent block.

## Modifier

MODIFIER: A flag or a state that modifies the appearance of behavior of either a block or an element.

Modifiers are denoted by two hyphens (--) and are written after the block or element name. block--modifier or .block\_\_element--modifier.

Modifiers allow for variations or alternative styles fof a block or element.
