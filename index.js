/**
 * The status-code element is a three-digit integer code giving the 
 * result of the attempt to understand and satisfy the request.
 * 
 * 1xx (Informational): The request was received, continuing process
 * 
 * 2xx (Successful): The request was successfully received,
 * understood, and accepted
 * 
 * 4xx (Client Error): The request contains bad syntax or cannot be
 * fulfilled
 * 
 * 5xx (Server Error): The server failed to fulfill an apparently
 * valid request
 * 
 * | 100  | Continue                      
   | 101  | Switching Protocols           
   | 200  | OK                            
   | 201  | Created                       
   | 202  | Accepted                      
   | 203  | Non-Authoritative Information 
   | 204  | No Content                    
   | 205  | Reset Content                 
   | 206  | Partial Content               
   | 300  | Multiple Choices              
   | 301  | Moved Permanently             
   | 302  | Found                         
   | 303  | See Other                     
   | 304  | Not Modified                  
   | 305  | Use Proxy                     
   | 307  | Temporary Redirect            
   | 400  | Bad Request                   
   | 401  | Unauthorized                  
   | 402  | Payment Required              
   | 403  | Forbidden                     
   | 404  | Not Found                     
   | 405  | Method Not Allowed            
   | 406  | Not Acceptable                
   | 407  | Proxy Authentication Required 
   | 408  | Request Timeout               
   | 409  | Conflict                      
   | 410  | Gone                          
   | 411  | Length Required               
   | 412  | Precondition Failed           
   | 413  | Payload Too Large             
   | 414  | URI Too Long                  
   | 415  | Unsupported Media Type        
   | 416  | Range Not Satisfiable         
   | 417  | Expectation Failed            
   | 426  | Upgrade Required              
   | 500  | Internal Server Error         
   | 501  | Not Implemented               
   | 502  | Bad Gateway                   
   | 503  | Service Unavailable           
   | 504  | Gateway Timeout               
   | 505  | HTTP Version Not Supported    
   
 */

exports.statusCode = {
  /**
   * The 100 (Continue) status code indicates that the initial part of a
   * request has been received and has not yet been rejected by the
   * server.  The server intends to send a final response after the
   * request has been fully received and acted upon.
   */
  CONTINUE: 100,
  SWITCHING_PROTOCOLS: 101,
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NON_AUTHORITATIVE_INFORMATION: 203,
  NO_CONTENT: 204,
  RESET_CONTENT: 205,
  PARTIAL_CONTENT: 206,

  MULTIPLE_CHOICES: 300,
  MOVED_PERMANENTLY: 301,
  FOUND: 302,
  SEE_OTHER: 303,
  NOT_MODIFIED: 304,
  /**
   * @deprecated
   * The 305 (Use Proxy) status code was defined in a previous version of
   * this specification and is now deprecated (Appendix B).
   * @returns 305
   */
  USE_PROXY: 305,
  TEMPORARY_REDIRECT: 307,
  
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRE: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTED: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  UPGRADE_REQUIRED: 418,

  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505

};

const code = this.statusCode.USE_PROXY;