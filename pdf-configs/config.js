const currentDate = new Date().toLocaleDateString("ja-JP");

module.exports = {
  stylesheet: "./pdf-configs/style.css",
  body_class: "markdown-body",
  marked_options: {
    headerIds: false,
    smartypants: true,
  },
  pdf_options: {
    format: "A4",
    margin: "30mm 20mm",
    printBackground: true,
    displayHeaderFooter: true,
    headerTemplate: `<style>
  .header {
    margin: 0 auto;
    font-size: 9px;
    width: 100%;
    text-align: right;
    padding-right: 20mm;
  }
</style>
<div class="header">
  <span>作成日: ${currentDate}</span>
</div>`,
    footerTemplate: `<style>
  .footer {
    margin: 0 auto;
    font-size: 9px;
    width: 100%;
    text-align: center;
  }
</style>
<div class="footer">
  <span class="pageNumber"></span> / <span class="totalPages"></span>
</div>`,
  },
  stylesheet_encoding: "utf-8",
};
