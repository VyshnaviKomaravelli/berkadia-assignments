SOAP VS REST
 SOAP – SOAP is a protocol which was designed before REST and came into the picture. The main idea behind designing SOAP was to ensure that programs built on different platforms and programming languages could exchange data in an easy manner.

REST – This was designed specifically for working with components such as media components, files, or even objects on a particular hardware device. Any web service that is defined on the principles of REST can be called a RestFul web service. A Restful service would use the normal HTTP verbs of GET, POST, PUT and DELETE for working with the required components.

Below are the main differences between SOAP and REST


SOAP
*SOAP stands for Simple Object Access Protocol
*SOAP is a protocol. SOAP was designed with a specification. It includes a WSDL file which has the required information on what the web service does in addition to the location of the web service.
*SOAP cannot make use of REST since SOAP is a protocol and REST is an architectural pattern.
*SOAP uses service interfaces to expose its functionality to client applications. In SOAP, the WSDL file provides the client with the necessary information which can be used to understand what services the web service can offer.
*SOAP requires more bandwidth for its usage. Since SOAP Messages contain a lot of information inside of it, the amount of data transfer using SOAP is generally a lot.
EG:<?xml version="1.0"?>
<SOAP-ENV:Envelope 
xmlns:SOAP-ENV
="http://www.w3.org/2001/12/soap-envelope" 
SOAP-ENV:encodingStyle
=" http://www.w3.org/2001/12/soap-encoding">
<soap:Body>
 <Demo.guru99WebService
 xmlns="http://tempuri.org/">
   <EmployeeID>int</EmployeeID>
   </Demo.guru99WebService>
 </soap:Body>
</SOAP-ENV:Envelope>
SOAP can only work with XML format. As seen from SOAP messages, all data passed is in XML format.
=>SOAP IS ADVISABLE OVER REST IN CASES OF:
*Asynchronous processing and subsequent invocation
*A Formal means of communication
*Stateful operations

REST

REST stands for Representational State Transfer
=>REST is an Architectural style in which a web service can only be treated as a RESTful service if it follows the constraints of being
*Client Server
*Stateless
*Cacheable
*Layered System
*Uniform Interface
=>REST can make use of SOAP as the underlying protocol for web services, because in the end it is just an architectural pattern.
=>REST use Uniform Service locators to access to the components on the hardware device. 
=>REST does not need much bandwidth when requests are sent to the server. REST messages mostly just consist of JSON messages. Below is an example of a JSON message passed to a web server. You can see that the size of the message is comparatively smaller to SOAP.
EG:{"city":"Mumbai","state":"Maharastra"}
=>REST permits different data format such as Plain text, HTML, XML, JSON, etc. But the most preferred format for transferring data is JSON.
=>REST IS ADVISABLE OVER SOAP IN CASES OF:
*Limited resources and bandwidth
*Statelessness
*Caching
