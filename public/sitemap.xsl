<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
  xmlns:html="http://www.w3.org/TR/REC-html40"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap - Prince AI Automation</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <style type="text/css">
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
            color: #444;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
          }
          th {
            text-align: left;
            padding: 12px;
            background-color: #0a192f;
            color: white;
          }
          td {
            padding: 12px;
            border-bottom: 1px solid #ddd;
          }
          tr:hover {
            background-color: #f5f5f5;
          }
          h1 {
            color: #0a192f;
          }
          a {
            color: #fca311;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
          .high {
            color: #00796b;
          }
          .medium {
            color: #ff9800;
          }
          .low {
            color: #757575;
          }
        </style>
      </head>
      <body>
        <h1>Prince AI Automation Sitemap</h1>
        <p>This is the XML sitemap for Prince AI Automation, used to inform search engines about pages available for crawling.</p>
        <table>
          <tr>
            <th>URL</th>
            <th>Last Modified</th>
            <th>Change Frequency</th>
            <th>Priority</th>
          </tr>
          <xsl:for-each select="sitemap:urlset/sitemap:url">
            <tr>
              <td>
                <a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a>
              </td>
              <td><xsl:value-of select="sitemap:lastmod"/></td>
              <td><xsl:value-of select="sitemap:changefreq"/></td>
              <td>
                <xsl:variable name="priority" select="sitemap:priority"/>
                <xsl:choose>
                  <xsl:when test="$priority &gt; 0.7">
                    <span class="high"><xsl:value-of select="$priority"/></span>
                  </xsl:when>
                  <xsl:when test="$priority &gt; 0.5">
                    <span class="medium"><xsl:value-of select="$priority"/></span>
                  </xsl:when>
                  <xsl:otherwise>
                    <span class="low"><xsl:value-of select="$priority"/></span>
                  </xsl:otherwise>
                </xsl:choose>
              </td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
