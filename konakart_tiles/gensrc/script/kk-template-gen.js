var kkTmplMap = new Object(); kkTmplMap["accountTile"] = "
<h1 id=\ "kk-page-title\"><%=getMsg(\"account.tile.myaccountinfo\")%></h1>
<div class=\ "kk-content-area kk-rounded-corners\">
    <div id=\ "kk-error\"></div>
    <div id=\ "kk-message\"></div>
    <div id=\ "kkat-column-left\">
        <div id=\ "personal-info\" class=\ "kkat-area\">
            <div class=\ "kkat-area-header\">
                <h3><%=getMsg(\"account.tile.primary.address\")%></h3></div>
            <div class=\ "kkat-area-content\">
                <%if (addresses != null && addresses.length > 0){ %>
                    <%if (kk.isNoAddress()){ %>
                        <%=customer.emailAddr %>
                            <br/>
                            <a id=\ "kk-first-addr\" class=\ "kkat-text-link\">
                                <%=getMsg(\"account.tile.add.addr\")%>
                            </a>
                            <%} else {%>
                                <%=removeCData(addresses[0].formattedAddress)%>
                                    <br/>
                                    <br/>
                                    <%=customer.emailAddr %>
                                        <br/>
                                        <%=customer.telephoneNumber %>
                                            <% } %>
                                                <% } %>
            </div>
        </div>
        <%if (downloads != null && downloads.length > 0){ %>
            <div id=\ "kkat-downloads\" class=\ "kkat-area\">
                <div class=\ "kkat-area-header\">
                    <h3><%=getMsg(\"account.tile.downloads\")%></h3></div>
                <table>
                    <% for (var i = 0; i < downloads.length; i++){ %>
                        <% var download = downloads[i];%>
                            <%if (download.product != null) {%>
                                <tr>
                                    <td>
                                        <%=download.product.name%>
                                    </td>
                                    <td>
                                        <%=download.product.model%>
                                    </td>
                                    <td>
                                        <%=getMsg(\"account.tile.downloaded\",download.timesDownloaded)%>
                                    </td>
                                    <%if (download.expirationDate != null){ %>
                                        <td width=\ "80\">
                                            <%=formatDate(download.expirationDate)%>
                                        </td>
                                        <%}%>
                                            <td align=\ "right\"><span class=\ "kkat-download kk-button-small kk-small-rounded-corners\" id='<%=\"kkat-\"+download.id%>'><%=getMsg(\"account.tile.download\")%></span></td>
                                </tr>
                                <%}%>
                                    <%}%>
                </table>
            </div>
            <% } %>
                <%if (orders != null && orders.length > 0){ %>
                    <div id=\ "kkat-last-orders\" class=\ "kkat-area\">
                        <div class=\ "kkat-area-header\">
                            <h3><%=getMsg(\"account.tile.last.orders\")%></h3>
                            <a id=\ "kkat-all-orders\" class=\ "kkat-option kkat-text-link\">
                                <%=getMsg(\"account.tile.showallorders\")%>
                            </a>
                        </div>
                        <% for (var i = 0; i < orders.length; i++){ %>
                            <% var order = orders[i];%>
                                <% var numItems = (order.orderProducts!=null)?order.orderProducts.length:0;%>
                                    <% var statusClass = (order.statusText!=null&&order.statusText.toUpperCase() == \"DELIVERED\")?\"kkat-shipped\":\"kkat-pending\";%>
                                        <div class=\ "kkat-last-order\">
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td>#
                                                            <%=order.id%>
                                                        </td>
                                                        <td>
                                                            <%=formatDate(order.datePurchased)%>
                                                        </td>
                                                        <td>
                                                            <%=getMsg(\"account.tile.total\")%>:
                                                                <%=formatMoney(order.totalIncTax)%>
                                                        </td>
                                                        <td>
                                                            <div class=\ "kkat-label <%=statusClass%>\">
                                                                <%=order.statusText%>
                                                            </div>
                                                        </td>
                                                        <td class=\ "kkat-last-order-icons\">
                                                            <a class=\ "kkat-view-order kkat-text-link fa fa-eye kkat-order-action\" title='<%=getMsg(\"account.tile.view\")%>' id='<%=\"kkat-\"+order.id%>' href='#'></a>
                                                            <a class=\ "kkat-repeat-order kkat-text-link fa fa-repeat kkat-order-action\" title='<%=getMsg(\"account.tile.repeat\")%>' id='<%=\"kkat-\"+order.id%>' href='#'></a>
                                                            <a class=\ "kkat-track-order kkat-text-link fa fa-truck kkat-order-action\" title='<%=getMsg(\"account.tile.track\")%>' id='<%=\"kkat-\"+order.id%>' href='#'></a>
                                                            <a class=\ "kkat-invoice-order kkat-text-link fa fa-file-pdf-o kkat-order-action\" title='<%=getMsg(\"account.tile.invoice\")%>' id='<%=\"kkat-\"+order.id%>' href='#'></a>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                                <%if (order.orderProducts != null && order.orderProducts.length > 0){ %>
                                                    <tr>
                                                        <td colspan=\ "8\">
                                                            <table>
                                                                <thead>
                                                                    <tr>
                                                                        <td class=\ "kkat-wide-col\">
                                                                            <%=getMsg(\"account.tile.item\")%>
                                                                        </td>
                                                                        <td class=\ "kkat-narrow-col kk-right\">
                                                                            <%=getMsg(\"account.tile.quantity\")%>
                                                                        </td>
                                                                        <td class=\ "kkat-narrow-col kk-right\">
                                                                            <%=getMsg(\"account.tile.total\")%>
                                                                        </td>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <% for (var j = 0; j < order.orderProducts.length; j++){ %>
                                                                        <% var orderProd = order.orderProducts[j];%>
                                                                            <tr>
                                                                                <td>
                                                                                    <a class=\ "kkat-order-item-link kkat-text-link\" id='<%=\"kkat-\"+orderProd.productId%>' href='#'>
                                                                                        <%=orderProd.name%>
                                                                                    </a>
                                                                                </td>
                                                                                <td class=\ "kk-right\">
                                                                                    <%=orderProd.quantity%>
                                                                                </td>
                                                                                <%if (displayPriceWithTax) {%>
                                                                                    <td class=\ "kk-right\">
                                                                                        <%=formatMoney(orderProd.finalPriceIncTax)%>
                                                                                    </td>
                                                                                    <%} else {%>
                                                                                        <td class=\ "kk-right\">
                                                                                            <%=formatMoney(orderProd.finalPriceExTax)%>
                                                                                        </td>
                                                                                        <%}%>
                                                                            </tr>
                                                                            <% } %>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <% } %>
                                            </table>
                                        </div>
                                        <% } %>
                    </div>
                    <% } %>
    </div>
    <%if (customer != null && customer.type != 2) { %>
        <div id=\ "kkat-column-right\">
            <div id=\ "addressbook\" class=\ "kkat-area\">
                <h3><%=getMsg(\"account.tile.personal.information\")%></h3>
                <div class=\ "kkat-area-content\">
                    <%if (loginType != null && (loginType=='GOOGLEPLUS' || loginType=='FACEBOOK')){ %>
                        <a id=\ "kk-send-password\" class=\ "kkat-text-link\">
                            <%=getMsg(\"account.tile.sendpassword\")%>
                        </a>
                        <% } %>
                            <a id=\ "kk-manage-email\" class=\ "kkat-text-link\">
                                <%=getMsg(\"account.tile.changeemail\")%>
                            </a>
                            <a id=\ "kk-manage-password\" class=\ "kkat-text-link\">
                                <%=getMsg(\"account.tile.changepassword\")%>
                            </a>
                            <a id=\ "kk-manage-personal-info\" class=\ "kkat-text-link\">
                                <%=getMsg(\"account.tile.changeaccountinfo\")%>
                            </a>
                            <%if (!kk.isNoAddress()){ %>
                                <a id=\ "kk-manage-address-book\" class=\ "kkat-text-link\">
                                    <%=getMsg(\"account.tile.changeaddrbook\")%>
                                </a>
                                <% } %>
                </div>
            </div>
            <div id=\ "settings\" class=\ "kkat-area\">
                <h3><%=getMsg(\"account.tile.notifications\")%></h3>
                <div class=\ "kkat-area-content\">
                    <a id=\ "kk-manage-newsletter\" class=\ "kkat-text-link\">
                        <%=getMsg(\"account.tile.subscribenewsletter\")%>
                    </a>
                    <a id=\ "kk-manage-notifications\" class=\ "kkat-text-link\">
                        <%=getMsg(\"account.tile.changeprodnotlist\")%>
                    </a>
                </div>
            </div>
        </div>
        <% } %>
</div>
<div id=\ "kk-send-email-dialog\" title=\ "<%=getMsg('account.tile.confirmation')%>\" class=\ "kk-content-area kk-rounded-corners\">
    <div>
        <div class=\ "kk-form-section\">
            <div class=\ "kk-form-section-title no-margin\">
                <%=getMsg(\"account.tile.sendpassword.confirmation\",customer.emailAddr)%>
            </div>
            <div class=\ "kkat-confirm-dialog-buttons\"><a onclick='kkCloseConfirmDialog();' class=\ "kk-button kk-small-rounded-corners\"><span ><%=getMsg(\"account.tile.close\")%></span></a><a onclick='kkSendEmail();' class=\ "kk-button kk-small-rounded-corners\"><span ><%=getMsg(\"account.tile.confirm\")%></span></a></div>
        </div>
    </div>
</div>
<form action=\ "#\" id='kkSendPasswordForm' method=\ "post\">
    <input id=\ "kkEmailAddr\" type=\ "hidden\"/>
</form>
<script type=\ "text/javascript\">
    function kkCloseConfirmDialog() {
        $(\"#kk-send-email-dialog\").dialog('close');}function kkSendEmail() {document.getElementById('kkEmailAddr').value = \"<%=customer.emailAddr%>\";$('#kkSendPasswordForm').submit();$(\"#kk-send-email-dialog\").dialog('close');}$(function() {$(\"#kk-send-email-dialog\").dialog({autoOpen: false,width: \"90%\",modal: \"true\",hide: \"blind\",open: function( event, ui ) {var width = $( \"#kk-send-email-dialog\" ).width();if (width > 400) {$( \"#kk-send-email-dialog\" ).dialog( \"option\", \"width\", 400 );}}});$(\"#kk-send-password\").click(function() {$(\"#kk-send-email-dialog\").dialog( \"open\" );return false;});});
</script>"; kkTmplMap["breadcrumbsTile"] = "
<div id=\ "kkbrt-breadcrumbs\"></div>"; kkTmplMap["carouselTile"] = "
<script type=text/javascript>
    var <%=id%> = $('#<%=id%>');
    <%=id%>.on('jcarousel:reloadend', function() {
        var itemWidth = <%=width%>;
        var width = <%=id%>.width();
        if (width < <%=breakpointSmall%>) {
            itemWidth = <%=widthSmall%>;
        }
        var numItems = Math.floor(width / itemWidth);
        if (numItems == 0) {
            numItems = 1;
            <%=id%>.jcarousel('items').css('width', itemWidth + 'px');
        } else {
            var extra = width - (numItems * itemWidth);
            var extraPerItem = extra / numItems;
            var rightMargin = Math.ceil(extraPerItem / 2);
            var leftMargin = Math.floor(extraPerItem / 2);
            <%=id%>.jcarousel('items').css('width', itemWidth + 'px');
            <%=id%>.jcarousel('items').css('margin-left', leftMargin + 'px');
            <%=id%>.jcarousel('items').css('margin-right', rightMargin + 'px');
        }
        <%=id%>.jcarousel('scroll', 0, true, function(scrolled) {
            kk.setCarouselControls(<%=id%>, $('#<%=id%>-prev'), $('#<%=id%>-next'));
        })
    }).jcarousel({
        wrap: null
    });
    $('#<%=id%>-prev').jcarouselControl({
        method: function() {
            <%=id%>.jcarousel('scroll', '-=' + <%=id%>.jcarousel('visible').length, true, function(scrolled) {
                kk.setCarouselControls(<%=id%>, $('#<%=id%>-prev'), $('#<%=id%>-next'));
            })
        }
    });
    $('#<%=id%>-next').jcarouselControl({
        method: function() {
            <%=id%>.jcarousel('scroll', '+=' + <%=id%>.jcarousel('visible').length, true, function(scrolled) {
                kk.setCarouselControls(<%=id%>, $('#<%=id%>-prev'), $('#<%=id%>-next'));
            })
        }
    });
    <%=id%>.swipe({
        swipeRight: function(event, direction, distance, duration, fingerCount) {
            <%=id%>.jcarousel('scroll', '-=' + <%=id%>.jcarousel('visible').length, true, function(scrolled) {
                kk.setCarouselControls(<%=id%>, $('#<%=id%>-prev'), $('#<%=id%>-next'));
            })
        },
        swipeLeft: function(event, direction, distance, duration, fingerCount) {
            <%=id%>.jcarousel('scroll', '+=' + <%=id%>.jcarousel('visible').length, true, function(scrolled) {
                kk.setCarouselControls(<%=id%>, $('#<%=id%>-prev'), $('#<%=id%>-next'));
            })
        }
    });
</script>
<div class=\ "kkca-item-area wide kk-rounded-corners\">
    <div class=\ "kkca-item-area-header\">
        <h2 class=\ "kkca-item-area-title\"><%=title%></h2>
        <div class=\ "kkca-item-area-navigation jcarousel-wrapper\">
            <a href=# id=\ "<%=id%>-prev\" class=\ "jcarousel-control-prev jcarousel-border-prev\"></a>
            <a href=# id=\ "<%=id%>-next\" class=\ "jcarousel-control-next jcarousel-border-next\"></a>
        </div>
    </div>
    <div id=\ "<%=id%>\" class=jcarousel>
        <ul></ul>
    </div>
</div>"; kkTmplMap["catMenuTile"] = "
<script type=text/javascript>
    $(window).resize(function() {
        kk.sizeMenu();
    });
</script>
<div id=\ "kkcm-main-menu\">
    <%for (var i = 0; i < catTree.length; i++) {%>
        <%var cat = catTree[i]; %>
            <%var menuClass; %>
                <%if (i == catTree.length-1){ %>
                    <% menuClass = \"kkcm-menu-item kk-rounded-corners kkcm-last-child\"; %>
                        <% } else { %>
                            <% menuClass = \"kkcm-menu-item kk-rounded-corners\"; %>
                                <% } %>
                                    <a href='#' id=\ "kkcm-<%=cat.id%>\" class=\ "<%=menuClass%>\" style=\ "width: auto;\">
                                        <%=cat.name%>
                                    </a>
                                    <% } %>
</div>"; kkTmplMap["editAddressTile"] = "
<h1 id=\ "kk-page-title\"><%=getMsg(\"customer.info.editaddr\")%></h1>
<div class=\ "kk-content-area kk-rounded-corners\">
    <div>
        <form action=\ "#\" id=\ "kk-edit-address-form\" method=\ "post\">
            <% var opcbilling = null;%>
                <% var opcdelivery = null;%>
                    <div class=\ "kk-form-section\">
                        <div>
                            <h3><%=getMsg(\"customer.info.personal.details\")%><span class=\"kk-required-text\"><span class=\"kk-required-icon kk-required-blue\"></span>&nbsp;<%=getMsg(\"customer.info.required.fields\")%></span></h3></div>
                        <div class=\ "kk-form-section-fields\">
                            <div class=\ "kk-form-section-divider\"></div>
                            <div class=\ "kk-form-input kk-radio-buttons\">
                                <label>
                                    <%=getMsg(\"customer.info.gender\")%>
                                </label>
                                <%var checkedM = (selectedAddr.gender.toUpperCase()=='M')?'checked':''; %><span class=\ "kk-radio-button\"><input type=\"radio\" name=\"kkGender\" value=\"m\" <%=checkedM%>> <%=getMsg(\"customer.info.male\")%></span>
                                    <%var checkedF = (selectedAddr.gender.toUpperCase()=='F')?'checked':''; %><span class=\ "kk-radio-button\"><input type=\"radio\" name=\"kkGender\" value=\"f\" <%=checkedF%>> <%=getMsg(\"customer.info.female\")%></span><span class=\ "kk-required-icon kk-required-blue\"></span><span class=\ "kk-validation-msg\"></span></div>
                            <div class=\ "kk-form-input\">
                                <label>
                                    <%=getMsg(\"customer.info.first.name\")%>
                                </label>
                                <input type=\ "text\" value='<%=selectedAddr.firstName%>' id=\ "kkFirstName\" name=\ "kkFirstName\"/><span class=\ "kk-required-icon kk-required-blue\"></span><span class=\ "kk-validation-msg\"></span></div>
                            <div class=\ "kk-form-input\">
                                <label>
                                    <%=getMsg(\"customer.info.last.name\")%>
                                </label>
                                <input type=\ "text\" value='<%=selectedAddr.lastName%>' id=\ "kkLastName\" name=\ "kkLastName\"/><span class=\ "kk-required-icon kk-required-blue\"></span><span class=\ "kk-validation-msg\"></span></div>
                        </div>
                    </div>
                    <div class=\ "kk-form-section\">
                        <h3><%=getMsg(\"customer.info.company.details\")%></h3>
                        <div class=\ "kk-form-section-fields\">
                            <div class=\ "kk-form-section-divider\"></div>
                            <div class=\ "kk-form-input\">
                                <label>
                                    <%=getMsg(\"customer.info.company.name\")%>
                                </label>
                                <input type=\ "text\" value='<%=selectedAddr.company%>' id=\ "kkCompany\" name=\ "kkCompany\"/><span class=\ "kk-validation-msg\"></span></div>
                        </div>
                    </div>
                    <div class=\ "kk-form-section\">
                        <h3><%=getMsg(\"customer.info.addr\")%></h3>
                        <div class=\ "kk-form-section-fields\">
                            <div class=\ "kk-form-section-divider\"></div>
                            <div class=\ "kk-form-input\">
                                <label>
                                    <%=getMsg(\"customer.info.street.addr\")%>
                                </label>
                                <input type=\ "text\" value='<%=selectedAddr.streetAddress%>' id=\ "kkStreetAddress\" name=\ "kkStreetAddress\"/><span class=\ "kk-required-icon kk-required-blue\"></span><span class=\ "kk-validation-msg\"></span></div>
                            <div class=\ "kk-form-input\">
                                <label>
                                    <%=getMsg(\"customer.info.street.addr1\")%>
                                </label>
                                <input type=\ "text\" value='<%=selectedAddr.streetAddress1%>' id=\ "kkStreetAddress1\" name=\ "kkStreetAddress1\" /><span class=\ "kk-validation-msg\"></span></div>
                            <div class=\ "kk-form-input\">
                                <label>
                                    <%=getMsg(\"customer.info.suburb\")%>
                                </label>
                                <input type=\ "text\" value='<%=selectedAddr.suburb%>' id=\ "kkSuburb\" name=\ "kkSuburb\"/><span class=\ "kk-validation-msg\"></span></div>
                            <div class=\ "kk-form-input\">
                                <label>
                                    <%=getMsg(\"customer.info.postcode\")%>
                                </label>
                                <input type=\ "text\" value='<%=selectedAddr.postcode%>' id=\ "kkPostcode\" name=\ "kkPostcode\" /><span class=\ "kk-required-icon kk-required-blue\"></span><span class=\ "kk-validation-msg\"></span></div>
                            <div class=\ "kk-form-input\">
                                <label>
                                    <%=getMsg(\"customer.info.city\")%>
                                </label>
                                <input type=\ "text\" value='<%=selectedAddr.city%>' id=\ "kkCity\" name=\ "kkCity\" /><span class=\ "kk-required-icon kk-required-blue\"></span><span class=\ "kk-validation-msg\"></span></div>
                            <div class=\ "kk-form-input\" id=\ "kk-form-zone-select\">
                                <label>
                                    <%=getMsg(\"customer.info.state\")%>
                                </label>
                                <select id=\ "kkStateList\" name=\ "kkStateList\" class=\ "kkState\">
                                    <option value=\ "-1\">
                                        <%=getMsg(\"customer.info.select\")%>
                                    </option>
                                    <% for (var i = 0; i < zones.length; i++){ %>
                                        <% var zone = zones[i];%>
                                            <%if (zone.zoneName == selectedAddr.state){ %>
                                                <option selected=\ "selected\" value=\ "<%=zone.zoneName%>\">
                                                    <%=zone.zoneName%>
                                                </option>
                                                <% } else { %>
                                                    <option value=\ "<%=zone.zoneName%>\">
                                                        <%=zone.zoneName%>
                                                    </option>
                                                    <% } %>
                                                        <% } %>
                                </select><span class=\ "kk-required-icon kk-required-blue\"></span><span class=\ "kk-validation-msg\"></span></div>
                            <div class=\ "kk-form-input\" id=\ "kk-form-zone-input\">
                                <label>
                                    <%=getMsg(\"customer.info.state\")%>
                                </label>
                                <input type=\ "text\" value='<%=selectedAddr.state%>' id=\ "kkState\" name=\ "kkState\" /><span class=\ "kk-required-icon kk-required-blue\"></span><span class=\ "kk-validation-msg\"></span></div>
                            <div class=\ "kk-form-input\">
                                <label>
                                    <%=getMsg(\"customer.info.country\")%>
                                </label>
                                <select id=\ "kkCountryId\" name=\ "kkCountryId\" onchange=\ "kk.changeCountry();\">
                                    <option value=\ "-1\">
                                        <%=getMsg(\"customer.info.select\")%>
                                    </option>
                                    <%if (countries != null){%>
                                        <%for ( var i = 0; i < countries.length; i++)	{%>
                                            <%var country = countries[i];%>
                                                <%if (country.id == selectedAddr.countryId){ %>
                                                    <option selected=\ "selected\" value=\ "<%=country.id%>\">
                                                        <%=country.name%>
                                                    </option>
                                                    <% } else { %>
                                                        <option value=\ "<%=country.id%>\">
                                                            <%=country.name%>
                                                        </option>
                                                        <% } %>
                                                            <% } %>
                                                                <% } %>
                                </select><span class=\ "kk-required-icon kk-required-green\"></span><span class=\ "kk-validation-msg\"></span></div>
                        </div>
                    </div>
                    <div class=\ "kk-form-section\">
                        <h3><%=getMsg(\"customer.info.contact.info\")%></h3>
                        <div class=\ "kk-form-section-fields\">
                            <div class=\ "kk-form-section-divider\"></div>
                            <div class=\ "kk-form-input\">
                                <label>
                                    <%=getMsg(\"customer.info.tel.number\")%>
                                </label>
                                <input type=\ "text\" value='<%=selectedAddr.telephoneNumber%>' id=\ "kkTelephoneNumber\" name=\ "kkTelephoneNumber\" /><span class=\ "kk-required-icon kk-required-blue\"></span><span class=\ "kk-validation-msg\"></span></div>
                            <div class=\ "kk-form-input\">
                                <label>
                                    <%=getMsg(\"customer.info.tel.number1\")%>
                                </label>
                                <input type=\ "text\" value='<%=selectedAddr.telephoneNumber1%>' id=\ "kkTelephoneNumber1\" name=\ "kkTelephoneNumber1\" /><span class=\ "kk-validation-msg\"></span></div>
                            <div class=\ "kk-form-input\">
                                <label>
                                    <%=getMsg(\"customer.info.email\")%>
                                </label>
                                <input type=\ "text\" value='<%=selectedAddr.emailAddr%>' id=\ "kkEmailAddrOptional\" name=\ "kkEmailAddrOptional\"/><span class=\ "kk-validation-msg\"></span></div>
                        </div>
                    </div>
                    <%if (!selectedAddr.isPrimary){ %>
                        <div class=\ "kk-form-section\">
                            <h3><%=getMsg(\"customer.info.primary\")%></h3>
                            <div class=\ "kk-form-section-fields\">
                                <div class=\ "kk-form-section-divider\"></div>
                                <div class=\ "kk-form-input\">
                                    <label>
                                        <%=getMsg(\"customer.info.setprimary\")%>
                                    </label>
                                    <input type=\ "checkbox\" id=\ "kkSetAsPrimary\" name=\ "kkSetAsPrimary\">
                                </div>
                            </div>
                        </div>
                        <% } %>
                            <div class=\ "kk-form-buttons\"><a id=\ "kk-edit-address-submit\" class=\ "kk-continue-button kk-button kk-small-rounded-corners\"><span><%=getMsg(\"customer.info.update\")%></span></a>
                                <%if ((opcbilling == null || opcbilling.length() == 0) && (opcdelivery == null || opcdelivery.length() == 0)){ %><a id=\ "kk-back-to-manage-address\" class=\ "kk-button kk-small-rounded-corners\"><span><%=getMsg(\"customer.info.back\")%></span></a>
                                    <% } else { %><a id=\ "kk-back-to-manage-address\" class=\ "kk-button kk-small-rounded-corners\"><span><%=getMsg(\"customer.info.back\")%></span></a>
                                        <% } %>
                            </div>
                            <input type=\ "hidden\" id=\ "countryChange\" name=\ "countryChange\" value=\ "0\"/>
        </form>
    </div>
</div>"; kkTmplMap["facetsTile"] = "
<%if (prodSearch.priceFrom != null && prodSearch.priceTo != null) {%>
    <%var symbol = \"$\";%>
        <script>
            $(function() {
                        $(\"#kkft-price-range-slider\" ).slider({range: true,min: <%=prodSearch.priceFrom.toFixed(2)%>,max: <%=prodSearch.priceTo.toFixed(2)%>,values: [ <%=prodSearch.priceFrom.toFixed(2)%>, <%=prodSearch.priceTo.toFixed(2)%> ],slide: function( event, ui ) {var min = ui.values[ 0 ];var max = ui.values[ 1 ];$( \"#kkft-amount\" ).html(kk.formatMoney(min) + \" - \" + kk.formatMoney(max));},stop: function( event, ui ) {kk.filterByPrice(ui.values[ 0 ], ui.values[ 1 ]);}});var min = $( \"#kkft-price-range-slider\" ).slider( \"values\", 0 );var max = $( \"#kkft-price-range-slider\" ).slider( \"values\", 1 );$( \"#kkft-amount\" ).html(kk.formatMoney(min) + \" - \" + kk.formatMoney(max));});
        </script>
        <% } %>
            <div id=\ "kkft-side-menu\">
                <div class=\ "kkft-side-menu-section\">
                    <% if (cats != null && cats.length > 0){%>
                        <h1><%=getMsg(\"facets.tile.categories\")%></h1>
                        <ul>
                            <% for (var i = 0; i < cats.length; i++){ %>
                                <% var cat = cats[i];%>
                                    <% var name = (cat.numberOfProducts < 0)? cat.name : cat.name+\" (\"+cat.numberOfProducts+\")\"; %>
                                        <li>
                                            <%for (var j = 0; j < cat.level; j++){%><span class='fa fa-angle-right'></span>
                                                <% }%>
                                                    <%if (cat.selected == true){ %>
                                                        <a href='#' class=\ "kkft-cat kkft-current-cat\" id=\ "kkft-<%=cat.id%>\">
                                                            <%=name%>
                                                        </a>
                                                        <% } else { %>
                                                            <a href='#' class=\ "kkft-cat\" id=\ "kkft-<%=cat.id%>\">
                                                                <%=name%>
                                                            </a>
                                                            <% } %>
                                        </li>
                                        <% } %>
                        </ul>
                        <% } %>
                            <%var haveManus = (manus !=null && manus.length > 0)? true : false;%>
                                <%var haveFacets = (prodSearch.tagGroups !=null && prodSearch.tagGroups.length > 0)? true : false;%>
                                    <%var havePriceSlider = prodSearch.priceFrom != null && prodSearch.priceTo != null;%>
                                        <%if (haveManus || haveFacets) {%>
                                            <h1><%=getMsg(\"facets.tile.refine.search\")%></h1></h1>
                                            <% } %>
                                                <%if (numSelectedFilters > 0){%>
                                                    <div id=\ "kkft-remove-all\"><img src=\ "<%=imageBase%>/x-button.png\">
                                                        <a href='#'>
                                                            <%=getMsg(\"facets.tile.clear.filters\")%>
                                                        </a>
                                                    </div>
                                                    <%}%>
                                                        <%if (haveManus){ %>
                                                            <div class=\ "kkft-side-menu-section\">
                                                                <h2><%=getMsg(\"facets.tile.manufacturers\")%></h2>
                                                                <ul>
                                                                    <% for (var i = 0; i < manus.length; i++){ %>
                                                                        <% var manu = manus[i];%>
                                                                            <% var name = manu.name+\" (\"+manu.numberOfProducts+\")\"; %>
                                                                                <%if ( manu.id == prodSearch.manufacturerId) { %>
                                                                                    <li><a href='#' class=\ "kkft-manu\" id=\ "kkft-<%=manu.id%>\"><span class=\"kk-selected\"></span><%=name%></a></li>
                                                                                    <% } else { %>
                                                                                        <li><a href='#' class=\ "kkft-manu\" id=\ "kkft-<%=manu.id%>\"><span class=\"kk-not-selected\"></span><%=name%></a></li>
                                                                                        <% } %>
                                                                                            <% } %>
                                                                </ul>
                                                            </div>
                                                            <% } %>
                                                                <%if (havePriceSlider){ %>
                                                                    <div id=\ "kkft-price\" class=\ "kkft-range-slider\">
                                                                        <h2><%=getMsg(\"facets.tile.price\")%></h2>
                                                                        <div id=\ "kkft-price-range-slider\"></div>
                                                                        <div id=\ "kkft-amount\"></div>
                                                                    </div>
                                                                    <% } %>
                                                                        <%if (haveFacets){ %>
                                                                            <div class=\ "kkft-side-menu-section\">
                                                                                <% var previousName=\"\"; %>
                                                                                    <% for (var i = 0; i < prodSearch.tagGroups.length; i++){ %>
                                                                                        <% var tagGroup = prodSearch.tagGroups[i];%>
                                                                                            <%if (tagGroup.name != null && previousName != null && !(tagGroup.name == previousName)){ %>
                                                                                                <h2><%=tagGroup.name%></h2>
                                                                                                <% } %>
                                                                                                    <% previousName = tagGroup.name; %>
                                                                                                        <%if (tagGroup.tags != null && tagGroup.tags.length > 0){ %>
                                                                                                            <ul>
                                                                                                                <% for (var j = 0; j < tagGroup.tags.length; j++){ %>
                                                                                                                    <% var tag = tagGroup.tags[j];%>
                                                                                                                        <%var name = tag.name; %>
                                                                                                                            <%if ( tag.selected == true) { %>
                                                                                                                                <li><a href='#' class=\ "kkft-tag\" id=\ "kkft-<%=tag.id%>\"><span class=\"kk-selected\"></span><%=getMsg(name)+\" (\"+tag.numProducts+\")\"%></a></li>
                                                                                                                                <% } else { %>
                                                                                                                                    <li><a href='#' class=\ "kkft-tag\" id=\ "kkft-<%=tag.id%>\"><span class=\"kk-not-selected\"></span><%=getMsg(name)+\" (\"+tag.numProducts+\")\"%></a></li>
                                                                                                                                    <% } %>
                                                                                                                                        <% } %>
                                                                                                            </ul>
                                                                                                            <% } %>
                                                                                                                <% } %>
                                                                            </div>
                                                                            <% } %>
                </div>
            </div>"; kkTmplMap["firstAddressTile"] = "
            <h1 id=\ "kk-page-title\"><%=getMsg(\"customer.info.insert.primary\")%></h1>
            <div class=\ "kk-content-area kk-rounded-corners\">
                <div>
                    <form action=\ "#\" id=\ "kk-insert-first-address-form\" method=\ "post\">
                        <div class=\ "kk-form-section\">
                            <div>
                                <h3><%=getMsg(\"customer.info.personal.details\")%><span class=\"kk-required-text\"><span class=\"kk-required-icon kk-required-blue\"></span>&nbsp;<%=getMsg(\"customer.info.required.fields\")%></span></h3></div>
                            <%if (kk.isNoGender() || kk.isNoName()){ %>
                                <div class=\ "kk-form-section-fields\">
                                    <div class=\ "kk-form-section-divider\"></div>
                                    <%if (kk.isNoGender()){ %>
                                        <div class=\ "kk-form-input kk-radio-buttons\">
                                            <label>
                                                <%=getMsg(\"customer.info.gender\")%>
                                            </label><span class=\ "kk-radio-button\"><input type=\"radio\" name=\"kkGender\" value=\"m\"> <%=getMsg(\"customer.info.male\")%></span><span class=\ "kk-radio-button\"><input type=\"radio\" name=\"kkGender\" value=\"f\"> <%=getMsg(\"customer.info.female\")%></span><span class=\ "kk-required-icon kk-required-blue\"></span><span class=\ "kk-validation-msg\"></span></div>
                                        <% } %>
                                            <%if (kk.isNoName()){ %>
                                                <div class=\ "kk-form-input\">
                                                    <label>
                                                        <%=getMsg(\"customer.info.first.name\")%>
                                                    </label>
                                                    <input type=\ "text\" value='' id=\ "kkFirstName\" name=\ "kkFirstName\"/><span class=\ "kk-required-icon kk-required-blue\"></span><span class=\ "kk-validation-msg\"></span></div>
                                                <div class=\ "kk-form-input\">
                                                    <label>
                                                        <%=getMsg(\"customer.info.last.name\")%>
                                                    </label>
                                                    <input type=\ "text\" value='' id=\ "kkLastName\" name=\ "kkLastName\"/><span class=\ "kk-required-icon kk-required-blue\"></span><span class=\ "kk-validation-msg\"></span></div>
                                                <% } %>
                                </div>
                                <% } %>
                        </div>
                        <div class=\ "kk-form-section\">
                            <h3><%=getMsg(\"customer.info.company.details\")%></h3>
                            <div class=\ "kk-form-section-fields\">
                                <div class=\ "kk-form-section-divider\"></div>
                                <div class=\ "kk-form-input\">
                                    <label>
                                        <%=getMsg(\"customer.info.company.name\")%>
                                    </label>
                                    <input type=\ "text\" value='' id=\ "kkCompany\" name=\ "kkCompany\"/><span class=\ "kk-validation-msg\"></span></div>
                            </div>
                        </div>
                        <div class=\ "kk-form-section\">
                            <h3><%=getMsg(\"customer.info.addr\")%></h3>
                            <div class=\ "kk-form-section-fields\">
                                <div class=\ "kk-form-section-divider\"></div>
                                <div class=\ "kk-form-input\">
                                    <label>
                                        <%=getMsg(\"customer.info.street.addr\")%>
                                    </label>
                                    <input type=\ "text\" value='' id=\ "kkStreetAddress\" name=\ "kkStreetAddress\"/><span class=\ "kk-required-icon kk-required-blue\"></span><span class=\ "kk-validation-msg\"></span></div>
                                <div class=\ "kk-form-input\">
                                    <label>
                                        <%=getMsg(\"customer.info.street.addr1\")%>
                                    </label>
                                    <input type=\ "text\" value='' id=\ "kkStreetAddress1\" name=\ "kkStreetAddress1\" /><span class=\ "kk-validation-msg\"></span></div>
                                <div class=\ "kk-form-input\">
                                    <label>
                                        <%=getMsg(\"customer.info.suburb\")%>
                                    </label>
                                    <input type=\ "text\" value='' id=\ "kkSuburb\" name=\ "kkSuburb\"/><span class=\ "kk-validation-msg\"></span></div>
                                <div class=\ "kk-form-input\">
                                    <label>
                                        <%=getMsg(\"customer.info.postcode\")%>
                                    </label>
                                    <input type=\ "text\" value='' id=\ "kkPostcode\" name=\ "kkPostcode\" /><span class=\ "kk-required-icon kk-required-blue\"></span><span class=\ "kk-validation-msg\"></span></div>
                                <div class=\ "kk-form-input\">
                                    <label>
                                        <%=getMsg(\"customer.info.city\")%>
                                    </label>
                                    <input type=\ "text\" value='' id=\ "kkCity\" name=\ "kkCity\" /><span class=\ "kk-required-icon kk-required-blue\"></span><span class=\ "kk-validation-msg\"></span></div>
                                <div class=\ "kk-form-input\" id=\ "kk-form-zone-select\">
                                    <label>
                                        <%=getMsg(\"customer.info.state\")%>
                                    </label>
                                    <select id=\ "kkStateList\" name=\ "kkStateList\" class=\ "kkState\">
                                        <option value=\ "-1\">
                                            <%=getMsg(\"customer.info.select\")%>
                                        </option>
                                        <% for (var i = 0; i < zones.length; i++){ %>
                                            <% var zone = zones[i];%>
                                                <option value=\ "<%=zone.zoneName%>\">
                                                    <%=zone.zoneName%>
                                                </option>
                                                <% } %>
                                    </select><span class=\ "kk-required-icon kk-required-blue\"></span><span class=\ "kk-validation-msg\"></span></div>
                                <div class=\ "kk-form-input\" id=\ "kk-form-zone-input\">
                                    <label>
                                        <%=getMsg(\"customer.info.state\")%>
                                    </label>
                                    <input type=\ "text\" id=\ "kkState\" name=\ "kkState\" /><span class=\ "kk-required-icon kk-required-blue\"></span><span class=\ "kk-validation-msg\"></span></div>
                                <div class=\ "kk-form-input\">
                                    <label>
                                        <%=getMsg(\"customer.info.country\")%>
                                    </label>
                                    <select id=\ "kkCountryId\" name=\ "kkCountryId\" onchange=\ "kk.changeCountry();\">
                                        <option value=\ "-1\">
                                            <%=getMsg(\"customer.info.select\")%>
                                        </option>
                                        <%if (countries != null){%>
                                            <%for ( var i = 0; i < countries.length; i++)	{%>
                                                <%var country = countries[i];%>
                                                    <%if (country.isoCode3 == defaultCountryCode){ %>
                                                        <option selected=\ "selected\" value=\ "<%=country.id%>\">
                                                            <%=country.name%>
                                                        </option>
                                                        <% } else { %>
                                                            <option value=\ "<%=country.id%>\">
                                                                <%=country.name%>
                                                            </option>
                                                            <% } %>
                                                                <% } %>
                                                                    <% } %>
                                    </select><span class=\ "kk-required-icon kk-required-green\"></span><span class=\ "kk-validation-msg\"></span></div>
                            </div>
                        </div>
                        <div class=\ "kk-form-section\">
                            <h3><%=getMsg(\"customer.info.contact.info\")%></h3>
                            <div class=\ "kk-form-section-fields\">
                                <div class=\ "kk-form-section-divider\"></div>
                                <div class=\ "kk-form-input\">
                                    <label>
                                        <%=getMsg(\"customer.info.tel.number\")%>
                                    </label>
                                    <input type=\ "text\" value=\ "\" id=\ "kkTelephoneNumber\" name=\ "kkTelephoneNumber\" /><span class=\ "kk-required-icon kk-required-blue\"></span><span class=\ "kk-validation-msg\"></span></div>
                                <div class=\ "kk-form-input\">
                                    <label>
                                        <%=getMsg(\"customer.info.tel.number1\")%>
                                    </label>
                                    <input type=\ "text\" value=\ "\" id=\ "kkTelephoneNumber1\" name=\ "kkTelephoneNumber1\" /><span class=\ "kk-validation-msg\"></span></div>
                                <div class=\ "kk-form-input\">
                                    <label>
                                        <%=getMsg(\"customer.info.email\")%>
                                    </label>
                                    <input type=\ "text\" value=\ "\" id=\ "kkEmailAddrOptional\" name=\ "kkEmailAddrOptional\"/><span class=\ "kk-validation-msg\"></span></div>
                            </div>
                        </div>
                        <div class=\ "kk-form-buttons\"><a id=\ "kk-insert-first-address-submit\" class=\ "kk-continue-button kk-button kk-small-rounded-corners\"><span><%=getMsg(\"customer.info.insert\")%></span></a><a id=\ "kk-cust-info-back\" class=\ "kk-button kk-small-rounded-corners\"><span><%=getMsg(\"customer.info.back\")%></span></a></div>
                    </form>
                </div>
            </div>"; kkTmplMap["forgotPasswordTile"] = "
            <h1 id=\ "kk-page-title\"><%=getMsg(\"forgot.pw.title\")%></h1>
            <div class=\ "kk-content-area kk-rounded-corners\">
                <div>
                    <div id=\ "kk-error\"></div>
                    <div id=\ "kk-message\"></div>
                    <form action=\ "#\" id=\ "kk-forgot-password-form\" method=\ "post\">
                        <div class=\ "kk-form-section\">
                            <div class=\ "kkfp-notification-header\">
                                <p>
                                    <%=getMsg(\"forgot.pw.explanation\")%>
                                </p>
                                <div class=\ "kk-form-input\">
                                    <label>
                                        <%=getMsg(\"forgot.pw.email\")%>
                                    </label>
                                    <input type=\ "text\" id=\ "kkEmailAddr\" name=\ "kkEmailAddr\"/><span class=\ "kk-validation-msg\"></span></div>
                            </div>
                        </div>
                        <div class=\ "kk-form-buttons\"><a id=\ "kk-forgot-pw-send\" class=\ "kk-continue-button kk-button kk-small-rounded-corners\"><span><%=getMsg(\"forgot.pw.send\")%></span></a><a id=\ "kk-forgot-pw-back\" class=\ "kk-button kk-small-rounded-corners\"><span><%=getMsg(\"forgot.pw.back\")%></span></a></div>
                    </form>
                </div>
            </div>"; kkTmplMap["insertAddressTile"] = "
            <h1 id=\ "kk-page-title\"><%=getMsg(\"customer.info.newaddrbook\")%></h1>
            <div class=\ "kk-content-area kk-rounded-corners\">
                <div>
                    <form action=\ "#\" id=\ "kk-insert-address-form\" method=\ "post\">
                        <% var opcbilling = null;%>
                            <% var opcdelivery = null;%>
                                <div class=\ "kk-form-section\">
                                    <div>
                                        <h3><%=getMsg(\"customer.info.personal.details\")%><span class=\"kk-required-text\"><span class=\"kk-required-icon kk-required-blue\"></span>&nbsp;<%=getMsg(\"customer.info.required.fields\")%></span></h3></div>
                                    <div class=\ "kk-form-section-fields\">
                                        <div class=\ "kk-form-section-divider\"></div>
                                        <div class=\ "kk-form-input kk-radio-buttons\">
                                            <label>
                                                <%=getMsg(\"customer.info.gender\")%>
                                            </label><span class=\ "kk-radio-button\"><input type=\"radio\" name=\"kkGender\" value=\"m\" > <%=getMsg(\"customer.info.male\")%></span><span class=\ "kk-radio-button\"><input type=\"radio\" name=\"kkGender\" value=\"f\" > <%=getMsg(\"customer.info.female\")%></span><span class=\ "kk-required-icon kk-required-blue\"></span><span class=\ "kk-validation-msg\"></span></div>
                                        <div class=\ "kk-form-input\">
                                            <label>
                                                <%=getMsg(\"customer.info.first.name\")%>
                                            </label>
                                            <input type=\ "text\" value=\ "\" id=\ "kkFirstName\" name=\ "kkFirstName\"/><span class=\ "kk-required-icon kk-required-blue\"></span><span class=\ "kk-validation-msg\"></span></div>
                                        <div class=\ "kk-form-input\">
                                            <label>
                                                <%=getMsg(\"customer.info.last.name\")%>
                                            </label>
                                            <input type=\ "text\" value=\ "\" id=\ "kkLastName\" name=\ "kkLastName\"/><span class=\ "kk-required-icon kk-required-blue\"></span><span class=\ "kk-validation-msg\"></span></div>
                                    </div>
                                </div>
                                <div class=\ "kk-form-section\">
                                    <h3><%=getMsg(\"customer.info.company.details\")%></h3>
                                    <div class=\ "kk-form-section-fields\">
                                        <div class=\ "kk-form-section-divider\"></div>
                                        <div class=\ "kk-form-input\">
                                            <label>
                                                <%=getMsg(\"customer.info.company.name\")%>
                                            </label>
                                            <input type=\ "text\" value=\ "\" id=\ "kkCompany\" name=\ "kkCompany\"/><span class=\ "kk-validation-msg\"></span></div>
                                    </div>
                                </div>
                                <div class=\ "kk-form-section\">
                                    <h3><%=getMsg(\"customer.info.addr\")%></h3>
                                    <div class=\ "kk-form-section-fields\">
                                        <div class=\ "kk-form-section-divider\"></div>
                                        <div class=\ "kk-form-input\">
                                            <label>
                                                <%=getMsg(\"customer.info.street.addr\")%>
                                            </label>
                                            <input type=\ "text\" value=\ "\" id=\ "kkStreetAddress\" name=\ "kkStreetAddress\"/><span class=\ "kk-required-icon kk-required-blue\"></span><span class=\ "kk-validation-msg\"></span></div>
                                        <div class=\ "kk-form-input\">
                                            <label>
                                                <%=getMsg(\"customer.info.street.addr1\")%>
                                            </label>
                                            <input type=\ "text\" value=\ "\" id=\ "kkStreetAddress1\" name=\ "kkStreetAddress1\" /><span class=\ "kk-validation-msg\"></span></div>
                                        <div class=\ "kk-form-input\">
                                            <label>
                                                <%=getMsg(\"customer.info.suburb\")%>
                                            </label>
                                            <input type=\ "text\" value=\ "\" id=\ "kkSuburb\" name=\ "kkSuburb\"/><span class=\ "kk-validation-msg\"></span></div>
                                        <div class=\ "kk-form-input\">
                                            <label>
                                                <%=getMsg(\"customer.info.postcode\")%>
                                            </label>
                                            <input type=\ "text\" value=\ "\" id=\ "kkPostcode\" name=\ "kkPostcode\" /><span class=\ "kk-required-icon kk-required-blue\"></span><span class=\ "kk-validation-msg\"></span></div>
                                        <div class=\ "kk-form-input\">
                                            <label>
                                                <%=getMsg(\"customer.info.city\")%>
                                            </label>
                                            <input type=\ "text\" value=\ "\" id=\ "kkCity\" name=\ "kkCity\" /><span class=\ "kk-required-icon kk-required-blue\"></span><span class=\ "kk-validation-msg\"></span></div>
                                        <div class=\ "kk-form-input\" id=\ "kk-form-zone-select\">
                                            <label>
                                                <%=getMsg(\"customer.info.state\")%>
                                            </label>
                                            <select id=\ "kkStateList\" name=\ "kkStateList\" class=\ "kkState\">
                                                <option value=\ "-1\">
                                                    <%=getMsg(\"customer.info.select\")%>
                                                </option>
                                                <% for (var i = 0; i < zones.length; i++){ %>
                                                    <% var zone = zones[i];%>
                                                        <option value=\ "<%=zone.zoneName%>\">
                                                            <%=zone.zoneName%>
                                                        </option>
                                                        <% } %>
                                            </select><span class=\ "kk-required-icon kk-required-blue\"></span><span class=\ "kk-validation-msg\"></span></div>
                                        <div class=\ "kk-form-input\" id=\ "kk-form-zone-input\">
                                            <label>
                                                <%=getMsg(\"customer.info.state\")%>
                                            </label>
                                            <input type=\ "text\" id=\ "kkState\" name=\ "kkState\" /><span class=\ "kk-required-icon kk-required-blue\"></span><span class=\ "kk-validation-msg\"></span></div>
                                        <div class=\ "kk-form-input\">
                                            <label>
                                                <%=getMsg(\"customer.info.country\")%>
                                            </label>
                                            <select id=\ "kkCountryId\" name=\ "kkCountryId\" onchange=\ "kk.changeCountry();\">
                                                <option value=\ "-1\">
                                                    <%=getMsg(\"customer.info.select\")%>
                                                </option>
                                                <%if (countries != null){%>
                                                    <%for ( var i = 0; i < countries.length; i++)	{%>
                                                        <%var country = countries[i];%>
                                                            <%if (country.isoCode3 == defaultCountryCode){ %>
                                                                <option selected=\ "selected\" value=\ "<%=country.id%>\">
                                                                    <%=country.name%>
                                                                </option>
                                                                <% } else { %>
                                                                    <option value=\ "<%=country.id%>\">
                                                                        <%=country.name%>
                                                                    </option>
                                                                    <% } %>
                                                                        <% } %>
                                                                            <% } %>
                                            </select><span class=\ "kk-required-icon kk-required-green\"></span><span class=\ "kk-validation-msg\"></span></div>
                                    </div>
                                </div>
                                <div class=\ "kk-form-section\">
                                    <h3><%=getMsg(\"customer.info.contact.info\")%></h3>
                                    <div class=\ "kk-form-section-fields\">
                                        <div class=\ "kk-form-section-divider\"></div>
                                        <div class=\ "kk-form-input\">
                                            <label>
                                                <%=getMsg(\"customer.info.tel.number\")%>
                                            </label>
                                            <input type=\ "text\" value=\ "\" id=\ "kkTelephoneNumber\" name=\ "kkTelephoneNumber\" /><span class=\ "kk-required-icon kk-required-blue\"></span><span class=\ "kk-validation-msg\"></span></div>
                                        <div class=\ "kk-form-input\">
                                            <label>
                                                <%=getMsg(\"customer.info.tel.number1\")%>
                                            </label>
                                            <input type=\ "text\" value=\ "\" id=\ "kkTelephoneNumber1\" name=\ "kkTelephoneNumber1\" /><span class=\ "kk-validation-msg\"></span></div>
                                        <div class=\ "kk-form-input\">
                                            <label>
                                                <%=getMsg(\"customer.info.email\")%>
                                            </label>
                                            <input type=\ "text\" value=\ "\" id=\ "kkEmailAddrOptional\" name=\ "kkEmailAddrOptional\"/><span class=\ "kk-validation-msg\"></span></div>
                                    </div>
                                </div>
                                <div class=\ "kk-form-section\">
                                    <h3><%=getMsg(\"customer.info.primary\")%></h3>
                                    <div class=\ "kk-form-section-fields\">
                                        <div class=\ "kk-form-section-divider\"></div>
                                        <div class=\ "kk-form-input\">
                                            <label>
                                                <%=getMsg(\"customer.info.setprimary\")%>
                                            </label>
                                            <input type=\ "checkbox\" id=\ "kkSetAsPrimary\" name=\ "kkSetAsPrimary\">
                                        </div>
                                    </div>
                                </div>
                                <div class=\ "kk-form-buttons\"><a id=\ "kk-insert-address-submit\" class=\ "kk-continue-button kk-button kk-small-rounded-corners\"><span><%=getMsg(\"customer.info.insert\")%></span></a>
                                    <%if (opcbilling == null && opcdelivery == null){ %><a id=\ "kk-back-to-manage-address\" class=\ "kk-button kk-small-rounded-corners\"><span><%=getMsg(\"customer.info.back\")%></span></a>
                                        <% } else { %><a id=\ "kk-back-to-manage-address\" class=\ "kk-button kk-small-rounded-corners\"><span><%=getMsg(\"customer.info.back\")%></span></a>
                                            <% } %>
                                </div>
                                <input type=\ "hidden\" id=\ "countryChange\" name=\ "countryChange\" value=\ "0\"/>
                    </form>
                </div>
            </div>"; kkTmplMap["loginTile"] = "
            <%if (allowGooglePlusLogin) {%>
                <script src=\ "https://apis.google.com/js/client:platform.js?onload=gpStart\" async defer></script>
                <meta name=\ "google-signin-client_id\" content=\ "<%=googlePlusId%>\">
                <%}%>
                    <script type=\ "text/javascript\">
                        <%if (allowFacebookLogin) {%>
                        if (typeof(FB) == \"undefined\"){window.fbAsyncInit = function() {FB.init({appId      : '<%=facebookId%>',version    : 'v2.5'});$(\"#kkfb-button\").css(\"display\",\"inline\");};}	else {$(\"#kkfb-button\").css(\"display\",\"inline\");}(function(d, s, id){var js, fjs = d.getElementsByTagName(s)[0];if (d.getElementById(id)) {return;}js = d.createElement(s); js.id = id;js.src = \"//connect.facebook.net/en_US/sdk.js\";fjs.parentNode.insertBefore(js, fjs);}(document, 'script', 'facebook-jssdk'));function fbKKLogin(response) {$(\"#kkfb-button\").hide();$(\"#kkfb-wait\").text('<%=getMsg(\"login.tile.fb.processing\")%>').addClass('kkfb-loading');document.getElementById('loginToken').value = response.authResponse.accessToken;document.getElementById('loginType').value = \"FACEBOOK\";fbGetEmail();};function fbGetEmail() {FB.api('/me?fields=email', function(response) {if (response.email == null || response.email.length == 0) {document.getElementById('kk-social-status').innerHTML = '<%=getMsg(\"login.tile.fb.no.email\")%>';$(\"#kkfb-wait\").text('').removeClass('kkfb-loading');$(\"#kkfb-button\").show();} else {$('#kk-ext-login-form').submit();}});};<%}%><%if (allowGooglePlusLogin) {%>function gpStart() {gapi.load('auth2', function() {gapi.client.load('plus','v1').then(function() {$(\"#kkgp-button\").css(\"display\",\"inline\");});});};var gpUpdate = function(authResult) {if (authResult.isSignedIn.get()) {var user = authResult.currentUser.get();if (user.getBasicProfile().getEmail() == null || user.getBasicProfile().getEmail().length == 0) {document.getElementById('kk-social-status').innerHTML = '<%=getMsg(\"login.tile.gp.no.email\")%>';return;}$(\"#kkgp-button\").hide();$(\"#kkgp-wait\").text('<%=getMsg(\"login.tile.gp.processing\")%>').addClass('kkgp-loading');document.getElementById('loginToken').value = user.getAuthResponse().id_token;document.getElementById('loginType').value = \"GOOGLEPLUS\";$('#kk-ext-login-form').submit();} else if (authResult['error'] ||authResult.currentUser.get().getAuthResponse() == null) {document.getElementById('kk-social-status').innerHTML = '<%=getMsg(\"login.tile.gp.no.auth\")%>';} else  {authResult.isSignedIn.listen(gpListener);authResult.signIn({'scope': 'profile email'});}};var gpListener = function(loggedIn) {if (loggedIn == true) {gpUpdate(gapi.auth2.getAuthInstance());}};<%}%>$(function() {$(\"#password\").keydown(function (e){if(e.keyCode == 13){$('#kk-login-form').submit();}});<%if (allowGooglePlusLogin) {%>$(\"#kkgp-button\").click(function() {var authResult = gapi.auth2.getAuthInstance();if (authResult == null) {gapi.auth2.init({fetch_basic_profile: true,scope:'https://www.googleapis.com/auth/plus.login'}).then(function (){authResult = gapi.auth2.getAuthInstance();gpUpdate(authResult);});} else {gpUpdate(authResult);}});<%}%><%if (allowFacebookLogin) {%>$(\"#kkfb-button\").click(function() {FB.getLoginStatus(function(response) {if (response==null || response.authResponse == 'undefined' || response.status!='connected') {FB.login(function(response){if (response.status === 'connected') {fbKKLogin(response);} else if (response.status === 'not_authorized') {document.getElementById('kk-social-status').innerHTML = '<%=getMsg(\"login.tile.fb.no.auth\")%>';} else {document.getElementById('kk-social-status').innerHTML = '<%=getMsg(\"login.tile.fb.no.auth\")%>';}}, {scope: 'email'});} else {fbKKLogin(response);}});});<%}%>});
                    </script>
                    <%if (allowFacebookLogin || allowGooglePlusLogin) {%>
                        <form action=\ "#\" id='kk-ext-login-form' method=\ "post\">
                            <input id=\ "loginToken\" name=\ "loginToken\" type=\ "hidden\"/>
                            <input id=\ "loginType\" name=\ "loginType\" type=\ "hidden\"/>
                        </form>
                        <%}%>
                            <%if (allowFacebookLogin || allowGooglePlusLogin) {%>
                                <h1 id=\ "kk-page-title\"><%=getMsg(\"login.tile.use.social.network\")%></h1>
                                <div id=\ "kk-ext-login-area\" class=\ "kk-content-area kk-rounded-corners\">
                                    <div>
                                        <%if (allowFacebookLogin) {%>
                                            <div class=\ "kk-sign-in-column-left kk-centered\">
                                                <div id=\ "kkfb-button\" style=\ "display: none\"><img src=\ "<%=imageBase%>/btn_facebook_login.png\"></div>
                                                <div id=\ "kkfb-wait\"></div>
                                            </div>
                                            <%}%>
                                                <%if (allowFacebookLogin && allowGooglePlusLogin) {%>
                                                    <div class=\ "kk-sign-in-column-right kk-centered\">
                                                        <div id=\ "kkgp-button\" style=\ "display: none\"><img src=\ "<%=imageBase%>/btn_googleplus_login.png\"></div>
                                                        <div id=\ "kkgp-wait\"></div>
                                                    </div>
                                                    <%}%>
                                                        <%if (!allowFacebookLogin && allowGooglePlusLogin) {%>
                                                            <div class=\ "kk-sign-in-column-left kk-centered\">
                                                                <div id=\ "kkgp-button\" style=\ "display: none\"><img src=\ "<%=imageBase%>/btn_googleplus_login.png\"></div>
                                                                <div id=\ "kkgp-wait\"></div>
                                                            </div>
                                                            <%}%>
                                                                <div id=\ "kk-social-status\"></div>
                                    </div>
                                </div>
                                <%}%>
                                    <h1 id=\ "kk-page-title\"><%=getMsg(\"login.tile.sign.in\")%></h1>
                                    <div id=\ "kk-login-area\" class=\ "kk-content-area kk-rounded-corners\">
                                        <div id=\ "kk-error\"></div>
                                        <div class=\ "kk-sign-in-column-left\">
                                            <form action=\ "#\" id=\ "kk-login-form\" method=\ "post\">
                                                <div class=\ "kk-form-section\">
                                                    <h3><%=getMsg(\"login.tile.returning.customer\")%></h3>
                                                    <div class=\ "kk-form-input\">
                                                        <label>
                                                            <%=getMsg(\"login.tile.email\")%>
                                                        </label>
                                                        <input type=\ "text\" id=\ "kkLoginUsername\" name=\ "kkLoginUsername\"><span class=\ "kk-validation-msg\"></span></div>
                                                    <div class=\ "kk-form-input\">
                                                        <label>
                                                            <%=getMsg(\"login.tile.password\")%>
                                                        </label>
                                                        <input type=\ "password\" id=\ "kkPassword\" name=\ "kkPassword\" autocomplete=\ "off\"><span class=\ "kk-validation-msg\"></span></div>
                                                    <div id=\ "kk-sign-in-button-container\"><a id=\ "kk-continue-button\" class=\ "kk-button kk-small-rounded-corners\"><span><%=getMsg(\"login.tile.sign.in\")%></span></a>
                                                        <a class=\ "kk-text-link\" id=\ "kk-forgot-password-link\">
                                                            <%=getMsg(\"login.tile.forgotten.password\")%>
                                                        </a>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div class=\ "kk-sign-in-column-right kk-centered\">
                                            <h3><%=getMsg(\"login.tile.new.customer\")%></h3>
                                            <div><a id=\ "kk-sign-in-register\" class=\ "kk-button kk-small-rounded-corners\"><span><%=getMsg(\"login.tile.register\")%></span></a></div>
                                            <% var loginWithoutRegistration = false;%>
                                                <%if (loginWithoutRegistration){ %>
                                                    <div><a id=\ "kk-sign-in-checkout\" class=\ "kk-button kk-small-rounded-corners\"><span><%=getMsg(\"login.tile.checkout\")%></span></a></div>
                                                    <% } %>
                                        </div>
                                    </div>"; kkTmplMap["manageAddressBookTile"] = "
                                    <h1 id=\ "page-title\"><%=getMsg(\"customer.info.mypersonaladdressbook\")%></h1>
                                    <div class=\ "kk-content-area kk-rounded-corners\">
                                        <div>
                                            <div id=\ "kk-error\"></div>
                                            <div id=\ "kk-message\"></div>
                                            <form action=\ "#\" id=\ "kk-manage-address-book-form\" method=\ "post\">
                                                <div class=\ "kk-form-section\">
                                                    <div class=\ "kk-form-section-title\">
                                                        <h3><%=getMsg(\"customer.info.primaryaddress\")%></h3></div>
                                                    <div class=\ "kk-addr-book-header\">
                                                        <div class=\ "kk-addr-book-explanation\">
                                                            <%=getMsg(\"customer.info.addrexplanation\")%>
                                                        </div>
                                                        <div class=\ "kk-addr-book-addr\">
                                                            <%if (addresses != null && addresses.length > 0){ %>
                                                                <%=removeCData(addresses[0].formattedAddress)%>
                                                                    <% } %>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class=\ "kk-form-section\">
                                                    <div class=\ "kk-form-section-title no-margin\">
                                                        <h3><%=getMsg(\"customer.info.addressbookentries\")%><a   id=\"kk-insert-address\" class=\"kk-button-medium kk-new-addr-button kk-small-rounded-corners\"><span><%=getMsg(\"customer.info.newaddress\")%></span></a></h3></div>
                                                    <%if (addresses != null && addresses.length > 0){ %>
                                                        <% for (var i = 0; i < addresses.length; i++){ %>
                                                            <% var addr = addresses[i];%>
                                                                <div class=\ "kk-select-addr-section <%=(i%2==0)?\"even\ ":\"odd\ "%>\">
                                                                    <div class=\ "kk-select-addr\">
                                                                        <%if (i == 0){ %><span class=\ "kk-primary-addr-label\">(<%=getMsg(\"customer.info.primaryaddress\")%>)</span>
                                                                            <br>
                                                                            <% } %>
                                                                                <%=removeCData(addr.formattedAddress)%>
                                                                    </div>
                                                                    <div class=\ "kk-select-addr-buttons\"><a href='#' id='<%=\"kkEditAddr-\"+addr.id%>' class=\ "kk-edit-address kk-button-medium kk-small-rounded-corners\"><span><%=getMsg(\"customer.info.edit\")%></span></a>&nbsp;
                                                                        <%if (i != 0){ %><a href='#' id='<%=\"kkDelAddr-\"+addr.id%>' class=\ "kk-delete-address kk-button-medium kk-small-rounded-corners\"><span><%=getMsg(\"customer.info.delete\")%></span></a>
                                                                            <% } %>
                                                                    </div>
                                                                </div>
                                                                <% } %>
                                                                    <% } %>
                                                </div>
                                                <div class=\ "kk-form-buttons-wide\"><a id=\ "kk-cust-info-back\" class=\ "kk-button kk-small-rounded-corners\"><span><%=getMsg(\"customer.info.back\")%></span></a></div>
                                            </form>
                                        </div>
                                    </div>"; kkTmplMap["manageCartTile"] = "
                                    <h1 id=\ "kk-page-title\"><%=getMsg(\"edit.cart.tile.editcart\")%></h1>
                                    <div id=\ "kkmct-container\" class=\ "kk-content-area kk-rounded-corners\">
                                        <%if (numItems == 0){ %>
                                            <p>
                                                <%=getMsg(\"edit.cart.tile.emptycart\")%>
                                            </p>
                                            <% } else { %>
                                                <% var outOfStock=false; %>
                                                    <form action=\ "#\" id=\ "kk-manage-cart-form\" method=\ "post\" class=\ "kk-form-section\">
                                                        <table>
                                                            <thead>
                                                                <tr>
                                                                    <td></td>
                                                                    <td class=\ "kkmct-narrow-col\">
                                                                        <%=getMsg(\"edit.cart.tile.item\")%>
                                                                    </td>
                                                                    <td class=\ "kkmct-wide-col\"></td>
                                                                    <td class=\ "kkmct-narrow-col kk-right\">
                                                                        <%=getMsg(\"edit.cart.tile.price\")%>
                                                                    </td>
                                                                    <td class=\ "kkmct-narrow-col kk-right\">
                                                                        <%=getMsg(\"edit.cart.tile.total\")%>
                                                                    </td>
                                                                    <td class=\ "kkmct-narrow-col kk-center\"></td>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <% for (var k = 0; k < basketItems.length; k++){ %>
                                                                    <% var item = basketItems[k];%>
                                                                        <tr>
                                                                            <td>
                                                                                <%if ((item.quantity > item.quantityInStock)) { %>
                                                                                    <div class=\ "kkmct-items-left kkmct-red\">
                                                                                        <%=getMsg(\"edit.cart.tile.out.of.stock\")%>
                                                                                    </div>
                                                                                    <% outOfStock=true; %>
                                                                                        <% } %>
                                                                            </td>
                                                                            <td><img class=\ "kkmct-product-image\" id='<%=\"kkmct-\"+item.product.id%>' src=\ "<%=item.prodImage%>\" border=\ "0\" alt=\ "<%=item.product.name%>\" title=\ " <%=item.product.name%> \"></td>
                                                                            <td>
                                                                                <a href='#' class=\ "kkmct-text-link\" id='<%=\"kkmct-\"+item.product.id%>'>
                                                                                    <%=item.product.name%>
                                                                                        <%if (item.opts != null && item.opts.length > 0) {%>
                                                                                            <%for ( var j = 0; j < item.opts.length; j++) {%>
                                                                                                <%var opt = item.opts[j];%>
                                                                                                    <%if (opt.type == 0) {%>
                                                                                                        <br><span class=\ "kkct-shopping-cart-item-option\"> - <%=opt.name%>:&nbsp;<%=opt.value%></span>
                                                                                                        <%} else if (opt.type == 1) {%>
                                                                                                            <br><span class=\ "kkct-shopping-cart-item-option\"> - <%=opt.name%>:&nbsp;<%=opt.quantity%>&nbsp;<%=opt.value%></span>
                                                                                                            <%} else if (opt.type == 2) {%>
                                                                                                                <br><span class=\ "kkct-shopping-cart-item-option\"> - <%=opt.name%>:&nbsp;<%=formatMoney(opt.customerPrice)%></span>
                                                                                                                <%} else if (opt.type == 3) {%>
                                                                                                                    <br><span class=\ "kkct-shopping-cart-item-option\"> - <%=opt.name%>:&nbsp;<%=opt.customerText%></span>
                                                                                                                    <%}%>
                                                                                                                        <%}%>
                                                                                                                            <%}%>
                                                                                </a>
                                                                                <input type=\ "text\" class=\ "kkmct-qty-input\" name=\ "prodQty\" id=\ "kkmctq-<%=item.id%>\" value=\ "<%=item.quantity%>\">
                                                                                <a id='<%=\"kkmctb-\"+item.id%>' class=\ "kkmct-update-qty kkmct-update-button kk-small-rounded-corners\">
                                                                                    <%=getMsg(\"edit.cart.tile.update\")%>
                                                                                </a>
                                                                            </td>
                                                                            <%if (item.finalPriceIncTax != null && displayPriceWithTax){ %>
                                                                                <td class=\ "kk-right\">
                                                                                    <%if (item.quantity>0){ %>
                                                                                        <%=formatMoney(item.finalPriceIncTax / item.quantity)%>
                                                                                            <% } %>
                                                                                </td>
                                                                                <td class=\ "kkmct-total-price kk-right\">
                                                                                    <%=formatMoney(item.finalPriceIncTax)%>
                                                                                </td>
                                                                                <% } %>
                                                                                    <%if (item.finalPriceExTax != null && !displayPriceWithTax){ %>
                                                                                        <td class=\ "kk-right\">
                                                                                            <%if (item.quantity>0){ %>
                                                                                                <%=formatMoney(item.finalPriceExTax / item.quantity)%>
                                                                                                    <% } %>
                                                                                        </td>
                                                                                        <td class=\ "kkmct-total-price kk-right\">
                                                                                            <%=formatMoney(item.finalPriceExTax)%>
                                                                                        </td>
                                                                                        <% } %>
                                                                                            <td class=\ "center\">
                                                                                                <a class=\ "kkmct-remove fa fa-times-circle\" id='<%=\"kkmct-\"+item.id%>' href='#' title='<%=getMsg(\"edit.cart.tile.remove.item\")%>'></a>
                                                                                            </td>
                                                                        </tr>
                                                                        <%}%>
                                                                            <tr>
                                                                                <td id=\ "kkmct-promotion-codes\" colspan=\ "3\">
                                                                                    <div id=\ "kkmct-promotion-codes-container\">
                                                                                        <%if (displayCouponEntry == true) { %>
                                                                                            <div class=\ "kkmct-promotion-codes-field\">
                                                                                                <label>
                                                                                                    <%=getMsg(\"edit.cart.tile.couponcode\")%>
                                                                                                </label>
                                                                                                <input type=\ "text\" name=\ "kkCouponCode\" id=\ "kkCouponCode\" value='<%=couponCode%>' />
                                                                                                <a id=\ "kkmct-couponCodeUpdate\" class=\ "kkmct-update-button kk-small-rounded-corners\">
                                                                                                    <%=getMsg(\"edit.cart.tile.update\")%>
                                                                                                </a><span class=\ "kk-validation-msg\"></span></div>
                                                                                            <% } %>
                                                                                                <%if (displayGiftCertificateEntry == true) { %>
                                                                                                    <div class=\ "kkmct-promotion-codes-field\">
                                                                                                        <label>
                                                                                                            <%=getMsg(\"edit.cart.tile.giftcertcode\")%>
                                                                                                        </label>
                                                                                                        <input type=\ "text\" name=\ "kkGiftCertCode\" id=\ "kkGiftCertCode\" value='<%=giftCertCode%>' />
                                                                                                        <a id=\ "kkmct-giftCertCodeUpdate\" class=\ "kkmct-update-button kk-small-rounded-corners\">
                                                                                                            <%=getMsg(\"edit.cart.tile.update\")%>
                                                                                                        </a><span class=\ "kk-validation-msg\"></span></div>
                                                                                                    <% } %>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td colspan=\ "3\"></td>
                                                                                <td colspan=\ "3\">
                                                                                    <%if (checkoutOrder != null){ %>
                                                                                        <%if (checkoutOrder.orderTotals != null && checkoutOrder.orderTotals.length > 0 ){ %>
                                                                                            <table id=\ "kkmct-cost-overview\">
                                                                                                <% for (var j = 0; j < checkoutOrder.orderTotals.length; j++){ %>
                                                                                                    <tr>
                                                                                                        <% var ot = checkoutOrder.orderTotals[j];%>
                                                                                                            <td class=\ "kkmct-cost-overview-labels\">
                                                                                                                <% if (isDiscountModule(ot.className)) {%><span class=\ "kkmct-discount\"><%=ot.title%></span>
                                                                                                                    <br/>
                                                                                                                    <%}else{%>
                                                                                                                        <%=ot.title%>
                                                                                                                            <br/>
                                                                                                                            <%}%>
                                                                                                            </td>
                                                                                                            <td class=\ "kkmct-cost-overview-amounts kk-right\">
                                                                                                                <%if (ot.className == \"ot_reward_points\" || ot.className == \"ot_product_reward_points\") {%>
                                                                                                                    <%=ot.value%>
                                                                                                                        <br/>
                                                                                                                        <%}else if (ot.className == \"ot_free_product\"){%>
                                                                                                                            <%=ot.text%>
                                                                                                                                <br/>
                                                                                                                                <%}else if (isDiscountModule(ot.className)) {%><span class=\ "kkmct-discount\">-<%=formatMoney(ot.value)%></span>
                                                                                                                                    <br/>
                                                                                                                                    <%}else{%>
                                                                                                                                        <%=formatMoney(ot.value)%>
                                                                                                                                            <br/>
                                                                                                                                            <%}%>
                                                                                                            </td>
                                                                                                    </tr>
                                                                                                    <% } %>
                                                                                            </table>
                                                                                            <% } %>
                                                                                                <% } else { %>
                                                                                                    <table>
                                                                                                        <tr>
                                                                                                            <td class=\ "kkmct-cost-overview-labels\">
                                                                                                                <%=getMsg(\"cart.tile.subtotal\")%>:</td>
                                                                                                            <td class=\ "kkmct-cost-overview-amounts\">
                                                                                                                <%=formatMoney(basketTotal)%>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                    </table>
                                                                                                    <% } %>
                                                                                </td>
                                                                                <td></td>
                                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </form>
                                                    <div><a id=\ "kkmct-checkout-button\" class=\ "kk-button kk-small-rounded-corners\"><span><%=getMsg(\"cart.tile.checkout\")%></span></a></div>
                                                    <% } %>
                                    </div>"; kkTmplMap["manageEmailTile"] = "
                                    <h1 id=\ "kk-page-title\"><%=getMsg(\"customer.info.change.email\")%></h1>
                                    <div class=\ "kk-content-area kk-rounded-corners\">
                                        <div>
                                            <div id=\ "kk-error\"></div>
                                            <form action=\ "#\" id=\ "kk-manage-email-form\" method=\ "post\">
                                                <div class=\ "kk-form-section\">
                                                    <div>
                                                        <h3><%=getMsg(\"customer.info.personal.details\")%><span class=\"kk-required-text\"><span class=\"kk-required-icon kk-required-blue\"></span>&nbsp;<%=getMsg(\"customer.info.required.fields\")%></span></h3></div>
                                                    <div class=\ "kk-form-section-fields\">
                                                        <div class=\ "kk-form-section-divider\"></div>
                                                        <div class=\ "kk-form-input\">
                                                            <label>
                                                                <%=getMsg(\"customer.info.email\")%>
                                                            </label>
                                                            <input type=\ "text\" value='<%=customer.emailAddr%>' id=\ "kkEmailAddr\" name=\ "kkEmailAddr\"/><span class=\ "kk-required-icon kk-required-blue\"></span><span class=\ "kk-validation-msg\"></span></div>
                                                        <div class=\ "kk-form-input\">
                                                            <label>
                                                                <%=getMsg(\"customer.info.username\")%>
                                                            </label>
                                                            <% var username = (customer.username==null)?'':customer.username; %>
                                                                <input type=\ "text\" value='<%=username%>' id=\ "kkUsername\" name=\ "kkUsername\"/><span class=\ "kk-validation-msg\"></span></div>
                                                        <div class=\ "kk-form-input\">
                                                            <label>
                                                                <%=getMsg(\"customer.info.password\")%>
                                                            </label>
                                                            <input type=\ "password\" id=\ "kkPassword\" name=\ "kkPassword\" autocomplete=\ "off\" value=\ "\"/><span class=\ "kk-required-icon kk-required-blue\"></span><span class=\ "kk-validation-msg\"></span></div>
                                                    </div>
                                                </div>
                                                <div class=\ "kk-form-buttons\"><a id=\ "kk-manage-email\" class=\ "kk-continue-button kk-button kk-small-rounded-corners\"><span><%=getMsg(\"customer.info.continue\")%></span></a><a id=\ "kk-cust-info-back\" class=\ "kk-button kk-small-rounded-corners\"><span><%=getMsg(\"customer.info.back\")%></span></a></div>
                                            </form>
                                        </div>
                                    </div>"; kkTmplMap["manageNewsletterTile"] = "
                                    <h1 id=\ "kk-page-title\"><%=getMsg(\"customer.info.newsletter.subscriptions\")%></h1>
                                    <div class=\ "kk-content-area kk-rounded-corners\">
                                        <div>
                                            <form action=\ "#\" id=\ "kk-newsletter-subscription-form\" method=\ "post\">
                                                <div class=\ "kk-form-section\">
                                                    <div class=\ "kk-newsletter-header\">
                                                        <div class=\ "kk-newsletter-checkbox\">
                                                            <% if (customer.newsletter == 1){ %>
                                                                <input type=\ "checkbox\" id=\ "kkNewsletter\" name=\ "kkNewsletter\" checked>
                                                                <%} else { %>
                                                                    <input type=\ "checkbox\" id=\ "kkNewsletter\" name=\ "kkNewsletter\">
                                                                    <%}%>
                                                        </div>
                                                        <div class=\ "kk-newsletter-explanation\">
                                                            <%=getMsg(\"customer.info.newsletter.contents\")%>.</div>
                                                    </div>
                                                </div>
                                                <div class=\ "kk-form-buttons-wide\"><a id=\ "kk-newsletter-subscription-submit\" class=\ "kk-continue-button kk-button kk-small-rounded-corners\"><span><%=getMsg(\"customer.info.continue\")%></span></a><a id=\ "kk-cust-info-back\" class=\ "kk-button kk-small-rounded-corners\"><span><%=getMsg(\"customer.info.back\")%></span></a></div>
                                            </form>
                                        </div>
                                    </div>"; kkTmplMap["managePasswordTile"] = "
                                    <h1 id=\ "kk-page-title\"><%=getMsg(\"customer.info.changepassword\")%></h1>
                                    <div class=\ "kk-content-area kk-rounded-corners\">
                                        <div>
                                            <div id=\ "kk-error\"></div>
                                            <form action=\ "#\" id=\ "kk-manage-password-form\" method=\ "post\">
                                                <div class=\ "kk-form-section\">
                                                    <h3><%=getMsg(\"customer.info.mypassword\")%><span class=\"kk-required-text\"><span class=\"kk-required-icon kk-required-blue\"></span>&nbsp;<%=getMsg(\"customer.info.required.fields\")%></span></h3>
                                                    <div class=\ "kk-form-section-fields\">
                                                        <div class=\ "kk-form-section-divider\"></div>
                                                        <div class=\ "kk-form-input\">
                                                            <label>
                                                                <%=getMsg(\"customer.info.currentpassword\")%>
                                                            </label>
                                                            <input type=\ "password\" id=\ "kkCurrentPassword\" name=\ "kkCurrentPassword\" autocomplete=\ "off\" value=\ "\"/><span class=\ "kk-required-icon kk-required-blue\"></span><span class=\ "kk-validation-msg\"></span></div>
                                                        <div class=\ "kk-form-input\">
                                                            <label>
                                                                <%=getMsg(\"customer.info.newpassword\")%>
                                                            </label>
                                                            <input type=\ "password\" id=\ "kkPassword\" name=\ "kkPassword\" autocomplete=\ "off\" value=\ "\"/><span class=\ "kk-required-icon kk-required-blue\"></span><span class=\ "kk-validation-msg\"></span></div>
                                                        <div class=\ "kk-form-input\">
                                                            <label>
                                                                <%=getMsg(\"customer.info.passwordconfirmation\")%>
                                                            </label>
                                                            <input type=\ "password\" id=\ "kkPasswordConfirmation\" name=\ "kkPasswordConfirmation\" autocomplete=\ "off\" value=\ "\"/><span class=\ "kk-required-icon kk-required-blue\"></span><span class=\ "kk-validation-msg\"></span></div>
                                                    </div>
                                                </div>
                                                <div class=\ "kk-form-buttons\"><a id=\ "kk-manage-password\" class=\ "kk-continue-button kk-button kk-small-rounded-corners\"><span><%=getMsg(\"customer.info.continue\")%></span></a><a id=\ "kk-cust-info-back\" class=\ "kk-button kk-small-rounded-corners\"><span><%=getMsg(\"customer.info.back\")%></span></a></div>
                                            </form>
                                        </div>
                                    </div>"; kkTmplMap["managePersonalInfoTile"] = "
                                    <script type=\ "text/javascript\">
                                        $(function() {
                                                    $.datepicker.setDefaults($.datepicker.regional['<%=locale.slice(0,2)%>']);
                                                    $('#kkDatepicker').datepicker({
                                                                changeMonth: true,
                                                                changeYear: true,
                                                                dateFormat: '<%=getMsg(\"datepicker.date.format\")%>',
                                                                yearRange: \ "-120:-10\", minDate: '-120y', maxDate: '-10y'});});
                                    </script>
                                    <h1 id=\ "kk-page-title\"><%=getMsg(\"customer.info.myaccount\")%></h1>
                                    <div class=\ "kk-content-area kk-rounded-corners\">
                                        <div>
                                            <div id=\ "kk-error\"></div>
                                            <form action=\ "#\" id=\ "kk-manage-personal-info-form\" method=\ "post\">
                                                <div class=\ "kk-form-section\">
                                                    <div>
                                                        <h3><%=getMsg(\"customer.info.personal.details\")%><span class=\"kk-required-text\"><span class=\"kk-required-icon kk-required-blue\"></span>&nbsp;<%=getMsg(\"customer.info.required.fields\")%></span></h3></div>
                                                    <div class=\ "kk-form-section-fields\">
                                                        <div class=\ "kk-form-section-divider\"></div>
                                                        <div class=\ "kk-form-input kk-radio-buttons\">
                                                            <label>
                                                                <%=getMsg(\"customer.info.gender\")%>
                                                            </label>
                                                            <%var checkedM = (customer.gender.toUpperCase()=='M')?'checked':''; %><span class=\ "kk-radio-button\"><input type=\"radio\" name=\"kkGender\" value=\"m\" <%=checkedM%> > <%=getMsg(\"customer.info.male\")%></span>
                                                                <%var checkedF = (customer.gender.toUpperCase()=='F')?'checked':''; %><span class=\ "kk-radio-button\"><input type=\"radio\" name=\"kkGender\" value=\"f\" <%=checkedF%>> <%=getMsg(\"customer.info.female\")%></span><span class=\ "kk-required-icon kk-required-blue\"></span><span class=\ "kk-validation-msg\"></span></div>
                                                        <div class=\ "kk-form-input\">
                                                            <label>
                                                                <%=getMsg(\"customer.info.first.name\")%>
                                                            </label>
                                                            <% var firstName = (kk.isNoName())?'':customer.firstName; %>
                                                                <input type=\ "text\" value='<%=firstName%>' id=\ "kkFirstName\" name=\ "kkFirstName\"/><span class=\ "kk-required-icon kk-required-blue\"></span><span class=\ "kk-validation-msg\"></span></div>
                                                        <div class=\ "kk-form-input\">
                                                            <label>
                                                                <%=getMsg(\"customer.info.last.name\")%>
                                                            </label>
                                                            <% var lastName = (kk.isNoName())?'':customer.lastName; %>
                                                                <input type=\ "text\" value='<%=lastName%>' id=\ "kkLastName\" name=\ "kkLastName\"/><span class=\ "kk-required-icon kk-required-blue\"></span><span class=\ "kk-validation-msg\"></span></div>
                                                        <div class=\ "kk-form-input\">
                                                            <label>
                                                                <%=getMsg(\"customer.info.dob\")%>
                                                            </label>
                                                            <% var birthDate = (kk.isNoBirthdate())?'':formatDate(customer.birthDate); %>
                                                                <input type=\ "text\" id=\ "kkDatepicker\" value='<%=birthDate%>' name=\ "kkBirthDateString\"/><span class=\ "kk-required-icon kk-required-blue\"></span><span class=\ "kk-validation-msg\"></span></div>
                                                        <div class=\ "kk-form-input\">
                                                            <label>
                                                                <%=getMsg(\"customer.info.tax.id\")%>
                                                            </label>
                                                            <input type=\ "text\" value='<%=customer.taxIdentifier%>' id=\ "kkTaxId\" name=\ "kkTaxId\"/><span class=\ "kk-validation-msg\"></span></div>
                                                    </div>
                                                </div>
                                                <div class=\ "kk-form-section\">
                                                    <h3><%=getMsg(\"customer.info.contact.info\")%></h3>
                                                    <div class=\ "kk-form-section-fields\">
                                                        <div class=\ "kk-form-section-divider\"></div>
                                                        <div class=\ "kk-form-input\">
                                                            <label>
                                                                <%=getMsg(\"customer.info.tel.number\")%>
                                                            </label>
                                                            <% var telephoneNumber = (kk.isNoTelephone())?'':customer.telephoneNumber; %>
                                                                <input type=\ "text\" value='<%=telephoneNumber%>' id=\ "kkTelephoneNumber\" name=\ "kkTelephoneNumber\" /><span class=\ "kk-required-icon kk-required-blue\"></span><span class=\ "kk-validation-msg\"></span></div>
                                                        <div class=\ "kk-form-input\">
                                                            <label>
                                                                <%=getMsg(\"customer.info.tel.number1\")%>
                                                            </label>
                                                            <input type=\ "text\" value='<%=customer.telephoneNumber1%>' id=\ "kkTelephoneNumber1\" name=\ "kkTelephoneNumber1\" /><span class=\ "kk-validation-msg\"></span></div>
                                                        <div class=\ "kk-form-input\">
                                                            <label>
                                                                <%=getMsg(\"customer.info.fax.number\")%>
                                                            </label>
                                                            <input type=\ "text\" value='<%=customer.faxNumber%>' id=\ "kkFaxNumber\" name=\ "kkFaxNumber\" /><span class=\ "kk-validation-msg\"></span></div>
                                                    </div>
                                                </div>
                                                <div class=\ "kk-form-buttons\"><a id=\ "kk-manage-personal-info-submit\" class=\ "kk-continue-button kk-button kk-small-rounded-corners\"><span><%=getMsg(\"customer.info.continue\")%></span></a><a id=\ "kk-cust-info-back\" class=\ "kk-button kk-small-rounded-corners\"><span><%=getMsg(\"customer.info.back\")%></span></a></div>
                                            </form>
                                        </div>
                                    </div>"; kkTmplMap["manageWishListTile"] = "
                                    <h1 id=\ "kk-page-title\"><%=getMsg(\"edit.wishlist.tile.editwishlist\")%></h1>
                                    <div id=\ "kkmwt-container\" class=\ "kk-content-area kk-rounded-corners\">
                                        <%if (numItems == 0){ %>
                                            <p>
                                                <%=getMsg(\"wishlist.tile.empty\")%>
                                            </p>
                                            <% } else { %>
                                                <% var outOfStock=false; %>
                                                    <table>
                                                        <thead>
                                                            <tr>
                                                                <td id=\ "kkmwt-image-col\">
                                                                    <%=getMsg(\"edit.wishlist.tile.item\")%>
                                                                </td>
                                                                <td id=\ "kkmwt-item-col\"></td>
                                                                <td id=\ "kkmwt-priority-col\">
                                                                    <%=getMsg(\"edit.wishlist.tile.priority\")%>
                                                                </td>
                                                                <td id=\ "kkmwt-price-col\">
                                                                    <%=getMsg(\"edit.wishlist.tile.price\")%>
                                                                </td>
                                                                <td id=\ "kkmwt-add-to-cart-col\"></td>
                                                                <td id=\ "kkmwt-remove-col\"></td>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <% for (var k = 0; k < wishListItems.length; k++){ %>
                                                                <% var item = wishListItems[k];%>
                                                                    <tr>
                                                                        <td class=\ "product-image-td\"><img class=\ "kkmwt-product-image\" id='<%=\"kkmwt-\"+item.product.id%>' src=\ "<%=item.prodImage%>\" border=\ "0\" alt=\ "<%=item.product.name%>\" title=\ " <%=item.product.name%> \"></td>
                                                                        <td>
                                                                            <a href='#' class=\ "kkmwt-text-link\" id='<%=\"kkmwt-\"+item.product.id%>'>
                                                                                <%=item.product.name%>
                                                                                    <%if (item.opts != null && item.opts.length > 0) {%>
                                                                                        <%for ( var j = 0; j < item.opts.length; j++) {%>
                                                                                            <%var opt = item.opts[j];%>
                                                                                                <%if (opt.type == 0) {%>
                                                                                                    <br><span class=\ "kkwt-wishList-item-option\"> - <%=opt.name%>:&nbsp;<%=opt.value%></span>
                                                                                                    <%} else if (opt.type == 1) {%>
                                                                                                        <br><span class=\ "kkwt-wishList-item-option\"> - <%=opt.name%>:&nbsp;<%=opt.quantity%>&nbsp;<%=opt.value%></span>
                                                                                                        <%} else if (opt.type == 2) {%>
                                                                                                            <br><span class=\ "kkwt-wishList-item-option\"> - <%=opt.name%>:&nbsp;<%=opt.formattedCustPrice%></span>
                                                                                                            <%} else if (opt.type == 3 && !isWishList) {%>
                                                                                                                <br><span class=\ "kkwt-wishList-item-option\"> - <%=opt.name%>:&nbsp;<%=opt.customerText%></span>
                                                                                                                <%}%>
                                                                                                                    <%}%>
                                                                                                                        <%}%>
                                                                            </a>
                                                                        </td>
                                                                        <td>
                                                                            <select id='<%=item.id + \"-P\"%>' onchange=\ "kk.changeWishListPriority('<%=item.id+\"-P\ "%>')\">
                                                                                <option value=\ "5\" <%=(item.priority==5)?\ "selected='selected'\":\ "\"%>>
                                                                                    <%=getMsg(\"edit.wishlist.tile.highest\")%>
                                                                                </option>
                                                                                <option value=\ "4\" <%=(item.priority==4)?\ "selected='selected'\":\ "\"%>>
                                                                                    <%=getMsg(\"edit.wishlist.tile.high\")%>
                                                                                </option>
                                                                                <option value=\ "3\" <%=(item.priority==3)?\ "selected='selected'\":\ "\"%>>
                                                                                    <%=getMsg(\"edit.wishlist.tile.medium\")%>
                                                                                </option>
                                                                                <option value=\ "2\" <%=(item.priority==2)?\ "selected='selected'\":\ "\"%>>
                                                                                    <%=getMsg(\"edit.wishlist.tile.low\")%>
                                                                                </option>
                                                                                <option value=\ "1\" <%=(item.priority==1)?\ "selected='selected'\":\ "\"%>>
                                                                                    <%=getMsg(\"edit.wishlist.tile.lowest\")%>
                                                                                </option>
                                                                            </select>
                                                                        </td>
                                                                        <td class=\ "kk-right\">
                                                                            <%if (displayPriceWithTax){%>
                                                                                <%=formatMoney(item.finalPriceIncTax)%>
                                                                                    <%}else{%>
                                                                                        <%=formatMoney(item.finalPriceExTax)%>
                                                                                            <%}%>
                                                                        </td>
                                                                        <td class=\ "kk-center\">
                                                                            <a href='#' id='<%=\"kkmwt-\"+item.id%>' class=\ "kkmwt-add-to-cart kk-button-small kk-small-rounded-corners\">
                                                                                <%=getMsg(\"edit.wishlist.tile.add.to.cart\")%>
                                                                            </a>
                                                                        </td>
                                                                        <td class=\ "kk-right\">
                                                                            <a id='<%=\"kkmwt-\"+item.id%>' class=\ "kkmwt-remove fa fa-times-circle\" href='#' title='<%=getMsg(\"edit.wishlist.tile.remove.item\")%>'></a>
                                                                        </td>
                                                                    </tr>
                                                                    <%}%>
                                                                        <tr>
                                                                            <td colspan=\ "2\"></td>
                                                                            <td id=\ "kkmwt-cost-overview\" colspan=\ "3\">
                                                                                <table>
                                                                                    <tr>
                                                                                        <td class=\ "kkmwt-cost-overview-labels\">
                                                                                            <%=getMsg(\"edit.wishlist.tile.total\")%>:</td>
                                                                                        <td class=\ "kkmwt-cost-overview-amounts\">
                                                                                            <%if (displayPriceWithTax){%>
                                                                                                <%=formatMoney(wishList.finalPriceIncTax)%>
                                                                                                    <%}else{%>
                                                                                                        <%=formatMoney(wishList.finalPriceExTax)%>
                                                                                                            <%}%>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                            <td></td>
                                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                    <!--<div ><a  id=\"kkmwt-continue-button\" class=\"kk-button kk-small-rounded-corners\"><span><%=getMsg(\"edit.wishlist.tile.continue\")%></span></a></div>-->
                                                    <% } %>
                                    </div>"; kkTmplMap["onePageCheckoutTile"] = "
                                    <h1 id=\ "kk-page-title\"><%=getMsg(\"opc.tile.orderconfirmation\")%></h1>
                                    <div id=\ "kkopc-order-confirmation\" class=\ "kk-content-area kk-rounded-corners\">
                                        <form action=\ "#\" id=\ "kk-opc-form\" method=\ "post\" class=\ "kk-form-section\">
                                            <div id=\ "kkopc-column-left\">
                                                <div id=\ "kkopc-delivery-address\" class=\ "kkopc-area\">
                                                    <div class=\ "kkopc-heading-container\">
                                                        <h3><%=getMsg(\"opc.tile.deliveryaddress\")%></h3>
                                                        <div class=\ "kkopc-options\">
                                                            <a id=\ "kkopc-newDelivery\" title='<%=getMsg(\"opc.tile.new.addr.tip\")%>' class=\ "kkopc-option kkopc-text-link has-tooltip\">
                                                                <%=getMsg(\"opc.tile.new\")%>
                                                            </a><span class=\ "kkopc-separator-small\"></span>
                                                            <a id=\ "kkopc-editDelivery\" title='<%=getMsg(\"opc.tile.edit.addr.tip\")%>' class=\ "kkopc-option kkopc-text-link has-tooltip\">
                                                                <%=getMsg(\"opc.tile.edit\")%>
                                                            </a>
                                                            <%if (customer != null && customer.type != 2) { %><span class=\ "kkopc-separator-small\"></span>
                                                                <a id=\ "kkopc-abdelivery\" title='<%=getMsg(\"opc.tile.addr.book.tip\")%>' class=\ "kkopc-option kkopc-text-link has-tooltip\">
                                                                    <%=getMsg(\"opc.tile.addr.book\")%>
                                                                </a>
                                                                <% } %>
                                                        </div>
                                                    </div>
                                                    <div class=\ "kkopc-area-content\"><span><%=removeCData(checkoutOrder.deliveryFormattedAddress)%></span>
                                                        <div id=\ "kkopc-shipping-info\" class=\ "kkopc-area-content-select\">
                                                            <label>
                                                                <%=getMsg(\"opc.tile.shippingmethod\")%>
                                                            </label>
                                                            <select name=\ "shipping\" onchange=\ "kk.shippingRefresh();\" id=\ "kkopc-shippingQuotes\">
                                                                <%if (shippingQuotes != null && shippingQuotes.length > 0){ %>
                                                                    <% var shipping = (checkoutOrder.shippingQuote!=null)?checkoutOrder.shippingQuote.moduleCode:\"\";%>
                                                                        <%if (checkoutOrder.shippingQuote!=null && checkoutOrder.shippingQuote.shippingServiceCode != null && checkoutOrder.shippingQuote.shippingServiceCode.length > 0){ %>
                                                                            <% shipping = shipping + \"~~\" + checkoutOrder.shippingQuote.shippingServiceCode;%>
                                                                                <% } %>
                                                                                    <% for (var i = 0; i < shippingQuotes.length; i++){ %>
                                                                                        <% var quote = shippingQuotes[i];%>
                                                                                            <% var code = quote.moduleCode;%>
                                                                                                <%if (quote.shippingServiceCode!=null && quote.shippingServiceCode.length > 0){ %>
                                                                                                    <% code = code + \"~~\" + quote.shippingServiceCode;%>
                                                                                                        <% } %>
                                                                                                            <%if (code == shipping){ %>
                                                                                                                <option value=\ "<%=code%>\" selected=\ "selected\">
                                                                                                                    <%=quote.description%>
                                                                                                                </option>
                                                                                                                <% } else { %>
                                                                                                                    <option value=\ "<%=code%>\">
                                                                                                                        <%=quote.description%>
                                                                                                                    </option>
                                                                                                                    <% } %>
                                                                                                                        <% } %>
                                                                                                                            <%} else {%>
                                                                                                                                <option value=\ "-1\" selected=\ "selected\">
                                                                                                                                    <%=getMsg(\"opc.tile.no.shipping.methods\")%>
                                                                                                                                </option>
                                                                                                                                <% } %>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id=\ "kkopc-billing-address\" class=\ "kkopc-area\">
                                                    <div class=\ "kkopc-heading-container\">
                                                        <h3><%=getMsg(\"opc.tile.billingaddress\")%></h3>
                                                        <div class=\ "kkopc-options\">
                                                            <a id=\ "kkopc-newBilling\" title='<%=getMsg(\"opc.tile.new.addr.tip\")%>' class=\ "kkopc-option kkopc-text-link has-tooltip\">
                                                                <%=getMsg(\"opc.tile.new\")%>
                                                            </a><span class=\ "kkopc-separator-small\"></span>
                                                            <a id=\ "kkopc-editBilling\" title='<%=getMsg(\"opc.tile.edit.addr.tip\")%>' class=\ "kkopc-option kkopc-text-link has-tooltip\">
                                                                <%=getMsg(\"opc.tile.edit\")%>
                                                            </a>
                                                            <%if (customer != null && customer.type != 2) { %><span class=\ "kkopc-separator-small\"></span>
                                                                <a id=\ "kkopc-abbilling\" title='<%=getMsg(\"opc.tile.addr.book.tip\")%>' class=\ "kkopc-option kkopc-text-link has-tooltip\">
                                                                    <%=getMsg(\"opc.tile.addr.book\")%>
                                                                </a>
                                                                <% } %>
                                                        </div>
                                                    </div>
                                                    <div class=\ "kkopc-area-content\"><span><%=removeCData(checkoutOrder.billingFormattedAddress)%></span>
                                                        <div id=\ "kkopc-payment-method\" class=\ "kkopc-area-content-select\">
                                                            <label>
                                                                <%=getMsg(\"opc.tile.paymentmethod\")%>
                                                            </label>
                                                            <select name=\ "payment\" onchange=\ "kk.paymentRefresh();\" id=\ "kkopc-paymentDetails\">
                                                                <%if (paymentDetails != null && paymentDetails.length > 0){ %>
                                                                    <% var selectedPayment = (checkoutOrder.paymentDetails != null)?checkoutOrder.paymentDetails.code:\"\"; %>
                                                                        <%if (checkoutOrder.paymentDetails!=null && checkoutOrder.paymentDetails.subCode != null && checkoutOrder.paymentDetails.subCode.length > 0){ %>
                                                                            <% selectedPayment = selectedPayment + \"~~\" + checkoutOrder.paymentDetails.subCode;%>
                                                                                <% } %>
                                                                                    <% for (var i = 0; i < paymentDetails.length; i++){ %>
                                                                                        <% var pd = paymentDetails[i];%>
                                                                                            <% var code = pd.code;%>
                                                                                                <%if (pd.subCode!=null && pd.subCode.length > 0){ %>
                                                                                                    <% code = code + \"~~\" + pd.subCode;%>
                                                                                                        <% } %>
                                                                                                            <%if (selectedPayment == code){ %>
                                                                                                                <option value=\ "<%=code%>\" selected=\ "selected\">
                                                                                                                    <%=pd.description%>
                                                                                                                </option>
                                                                                                                <% } else { %>
                                                                                                                    <option value=\ "<%=code%>\">
                                                                                                                        <%=pd.description%>
                                                                                                                    </option>
                                                                                                                    <% } %>
                                                                                                                        <% } %>
                                                                                                                            <%} else {%>
                                                                                                                                <option value=\ "-1\" selected=\ "selected\">
                                                                                                                                    <%=getMsg(\"opc.tile.no.payment.methods\")%>
                                                                                                                                </option>
                                                                                                                                <% } %>
                                                            </select>
                                                        </div>
                                                        <div id=\ "kkopc-promotion-codes\">
                                                            <div id=\ "kkopc-promotion-codes-container\">
                                                                <%if (displayCouponEntry == true) { %>
                                                                    <div class=\ "kkopc-promotion-codes-field\">
                                                                        <label>
                                                                            <%=getMsg(\"opc.tile.couponcode\")%>
                                                                        </label>
                                                                        <input type=\ "text\" name=\ "kkCouponCode\" id=\ "kkCouponCode\" value='<%=couponCode%>' />
                                                                        <a id=\ "kkopc-couponCodeUpdate\" class=\ "kkopc-update-button kk-small-rounded-corners\">
                                                                            <%=getMsg(\"opc.tile.update\")%>
                                                                        </a><span class=\ "kk-validation-msg\"></span></div>
                                                                    <% } %>
                                                                        <%if (displayGiftCertificateEntry == true) { %>
                                                                            <div class=\ "kkopc-promotion-codes-field\">
                                                                                <label>
                                                                                    <%=getMsg(\"opc.tile.giftcertcode\")%>
                                                                                </label>
                                                                                <input type=\ "text\" name=\ "kkGiftCertCode\" id=\ "kkGiftCertCode\" value='<%=giftCertCode%>' />
                                                                                <a id=\ "kkopc-giftCertCodeUpdate\" class=\ "kkopc-update-button kk-small-rounded-corners\">
                                                                                    <%=getMsg(\"opc.tile.update\")%>
                                                                                </a><span class=\ "kk-validation-msg\"></span></div>
                                                                            <% } %>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class=\ "kkopc-area\">
                                                    <div class=\ "kkopc-heading-container\">
                                                        <h3><%=getMsg(\"opc.tile.delivery.notes\")%></h3></div>
                                                    <div class=\ "kkopc-area-content\">
                                                        <%=getMsg(\"opc.tile.info\")%>
                                                            <textarea id=\ "kkOrderComment\" name=\ "kkOrderComment\" rows=\ "5\" name=\ "comment\"></textarea><span class=\ "kk-validation-msg\"></span></div>
                                                </div>
                                            </div>
                                            <div id=\ "kkopc-column-right\">
                                                <div>
                                                    <div class=\ "kkopc-heading-container\">
                                                        <h3><%=getMsg(\"opc.tile.shopping.cart\")%></h3></div>
                                                    <table>
                                                        <thead>
                                                            <tr>
                                                                <td class=\ "kkopc-narrow-col\"></td>
                                                                <td class=\ "kkopc-wide-col\">
                                                                    <%=getMsg(\"opc.tile.item\")%>
                                                                </td>
                                                                <td class=\ "kkopc-narrow-col kk-right\">
                                                                    <%=getMsg(\"opc.tile.total\")%>
                                                                </td>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <%if (checkoutOrder.orderProducts != null && checkoutOrder.orderProducts.length > 0){ %>
                                                                <% for (var i = 0; i < checkoutOrder.orderProducts.length; i++){ %>
                                                                    <% var op = checkoutOrder.orderProducts[i];%>
                                                                        <tr>
                                                                            <td><img class=\ "kkopc-product-image\" src=\ "<%=op.prodImage%>\" border=\ "0\" alt=\ "<%=op.product.name%>\" title=\ " <%=op.product.name%> \"></td>
                                                                            <td>
                                                                                <a href='#' class=\ "kkopc-order-item-link kkopc-text-link\" id='<%=\"kkopc-\"+op.productId%>'>
                                                                                    <%=op.name%>
                                                                                        <%if (op.opts != null && op.opts.length > 0) {%>
                                                                                            <%for ( var j = 0; j < op.opts.length; j++) {%>
                                                                                                <%var opt = op.opts[j];%>
                                                                                                    <%if (opt.type == 0) {%>
                                                                                                        <br><span class=\ "kkopc-shopping-cart-item-option\"> - <%=opt.name%>:&nbsp;<%=opt.value%></span>
                                                                                                        <%} else if (opt.type == 1) {%>
                                                                                                            <br><span class=\ "kkopc-shopping-cart-item-option\"> - <%=opt.name%>:&nbsp;<%=opt.quantity%>&nbsp;<%=opt.value%></span>
                                                                                                            <%} else if (opt.type == 2) {%>
                                                                                                                <br><span class=\ "kkopc-shopping-cart-item-option\"> - <%=opt.name%>:&nbsp;<%=formatMoney(opt.customerPrice)%></span>
                                                                                                                <%} else if (opt.type == 3) {%>
                                                                                                                    <br><span class=\ "kkopc-shopping-cart-item-option\"> - <%=opt.name%>:&nbsp;<%=opt.customerText%></span>
                                                                                                                    <%}%>
                                                                                                                        <%}%>
                                                                                                                            <%}%>
                                                                                </a>
                                                                                <div class=\ "kkopc-item-quantity\">
                                                                                    <%=getMsg(\"opc.tile.quantity\")%>:
                                                                                        <%=op.quantity%>
                                                                                </div>
                                                                            </td>
                                                                            <%if (displayPriceWithTax) {%>
                                                                                <td class=\ "kkopc-total-price kk-right\">
                                                                                    <%=formatMoney(op.finalPriceIncTax)%>
                                                                                </td>
                                                                                <%} else {%>
                                                                                    <td class=\ "kkopc-total-price kk-right\">
                                                                                        <%=formatMoney(op.finalPriceExTax)%>
                                                                                    </td>
                                                                                    <%}%>
                                                                        </tr>
                                                                        <%}%>
                                                                            <%}%>
                                                                                <%if (checkoutOrder.orderTotals != null && checkoutOrder.orderTotals.length > 0){ %>
                                                                                    <% for (var i = 0; i < checkoutOrder.orderTotals.length; i++){ %>
                                                                                        <% var ot = checkoutOrder.orderTotals[i];%>
                                                                                            <%var rowClass = \"kkopc-costs-and-promotions\";%>
                                                                                                <%if (ot.className == \"ot_total\"){ %>
                                                                                                    <%rowClass = \"kkopc-shopping-cart-total\";%>
                                                                                                        <%} else if (ot.className == \"ot_subtotal\"){%>
                                                                                                            <%rowClass = \"kkopc-shopping-cart-subtotal\";%>
                                                                                                                <% } %>
                                                                                                                    <tr class=\ "<%=rowClass%>\">
                                                                                                                        <td></td>
                                                                                                                        <%if (ot.className == \"ot_reward_points\" || ot.className == \"ot_product_reward_points\") {%>
                                                                                                                            <td class=\ "kkopc-cost-overview\">
                                                                                                                                <%=ot.title%>
                                                                                                                            </td>
                                                                                                                            <td class=\ "kkopc-cost-overview-amounts kk-right\">
                                                                                                                                <%=ot.value%>
                                                                                                                            </td>
                                                                                                                            <%}else if (ot.className == \"ot_free_product\") {%>
                                                                                                                                <td class=\ "kkopc-cost-overview\">
                                                                                                                                    <%=ot.title%>
                                                                                                                                </td>
                                                                                                                                <td class=\ "kkopc-cost-overview-amounts kk-right\">
                                                                                                                                    <%=ot.text%>
                                                                                                                                </td>
                                                                                                                                <%}else if (ot.className == \"ot_total\") {%>
                                                                                                                                    <td>
                                                                                                                                        <%=ot.title%>
                                                                                                                                    </td>
                                                                                                                                    <td class=\ "kk-right\">
                                                                                                                                        <%=formatMoney(ot.value)%>
                                                                                                                                    </td>
                                                                                                                                    <%}else if (isDiscountModule(ot.className)) {%>
                                                                                                                                        <td class=\ "kkopc-cost-overview\"><span class=\ "kkopc-discount\"><%=ot.title%></span></td>
                                                                                                                                        <td class=\ "kkopc-cost-overview-amounts kk-right\"><span class=\ "kkopc-discount\">-<%=formatMoney(ot.value)%></span></td>
                                                                                                                                        <%}else{%>
                                                                                                                                            <td class=\ "kkopc-cost-overview\">
                                                                                                                                                <%=ot.title%>
                                                                                                                                            </td>
                                                                                                                                            <td class=\ "kkopc-cost-overview-amounts kk-right\">
                                                                                                                                                <%=formatMoney(ot.value)%>
                                                                                                                                            </td>
                                                                                                                                            <%}%>
                                                                                                                    </tr>
                                                                                                                    <%}%>
                                                                                                                        <%}%>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div id=\ "kkopc-confirm-order-button-container\"><a id=\ "kkopc-continue-button\" class=\ "kk-continue-button kk-button kk-small-rounded-corners\"><span><%=getMsg(\"opc.tile.confirmorder\")%></span></a></div>
                                        </form>
                                    </div>
                                    <div id=\ "kkopc-error-dialog\" title=\ "<%=getMsg(\"opc.tile.problem.title\ ")%>\" class=\ "content-area rounded-corners\">
                                        <div>
                                            <div class=\ "kk-form-section\">
                                                <div class=\ "kk-form-section-title no-margin\">
                                                    <h3><%=getMsg(\"opc.tile.problem\")%></h3></div>
                                                <div>
                                                    <p><span id=\ "kkopc-error-msg\"></span></p>
                                                </div><a id=\ "kkopc-error-dialog-close\" class=\ "kk-button kk-small-rounded-corners\"><span ><%=getMsg(\"opc.tile.close\")%></span></a></div>
                                        </div>
                                    </div>
                                    <div id=\ "kkopc-addr-dialog\" title=\ "<%=getMsg(\"opc.tile.addr.book.header\ ")%>\" class=\ "content-area rounded-corners\">
                                        <div>
                                            <div class=\ "kk-form-section\">
                                                <div class=\ "kk-form-section-title no-margin\">
                                                    <h3><%=getMsg(\"opc.tile.dialog.addr.select\")%></h3></div>
                                                <%if (addresses != null && addresses.length > 0){ %>
                                                    <% for (var i = 0; i < addresses.length; i++){ %>
                                                        <% var addr = addresses[i];%>
                                                            <div class=\ "kkopc-select-addr-section <%=(i%2==0)?\"even\ ":\"odd\ "%>\">
                                                                <div class=\ "kkopc-select-addr\">
                                                                    <%=removeCData(addr.formattedAddress)%>
                                                                </div>
                                                                <div class=\ "kkopc-select-addr-buttons\"><a id='<%=\"kkopcaddrid-\"+addr.id%>' class=\ "kkopc-select-addr-button kk-button kk-small-rounded-corners\"><span ><%=getMsg(\"opc.tile.select\")%></span></a></div>
                                                            </div>
                                                            <%}%>
                                                                <%}%>
                                            </div>
                                        </div>
                                    </div>"; kkTmplMap["orderDetailTile"] = "
                                    <h1 id=\ "kk-page-title\"><%=getMsg(\"order.detail.tile.orderinformation\",order.id,formatDate(order.datePurchased))%></h1>
                                    <div id=\ "kkod-order-confirmation\" class=\ "kk-content-area kk-rounded-corners\">
                                        <div id=\ "kkod-column-left\">
                                            <div id=\ "kkod-delivery-address\" class=\ "kkod-area\">
                                                <div class=\ "kkod-heading-container\">
                                                    <h3><%=getMsg(\"order.detail.tile.deliveryaddress\")%></h3></div>
                                                <div class=\ "kkod-area-content\"><span><%=removeCData(order.deliveryFormattedAddress)%></span>
                                                    <div id=\ "kkod-shipping-info\" class=\ "kkod-area-content-select\">
                                                        <label>
                                                            <%=getMsg(\"order.detail.tile.shippingmethod\")%>
                                                        </label>
                                                        <p>
                                                            <%=order.shippingMethod%>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id=\ "kkod-billing-address\" class=\ "kkod-area\">
                                                <div class=\ "kkod-heading-container\">
                                                    <h3><%=getMsg(\"order.detail.tile.billingaddress\")%></h3></div>
                                                <div class=\ "kkod-area-content\"><span><%=removeCData(order.billingFormattedAddress)%></span>
                                                    <div id=\ "kkod-payment-method\" class=\ "kkod-area-content-select\">
                                                        <label>
                                                            <%=getMsg(\"order.detail.tile.paymentmethod\")%>
                                                        </label>
                                                        <p>
                                                            <%=order.paymentMethod%>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <%if (order.orderShipments != null && order.orderShipments.length > 0){ %>
                                                <div class=\ "kkod-shipment-area\">
                                                    <div class=\ "kkod-heading-container\">
                                                        <h3><%=getMsg(\"order.detail.tile.shipments\")%></h3></div>
                                                    <div>
                                                        <% for (var i = 0; i < order.orderShipments.length; i++){ %>
                                                            <% var os = order.orderShipments[i];%>
                                                                <%if (i==order.orderShipments.length-1){ %>
                                                                    <table class=\ "kkod-shipment-container-no-border\">
                                                                        <%}else{%>
                                                                            <table class=\ "kkod-shipment-container\">
                                                                                <%}%>
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td class=\ "kkod-25-col\"><span class=\ "kkod-bold\"><%=getMsg(\"order.detail.tile.date\")%>:</span>
                                                                                                <%=formatDate(os.dateAdded)%>
                                                                                            </td>
                                                                                            <td class=\ "kkod-50-col\">
                                                                                                <%if (os.shipperName != null && os.shipperName.length > 0){ %><span class=\ "kkod-bold\"><%=getMsg(\"order.detail.tile.shipper\")%>:</span>
                                                                                                    <%=os.shipperName%>
                                                                                                        <%}%>
                                                                                            </td>
                                                                                            <td class=\ "kkod-25-col\">
                                                                                                <%if (os.trackingURL != null && os.trackingURL.length > 0){ %>
                                                                                                    <a class=\ "kkod-text-link\" target=\ "_blank\" href=\ "<%=os.trackingURL%>\">
                                                                                                        <%=getMsg(\"order.detail.tile.track\")%>
                                                                                                    </a>
                                                                                                    <%}%>
                                                                                            </td>
                                                                                        </tr>
                                                                                        <%if (os.shippedOrderProducts != null && os.shippedOrderProducts.length > 0){ %>
                                                                                            <tr>
                                                                                                <td colspan=\ "3\">
                                                                                                    <table>
                                                                                                        <thead>
                                                                                                            <tr>
                                                                                                                <td class=\ "kkod-60-col\">
                                                                                                                    <%=getMsg(\"order.detail.tile.item\")%>
                                                                                                                </td>
                                                                                                                <td class=\ "kkod-40-col\">
                                                                                                                    <%=getMsg(\"order.detail.tile.qty.shipped\")%>
                                                                                                                </td>
                                                                                                            </tr>
                                                                                                        </thead>
                                                                                                        <tbody>
                                                                                                            <% for (var j = 0; j < os.shippedOrderProducts.length; j++){ %>
                                                                                                                <% var osp = os.shippedOrderProducts[j];%>
                                                                                                                    <% var op = osp.orderProd;%>
                                                                                                                        <tr>
                                                                                                                            <td>
                                                                                                                                <a href='#' class=\ "kkod-order-item-link kkod-text-link\" id='<%=\"kkod-\"+op.productId%>'>
                                                                                                                                    <%=op.name%>
                                                                                                                                        <%if (op.opts != null && op.opts.length > 0) {%>
                                                                                                                                            <%for ( var k = 0; k < op.opts.length; k++) {%>
                                                                                                                                                <%var opt = op.opts[k];%>
                                                                                                                                                    <%if (opt.type == 0) {%>
                                                                                                                                                        <br><span class=\ "kkod-shopping-cart-item-option\"> - <%=opt.name%>:&nbsp;<%=opt.value%></span>
                                                                                                                                                        <%} else if (opt.type == 1) {%>
                                                                                                                                                            <br><span class=\ "kkod-shopping-cart-item-option\"> - <%=opt.name%>:&nbsp;<%=opt.quantity%>&nbsp;<%=opt.value%></span>
                                                                                                                                                            <%} else if (opt.type == 2) {%>
                                                                                                                                                                <br><span class=\ "kkod-shopping-cart-item-option\"> - <%=opt.name%>:&nbsp;<%=formatMoney(opt.customerPrice)%></span>
                                                                                                                                                                <%} else if (opt.type == 3) {%>
                                                                                                                                                                    <br><span class=\ "kkod-shopping-cart-item-option\"> - <%=opt.name%>:&nbsp;<%=opt.customerText%></span>
                                                                                                                                                                    <%}%>
                                                                                                                                                                        <%}%>
                                                                                                                                                                            <%}%>
                                                                                                                                </a>
                                                                                                                            </td>
                                                                                                                            <td>
                                                                                                                                <%=osp.quantity%>
                                                                                                                            </td>
                                                                                                                            <tr>
                                                                                                                                <%}%>
                                                                                                        </tbody>
                                                                                                    </table>
                                                                                                </td>
                                                                                                </tr>
                                                                                                <%}%>
                                                                                    </tbody>
                                                                            </table>
                                                                            <%}%>
                                                    </div>
                                                </div>
                                                <%}%>
                                                    <div id=\ "kkod-status-notes\">
                                                        <div class=\ "kkod-heading-container\">
                                                            <h3><%=getMsg(\"order.detail.tile.orderhistory\")%></h3></div>
                                                        <div>
                                                            <%if (order.statusTrail != null && order.statusTrail.length > 0){ %>
                                                                <table>
                                                                    <% for (var i = 0; i < order.statusTrail.length; i++){ %>
                                                                        <% var ost = order.statusTrail[i];%>
                                                                            <tr>
                                                                                <td>
                                                                                    <%=formatDate(ost.dateAdded)%>
                                                                                </td>
                                                                                <td>
                                                                                    <%=ost.orderStatus%>
                                                                                </td>
                                                                                <%if (ost.comments == null || ost.comments.length == 0){ %>
                                                                                    <td>&nbsp;</td>
                                                                                    <%}else{%>
                                                                                        <td>
                                                                                            <%=ost.comments%>
                                                                                        </td>
                                                                                        <%}%>
                                                                            </tr>
                                                                            <%}%>
                                                                </table>
                                                                <%}%>
                                                        </div>
                                                    </div>
                                        </div>
                                        <div id=\ "kkod-column-right\">
                                            <div>
                                                <div class=\ "kkod-heading-container\">
                                                    <h3><%=getMsg(\"order.detail.tile.order.details\")%></h3></div>
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <td class=\ "kkod-wide-col\">
                                                                <%=getMsg(\"order.detail.tile.item\")%>
                                                            </td>
                                                            <td class=\ "kkod-narrow-col kk-right\">
                                                                <%=getMsg(\"order.detail.tile.total\")%>
                                                            </td>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <%if (order.orderProducts != null && order.orderProducts.length > 0){ %>
                                                            <% for (var i = 0; i < order.orderProducts.length; i++){ %>
                                                                <% var op = order.orderProducts[i];%>
                                                                    <tr>
                                                                        <td>
                                                                            <a href='#' class=\ "kkod-order-item-link kkod-text-link\" id='<%=\"kkod-\"+op.productId%>'>
                                                                                <%=op.name%>
                                                                                    <%if (op.opts != null && op.opts.length > 0) {%>
                                                                                        <%for ( var j = 0; j < op.opts.length; j++) {%>
                                                                                            <%var opt = op.opts[j];%>
                                                                                                <%if (opt.type == 0) {%>
                                                                                                    <br><span class=\ "kkod-shopping-cart-item-option\"> - <%=opt.name%>:&nbsp;<%=opt.value%></span>
                                                                                                    <%} else if (opt.type == 1) {%>
                                                                                                        <br><span class=\ "kkod-shopping-cart-item-option\"> - <%=opt.name%>:&nbsp;<%=opt.quantity%>&nbsp;<%=opt.value%></span>
                                                                                                        <%} else if (opt.type == 2) {%>
                                                                                                            <br><span class=\ "kkod-shopping-cart-item-option\"> - <%=opt.name%>:&nbsp;<%=formatMoney(opt.customerPrice)%></span>
                                                                                                            <%} else if (opt.type == 3) {%>
                                                                                                                <br><span class=\ "kkod-shopping-cart-item-option\"> - <%=opt.name%>:&nbsp;<%=opt.customerText%></span>
                                                                                                                <%}%>
                                                                                                                    <%}%>
                                                                                                                        <%}%>
                                                                            </a>
                                                                            <div class=\ "kkod-item-quantity\">
                                                                                <%=getMsg(\"order.detail.tile.quantity\")%>:
                                                                                    <%=op.quantity%>
                                                                            </div>
                                                                        </td>
                                                                        <%if (displayPriceWithTax) {%>
                                                                            <td class=\ "kkod-total-price kk-right\">
                                                                                <%=formatMoney(op.finalPriceIncTax)%>
                                                                            </td>
                                                                            <%} else {%>
                                                                                <td class=\ "kkod-total-price kk-right\">
                                                                                    <%=formatMoney(op.finalPriceExTax)%>
                                                                                </td>
                                                                                <%}%>
                                                                    </tr>
                                                                    <%}%>
                                                                        <%}%>
                                                                            <%if (order.orderTotals != null && order.orderTotals.length > 0){ %>
                                                                                <% for (var i = 0; i < order.orderTotals.length; i++){ %>
                                                                                    <% var ot = order.orderTotals[i];%>
                                                                                        <%var rowClass = \"kkod-costs-and-promotions\";%>
                                                                                            <%if (ot.className == \"ot_total\"){ %>
                                                                                                <%rowClass = \"kkod-shopping-cart-total\";%>
                                                                                                    <%} else if (ot.className == \"ot_subtotal\"){%>
                                                                                                        <%rowClass = \"kkod-shopping-cart-subtotal\";%>
                                                                                                            <% } %>
                                                                                                                <tr class=\ "<%=rowClass%>\">
                                                                                                                    <%if (ot.className == \"ot_reward_points\" || ot.className == \"ot_product_reward_points\") {%>
                                                                                                                        <td class=\ "kkod-cost-overview\">
                                                                                                                            <%=ot.title%>
                                                                                                                        </td>
                                                                                                                        <td class=\ "kkod-cost-overview-amounts kk-right\">
                                                                                                                            <%=ot.value%>
                                                                                                                        </td>
                                                                                                                        <%}else if (ot.className == \"ot_free_product\") {%>
                                                                                                                            <td class=\ "kkod-cost-overview\">
                                                                                                                                <%=ot.title%>
                                                                                                                            </td>
                                                                                                                            <td class=\ "kkod-cost-overview-amounts kk-right\">
                                                                                                                                <%=ot.text%>
                                                                                                                            </td>
                                                                                                                            <%}else if (ot.className == \"ot_total\") {%>
                                                                                                                                <td>
                                                                                                                                    <%=ot.title%>
                                                                                                                                </td>
                                                                                                                                <td class=\ "kk-right\">
                                                                                                                                    <%=formatMoney(ot.value)%>
                                                                                                                                </td>
                                                                                                                                <%}else if (isDiscountModule(ot.className)) {%>
                                                                                                                                    <td class=\ "kkod-cost-overview\"><span class=\ "kkod-discount\"><%=ot.title%></span></td>
                                                                                                                                    <td class=\ "kkod-cost-overview-amounts kk-right\"><span class=\ "kkod-discount\">-<%=formatMoney(ot.value)%></span></td>
                                                                                                                                    <%}else{%>
                                                                                                                                        <td class=\ "kkod-cost-overview\">
                                                                                                                                            <%=ot.title%>
                                                                                                                                        </td>
                                                                                                                                        <td class=\ "kkod-cost-overview-amounts kk-right\">
                                                                                                                                            <%=formatMoney(ot.value)%>
                                                                                                                                        </td>
                                                                                                                                        <%}%>
                                                                                                                </tr>
                                                                                                                <%}%>
                                                                                                                    <%}%>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div id=\ "kkod-button-container\"><a id=\ "kkod-repeat-button\" class=\ "kk-button kk-small-rounded-corners\"><span><%=getMsg(\"order.detail.tile.repeat\")%></span></a><a id=\ "kkod-back-button\" class=\ "kk-button kk-small-rounded-corners\"><span><%=getMsg(\"order.detail.tile.back\")%></span></a></div>
                                    </div>"; kkTmplMap["ordersTile"] = "
                                    <h1 id=\ "kk-page-title\"><%=getMsg(\"orders.tile.myorderhistory\")%></h1>
                                    <%if (orders == null || orders.length == 0){ %>
                                        <div class=\ "kkos-item-area kk-rounded-corners\">
                                            <div class=\ "kkos-item-area-header\"></div>
                                            <div class=\ "kkos-items-message\">
                                                <%=getMsg(\"orders.tile.no.orders\")%>.</div>
                                        </div>
                                        <% } else { %>
                                            <div class=\ "kkos-item-area kk-rounded-corners\">
                                                <div class=\ "kkos-item-area-header\">
                                                    <div class=\ "kkos-item-area-header-top\"><span class=\ "kkos-number-of-items kkos-navigation-element\"><%=dataDesc.offset+1%>-<%=+dataDesc.offset + +numOrds%> <%=getMsg(\"orders.tile.of\")%> <%=totalNumOrds%> <%=getMsg(\"orders.tile.orders\")%></span><span class=\ "kkos-show-per-page-area kkos-navigation-element\"><select class=\"kkos-show-per-page\" id='<%=id+\"-P1\"%>' onchange=\"kk.changeOrdersPageSize('<%=id+\"-P1\"%>')\"><option value=\"5\"<%=(maxOrdsPerPage==5)?' selected=\"selected\"':''%>>5</option><option value=\"10\"<%=(maxOrdsPerPage==10)?' selected=\"selected\"':''%>>10</option><option value=\"20\"<%=(maxOrdsPerPage==20)?' selected=\"selected\"':''%>>20</option><option value=\"30\"<%=(maxOrdsPerPage==30)?' selected=\"selected\"':''%>>30</option><option value=\"50\"<%=(maxOrdsPerPage==50)?' selected=\"selected\"':''%>>50</option></select><%=getMsg(\"orders.tile.per.page\")%></span><span class=\ "kkos-pagination kkos-navigation-element\"><a class=\"kkos-pagination-element kkos-previous-items<%=(showBack)?\"\":\"-inactive\"%>\" id='<%=id+\"-B\"%>'></a><% for ( var i = 0; i < pageList.length; i++) { %><% var page = pageList[i]; %><% if (page == currentPage) { %><a class=\"kkos-pagination-element kkos-page-num kkos-current\" id='<%=id+\"p-\"+page%>'><%=page%></a><% } else { %><a class=\"kkos-pagination-element kkos-page-num\" id='<%=id+\"p-\"+page%>'><%=page%></a><% } %><% }  %><a class=\"kkos-pagination-element kkos-next-items<%=(showNext)?\"\":\"-inactive\"%>\" id='<%=id+\"-F\"%>'></a></span></div>
                                                </div>
                                                <% for (var i = 0; i < orders.length; i++){ %>
                                                    <% var order = orders[i];%>
                                                        <% var numItems = (order.orderProducts!=null)?order.orderProducts.length:0;%>
                                                            <% var statusClass = (order.statusText!=null&&order.statusText.toUpperCase() == \"DELIVERED\")?\"kkos-shipped\":\"kkos-pending\";%>
                                                                <div class=\ "kkos-all-orders\">
                                                                    <table>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td class=\ "kkos-narrow-col\">#
                                                                                    <%=order.id%>
                                                                                </td>
                                                                                <td class=\ "kkos-narrow-col\">
                                                                                    <%=formatDate(order.datePurchased)%>
                                                                                </td>
                                                                                <td class=\ "kkos-narrow-col\">
                                                                                    <%=getMsg(\"orders.tile.total\")%>:
                                                                                        <%=formatMoney(order.totalIncTax)%>
                                                                                </td>
                                                                                <td class=\ "kkos-narrow-col\">
                                                                                    <div class=\ "kkos-label <%=statusClass%>\">
                                                                                        <%=order.statusText%>
                                                                                    </div>
                                                                                </td>
                                                                                <td class=\ "kkos-all-orders-icons\">
                                                                                    <a class=\ "kkos-view-order kkos-text-link fa fa-eye kkos-order-action\" title='<%=getMsg(\"orders.tile.view\")%>' id='<%=\"kkos-\"+order.id%>' href='#'></a>
                                                                                    <a class=\ "kkos-repeat-order kkos-text-link fa fa-repeat kkos-order-action\" title='<%=getMsg(\"orders.tile.repeat\")%>' id='<%=\"kkos-\"+order.id%>' href='#'></a>
                                                                                    <a class=\ "kkos-track-order kkos-text-link fa fa-truck kkos-order-action\" title='<%=getMsg(\"orders.tile.track\")%>' id='<%=\"kkos-\"+order.id%>' href='#'></a>
                                                                                    <a class=\ "kkos-invoice-order kkos-text-link fa fa-file-pdf-o kkos-order-action\" title='<%=getMsg(\"orders.tile.invoice\")%>' id='<%=\"kkos-\"+order.id%>' href='#'></a>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                        <%if (order.orderProducts != null && order.orderProducts.length > 0){ %>
                                                                            <tr>
                                                                                <td colspan=\ "8\">
                                                                                    <table>
                                                                                        <thead>
                                                                                            <tr>
                                                                                                <td class=\ "kkos-wide-col\">
                                                                                                    <%=getMsg(\"orders.tile.item\")%>
                                                                                                </td>
                                                                                                <td class=\ "kkos-narrow-col kk-right\">
                                                                                                    <%=getMsg(\"orders.tile.quantity\")%>
                                                                                                </td>
                                                                                                <td class=\ "kkos-narrow-col kk-right\">
                                                                                                    <%=getMsg(\"orders.tile.total\")%>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </thead>
                                                                                        <tbody>
                                                                                            <% for (var j = 0; j < order.orderProducts.length; j++){ %>
                                                                                                <% var orderProd = order.orderProducts[j];%>
                                                                                                    <tr>
                                                                                                        <td>
                                                                                                            <a class=\ "kkos-order-item-link kkos-text-link\" id='<%=\"kkos-\"+orderProd.productId%>' href='#'>
                                                                                                                <%=orderProd.name%>
                                                                                                            </a>
                                                                                                        </td>
                                                                                                        <td class=\ "kk-right\">
                                                                                                            <%=orderProd.quantity%>
                                                                                                        </td>
                                                                                                        <%if (displayPriceWithTax) {%>
                                                                                                            <td class=\ "kk-right\">
                                                                                                                <%=formatMoney(orderProd.finalPriceIncTax)%>
                                                                                                            </td>
                                                                                                            <%} else {%>
                                                                                                                <td class=\ "kk-right\">
                                                                                                                    <%=formatMoney(orderProd.finalPriceExTax)%>
                                                                                                                </td>
                                                                                                                <%}%>
                                                                                                    </tr>
                                                                                                    <% } %>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                            <% } %>
                                                                    </table>
                                                                </div>
                                                                <% } %>
                                                                    <div class=\ "kk-form-buttons-wide\"><a id=\ "kk-orders-back\" class=\ "kk-button kk-small-rounded-corners\"><span><%=getMsg(\"orders.tile.back\")%></span></a></div>
                                            </div>
                                            <% } %>"; kkTmplMap["popupCartTile"] = "
                                                <div id=\ "kkpct-shopping-cart\" class=\ "kkpct-top-bar-menu-item\"><span id=\ "kkpct-shopping-cart-link\"><%=getMsg(\"cart.tile.shoppingcart\")%><span id=\"kkpct-basket-items\"><%if (numItems > 0) { %>(<%=numItems%>)<%}%></span></span>
                                                    <div id=\ "kkpct-shopping-cart-container\">
                                                        <div id=\ "kkpct-shopping-cart-mouseover-shadow\" class=\ "kkpct-slide-out-shadow\"></div>
                                                        <div id=\ "kkpct-shopping-cart-contents\" class=\ "kkpct-slide-out-contents kkpct-shadow\">
                                                            <%if (basketItems==null || basketItems.length == 0) { %>
                                                                <%=getMsg(\"cart.tile.empty\")%>
                                                                    <%}else{%>
                                                                        <div id=\ "kkpct-shopping-cart-items\">
                                                                            <% for (var i = 0; i < basketItems.length; i++){ %>
                                                                                <% var item = basketItems[i];%>
                                                                                    <%if (item.product != null) { %>
                                                                                        <div class=\ "kkpct-shopping-cart-item\"><a href='#' class=\ "kkpct-cart-item-image\" id='<%=\"kkpct-\"+item.product.id%>'><img src=\"<%=item.prodImage%>\" border=\"0\" alt=\"<%=item.product.name%>\" title=\" <%=item.product.name%> \"></a>
                                                                                            <a href='#' class=\ "kkpct-shopping-cart-item-title\" id='<%=\"kkpct-\"+item.product.id%>'>
                                                                                                <%=item.product.name%>
                                                                                            </a>
                                                                                            <%if (item.opts != null && item.opts.length > 0) {%>
                                                                                                <%for ( var j = 0; j < item.opts.length; j++) {%>
                                                                                                    <%var opt = item.opts[j];%>
                                                                                                        <%if (opt.type == 0) {%>
                                                                                                            <br><span class=\ "kkct-shopping-cart-item-option\"> - <%=opt.name%>:&nbsp;<%=opt.value%></span>
                                                                                                            <%} else if (opt.type == 1) {%>
                                                                                                                <br><span class=\ "kkct-shopping-cart-item-option\"> - <%=opt.name%>:&nbsp;<%=opt.quantity%>&nbsp;<%=opt.value%></span>
                                                                                                                <%} else if (opt.type == 2) {%>
                                                                                                                    <br><span class=\ "kkct-shopping-cart-item-option\"> - <%=opt.name%>:&nbsp;<%=formatMoney(opt.customerPrice)%></span>
                                                                                                                    <%} else if (opt.type == 3) {%>
                                                                                                                        <br><span class=\ "kkct-shopping-cart-item-option\"> - <%=opt.name%>:&nbsp;<%=opt.customerText%></span>
                                                                                                                        <%}%>
                                                                                                                            <%}%>
                                                                                                                                <%}%>
                                                                                                                                    <div class=\ "kkpct-shopping-cart-item-price\">
                                                                                                                                        <%if (displayPriceWithTax) { %>
                                                                                                                                            <%=formatMoney(item.finalPriceIncTax)%>
                                                                                                                                                <%}else{%>
                                                                                                                                                    <%=formatMoney(item.finalPriceExTax)%>
                                                                                                                                                        <%}%>&nbsp;
                                                                                                                                                            <%=getMsg(\"cart.tile.quantity\")%>:
                                                                                                                                                                <%=item.quantity%>
                                                                                                                                    </div>
                                                                                        </div>
                                                                                        <%}%>
                                                                                            <%}%>
                                                                        </div>
                                                                        <div id=\ "kkpct-subtotal-and-checkout\">
                                                                            <div class=\ "kkpct-subtotal\">
                                                                                <div class=\ "kkpct-subtotal-label\">
                                                                                    <%=getMsg(\"cart.tile.subtotal\")%>
                                                                                </div>
                                                                                <div class=\ "kkpct-subtotal-amount\">
                                                                                    <%=formatMoney(basketTotal)%>
                                                                                </div>
                                                                                <div id=\ "kkpct-shopping-cart-checkout-button\" class=\ "kk-button kk-small-rounded-corners\">
                                                                                    <%=getMsg(\"cart.tile.checkout\")%>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <%}%>
                                                        </div>
                                                    </div>
                                                </div>"; kkTmplMap["popupWishListTile"] = "
                                                <div id=\ "kkpwt-wishList\" class=\ "kkpwt-top-bar-menu-item\"><span id=\ "kkpwt-wishList-link\"><%=getMsg(\"wishlist.tile.wishlist\")%><span id=\"kkpwt-num-items\"><%if (numItems > 0) { %>(<%=numItems%>)<%}%></span></span>
                                                    <div id=\ "kkpwt-wishList-container\">
                                                        <div id=\ "kkpwt-wishList-mouseover-shadow\" class=\ "kkpwt-slide-out-shadow\"></div>
                                                        <div id=\ "kkpwt-wishList-contents\" class=\ "kkpwt-slide-out-contents kkpwt-shadow\">
                                                            <%if (wishListItems==null || wishListItems.length == 0) { %>
                                                                <%=getMsg(\"wishlist.tile.empty\")%>
                                                                    <%}else{%>
                                                                        <div id=\ "kkpwt-wishList-items\">
                                                                            <% for (var i = 0; i < wishListItems.length; i++){ %>
                                                                                <% var item = wishListItems[i];%>
                                                                                    <%if (item.product != null) { %>
                                                                                        <div class=\ "kkpwt-wishList-item\"><a href='#' class=\ "kkpwt-wishList-item-image\" id='<%=\"kkpwt-\"+item.product.id%>'><img src=\"<%=item.prodImage%>\" border=\"0\" alt=\"<%=item.product.name%>\" title=\" <%=item.product.name%> \"></a>
                                                                                            <a href='#' class=\ "kkpwt-wishList-item-title\" id='<%=\"kkpwt-\"+item.product.id%>'>
                                                                                                <%=item.product.name%>
                                                                                            </a>
                                                                                            <%if (item.opts != null && item.opts.length > 0) {%>
                                                                                                <%for ( var j = 0; j < item.opts.length; j++) {%>
                                                                                                    <%var opt = item.opts[j];%>
                                                                                                        <%if (opt.type == 0) {%>
                                                                                                            <br><span class=\ "kkct-wishList-item-option\"> - <%=opt.name%>:&nbsp;<%=opt.value%></span>
                                                                                                            <%} else if (opt.type == 1) {%>
                                                                                                                <br><span class=\ "kkct-wishList-item-option\"> - <%=opt.name%>:&nbsp;<%=opt.quantity%>&nbsp;<%=opt.value%></span>
                                                                                                                <%} else if (opt.type == 2) {%>
                                                                                                                    <br><span class=\ "kkct-wishList-item-option\"> - <%=opt.name%>:&nbsp;<%=opt.formattedCustPrice%></span>
                                                                                                                    <%} else if (opt.type == 3 && !isWishList) {%>
                                                                                                                        <br><span class=\ "kkct-wishList-item-option\"> - <%=opt.name%>:&nbsp;<%=opt.customerText%></span>
                                                                                                                        <%}%>
                                                                                                                            <%}%>
                                                                                                                                <%}%>
                                                                                                                                    <div class=\ "kkpwt-wishList-item-price\">
                                                                                                                                        <%if (displayPriceWithTax) { %>
                                                                                                                                            <%=formatMoney(item.finalPriceIncTax)%>
                                                                                                                                                <%}else{%>
                                                                                                                                                    <%=formatMoney(item.finalPriceExTax)%>
                                                                                                                                                        <%}%>&nbsp;
                                                                                                                                                            <%=getMsg(\"wishlist.tile.quantity\")%>:
                                                                                                                                                                <%=item.quantity%>
                                                                                                                                    </div>
                                                                                        </div>
                                                                                        <%}%>
                                                                                            <%}%>
                                                                        </div>
                                                                        <div id=\ "kkpwt-subtotal-and-checkout\">
                                                                            <div class=\ "kkpwt-subtotal\">
                                                                                <div class=\ "kkpwt-subtotal-label\">
                                                                                    <%=getMsg(\"wishlist.tile.subtotal\")%>
                                                                                </div>
                                                                                <%if (displayPriceWithTax) { %>
                                                                                    <div class=\ "kkpwt-subtotal-amount\">
                                                                                        <%=formatMoney(wishList.finalPriceIncTax)%>
                                                                                    </div>
                                                                                    <%}else{%>
                                                                                        <div class=\ "kkpwt-subtotal-amount\">
                                                                                            <%=formatMoney(wishList.finalPriceExTax)%>
                                                                                        </div>
                                                                                        <%}%>
                                                                            </div>
                                                                        </div>
                                                                        <%}%>
                                                        </div>
                                                    </div>
                                                </div>"; kkTmplMap["prodDetailTile"] = "
                                                <%if (prod == null){%>
                                                    <div id=\ "kkpdt-product-area\" class=\ "kk-rounded-corners\">
                                                        <%=getMsg(\"product.details.tile.product.not.found\")%>
                                                    </div>
                                                    <% } else { %>
                                                        <h1 id=\ "kk-page-title\"><%=prod.name%></h1>
                                                        <div id=\ "kkpdt-product-area\" class=\ "kk-rounded-corners\">
                                                            <div id=\ "kkpdt-product-column-left\">
                                                                <div id=\ "kkpdt-product-images-container\" class=\ "kk-centered\">
                                                                    <div id=\ "kkpdt-gallery\" class=\ "kkpdt-gallery\">
                                                                        <div class=\ "kkpdt-gallery_output\" id=\ "kkpdt-gallery_output\"></div>
                                                                        <div id=\ "kkpdt-gallery_nav\" class=\ "kkpdt-gallery_nav\"></div>
                                                                        <div class=\ "kk-clear\"></div>
                                                                    </div>
                                                                </div>
                                                                <div id=\ "kkpdt-product-content\">
                                                                    <div id=\ "kkpdt-product-content-tabs\">
                                                                        <% var descClass;%>
                                                                            <% var revClass;%>
                                                                                <%if (showReviewsTab == true){%>
                                                                                    <% descClass = \"\";%>
                                                                                        <% revClass = 	\"kkpdt-selected-product-content-tab\";%>
                                                                                            <% } else { %>
                                                                                                <% descClass = \"kkpdt-selected-product-content-tab\";%>
                                                                                                    <% revClass = 	\"\";%>
                                                                                                        <%}%>
                                                                                                            <div id=\ "kkpdt-product-description-tab\" class=\ "<%=descClass%> kkpdt-product-content-tab kk-small-rounded-corners-top\">
                                                                                                                <%=getMsg(\"product.details.tile.product.description\")%>
                                                                                                            </div>
                                                                                                            <div class=\ "kkpdt-product-content-tab-spacer\"></div>
                                                                                                            <div id=\ "kkpdt-product-specifications-tab\" class=\ "kkpdt-product-content-tab kk-small-rounded-corners-top\">
                                                                                                                <%=getMsg(\"product.details.tile.specifications\")%>
                                                                                                            </div>
                                                                                                            <div class=\ "kkpdt-product-content-tab-spacer\"></div>
                                                                                                            <div id=\ "kkpdt-product-reviews-tab\" class=\ "<%=revClass%> kkpdt-product-content-tab kk-small-rounded-corners-top\">
                                                                                                                <%=getMsg(\"product.details.tile.reviews\")%> (
                                                                                                                    <%=prod.numberReviews%>)</div>
                                                                                                            <div class=\ "kkpdt-product-content-tab-filler\"></div>
                                                                    </div>
                                                                    <div id=\ "kkpdt-product-description\">
                                                                        <p style=\ "clear:both\">
                                                                            <%=prod.description%>
                                                                        </p>
                                                                    </div>
                                                                    <div id=\ "kkpdt-product-specifications\">
                                                                        <%if (prod.customAttrArray != null && prod.customAttrArray.length > 0){ %>
                                                                            <table>
                                                                                <thead>
                                                                                    <th colspan=\ "2\">
                                                                                        <%=getMsg(\"product.details.tile.product.specifications\")%>
                                                                                    </th>
                                                                                </thead>
                                                                                <tbody>
                                                                                    <% for (var i = 0; i < prod.customAttrArray.length; i++){ %>
                                                                                        <% var attr =  prod.customAttrArray[i];%>
                                                                                            <%if (attr.facetNumber == 0){ %>
                                                                                                <tr class=\ "<%=(i%2==0)?\"even\ ":\"odd\ "%>\">
                                                                                                    <td>
                                                                                                        <%=(attr.getMsgCatKey==null)? attr.name:attr.msgCatKey%>
                                                                                                    </td>
                                                                                                    <td>
                                                                                                        <%=attr.value%>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <%}%>
                                                                                                    <%}%>
                                                                                </tbody>
                                                                            </table>
                                                                            <% } else { %>
                                                                                <p style=\ "clear:both\">
                                                                                    <%=getMsg(\"product.details.tile.add.specifications\")%>
                                                                                </p>
                                                                                <%}%>
                                                                    </div>
                                                                    <div id=\ "kkpdt-product-reviews\"></div>
                                                                </div>
                                                            </div>
                                                            <div id=\ "kkpdt-product-column-right\">
                                                                <div id=\ "kkpdt-buying-details\" class=\ "kk-rounded-corners-top\">
                                                                    <div id=\ "kkpdt-product-price\">
                                                                        <% var saving; %>
                                                                            <%if (displayPriceWithTax){%>
                                                                                <%if (prod.specialPriceIncTax != null)	{%>
                                                                                    <% saving = prod.priceIncTax - prod.specialPriceIncTax;%><span class=\ "kkpdt-product-price-old\"><%=formatMoney(prod.priceIncTax)%></span><span class=\ "kkpdt-product-price-current\"><%=formatMoney(prod.specialPriceIncTax)%></span>
                                                                                        <%} else { %><span class=\ "kkpdt-product-price-current\"><%=formatMoney(prod.priceIncTax)%></span>
                                                                                            <%}%>
                                                                                                <%} else { %>
                                                                                                    <%if (prod.specialPriceExTax != null) {%>
                                                                                                        <% saving = prod.priceExTax - prod.specialPriceExTax;%><span class=\ "kkpdt-product-price-old\"><%=formatMoney(prod.priceExTax)%></span><span class=\ "kkpdt-product-price-current\"><%=formatMoney(prod.specialPriceExTax)%></span>
                                                                                                            <%} else { %><span class=\ "kkpdt-product-price-current\"><%=formatMoney(prod.priceExTax)%></span>
                                                                                                                <%}%>
                                                                                                                    <%}%>
                                                                    </div>
                                                                    <div class=\ "kkpdt-rating-big\">
                                                                        <%var rating = (prod.rating == null) ? 0 : formatNumber(prod.rating,0);%>
                                                                            <a>
                                                                                <%for (var i = 0; i < rating; i++){%><span class=\ "kkpdt-star-big full\"></span>
                                                                                    <%}%>
                                                                                        <%for (var i = rating; i < 5; i++) {%><span class=\ "kkpdt-star-big empty\"></span>
                                                                                            <%}%><span id=\ "kkpdt-star-reviews-link\">(<%=prod.numberReviews%>&nbsp;<%=getMsg(\"product.tile.reviews\")%>)</span></a>
                                                                    </div>
                                                                    <%if (prod.quantity > qtyWarn){%>
                                                                        <div id=\ "kkpdt-left-in-stock\">
                                                                            <%=getMsg(\"product.details.tile.in.stock\")%>
                                                                        </div>
                                                                        <%} else if (prod.quantity <= qtyWarn && prod.quantity > 0){%>
                                                                            <div id=\ "kkpdt-left-in-stock\">
                                                                                <%=getMsg(\"product.details.tile.limited.stock\", prod.quantity)%>
                                                                            </div>
                                                                            <%} else{%>
                                                                                <div id=\ "kkpdt-left-in-stock\">
                                                                                    <%=getMsg(\"product.details.tile.out.of.stock\")%>
                                                                                </div>
                                                                                <%}%>
                                                                                    <div class=\ "kkpdt-labels\">
                                                                                        <%if (prod.type == 2 || prod.type == 4){%>
                                                                                            <div class=\ "kkpdt-label kkpdt-free-shipping\">
                                                                                                <%=getMsg(\"product.tile.free.shipping\")%>
                                                                                            </div>
                                                                                            <%}%>
                                                                                                <%if (saving != null){%>
                                                                                                    <div class=\ "kkpdt-label kkpdt-save\">
                                                                                                        <%=getMsg(\"product.tile.save\")%>&nbsp;
                                                                                                            <%=formatMoney(saving)%>
                                                                                                    </div>
                                                                                                    <%}%>
                                                                                    </div>
                                                                                    <div id=\ "kkpdt-product-options\">
                                                                                        <%if (optContainers != null && optContainers.length > 0){ %>
                                                                                            <table class=\ "kkpdt-product-option\">
                                                                                                <%for ( var j = 0; j < optContainers.length; j++) {%>
                                                                                                    <%var optContainer = optContainers[j];%>
                                                                                                        <tr>
                                                                                                            <%if (optContainer.type == 0) {%>
                                                                                                                <td class=\ "kkpdt-opt-name\">
                                                                                                                    <%=optContainer.name%>
                                                                                                                </td>
                                                                                                                <td class=\ "kkpdt-opt-value\">
                                                                                                                    <select class=\ "kkpdt-opts\" onchange=\ "kk.optionChanged(this)\">
                                                                                                                        <%for ( var k = 0; k < optContainer.opts.length; k++) {%>
                                                                                                                            <% var option =  optContainer.opts[k];%>
                                                                                                                                <% var optCode =  (optContainer.code!=null && optContainer.code.length>0)?optContainer.code:null;%>
                                                                                                                                    <% var valCode =  (option.code!=null && option.code.length>0)?option.code:null;%>
                                                                                                                                        <% var combinedCode = \"\";%>
                                                                                                                                            <%if (optCode != null && valCode != null){%>
                                                                                                                                                <%combinedCode = optCode+\"_\"+valCode+\"_\";%>
                                                                                                                                                    <%}%>
                                                                                                                                                        <option id=\ "<%=combinedCode%>\" value=\ "<%=optContainer.id+'-'+option.id%>\">
                                                                                                                                                            <%=option.formattedValue%>
                                                                                                                                                        </option>
                                                                                                                                                        <%}%>
                                                                                                                    </select>
                                                                                                                    <%} else if (optContainer.type == 1) {%>
                                                                                                                        <!-- TYPE_VARIABLE_QUANTITY -->
                                                                                                                        <td class=\ "kkpdt-opt-name\">
                                                                                                                            <%=optContainer.name+\" \"+optContainer.opts[0].formattedValue%>
                                                                                                                        </td>
                                                                                                                        <td class=\ "kkpdt-opt-value\">
                                                                                                                            <%var id = optContainer.id+\"-\"+optContainer.type+\"-\"+optContainer.opts[0].id;%>
                                                                                                                                <input type=\ "text\" id=\ "<%=id%>\" class=\ "kkpdt-opts-1\" maxlength=\ "10\"/>
                                                                                                                        </td>
                                                                                                                        <%} else if (optContainer.type == 2) {%>
                                                                                                                            <!-- TYPE_CUSTOMER_PRICE -->
                                                                                                                            <td class=\ "kkpdt-opt-name\">
                                                                                                                                <%=optContainer.name+\" \"+optContainer.opts[0].formattedValue%>
                                                                                                                            </td>
                                                                                                                            <td class=\ "kkpdt-opt-value\">
                                                                                                                                <%var id = optContainer.id+\"-\"+optContainer.type+\"-\"+optContainer.opts[0].id;%>
                                                                                                                                    <input type=\ "text\" id=\ "<%=id%>\" class=\ "kkpdt-opts-1\" maxlength=\ "10\"/>
                                                                                                                            </td>
                                                                                                                            <%} else if (optContainer.type == 3) {%>
                                                                                                                                <!-- TYPE_CUSTOMER_TEXT -->
                                                                                                                                <td class=\ "kkpdt-opt-name\">
                                                                                                                                    <%=optContainer.name+\" \"+optContainer.opts[0].formattedValue%>
                                                                                                                                </td>
                                                                                                                                <td class=\ "kkpdt-opt-value\">
                                                                                                                                    <%var id = optContainer.id+\"-\"+optContainer.type+\"-\"+optContainer.opts[0].id;%>
                                                                                                                                        <input type=\ "text\" id=\ "<%=id%>\" class=\ "kkpdt-opts-1\" maxlength=\ "512\"/>
                                                                                                                                </td>
                                                                                                                                <%}%>
                                                                                                        </tr>
                                                                                                        <%}%>
                                                                                            </table>
                                                                                            <%}%>
                                                                                    </div>
                                                                                    <div class=\ "kkpdt-product-buttons\">
                                                                                        <% if (addToBasketEnabled){ %>
                                                                                            <select id=\ "kkpdt-prodQuantityId\" class=\ "kkpdt-add-to-cart-qty\">
                                                                                                <%for (var i=1; i<31; i++) {  %>
                                                                                                    <option value=\ "<%=i%>\">
                                                                                                        <%=i%>
                                                                                                    </option>
                                                                                                    <%}%>
                                                                                            </select>
                                                                                            <a class=\ "kkpdt-add-to-cart-button-big kk-button kk-small-rounded-corners\" id='<%=\"kkpdt-\"+prod.id%>'>
                                                                                                <%=getMsg(\"product.tile.add.to.cart\")%>
                                                                                            </a>
                                                                                            <%}%>
                                                                                                <div class=\ "kkpdt-add-to-wishlist-container\">
                                                                                                    <%if (wishListEnabled) { %><img class=\ "kkpdt-plus-button\" src=\ "<%=imageBase%>/plus-button.png\"/>
                                                                                                        <a class=\ "kkpdt-add-to-wishlist-prod-details\" id='<%=\"kkpdt-\"+prod.id%>'>
                                                                                                            <%=getMsg(\"product.tile.add.to.wishlist\")%>
                                                                                                        </a>
                                                                                                        <%}%>
                                                                                                </div>
                                                                                    </div>
                                                                                    <div id=\ "kkpdt-notify-me-container\">
                                                                                        <%if (productNotification == true) { %>
                                                                                            <a class=\ "kkpdt-remove-notification\" id='<%=\"kkpdt-\"+prod.id%>'>
                                                                                                <%=getMsg(\"product.details.tile.remove\")%> <b><%=prod.name%></b>
                                                                                                    <%=getMsg(\"product.details.tile.dontnotifyme\")%>
                                                                                            </a>
                                                                                            <% } else { %>
                                                                                                <a class=\ "kkpdt-add-notification\" id='<%=\"kkpdt-\"+prod.id%>'>
                                                                                                    <%=getMsg(\"product.details.tile.notifyme\")%> <b><%=prod.name%></b></a>
                                                                                                <% } %>
                                                                                    </div>
                                                                </div>
                                                                <div id=\ "kkpdt-share-this\" class=\ "kk-rounded-corners-bottom\"><span id=\ "kkpdt-share-this-label\"><%=getMsg(\"product.details.tile.share.this\")%>:</span>
                                                                    <div class=\ "addthis_toolbox addthis_default_style \">
                                                                        <a class=\ "addthis_button_facebook\" style=\ "cursor:pointer\"></a>
                                                                        <a class=\ "addthis_button_twitter\" style=\ "cursor:pointer\"></a>
                                                                        <a class=\ "addthis_button_email\" style=\ "cursor:pointer\"></a>
                                                                        <a class=\ "addthis_button_print\" style=\ "cursor:pointer\"></a>
                                                                        <a class=\ "addthis_button_compact\" style=\ "cursor:pointer\"></a>
                                                                    </div>
                                                                    <script>
                                                                        $(function() {
                                                                            var script = 'http://s7.addthis.com/js/250/addthis_widget.js#domready=1';
                                                                            if (window.addthis) {
                                                                                window.addthis = null;
                                                                                window._adr = null;
                                                                                window._atc = null;
                                                                                window._atd = null;
                                                                                window._ate = null;
                                                                                window._atr = null;
                                                                                window._atw = null;
                                                                            }
                                                                            $.getScript(script);
                                                                        });
                                                                    </script>
                                                                </div>
                                                                <div id=\ "kkpdt-related\"></div>
                                                                <div id=\ "kkpdt-also-purchased\"></div>
                                                            </div>
                                                        </div>
                                                        <% } %>"; kkTmplMap["prodTile"] = "
                                                            <%var rand = Math.floor((Math.random() * 10000) + 1);var count = 0;%>
                                                                <% if (style == \"kkpt-single\"){ %>
                                                                    <div class=\ "kkpt-single\">
                                                                        <%}%>
                                                                            <div class=\ "kkpt-item\">
                                                                                <% if (style != \"kkpt-small\"){ %>
                                                                                    <% if (title != null && title.length > 0){ %>
                                                                                        <div class=\ "kkpt-title\">
                                                                                            <%=title%>
                                                                                        </div>
                                                                                        <%}%>
                                                                                            <div class=\ "kkpt-item-over\" id='<%=rand+\".\"+ count++ +\"-\"+prod.id%>'>
                                                                                                <% if (prod.quantity > qtyWarn){ %>
                                                                                                    <div class=\ "kkpt-items-left kkpt-green\">
                                                                                                        <%=getMsg(\"product.tile.in.stock\")%>
                                                                                                    </div>
                                                                                                    <%} else if (prod.quantity  <= qtyWarn && prod.quantity  > 0) { %>
                                                                                                        <div class=\ "kkpt-items-left kkpt-amber\">
                                                                                                            <%=prod.quantity%>
                                                                                                                <%=getMsg(\"product.tile.limited.stock\")%>
                                                                                                        </div>
                                                                                                        <%} else { %>
                                                                                                            <div class=\ "kkpt-items-left kkpt-red\">
                                                                                                                <%=getMsg(\"product.tile.out.of.stock\")%>
                                                                                                            </div>
                                                                                                            <%}%>
                                                                                                                <div class=\ "kkpt-item-buttons-container\">
                                                                                                                    <div class=\ "kkpt-item-buttons kk-centered\">
                                                                                                                        <% if (addToBasketEnabled == true){ %>
                                                                                                                            <a class=\ "kkpt-add-to-cart-button kk-button kk-small-rounded-corners\" id='<%=rand+\".\"+ count++ +\"-\"+prod.id%>'>
                                                                                                                                <%=getMsg(\"product.tile.add.to.cart\")%>
                                                                                                                            </a>
                                                                                                                            <%}%>
                                                                                                                                <% if (wishListEnabled == true){ %>
                                                                                                                                    <div class=\ "kkpt-add-to-wishlist-container kk-centered\"><span><img class=\"kkpt-plus-button\" src=\"<%=imageBase%>/plus-button.png\" border=\"0\" alt='<%=getMsg(\"product.tile.add.to.wishlist\")%>'title='<%=getMsg(\"product.tile.add.to.wishlist\")%>' /><a class=\"kkpt-add-to-wishlist\"  id='<%=rand+\".\"+ count++ +\"-\"+prod.id%>'><%=getMsg(\"product.tile.add.to.wishlist\")%></a></span></div>
                                                                                                                                    <%}%>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                                <div class=\ "kkpt-item-overlay\"></div>
                                                                                            </div>
                                                                                            <%}%><img class=\ "kkpt-item-img\" id='<%=rand+\".\"+ count++ +\"-\"+prod.id%>' src=\ "<%=prodImage%>\" border=\ "0\" alt=\ "<%=prod.name%>\" title=\ "<%=prod.name%>\" />
                                                                                                <a class=\ "kkpt-item-title\" id='<%=rand+\".\"+ count++ +\"-\"+prod.id%>'>
                                                                                                    <%=prod.name%>
                                                                                                </a>
                                                                                                <div class=\ "kkpt-rating\">
                                                                                                    <%var rating = (prod.rating == null) ? 0 : formatNumber(prod.rating,0);%>
                                                                                                        <%if (prod.numberReviews > 0) {%>
                                                                                                            <a class=\ "kkpt-item-reviews\" id='<%=rand+\".\"+ count++ +\"-\"+prod.id%>'>
                                                                                                                <%}%>
                                                                                                                    <%for (var i = 0; i < rating; i++){%><span class=\ "kkpt-star full\"></span>
                                                                                                                        <%}%>
                                                                                                                            <%for (var i = rating; i < 5; i++){%><span class=\ "kkpt-star empty\"></span>
                                                                                                                                <%}%><span class=\ "kkpt-review-text\"><%=\"(\" + prod.numberReviews + \" \" + getMsg(\"product.tile.reviews\") + \")\"%></span>
                                                                                                                                    <%if (prod.numberReviews > 0) {%>
                                                                                                            </a>
                                                                                                            <%}%>
                                                                                                </div>
                                                                                                <div class=\ "pricing\">
                                                                                                    <% var saving; %>
                                                                                                        <%if (displayPriceWithTax){%>
                                                                                                            <%if (prod.specialPriceIncTax != null)	{%>
                                                                                                                <% saving = prod.priceIncTax - prod.specialPriceIncTax;%>
                                                                                                                    <div class=\ "kkpt-price kkpt-price-old\">
                                                                                                                        <%=formatMoney(prod.priceIncTax)%>
                                                                                                                    </div>
                                                                                                                    <div class=\ "kkpt-price\">
                                                                                                                        <%=formatMoney(prod.specialPriceIncTax)%>
                                                                                                                    </div>
                                                                                                                    <%} else { %>
                                                                                                                        <div class=\ "kkpt-price\">
                                                                                                                            <%=formatMoney(prod.priceIncTax)%>
                                                                                                                        </div>
                                                                                                                        <%}%>
                                                                                                                            <%} else { %>
                                                                                                                                <%if (prod.specialPriceExTax != null) {%>
                                                                                                                                    <% saving = prod.priceExTax - prod.specialPriceExTax;%>
                                                                                                                                        <div class=\ "kkpt-price kkpt-price-old\">
                                                                                                                                            <%=formatMoney(prod.priceExTax)%>
                                                                                                                                        </div>
                                                                                                                                        <div class=\ "kkpt-price\">
                                                                                                                                            <%=formatMoney(prod.specialPriceExTax)%>
                                                                                                                                        </div>
                                                                                                                                        <%} else { %>
                                                                                                                                            <div class=\ "kkpt-price\">
                                                                                                                                                <%=formatMoney(prod.priceExTax)%>
                                                                                                                                            </div>
                                                                                                                                            <%}%>
                                                                                                                                                <%}%>
                                                                                                </div>
                                                                                                <% if (style != \"kkpt-small\"){ %>
                                                                                                    <%if (prod.type == 2 || prod.type == 4){%>
                                                                                                        <%if (saving == null) {%>
                                                                                                            <div class=\ "kkpt-label kkpt-free-shipping\">
                                                                                                                <%=getMsg(\"product.tile.free.shipping\")%>
                                                                                                            </div>
                                                                                                            <%} else { %>
                                                                                                                <div class=\ "kkpt-label kkpt-free-shipping\">
                                                                                                                    <%=getMsg(\"product.tile.free.shipping.wrap\")%>
                                                                                                                </div>
                                                                                                                <%}%>
                                                                                                                    <%}%>
                                                                                                                        <%if (saving != null) {%>
                                                                                                                            <div class=\ "kkpt-label kkpt-save\">
                                                                                                                                <%=getMsg(\"product.tile.save\")%>&nbsp;
                                                                                                                                    <%=formatMoney(saving)%>
                                                                                                                            </div>
                                                                                                                            <%}%>
                                                                                                                                <%}%>
                                                                            </div>
                                                                            <% if (style == \"kkpt-single\"){ %>
                                                                    </div>
                                                                    <%}%>"; kkTmplMap["productNotificationTile"] = "
                                                                        <h1 id=\ "kk-page-title\"><%=getMsg(\"customer.info.prod.notify.prodnots\")%></h1>
                                                                        <div class=\ "kk-content-area kk-rounded-corners\">
                                                                            <div id=\ "kk-product-notifications\">
                                                                                <form action=\ "#\" id=\ "kk-product-notification-form\" method=\ "post\">
                                                                                    <div class=\ "kk-form-section\">
                                                                                        <div class=\ "notification-header\">
                                                                                            <%=getMsg(\"customer.info.prod.notify.info\")%>.</div>
                                                                                    </div>
                                                                                    <div class=\ "kk-form-section\">
                                                                                        <div class=\ "kk-form-section-title\">
                                                                                            <h3><%=getMsg(\"customer.info.prod.notify.gprodnots\")%></h3></div>
                                                                                        <div class=\ "kk-notification-header\">
                                                                                            <div class=\ "kk-notification-checkbox\">
                                                                                                <% if (customer.globalProdNotifier >= 1){ %>
                                                                                                    <input type=\ "checkbox\" id=\ "kkGlobalNotification\" name=\ "kkGlobalNotification\" checked>
                                                                                                    <%} else { %>
                                                                                                        <input type=\ "checkbox\" id=\ "kkGlobalNotification\" name=\ "kkGlobalNotification\">
                                                                                                        <%}%>
                                                                                            </div>
                                                                                            <div class=\ "kk-notification-explanation\">
                                                                                                <%=getMsg(\"customer.info.prod.notify.recprodnots\")%>.</div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <%if (customer.globalProdNotifier < 1) { %>
                                                                                        <div class=\ "kk-form-section\">
                                                                                            <div class=\ "kk-form-section-title\">
                                                                                                <h3><%=getMsg(\"customer.info.prod.notify.prodnots\")%></h3></div>
                                                                                            <%if (customer.productNotifications != null && customer.productNotifications.length > 0){ %>
                                                                                                <h4><%=getMsg(\"customer.info.prod.notify.remprodnots\")%>.</h4>
                                                                                                <div class=\ "kk-notification-header\">
                                                                                                    <% for (var i = 0; i < customer.productNotifications.length; i++){ %>
                                                                                                        <%var prod = customer.productNotifications[i];%>
                                                                                                            <div class=\ "kk-select-notified-prod-section\">
                                                                                                                <div class=\ "kk-notification-checkbox <%=(i%2==0)?\"even\ ":\"odd\ "%>\">
                                                                                                                    <input type=\ "checkbox\" class=\ "kkpn-products\" id='<%=\"kkpn-\"+prod.id%>' />
                                                                                                                </div>
                                                                                                                <div class=\ "kk-notification-explanation <%=(i%2==0)?\"even\ ":\"odd\ "%>\">
                                                                                                                    <%=prod.name%>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                            <% } %>
                                                                                                </div>
                                                                                                <% } else { %>
                                                                                                    <div class=\ "kk-notification-header\">
                                                                                                        <%=getMsg(\"customer.info.prod.notify.noprodnots\")%>.</div>
                                                                                                    <% } %>
                                                                                        </div>
                                                                                        <% } %>
                                                                                            <div class=\ "kk-form-buttons-wide\"><a id=\ "kk-product-notification-submit\" class=\ "kk-continue-button kk-button kk-small-rounded-corners\"><span><%=getMsg(\"customer.info.save\")%></span></a><a id=\ "kk-cust-info-back\" class=\ "kk-button kk-small-rounded-corners\"><span><%=getMsg(\"customer.info.back\")%></span></a></div>
                                                                                </form>
                                                                            </div>
                                                                        </div>"; kkTmplMap["productsTile"] = "
                                                                        <% if (whatToShow == \"suggestions\") { %>
                                                                            <div class=\ "kkps-item-area kk-rounded-corners\">
                                                                                <div class=\ "kkps-item-area-header\"></div>
                                                                                <div class=\ "kkps-items-message\">
                                                                                    <%=getMsg(\"products.tile.spelling.suggestion\",prodSearch.searchText)%>
                                                                                        <div id=\ "<%=id%>\" class=\ "kkps-spelling-suggestions\">
                                                                                            <ul></ul>
                                                                                        </div>
                                                                                </div>
                                                                            </div>
                                                                            <% } else if (whatToShow == \"nodata\"){ %>
                                                                                <div class=\ "kkps-item-area kk-rounded-corners\">
                                                                                    <div class=\ "kkps-item-area-header\"></div>
                                                                                    <div class=\ "kkps-items-message\">
                                                                                        <%=getMsg(\"products.tile.no.products\")%>.</div>
                                                                                </div>
                                                                                <% } else { %>
                                                                                    <div class=\ "kkps-item-area kk-rounded-corners\">
                                                                                        <div class=\ "kkps-item-area-header\">
                                                                                            <div class=\ "kkps-item-area-header-top\"><span class=\ "kkps-number-of-items kkps-navigation-element\"><%=dataDesc.offset+1%>-<%=+dataDesc.offset + +numProds%> <%=getMsg(\"products.tile.of\")%> <%=totalNumProds%> <%=getMsg(\"products.tile.products\")%></span><span class=\ "kkps-pagination kkps-navigation-element\"><a class=\"kkps-pagination-element kkps-previous-items<%=(showBack)?\"\":\"-inactive\"%>\" id='<%=id+\"-B\"%>'></a><% for ( var i = 0; i < pageList.length; i++) { %><% var page = pageList[i]; %><% if (page == currentPage) { %><a class=\"kkps-pagination-element kkps-page-num kkps-current\" id='<%=id+\"p-\"+page%>'><%=page%></a><% } else { %><a class=\"kkps-pagination-element kkps-page-num\" id='<%=id+\"p-\"+page%>'><%=page%></a><% } %><% }  %><a class=\"kkps-pagination-element kkps-next-items<%=(showNext)?\"\":\"-inactive\"%>\" id='<%=id+\"-F\"%>'></a></span></div>
                                                                                            <div class=\ "kkps-item-area-header-bottom\"><span class=\ "kkps-show-per-page-area kkps-navigation-element\"><select class=\"kkps-show-per-page\" id='<%=id+\"-P1\"%>' onchange=\"kk.changeProductsPageSize('<%=id+\"-P1\"%>')\"><option value=\"8\"<%=(maxProdsPerPage==8)?' selected=\"selected\"':''%>>8</option><option value=\"12\"<%=(maxProdsPerPage==12)?' selected=\"selected\"':''%>>12</option><option value=\"16\"<%=(maxProdsPerPage==16)?' selected=\"selected\"':''%>>16</option><option value=\"20\"<%=(maxProdsPerPage==20)?' selected=\"selected\"':''%>>20</option><option value=\"24\"<%=(maxProdsPerPage==24)?' selected=\"selected\"':''%>>24</option><option value=\"28\"<%=(maxProdsPerPage==28)?' selected=\"selected\"':''%>>28</option></select><%=getMsg(\"products.tile.per.page\")%></span><span class=\ "kkps-sort-by-area kkps-navigation-element\"><%=getMsg(\"products.tile.sort\")%>:<select class=\"kkps-sort-by\" id='<%=id+\"-O1\"%>' onchange=\"kk.changeProductsSortBy('<%=id+\"-O1\"%>')\"><option value=\"ORDER_BY_TIMES_VIEWED_DESCENDING\"<%=(dataDesc.orderBy=='ORDER_BY_TIMES_VIEWED_DESCENDING')?' selected=\"selected\"':''%>><%=getMsg(\"products.tile.sort.products.by.most.viewed\")%></option><option value=\"ORDER_BY_TIMES_ORDERED_DESCENDING\"<%=(dataDesc.orderBy=='ORDER_BY_TIMES_ORDERED_DESCENDING')?' selected=\"selected\"':''%>><%=getMsg(\"products.tile.sort.products.by.most.sold\")%></option><option value=\"ORDER_BY_PRICE_ASCENDING\"<%=(dataDesc.orderBy=='ORDER_BY_PRICE_ASCENDING')?' selected=\"selected\"':''%>><%=getMsg(\"products.tile.sort.products.by.price.asc\")%></option><option value=\"ORDER_BY_PRICE_DESCENDING\"<%=(dataDesc.orderBy=='ORDER_BY_PRICE_DESCENDING')?' selected=\"selected\"':''%>><%=getMsg(\"products.tile.sort.products.by.price.desc\")%></option><option value=\"ORDER_BY_RATING_DESCENDING\"<%=(dataDesc.orderBy=='ORDER_BY_RATING_DESCENDING')?' selected=\"selected\"':''%>><%=getMsg(\"products.tile.sort.products.by.rating\")%></option></select></span></div>
                                                                                        </div>
                                                                                        <div id=\ "<%=id%>\" class=\ "kkps-items\">
                                                                                            <ul></ul>
                                                                                        </div>
                                                                                    </div>
                                                                                    <% } %>"; kkTmplMap["registerTile"] = "
                                                                                        <script type=\ "text/javascript\">
                                                                                            $(function() {
                                                                                                        $.datepicker.setDefaults($.datepicker.regional['<%=locale.slice(0,2)%>']);
                                                                                                        $('#kkDatepicker').datepicker({
                                                                                                                    changeMonth: true,
                                                                                                                    changeYear: true,
                                                                                                                    dateFormat: '<%=getMsg(\"datepicker.date.format\")%>',
                                                                                                                    yearRange: \ "-120:-10\", minDate: '-120y', maxDate: '-10y'});});
                                                                                        </script>
                                                                                        <h1 id=\ "kk-page-title\"><%=getMsg(\"register.tile.new.account\")%></h1>
                                                                                        <div class=\ "kk-content-area kk-rounded-corners\">
                                                                                            <div>
                                                                                                <div id=\ "kk-error\"></div>
                                                                                                <form action=\ "#\" id=\ "kk-register-form\" method=\ "post\">
                                                                                                    <div class=\ "kk-form-section\">
                                                                                                        <div>
                                                                                                            <h3><%=getMsg(\"register.tile.personal.details\")%><span class=\"kk-required-text\"><span class=\"kk-required-icon kk-required-blue\"></span>&nbsp;<%=getMsg(\"register.tile.required.fields\")%></span></h3></div>
                                                                                                        <div class=\ "kk-form-section-fields\">
                                                                                                            <div class=\ "kk-form-section-divider\"></div>
                                                                                                            <div class=\ "kk-form-input kk-radio-buttons\">
                                                                                                                <label>
                                                                                                                    <%=getMsg(\"register.tile.gender\")%>
                                                                                                                </label><span class=\ "kk-radio-button\"><input type=\"radio\" name=\"kkGender\" value=\"m\" \"checked\" > <%=getMsg(\"register.tile.male\")%></span><span class=\ "kk-radio-button\"><input type=\"radio\" name=\"kkGender\" value=\"f\" > <%=getMsg(\"register.tile.female\")%></span><span class=\ "kk-required-icon kk-required-blue\"></span><span class=\ "kk-validation-msg\"></span></div>
                                                                                                            <div class=\ "kk-form-input\">
                                                                                                                <label>
                                                                                                                    <%=getMsg(\"register.tile.first.name\")%>
                                                                                                                </label>
                                                                                                                <input type=\ "text\" value=\ "\" id=\ "kkFirstName\" name=\ "kkFirstName\"/><span class=\ "kk-required-icon kk-required-blue\"></span><span class=\ "kk-validation-msg\"></span></div>
                                                                                                            <div class=\ "kk-form-input\">
                                                                                                                <label>
                                                                                                                    <%=getMsg(\"register.tile.last.name\")%>
                                                                                                                </label>
                                                                                                                <input type=\ "text\" value=\ "\" id=\ "kkLastName\" name=\ "kkLastName\"/><span class=\ "kk-required-icon kk-required-blue\"></span><span class=\ "kk-validation-msg\"></span></div>
                                                                                                            <div class=\ "kk-form-input\">
                                                                                                                <label>
                                                                                                                    <%=getMsg(\"register.tile.dob\")%>
                                                                                                                </label>
                                                                                                                <input type=\ "text\" id=\ "kkDatepicker\" value=\ "\" name=\ "kkBirthDateString\"/><span class=\ "kk-required-icon kk-required-blue\"></span><span class=\ "kk-validation-msg\"></span></div>
                                                                                                            <div class=\ "kk-form-input\">
                                                                                                                <label>
                                                                                                                    <%=getMsg(\"register.tile.email\")%>
                                                                                                                </label>
                                                                                                                <input type=\ "text\" value=\ "\" id=\ "kkEmailAddr\" name=\ "kkEmailAddr\"/><span class=\ "kk-required-icon kk-required-blue\"></span><span class=\ "kk-validation-msg\"></span></div>
                                                                                                            <div class=\ "kk-form-input\">
                                                                                                                <label>
                                                                                                                    <%=getMsg(\"register.tile.username\")%>
                                                                                                                </label>
                                                                                                                <input type=\ "text\" value=\ "\" id=\ "kkUsername\" name=\ "kkUsername\"/><span class=\ "kk-validation-msg\"></span></div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div class=\ "kk-form-section\">
                                                                                                        <h3><%=getMsg(\"register.tile.company.details\")%></h3>
                                                                                                        <div class=\ "kk-form-section-fields\">
                                                                                                            <div class=\ "kk-form-section-divider\"></div>
                                                                                                            <div class=\ "kk-form-input\">
                                                                                                                <label>
                                                                                                                    <%=getMsg(\"register.tile.company.name\")%>
                                                                                                                </label>
                                                                                                                <input type=\ "text\" value=\ "\" id=\ "kkCompany\" name=\ "kkCompany\"/><span class=\ "kk-validation-msg\"></span></div>
                                                                                                            <div class=\ "kk-form-input\">
                                                                                                                <label>
                                                                                                                    <%=getMsg(\"register.tile.tax.id\")%>
                                                                                                                </label>
                                                                                                                <input type=\ "text\" value=\ "\" id=\ "kkTaxId\" name=\ "kkTaxId\"/><span class=\ "kk-validation-msg\"></span></div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div class=\ "kk-form-section\">
                                                                                                        <h3><%=getMsg(\"register.tile.addr\")%></h3>
                                                                                                        <div class=\ "kk-form-section-fields\">
                                                                                                            <div class=\ "kk-form-section-divider\"></div>
                                                                                                            <div class=\ "kk-form-input\">
                                                                                                                <label>
                                                                                                                    <%=getMsg(\"register.tile.street.addr\")%>
                                                                                                                </label>
                                                                                                                <input type=\ "text\" value=\ "\" id=\ "kkStreetAddress\" name=\ "kkStreetAddress\"/><span class=\ "kk-required-icon kk-required-blue\"></span><span class=\ "kk-validation-msg\"></span></div>
                                                                                                            <div class=\ "kk-form-input\">
                                                                                                                <label>
                                                                                                                    <%=getMsg(\"register.tile.street.addr1\")%>
                                                                                                                </label>
                                                                                                                <input type=\ "text\" value=\ "\" id=\ "kkStreetAddress1\" name=\ "kkStreetAddress1\" /><span class=\ "kk-validation-msg\"></span></div>
                                                                                                            <div class=\ "kk-form-input\">
                                                                                                                <label>
                                                                                                                    <%=getMsg(\"register.tile.suburb\")%>
                                                                                                                </label>
                                                                                                                <input type=\ "text\" value=\ "\" id=\ "kkSuburb\" name=\ "kkSuburb\"/><span class=\ "kk-validation-msg\"></span></div>
                                                                                                            <div class=\ "kk-form-input\">
                                                                                                                <label>
                                                                                                                    <%=getMsg(\"register.tile.postcode\")%>
                                                                                                                </label>
                                                                                                                <input type=\ "text\" value=\ "\" id=\ "kkPostcode\" name=\ "kkPostcode\" /><span class=\ "kk-required-icon kk-required-blue\"></span><span class=\ "kk-validation-msg\"></span></div>
                                                                                                            <div class=\ "kk-form-input\">
                                                                                                                <label>
                                                                                                                    <%=getMsg(\"register.tile.city\")%>
                                                                                                                </label>
                                                                                                                <input type=\ "text\" value=\ "\" id=\ "kkCity\" name=\ "kkCity\" /><span class=\ "kk-required-icon kk-required-blue\"></span><span class=\ "kk-validation-msg\"></span></div>
                                                                                                            <div class=\ "kk-form-input\" id=\ "kk-form-zone-select\">
                                                                                                                <label>
                                                                                                                    <%=getMsg(\"register.tile.state\")%>
                                                                                                                </label>
                                                                                                                <select id=\ "kkStateList\" name=\ "kkStateList\" class=\ "kkState\">
                                                                                                                    <option value=\ "-1\">
                                                                                                                        <%=getMsg(\"register.tile.select\")%>
                                                                                                                    </option>
                                                                                                                    <% for (var i = 0; i < zones.length; i++){ %>
                                                                                                                        <% var zone = zones[i];%>
                                                                                                                            <option value=\ "<%=zone.zoneName%>\">
                                                                                                                                <%=zone.zoneName%>
                                                                                                                            </option>
                                                                                                                            <% } %>
                                                                                                                </select><span class=\ "kk-required-icon kk-required-blue\"></span><span class=\ "kk-validation-msg\"></span></div>
                                                                                                            <div class=\ "kk-form-input\" id=\ "kk-form-zone-input\">
                                                                                                                <label>
                                                                                                                    <%=getMsg(\"register.tile.state\")%>
                                                                                                                </label>
                                                                                                                <input type=\ "text\" id=\ "kkState\" name=\ "kkState\" /><span class=\ "kk-required-icon kk-required-blue\"></span><span class=\ "kk-validation-msg\"></span></div>
                                                                                                            <div class=\ "kk-form-input\">
                                                                                                                <label>
                                                                                                                    <%=getMsg(\"register.tile.country\")%>
                                                                                                                </label>
                                                                                                                <select id=\ "kkCountryId\" name=\ "kkCountryId\" onchange=\ "kk.changeCountry();\">
                                                                                                                    <option value=\ "-1\">
                                                                                                                        <%=getMsg(\"register.tile.select\")%>
                                                                                                                    </option>
                                                                                                                    <%if (countries != null){%>
                                                                                                                        <%for ( var i = 0; i < countries.length; i++)	{%>
                                                                                                                            <%var country = countries[i];%>
                                                                                                                                <%if (country.isoCode3 == defaultCountryCode){ %>
                                                                                                                                    <option selected=\ "selected\" value=\ "<%=country.id%>\">
                                                                                                                                        <%=country.name%>
                                                                                                                                    </option>
                                                                                                                                    <% } else { %>
                                                                                                                                        <option value=\ "<%=country.id%>\">
                                                                                                                                            <%=country.name%>
                                                                                                                                        </option>
                                                                                                                                        <% } %>
                                                                                                                                            <% } %>
                                                                                                                                                <% } %>
                                                                                                                </select><span class=\ "kk-required-icon kk-required-green\"></span><span class=\ "kk-validation-msg\"></span></div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div class=\ "kk-form-section\">
                                                                                                        <h3><%=getMsg(\"register.tile.contact.info\")%></h3>
                                                                                                        <div class=\ "kk-form-section-fields\">
                                                                                                            <div class=\ "kk-form-section-divider\"></div>
                                                                                                            <div class=\ "kk-form-input\">
                                                                                                                <label>
                                                                                                                    <%=getMsg(\"register.tile.tel.number\")%>
                                                                                                                </label>
                                                                                                                <input type=\ "text\" value=\ "\" id=\ "kkTelephoneNumber\" name=\ "kkTelephoneNumber\" /><span class=\ "kk-required-icon kk-required-blue\"></span><span class=\ "kk-validation-msg\"></span></div>
                                                                                                            <div class=\ "kk-form-input\">
                                                                                                                <label>
                                                                                                                    <%=getMsg(\"register.tile.tel.number1\")%>
                                                                                                                </label>
                                                                                                                <input type=\ "text\" value=\ "\" id=\ "kkTelephoneNumber1\" name=\ "kkTelephoneNumber1\" /><span class=\ "kk-validation-msg\"></span></div>
                                                                                                            <div class=\ "kk-form-input\">
                                                                                                                <label>
                                                                                                                    <%=getMsg(\"register.tile.fax.number\")%>
                                                                                                                </label>
                                                                                                                <input type=\ "text\" value=\ "\" id=\ "kkFaxNumber\" name=\ "kkFaxNumber\" /><span class=\ "kk-validation-msg\"></span></div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div class=\ "kk-form-section\">
                                                                                                        <h3><%=getMsg(\"register.tile.subscriptions\")%></h3>
                                                                                                        <div class=\ "kk-form-section-fields\">
                                                                                                            <div class=\ "kk-form-section-divider\"></div>
                                                                                                            <div class=\ "kk-form-input\">
                                                                                                                <label>
                                                                                                                    <%=getMsg(\"register.tile.newsletter\")%>
                                                                                                                </label>
                                                                                                                <input type=\ "checkbox\" id=\ "kkNewsletter\" name=\ "kkNewsletter\">
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div class=\ "kk-form-section\">
                                                                                                        <h3><%=getMsg(\"register.tile.password\")%></h3>
                                                                                                        <div class=\ "kk-form-section-fields\">
                                                                                                            <div class=\ "kk-form-section-divider\"></div>
                                                                                                            <div class=\ "kk-form-input\">
                                                                                                                <label>
                                                                                                                    <%=getMsg(\"register.tile.password\")%>
                                                                                                                </label>
                                                                                                                <input type=\ "password\" name=\ "kkPassword\" id=\ "kkPassword\" autocomplete=\ "off\" value=\ "\"/><span class=\ "kk-required-icon kk-required-blue\"></span><span class=\ "kk-validation-msg\"></span></div>
                                                                                                            <div class=\ "kk-form-input\">
                                                                                                                <label>
                                                                                                                    <%=getMsg(\"register.tile.confirm.password\")%>
                                                                                                                </label>
                                                                                                                <input type=\ "password\" id=\ "kkPasswordConfirmation\" name=\ "kkPasswordConfirmation\" autocomplete=\ "off\" value=\ "\"/><span class=\ "kk-required-icon kk-required-blue\"></span><span class=\ "kk-validation-msg\"></span></div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div class=\ "kk-form-buttons\"><a id=\ "kk-register\" class=\ "kk-continue-button kk-button kk-small-rounded-corners\"><span><%=getMsg(\"register.tile.continue\")%></span></a></div>
                                                                                                </form>
                                                                                            </div>
                                                                                        </div>"; kkTmplMap["reviewsTile"] = "
                                                                                        <%if (reviews != null && reviews.length > 0){ %>
                                                                                            <div id=\ "kkrt-average-customer-reviews\">
                                                                                                <div id=\ "kkrt-average-customer-reviews-meters\">
                                                                                                    <% for (var i = 5; i > 0; i--){ %>
                                                                                                        <%var qty = ratingQuantity[i-1]; %>
                                                                                                            <div class=\ "kkrt-average-customer-reviews-meter-container\">
                                                                                                                <div class=\ "kkrt-average-customer-reviews-meter-label\">
                                                                                                                    <%if (qty > 0){ %><a id='<%=\"kkrt-\"+i%>' class=\ "kkrt-review-meter-rating\"><span class=\"<%=(searchRating==i)?\"kk-selected\":\"kk-not-selected\"%>\"></span><%=i%>&nbsp;<%=getMsg(\"reviews.tile.stars\")%></a>
                                                                                                                        <%}else{%><span class=\ "<%=(searchRating==i)?\"kk-selected\ ":\"kk-not-selected\ "%>\"></span>
                                                                                                                            <%=i%>&nbsp;
                                                                                                                                <%=getMsg(\"reviews.tile.stars\")%>
                                                                                                                                    <%}%>
                                                                                                                </div>
                                                                                                                <div class=\ "kkrt-average-customer-reviews-meter\"><span id=\ "<%=i%>star\" style=\ "width:<%=ratingPercentage[i-1]%>%\"></span></div>
                                                                                                                <div class=\ "kkrt-average-customer-reviews-number\">(
                                                                                                                    <%=qty%>)</div>
                                                                                                            </div>
                                                                                                            <%}%>
                                                                                                </div>
                                                                                                <div id=\ "kkrt-average-customer-reviews-stars\">
                                                                                                    <div id=\ "kkrt-average-customer-reviews-stars-title\">
                                                                                                        <%=getMsg(\"reviews.tile.average.reviews\")%>:</div>
                                                                                                    <%var rating = (prod.rating == null) ? 0 : formatNumber(prod.rating,0);%>
                                                                                                        <div class=\ "kkrt-rating-big\">
                                                                                                            <%for (var i = 0; i < rating; i++){%><span class=\ "kkrt-star-big full\"></span>
                                                                                                                <%}%>
                                                                                                                    <%for (var i = rating; i < 5; i++){%><span class=\ "kkrt-star-big empty\"></span>
                                                                                                                        <%}%>
                                                                                                                            <%var ratingDecStr = (prod.rating==null)?\"0\":Math.round(prod.rating*10) / 10; %>&nbsp;(
                                                                                                                                <%=ratingDecStr%>)</div>
                                                                                                        <div class=\ "kkrt-write-review\">
                                                                                                            <a href='#' id='<%=\"kkrt-\"+prod.id%>' class=\ "kkrt-write-review-button kk-button kk-small-rounded-corners\">
                                                                                                                <%=getMsg(\"reviews.tile.write.review\")%>
                                                                                                            </a>
                                                                                                        </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class=\ "kkrt-product-reviews-navigation\">
                                                                                                <div class=\ "kkrt-product-reviews-navigation-top\"><span class=\ "kkrt-number-of-items kkrt-navigation-element\"><%=dataDesc.offset+1%>-<%=+dataDesc.offset + +numRevs%> <%=getMsg(\"reviews.tile.of\")%> <%=totalNumRevs%></span><span class=\ "kkrt-pagination kkrt-navigation-element\"><a class=\"kkrt-pagination-element kkrt-previous-items<%=(showBack)?\"\":\"-inactive\"%>\" id='<%=prod.id+\"-B\"%>'></a><% for ( var i = 0; i < pageList.length; i++) { %><% var page = pageList[i]; %><% if (page == currentPage) { %><a class=\"kkrt-pagination-element kkrt-page-num kkrt-current\" id='<%=prod.id+\"p-\"+page%>'><%=page%></a><% } else { %><a class=\"kkrt-pagination-element kkrt-page-num\" id='<%=prod.id+\"p-\"+page%>'><%=page%></a><% } %><% }  %><a class=\"kkrt-pagination-element kkrt-next-items<%=(showNext)?\"\":\"-inactive\"%>\" id='<%=prod.id+\"-F\"%>'></a></span></div>
                                                                                                <div class=\ "kkrt-product-reviews-navigation-bottom\"><span class=\ "kkrt-show-per-page-area kkrt-navigation-element\"><select class=\"kkrt-show-per-page\" id='<%=prod.id + \"-P1\"%>' onchange=\"kk.changeReviewsPageSize('<%=prod.id + \"-P1\"%>')\"><option value=\"5\"<%=(maxRevsPerPage==5)?' selected=\"selected\"':''%>>5</option><option value=\"10\"<%=(maxRevsPerPage==10)?' selected=\"selected\"':''%>>10</option><option value=\"15\"<%=(maxRevsPerPage==15)?' selected=\"selected\"':''%>>15</option><option value=\"20\"<%=(maxRevsPerPage==20)?' selected=\"selected\"':''%>>20</option></select><%=getMsg(\"reviews.tile.per.page\")%></span><span class=\ "kkrt-sort-by-area kkrt-navigation-element\"><%=getMsg(\"reviews.tile.sort\")%>:<select class=\"kkrt-sort-by\" id='<%=prod.id+\"-O1\"%>' onchange=\"kk.changeReviewsSortBy('<%=prod.id+\"-O1\"%>')\"><option value=\"ORDER_BY_DATE_ADDED_DESCENDING\"<%=(dataDesc.orderBy=='ORDER_BY_DATE_ADDED_DESCENDING')?' selected=\"selected\"':''%>><%=getMsg(\"reviews.tile.sort.by.most.recent\")%></option><option value=\"ORDER_BY_DATE_ADDED_ASCENDING\"<%=(dataDesc.orderBy=='ORDER_BY_DATE_ADDED_ASCENDING')?' selected=\"selected\"':''%>><%=getMsg(\"reviews.tile.sort.by.oldest\")%></option><option value=\"ORDER_BY_RATING_DESCENDING\"<%=(dataDesc.orderBy=='ORDER_BY_RATING_DESCENDING')?' selected=\"selected\"':''%>><%=getMsg(\"reviews.tile.sort.by.rating.desc\")%></option><option value=\"ORDER_BY_RATING_ASCENDING\"<%=(dataDesc.orderBy=='ORDER_BY_RATING_ASCENDING')?' selected=\"selected\"':''%>><%=getMsg(\"reviews.tile.sort.by.rating.asc\")%></option></select></span></div>
                                                                                            </div>
                                                                                            <div id=\ "kkrt-product-reviews-area\">
                                                                                                <% for (var i = 0; i < reviews.length; i++){ %>
                                                                                                    <% var rev = reviews[i];%>
                                                                                                        <div class=\ "kkrt-product-review\">
                                                                                                            <div class=\ "kkrt-rating\">
                                                                                                                <%for (var j = 0; j < rev.rating; j++){%><span class=\ "kkrt-star full\"></span>
                                                                                                                    <%}%>
                                                                                                                        <%for (var j = rev.rating; j < 5; j++){%><span class=\ "kkrt-star empty\"></span>
                                                                                                                            <%}%>
                                                                                                            </div>
                                                                                                            <div class=\ "kkrt-product-review-details\">
                                                                                                                <%=getMsg(\"reviews.tile.by\")%> <span class=\ "kkrt-product-review-details-author\"><%=rev.customerName%></span><span class=\ "kkrt-product-review-details-date\"><%=formatDate(rev.dateAdded)%></span></div>
                                                                                                            <p>
                                                                                                                <%=rev.reviewText%>
                                                                                                            </p>
                                                                                                        </div>
                                                                                                        <%}%>
                                                                                            </div>
                                                                                            <% } else { %>
                                                                                                <p style=\ "clear:both\">
                                                                                                    <a href='#' id='<%=\"kkrt-\"+prod.id%>' class=\ "kkrt-write-review-button kkrt-text-link\">
                                                                                                        <%=getMsg(\"reviews.tile.write.first.review\")%>
                                                                                                    </a>
                                                                                                </p>
                                                                                                <% } %>"; kkTmplMap["searchTile"] = "
                                                                                                    <%if (useSolr) { %>
                                                                                                        <script type=\ "text/javascript\">
                                                                                                            $(function() {
                                                                                                                        $(\"#kkst-search-input\").autocomplete({source : function(request, response) {var options = new Object();options.languageCode = kk.getLangCode();options.limit = \"10\";options.startTag = \"<b>\";options.endTag = \"</b>\";options.searchText = request.term.toLowerCase();options.returnRichText = \"true\";options.returnRawText = \"true\";options.topLevelCategoryId = $(\"#kkst-top-cat-list\").val();kkEng.getSuggestedSearchItems(kk.getSessionId(), options, function(result,textStatus, jqXHR) {var ssArray = decodeJson(result);var srArray = [];for (var i = 0; i < ssArray.length; i++) {var ss = ssArray[i];var sr = new Object();sr.label = kk.processTermResult(ss.richText, /* rich */true);sr.value = kk.processTermResult(ss.rawText, /* rich */false);sr.id = ss.id + \",\" + ss.manufacturerId + \",\" + ss.categoryId;srArray[i] = sr;}response(srArray);}, null, kk.getKKEng());},minLength : 1,select : function(event, ui) {self.kk.search(ui.item.id, ui.item.value);}}).data(\"uiAutocomplete\")._renderItem = function(ul, item) {ul.addClass('ui-corner-all');return $(\"<li class='ui-corner-all'></li>\").data(\"item.autocomplete\", item).append(\"<a>\" + item.label + \"</a>\").appendTo(ul);};});
                                                                                                        </script>
                                                                                                        <% } %>
                                                                                                            <div id=\ "kkst-header-container\">
                                                                                                                <div id=\ "kkst-header\">
                                                                                                                    <div id=\ "kkst-logo\"><a href=\ "http://www.konakart.com\">KonaKart</a></div>
                                                                                                                    <div id=\ "kkst-search\">
                                                                                                                        <select id=\ "kkst-top-cat-list\" class=\ "kk-rounded-corners-left\">
                                                                                                                            <option value=\ "-1\">
                                                                                                                                <%=getMsg(\"search.tile.all\")%>
                                                                                                                            </option>
                                                                                                                            <%for (var i = 0; i < catTree.length; i++) {%>
                                                                                                                                <%var cat = catTree[i]; %>
                                                                                                                                    <option value=\ "<%=cat.id%>\">
                                                                                                                                        <%=cat.name%>
                                                                                                                                    </option>
                                                                                                                                    <% } %>
                                                                                                                        </select>
                                                                                                                        <input type=\ "text\" id=\ "kkst-search-input\">
                                                                                                                        <a id=\ "kkst-search-button\" class=\ "kk-rounded-corners-right\">
                                                                                                                            <%=getMsg(\"search.tile.search\")%>
                                                                                                                        </a>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>"; kkTmplMap["verticalCarouselTile"] = "
                                                                                                            <script type=text/javascript>
                                                                                                                var <%=id%> = $('#<%=id%>');
                                                                                                                <%=id%>.on('jcarousel:reloadend', function() {
                                                                                                                    <%=id%>.jcarousel('scroll', 0, true, function(scrolled) {
                                                                                                                        kk.setVerticalControls(<%=id%>, $('#<%=id%>-prev'), $('#<%=id%>-next'));
                                                                                                                    })
                                                                                                                }).jcarousel({
                                                                                                                    vertical: true,
                                                                                                                    wrap: null
                                                                                                                });
                                                                                                                $('#<%=id%>-prev').jcarouselControl({
                                                                                                                    method: function() {
                                                                                                                        <%=id%>.jcarousel('scroll', '-=' + <%=id%>.jcarousel('visible').length);
                                                                                                                        kk.setVerticalControls(<%=id%>, $('#<%=id%>-prev'), $('#<%=id%>-next'));
                                                                                                                    }
                                                                                                                });
                                                                                                                $('#<%=id%>-next').jcarouselControl({
                                                                                                                    method: function() {
                                                                                                                        <%=id%>.jcarousel('scroll', '+=' + <%=id%>.jcarousel('visible').length);
                                                                                                                        kk.setVerticalControls(<%=id%>, $('#<%=id%>-prev'), $('#<%=id%>-next'));
                                                                                                                    }
                                                                                                                });
                                                                                                            </script>
                                                                                                            <div class=\ "kkvca-item-area-sidebar kkpt-small kk-rounded-corners\">
                                                                                                                <div class=\ "kkvca-item-area-header jcarousel-wrapper\">
                                                                                                                    <h2 class=\ "kkvca-item-area-title\"><%=title%></h2>
                                                                                                                    <a class=\ "jcarousel-vertical-control-prev jcarousel-border-prev prev-items-down-inactive\" id=\ "<%=id%>-prev\" data-jcarouselcontrol=\ "true\"></a>
                                                                                                                    <a class=\ "jcarousel-vertical-control-next jcarousel-border-next next-items-up\" id=\ "<%=id%>-next\" data-jcarouselcontrol=\ "true\"></a>
                                                                                                                </div>
                                                                                                                <div class=\ "jcarousel-vertical\" id=\ "<%=id%>\" data-jcarousel=\ "true\">
                                                                                                                    <ul style=\ "left: 0px; top: 0px;\">
                                                                                                                </div>
                                                                                                            </div>"; kkTmplMap["writeReviewTile"] = "
                                                                                                            <h1 id=\ "kk-page-title\"><%=getMsg(\"write.review.title\",prod.name)%></h1>
                                                                                                            <div class=\ "kk-content-area kk-rounded-corners\">
                                                                                                                <div>
                                                                                                                    <form action=\ "#\" id=\ "kk-write-review-form\" method=\ "post\">
                                                                                                                        <div class=\ "kk-form-section\">
                                                                                                                            <div class=\ "kwrt-input\">
                                                                                                                                <div class=\ "kk-form-input\">
                                                                                                                                    <label>
                                                                                                                                        <%=getMsg(\"write.review.your.review\")%>
                                                                                                                                    </label>
                                                                                                                                    <textarea id=\ "kkReviewText\" name=\ "kkReviewText\"></textarea><span class=\ "kk-validation-msg\"></span></div>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                        <div class=\ "kk-form-section\">
                                                                                                                            <div class=\ "kwrt-input\">
                                                                                                                                <div class=\ "kk-form-input\"><span class=\ "kkwrt-rating-buttons\"><label><%=getMsg(\"write.review.rating\")%></label><span class=\"kkwrt-rating-text\"><%=getMsg(\"write.review.bad\")%></span>
                                                                                                                                    <input type=\ "radio\" name=\ "kkRating\" value=\ "1\"/>
                                                                                                                                    <input type=\ "radio\" name=\ "kkRating\" value=\ "2\"/>
                                                                                                                                    <input type=\ "radio\" name=\ "kkRating\" value=\ "3\"/>
                                                                                                                                    <input type=\ "radio\" name=\ "kkRating\" value=\ "4\"/>
                                                                                                                                    <input type=\ "radio\" name=\ "kkRating\" value=\ "5\"/><span class=\ "kkwrt-rating-text\"><%=getMsg(\"write.review.good\")%></span></span><span class=\ "kk-validation-msg\"></span></div>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                        <div class=\ "kk-form-buttons\"><a id=\ "kk-review-submit\" class=\ "kk-continue-button kk-button kk-small-rounded-corners\"><span><%=getMsg(\"write.review.submit\")%></span></a><a id=\ "kk-write-review-back\" class=\ "kk-button kk-small-rounded-corners\"><span><%=getMsg(\"write.review.back\")%></span></a></div>
                                                                                                                    </form>
                                                                                                                </div>
                                                                                                            </div>";