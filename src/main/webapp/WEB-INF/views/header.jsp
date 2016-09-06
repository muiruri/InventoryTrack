<%--
  Created by IntelliJ IDEA.
  User: kenny
  Date: 29/07/2016
  Time: 11:24
  To change this template use File | Settings | File Templates.
--%>
<nav class="navbar navbar-default">
    <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">Andela-X Supermarkets</a>
        </div>

        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

            <ul class="nav navbar-nav">
                <li><a>Welcome <security:authentication property="principal.username" /></a></li>
                <!--<li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>-->
            </ul>


        </div>
    </div>
</nav>
