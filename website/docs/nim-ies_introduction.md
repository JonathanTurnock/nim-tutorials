---
id: introduction
title: Introduction
slug: /
---


_Nim_ is a statically typed programming language which produces native dependency-free executables. The  _nim_ compiler is also capable of compiling to multiple different low-level languages such as  _C_, _C++_,  _Obj C_, and  _JS_.

The resulting code can then be compiled down to native executables at a later time, allowing easy integration with other languages.

_Nim_ includes a feature-rich [standard library](https://nim-lang.org/docs/lib.html) and an ever-growing list of external packages available from the [directory.](https://nimble.directory/)

Andreas Rumpf initially developed  _Nim_ in 2005. Originally named N_imrod,_  it was changed to  _Nim_ with the 0.10.2 release in December 2014. Version 1.0.0 was officially released for general use in September 2019, marking a significant milestone in the languages’ maturity. The project is maintained by a community of volunteers and can be seen from the [GitHub](https://github.com/nim-lang/Nim) account.

## Philosophy

The design goals of  _Nim_ in order of priority are:

1.  Efficiency
2.  Expressiveness
3.  Elegance

To achieve each of these design goals,  _Nim_ is characterized but not limited to some of the following features:

In the name of **efficiency**,  _Nim_ is a compiled language. Once compiled the resulting executable for the given operating system runs directly as native code. In comparison with other languages such as  _Java_ or  _Python_, Nim does not need an interpreter and has no runtime translation overhead. This also makes it an excellent choice as a systems programming language, reducing the need to install and launch interpreters.

_Nim_ has an **expressive** syntax. Taking inspiration from  _Python_,  _Nim_ uses many of its best features and enhances them. It is intended to be readable and favours English keywords over punctuation.

It also uses indentation rather than punctuation to surround code blocks and restrict scope.

Helping  _Nim_ to be more expressive is its **_metaprogramming_** functionality. An innovative feature not found in many languages, it allows the syntax to be modified at compilation time. We will cover this topic in more depth in a later article.

Influenced by the English syntax from  _Python_, introducing static types, adding extras like metaprogramming and macros. It’s clear to see how  **elegant** our code can become.  _Nim_, built on the shoulders of a giant,  _C_, it embraces new ideas and features from modern languages such as  _Python_ and  _lisp_.
