<%--
  Created by IntelliJ IDEA.
  User: kenny
  Date: 26/07/2016
  Time: 16:25
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib prefix="sec"
          uri="http://www.springframework.org/security/tags"%>
<html>
<head>
    <meta name="_csrf" content="${_csrf.token}"/>
    <!-- default header name is X-CSRF-TOKEN -->
    <meta name="_csrf_header" content="${_csrf.headerName}"/>
    <title><spring:message code="general.appName" /></title>
    <link rel="stylesheet" href="resources/vendor/bootstrap/dist/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="resources/vendor/bootstrap-table/dist/bootstrap-table.min.css"/>
    <link rel="stylesheet" href="resources/css/style.css"/>
</head>

<body>
    <%@ include file="/WEB-INF/views/header.jsp" %>
    <div class="container">
        <div class="row" id="search-div">
            <div class="col-md-offset-3 col-md-6">
                <input type="text" class="form-control input-sm search-input" placeholder="<spring:message code="general.search" />"/>
            </div>
        </div>
        <div id="table-div">
            <table id="product-table" class="table">
                <thead>
                    <th data-field="name" data-sortable="true"><spring:message code="general.productName" /></th>
                    <th data-field="category" data-sortable="true"><spring:message code="general.category" /></th>
                    <th data-field="price" data-sortable="true"><spring:message code="general.price" /></th>
                </thead>
            </table>
        </div>
    </div>
</body>
<script src="resources/vendor/jquery/dist/jquery.min.js"></script>
<script src="resources/vendor/bootstrap/dist/js/bootstrap.min.js"></script>
<script src="resources/vendor/bootstrap-table/dist/bootstrap-table.min.js"></script>
<script src="resources/vendor/underscore/underscore-min.js"></script>
<script src="resources/vendor/backbone/backbone-min.js"></script>
<script src="resources/vendor/notifyjs/dist/notify.js"></script>
<script src="resources/js/inventory.js"></script>

<script src="resources/js/app.js"></script>
</html>
