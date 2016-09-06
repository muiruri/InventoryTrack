
HOW TO INSTALL AND CONFIGURE PREREQUISITE DEPENDENCIES

The system requires the following softwares
  * Java JDK 1.7+
  * Maven v3.3
  * NodeJS - v4.4.7
  * MySql - v5.6.16+

To install dependencies and run the application, run the following commands from the application root folder

	bower install
	mvn package -Pfe,fetools
	mvn tomcat7:run -Dmaven.tomcat.port=<>



