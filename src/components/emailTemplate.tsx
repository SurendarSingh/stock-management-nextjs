export default function emailTemplate(link: string) {
  return `<!DOCTYPE html>

  <html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
  
  <head>
    <title></title>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
    <style>
      * {
        box-sizing: border-box;
      }
  
      body {
        margin: 0;
        padding: 0;
      }
  
      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: inherit !important;
      }
  
      #MessageViewBody a {
        color: inherit;
        text-decoration: none;
      }
  
      p {
        line-height: inherit
      }
  
      .desktop_hide,
      .desktop_hide table {
        mso-hide: all;
        display: none;
        max-height: 0px;
        overflow: hidden;
      }
  
      .image_block img+div {
        display: none;
      }
  
      @media (max-width:660px) {
        .desktop_hide table.icons-inner {
          display: inline-block !important;
        }
  
        .icons-inner {
          text-align: center;
        }
  
        .icons-inner td {
          margin: 0 auto;
        }
  
        .image_block img.fullWidth {
          max-width: 100% !important;
        }
  
        .mobile_hide {
          display: none;
        }
  
        .row-content {
          width: 100% !important;
        }
  
        .stack .column {
          width: 100%;
          display: block;
        }
  
        .mobile_hide {
          min-height: 0;
          max-height: 0;
          max-width: 0;
          overflow: hidden;
          font-size: 0px;
        }
  
        .desktop_hide,
        .desktop_hide table {
          display: table !important;
          max-height: none !important;
        }
  
        .row-3 .column-1 .block-1.divider_block td.pad,
        .row-7 .column-1 .block-1.divider_block td.pad {
          padding: 5px !important;
        }
  
        .row-3 .column-1 .block-1.divider_block .alignment table,
        .row-7 .column-1 .block-1.divider_block .alignment table,
        .row-8 .column-1 .block-4.divider_block .alignment table {
          display: inline-table;
        }
  
        .row-2 .column-1 .block-1.heading_block h1 {
          font-size: 25px !important;
        }
  
        .row-4 .column-1 .block-3.text_block td.pad {
          padding: 10px 40px 20px !important;
        }
  
        .row-8 .column-1 .block-3.heading_block td.pad {
          padding: 10px !important;
        }
  
        .row-8 .column-1 .block-4.divider_block td.pad {
          padding: 10px 40px 0 !important;
        }
      }
    </style>
  </head>
  
  <body style="background-color: #f8f8f9; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
    <table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation"
      style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f8f8f9;" width="100%">
      <tbody>
        <tr>
          <td>
            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1"
              role="presentation"
              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #1aa19c;" width="100%">
              <tbody>
                <tr>
                  <td>
                    <table align="center" border="0" cellpadding="0" cellspacing="0"
                      class="row-content stack" role="presentation"
                      style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #1aa19c; color: #000; width: 640px; margin: 0 auto;"
                      width="640">
                      <tbody>
                        <tr>
                          <td class="column column-1"
                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                            width="100%">
                            <table border="0" cellpadding="0" cellspacing="0"
                              class="divider_block block-1" role="presentation"
                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                              width="100%">
                              <tr>
                                <td class="pad">
                                  <div align="center" class="alignment">
                                    <table border="0" cellpadding="0" cellspacing="0"
                                      role="presentation"
                                      style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                      width="100%">
                                      <tr>
                                        <td class="divider_inner"
                                          style="font-size: 1px; line-height: 1px; border-top: 4px solid #1AA19C;">
                                          <span> </span>
                                        </td>
                                      </tr>
                                    </table>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2"
              role="presentation"
              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff;" width="100%">
              <tbody>
                <tr>
                  <td>
                    <table align="center" border="0" cellpadding="0" cellspacing="0"
                      class="row-content stack" role="presentation"
                      style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff; color: #000; width: 640px; margin: 0 auto;"
                      width="640">
                      <tbody>
                        <tr>
                          <td class="column column-1"
                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                            width="100%">
                            <table border="0" cellpadding="10" cellspacing="0"
                              class="heading_block block-1" role="presentation"
                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                              width="100%">
                              <tr>
                                <td class="pad">
                                  <h1
                                    style="margin: 0; color: #555555; direction: ltr; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; font-size: 30px; font-weight: 700; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;">
                                    <span class="tinyMce-placeholder">GEETHA FANCY
                                      STORE</span>
                                  </h1>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3"
              role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
              <tbody>
                <tr>
                  <td>
                    <table align="center" border="0" cellpadding="0" cellspacing="0"
                      class="row-content stack" role="presentation"
                      style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f8f8f9; color: #000; width: 640px; margin: 0 auto;"
                      width="640">
                      <tbody>
                        <tr>
                          <td class="column column-1"
                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                            width="100%">
                            <table border="0" cellpadding="10" cellspacing="0"
                              class="divider_block block-1" role="presentation"
                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                              width="100%">
                              <tr>
                                <td class="pad">
                                  <div align="center" class="alignment">
                                    <table border="0" cellpadding="0" cellspacing="0"
                                      role="presentation"
                                      style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                      width="100%">
                                      <tr>
                                        <td class="divider_inner"
                                          style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;">
                                          <span> </span>
                                        </td>
                                      </tr>
                                    </table>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-4"
              role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
              <tbody>
                <tr>
                  <td>
                    <table align="center" border="0" cellpadding="0" cellspacing="0"
                      class="row-content stack" role="presentation"
                      style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff; color: #000; width: 640px; margin: 0 auto;"
                      width="640">
                      <tbody>
                        <tr>
                          <td class="column column-1"
                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                            width="100%">
                            <table border="0" cellpadding="0" cellspacing="0"
                              class="image_block block-1" role="presentation"
                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                              width="100%">
                              <tr>
                                <td class="pad"
                                  style="padding-left:40px;padding-right:40px;width:100%;">
                                  <div align="center" class="alignment"
                                    style="line-height:10px"><img alt="I'm an image"
                                      class="fullWidth"
                                      src="https://www.pngall.com/wp-content/uploads/12/Illustration-PNG.png"
                                      style="display: block; height: auto; border: 0; max-width: 544px; width: 100%;"
                                      title="I'm an image" width="544" /></div>
                                </td>
                              </tr>
                            </table>
                            <table border="0" cellpadding="0" cellspacing="0"
                              class="text_block block-2" role="presentation"
                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                              width="100%">
                              <tr>
                                <td class="pad"
                                  style="padding-bottom:10px;padding-left:40px;padding-right:40px;padding-top:10px;">
                                  <div style="font-family: sans-serif">
                                    <div class=""
                                      style="font-size: 12px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #555555; line-height: 1.2;">
                                      <p
                                        style="margin: 0; font-size: 16px; text-align: center; mso-line-height-alt: 19.2px;">
                                        <span style="font-size:20px;"><strong>Thank
                                            you for signing up for Geetha Fancy
                                            Store. We're thrilled to have you on
                                            board.</strong></span>
                                      </p>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <table border="0" cellpadding="0" cellspacing="0"
                              class="text_block block-3" role="presentation"
                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                              width="100%">
                              <tr>
                                <td class="pad"
                                  style="padding-bottom:20px;padding-left:40px;padding-right:40px;padding-top:10px;">
                                  <div style="font-family: sans-serif">
                                    <div class=""
                                      style="font-size: 12px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 18px; color: #555555; line-height: 1.5;">
                                      <p
                                        style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 21px;">
                                        <span
                                          style="color:#808389;font-size:14px;">To
                                          get started, please verify your email
                                          address by clicking the button
                                          below.</span>
                                      </p>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-5"
              role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
              <tbody>
                <tr>
                  <td>
                    <table align="center" border="0" cellpadding="0" cellspacing="0"
                      class="row-content stack" role="presentation"
                      style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f3fafa; color: #000; width: 640px; margin: 0 auto;"
                      width="640">
                      <tbody>
                        <tr>
                          <td class="column column-1"
                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; border-left: 30px solid #FFFFFF; border-right: 30px solid #FFFFFF; vertical-align: top; border-top: 0px; border-bottom: 0px;"
                            width="100%">
                            <table border="0" cellpadding="0" cellspacing="0"
                              class="divider_block block-1" role="presentation"
                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                              width="100%">
                              <tr>
                                <td class="pad">
                                  <div align="center" class="alignment">
                                    <table border="0" cellpadding="0" cellspacing="0"
                                      role="presentation"
                                      style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                      width="100%">
                                      <tr>
                                        <td class="divider_inner"
                                          style="font-size: 1px; line-height: 1px; border-top: 4px solid #1AA19C;">
                                          <span> </span>
                                        </td>
                                      </tr>
                                    </table>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <table border="0" cellpadding="0" cellspacing="0"
                              class="button_block block-2" role="presentation"
                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                              width="100%">
                              <tr>
                                <td class="pad"
                                  style="padding-bottom:20px;padding-left:10px;padding-right:10px;padding-top:20px;text-align:center;">
                                  <div align="center" class="alignment">
                                    <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="www.dev.to" style="height:62px;width:150px;v-text-anchor:middle;" arcsize="97%" stroke="false" fillcolor="#1aa19c"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#ffffff; font-family:Tahoma, sans-serif; font-size:16px"><![endif]--><a
                                      href=${link}
                                      style="text-decoration:none;display:inline-block;color:#ffffff;background-color:#1aa19c;border-radius:60px;width:auto;border-top:0px solid transparent;font-weight:700;border-right:0px solid transparent;border-bottom:0px solid transparent;border-left:0px solid transparent;padding-top:15px;padding-bottom:15px;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:16px;text-align:center;mso-border-alt:none;word-break:keep-all;"
                                      target="_blank"><span
                                        style="padding-left:30px;padding-right:30px;font-size:16px;display:inline-block;letter-spacing:normal;"><span
                                          style="margin: 0; word-break: break-word; line-height: 32px;"><strong>Verify
                                            Email</strong></span></span></a><!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-6"
              role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
              <tbody>
                <tr>
                  <td>
                    <table align="center" border="0" cellpadding="0" cellspacing="0"
                      class="row-content stack" role="presentation"
                      style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff; color: #000; width: 640px; margin: 0 auto;"
                      width="640">
                      <tbody>
                        <tr>
                          <td class="column column-1"
                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                            width="100%">
                            <table border="0" cellpadding="0" cellspacing="0"
                              class="divider_block block-1" role="presentation"
                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                              width="100%">
                              <tr>
                                <td class="pad"
                                  style="padding-bottom:2px;padding-top:30px;">
                                  <div align="center" class="alignment">
                                    <table border="0" cellpadding="0" cellspacing="0"
                                      role="presentation"
                                      style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                      width="100%">
                                      <tr>
                                        <td class="divider_inner"
                                          style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;">
                                          <span> </span>
                                        </td>
                                      </tr>
                                    </table>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-7"
              role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
              <tbody>
                <tr>
                  <td>
                    <table align="center" border="0" cellpadding="0" cellspacing="0"
                      class="row-content stack" role="presentation"
                      style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f8f8f9; color: #000; width: 640px; margin: 0 auto;"
                      width="640">
                      <tbody>
                        <tr>
                          <td class="column column-1"
                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                            width="100%">
                            <table border="0" cellpadding="10" cellspacing="0"
                              class="divider_block block-1" role="presentation"
                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                              width="100%">
                              <tr>
                                <td class="pad">
                                  <div align="center" class="alignment">
                                    <table border="0" cellpadding="0" cellspacing="0"
                                      role="presentation"
                                      style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                      width="100%">
                                      <tr>
                                        <td class="divider_inner"
                                          style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;">
                                          <span> </span>
                                        </td>
                                      </tr>
                                    </table>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-8"
              role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
              <tbody>
                <tr>
                  <td>
                    <table align="center" border="0" cellpadding="0" cellspacing="0"
                      class="row-content stack" role="presentation"
                      style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #2b303a; color: #000; width: 640px; margin: 0 auto;"
                      width="640">
                      <tbody>
                        <tr>
                          <td class="column column-1"
                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                            width="100%">
                            <table border="0" cellpadding="0" cellspacing="0"
                              class="divider_block block-1" role="presentation"
                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                              width="100%">
                              <tr>
                                <td class="pad">
                                  <div align="center" class="alignment">
                                    <table border="0" cellpadding="0" cellspacing="0"
                                      role="presentation"
                                      style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                      width="100%">
                                      <tr>
                                        <td class="divider_inner"
                                          style="font-size: 1px; line-height: 1px; border-top: 4px solid #1AA19C;">
                                          <span> </span>
                                        </td>
                                      </tr>
                                    </table>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <table border="0" cellpadding="0" cellspacing="0"
                              class="image_block block-2" role="presentation"
                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                              width="100%">
                              <tr>
                                <td class="pad" style="width:100%;">
                                  <div align="center" class="alignment"
                                    style="line-height:10px"><img alt="I'm an image"
                                      src="https://i.ibb.co/8BR9vwx/footer.png"
                                      style="display: block; height: auto; border: 0; max-width: 640px; width: 100%;"
                                      title="I'm an image" width="640" /></div>
                                </td>
                              </tr>
                            </table>
                            <table border="0" cellpadding="15" cellspacing="0"
                              class="heading_block block-3" role="presentation"
                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                              width="100%">
                              <tr>
                                <td class="pad">
                                  <h1
                                    style="margin: 0; color: #555555; direction: ltr; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; font-size: 23px; font-weight: 700; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;">
                                    <span class="tinyMce-placeholder"
                                      style="color: #fffefe;">GEETHA FANCY
                                      STORE</span>
                                  </h1>
                                </td>
                              </tr>
                            </table>
                            <table border="0" cellpadding="0" cellspacing="0"
                              class="divider_block block-4" role="presentation"
                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                              width="100%">
                              <tr>
                                <td class="pad"
                                  style="padding-left:40px;padding-right:40px;">
                                  <div align="center" class="alignment">
                                    <table border="0" cellpadding="0" cellspacing="0"
                                      role="presentation"
                                      style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                      width="100%">
                                      <tr>
                                        <td class="divider_inner"
                                          style="font-size: 1px; line-height: 1px; border-top: 1px solid #555961;">
                                          <span> </span>
                                        </td>
                                      </tr>
                                    </table>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <table border="0" cellpadding="0" cellspacing="0"
                              class="text_block block-5" role="presentation"
                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                              width="100%">
                              <tr>
                                <td class="pad"
                                  style="padding-bottom:30px;padding-left:40px;padding-right:40px;padding-top:20px;">
                                  <div style="font-family: sans-serif">
                                    <div class=""
                                      style="font-size: 12px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #555555; line-height: 1.2;">
                                      <p
                                        style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;">
                                        <span
                                          style="color:#95979c;font-size:12px;">Copyright
                                          © 2023</span>
                                      </p>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table><!-- End -->
  </body>
  
  </html>`;
}
