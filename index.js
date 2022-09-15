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
   *
   * When the request contains an Expect header field that includes a
   * 100-continue expectation, the 100 response indicates that the server
   * wishes to receive the request payload body.
   *
   * The client ought to continue sending the request and discard the 100 response.
   * If the request did not contain an Expect header field containing the
   * 100-continue expectation, the client can simply discard this interim
   * response.
   *
   * @returns 100
   * @see https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1
   */
  CONTINUE: 100,

  /**
   * The 101 (Switching Protocols) status code indicates that the server
   * understands and is willing to comply with the client's request, via
   * the Upgrade header field, for a change in the application protocol
   * being used on this connection.
   *
   * The server MUST generate an Upgrade header field in the response
   * that indicates which protocol(s) will be switched to immediately after
   * the empty line that terminates the 101 response.
   *
   * It is assumed that the server will only agree to switch protocols
   * when it is advantageous to do so.  For example, switching to a newer
   * version of HTTP might be advantageous over older versions, and
   * switching to a real-time, synchronous protocol might be advantageous
   * when delivering resources that use such features.
   * @returns 101
   * @see https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.2
   */
  SWITCHING_PROTOCOLS: 101,

  /**
   * The 200 (OK) status code indicates that the request has succeeded.
   * The payload sent in a 200 response depends on the request method.
   * For the methods defined by this specification, the intended meaning
   * of the payload can be summarized as:
   *
   *   GET  a representation of the target resource;
   *
   *   HEAD  the same representation as GET, but without the representation data;
   *
   *   POST  a representation of the status of, or results obtained from, the action;
   *
   *   PUT, DELETE  a representation of the status of the action;
   *
   *   OPTIONS  a representation of the communications options;
   *
   *   TRACE  a representation of the request message as received by the end server.
   *
   * Aside from responses to CONNECT, a 200 response always has a payload,
   * though an origin server MAY generate a payload body of zero length.
   * If no payload is desired, an origin server ought to send 204 (No Content)
   * instead.  For CONNECT, no payload is allowed because the
   * successful result is a tunnel, which begins immediately after the 200
   * response header section.
   *
   * A 200 response is cacheable by default; i.e., unless otherwise
   * indicated by the method definition or explicit cache controls
   *
   * @returns 200
   * @see https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.1
   */
  OK: 200,

  /**
   * The 201 (Created) status code indicates that the request has been
   * fulfilled and has resulted in one or more new resources being
   * created.  The primary resource created by the request is identified
   * by either a Location header field in the response or, if no Location
   * field is received, by the effective request URI.
   *
   * The 201 response payload typically describes and links to the
   * resource(s) created.  See Section 7.2 for a discussion of the meaning
   * and purpose of validator header fields, such as ETag and
   * Last-Modified, in a 201 response.
   *
   * @returns 201
   * @see https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.2
   */
  CREATED: 201,

  /**
   * The 202 (Accepted) status code indicates that the request has been
   * accepted for processing, but the processing has not been completed.
   * The request might or might not eventually be acted upon, as it might
   * be disallowed when processing actually takes place.  There is no
   * facility in HTTP for re-sending a status code from an asynchronous
   * operation.
   *
   * The 202 response is intentionally noncommittal.  Its purpose is to
   * allow a server to accept a request for some other process (perhaps a
   * batch-oriented process that is only run once per day) without
   * requiring that the user agent's connection to the server persist
   * until the process is completed.  The representation sent with this
   * response ought to describe the request's current status and point to
   * (or embed) a status monitor that can provide the user with an
   * estimate of when the request will be fulfilled.
   *
   * @returns 202
   * @see https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.3
   */
  ACCEPTED: 202,

  /**
   * The 203 (Non-Authoritative Information) status code indicates that
   * the request was successful but the enclosed payload has been modified
   * from that of the origin server's 200 (OK) response by a transforming
   * proxy (Section 5.7.2 of [RFC7230] https://datatracker.ietf.org/doc/html/rfc7230#section-5.7.2).
   * This status code allows the proxy to notify recipients when a transformation
   * has been applied, since that knowledge might impact later decisions regarding
   * the content.  For example, future cache validation requests for the
   * content might only be applicable along the same request path (through the same proxies).
   *
   * The 203 response is similar to the Warning code of 214 Transformation
   * Applied (Section 5.5 of [RFC7234] https://datatracker.ietf.org/doc/html/rfc7234#section-5.5), which has the advantage of being
   * applicable to responses with any status code.
   *
   *  A 203 response is cacheable by default; i.e., unless otherwise
   * indicated by the method definition or explicit cache controls (see
   * Section 4.2.2 of [RFC7234] https://datatracker.ietf.org/doc/html/rfc7234#section-4.2.2).
   *
   * @returns 203
   * @see https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.4
   */
  NON_AUTHORITATIVE_INFORMATION: 203,

  /**
   * The 204 (No Content) status code indicates that the server has
   * successfully fulfilled the request and that there is no additional
   * content to send in the response payload body.  Metadata in the
   * response header fields refer to the target resource and its selected
   * representation after the requested action was applied.
   *
   * For example, if a 204 status code is received in response to a PUT
   * request and the response contains an ETag header field, then the PUT
   * was successful and the ETag field-value contains the entity-tag for
   * the new representation of that target resource.
   *
   * The 204 response allows a server to indicate that the action has been
   * successfully applied to the target resource, while implying that the
   * user agent does not need to traverse away from its current "document
   * view" (if any).  The server assumes that the user agent will provide
   * some indication of the success to its user, in accord with its own
   * interface, and apply any new or updated metadata in the response to
   * its active representation.
   *
   * For example, a 204 status code is commonly used with document editing
   * interfaces corresponding to a "save" action, such that the document
   * being saved remains available to the user for editing.  It is also
   * frequently used with interfaces that expect automated data transfers
   * to be prevalent, such as within distributed version control systems.
   *
   * A 204 response is terminated by the first empty line after the header
   * fields because it cannot contain a message body.
   *
   * A 204 response is cacheable by default; i.e., unless otherwise
   * indicated by the method definition or explicit cache controls (see
   * Section 4.2.2 of [RFC7234] https://datatracker.ietf.org/doc/html/rfc7234#section-4.2.2 ).
   *
   * @returns 204
   * @see https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.5
   */
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
   * this specification and is now deprecated.
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
  HTTP_VERSION_NOT_SUPPORTED: 505,
};

const code = this.statusCode.NO_CONTENT;