# Taichi Abe 's resume

![textlint](https://img.shields.io/github/actions/workflow/status/o-ga09/resume/lint-text.yml?branch=main&label=textlint&logo=github&color=yellow)
![build pdf](https://img.shields.io/github/actions/workflow/status/o-ga09/resume/build-pdf.yml?label=build%20pdf&logo=github)
![create issue](https://img.shields.io/github/actions/workflow/status/o-ga09/resume/create-issue.yml?label=create%20issue&logo=github&color=orange)
![release date](https://img.shields.io/github/release-date/o-ga09/resume?color=blue&logo=github)

[ [English](https://github.com/o-ga09/resume) | 日本語 ]

- [GitHub Pages](https://o-ga09.github.io/resume/)
- [PDF](https://github.com/o-ga09/resume/releases)
- [File](https://github.com/o-ga09/resume/blob/main/docs/README.md)

## Features

### 💅 Lint text

Automatic proofreading with [textlint](https://github.com/textlint/textlint).

```
$ pnpm lint --fix
```

It is also automatically executed when pre-commit by [husky](https://github.com/typicode/husky).  
proofreading rules are set with `.textlintrc`.

### 📝 Convert MD to PDF

You can generate PDF with [md-to-pdf](https://www.npmjs.com/package/md-to-pdf).

```
$ pnpm build:pdf
```

The output PDF can be styled as you like with CSS. Edit the `pdf-configs/style.css`.

### 🛠 Create release

When you push with a `v**` tag, GitHub Actions will run the build, generate the PDF, create a Release, and register the PDF to Assets.

```
$ git commit -m "add job"
$ git tag v1.0
$ git push origin --tags
```

### 📆 Remind update

Automatically generate issues every three months with GitHub Actions Schedules triggers to prompt you to update your resume.

To change the duration or stop the job, edit `.github/workflows/create-issue.yml`.  
To change the issue contents, edit `.github/ISSUE_TEMPLATE.md`.

## Acknowledgement

This Repository is foked [kawamataryo/resume](https://github.com/kawamataryo/resume) .
Great Thanks For [@kawamataryo](https://github.com/kawamataryo)
