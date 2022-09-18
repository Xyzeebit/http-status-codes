/**
 * http-rest-codes, http-response-codes, http-sc, http-statuses
 * The status-code element is a three-digit integer code giving the 
 * result of the attempt to understand and satisfy the request.
 * 
 * 1xx (Informational): The request was received, continuing process
 * 
 * 2xx (Successful): The request was successfully received,
 * understood, and accepted
 * 
 * 3xx (Redirection): Further action needs to be taken in order to
 * complete the request
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

  /**
   * The 205 (Reset Content) status code indicates that the server has
   * fulfilled the request and desires that the user agent reset the
   * "document view", which caused the request to be sent, to its original
   * state as received from the origin server.
   *
   * This response is intended to support a common data entry use case
   * where the user receives content that supports data entry (a form,
   * notepad, canvas, etc.), enters or manipulates data in that space,
   * causes the entered data to be submitted in a request, and then the
   * data entry mechanism is reset for the next entry so that the user can
   * easily initiate another input action.
   *
   * Since the 205 status code implies that no additional content will be
   * provided, a server MUST NOT generate a payload in a 205 response.  In
   * other words, a server MUST do one of the following for a 205
   * response: a) indicate a zero-length body for the response by
   * including a Content-Length header field with a value of 0; b)
   * indicate a zero-length payload for the response by including a
   * Transfer-Encoding header field with a value of chunked and a message
   * body consisting of a single chunk of zero-length; or, c) close the
   * connection immediately after sending the blank line terminating the
   * header section.
   * @returns 205
   * @see https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.6
   */
  RESET_CONTENT: 205,

  /**
   * This response code is used when the Range header is sent from the
   * client to request only part of a resource.
   * @returns 206
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/206
   */
  PARTIAL_CONTENT: 206,

  /**
   * The 300 (Multiple Choices) status code indicates that the target
   * resource has more than one representation, each with its own more
   * specific identifier, and information about the alternatives is being
   * provided so that the user (or user agent) can select a preferred
   * representation by redirecting its request to one or more of those
   * identifiers.  In other words, the server desires that the user agent
   * engage in reactive negotiation to select the most appropriate
   * representation(s) for its needs 
   * (Section 3.4 https://datatracker.ietf.org/doc/html/rfc7231#section-3.4). 
   * If the server has a preferred choice, the server SHOULD generate a
   * Location header field containing a preferred choice's URI reference.
   * The user agent MAY use the Location field value for automatic
   * redirection.
   * 
   * For request methods other than HEAD, the server SHOULD generate a
   * payload in the 300 response containing a list of representation
   * metadata and URI reference(s) from which the user or user agent can
   * choose the one most preferred.  The user agent MAY make a selection
   * from that list automatically if it understands the provided media
   * type.  A specific format for automatic selection is not defined by
   * this specification because HTTP tries to remain orthogonal to the
   * definition of its payloads.  In practice, the representation is
   * provided in some easily parsed format believed to be acceptable to
   * the user agent, as determined by shared design or content
   * negotiation, or in some commonly accepted hypertext format.
   * 
   * A 300 response is cacheable by default; i.e., unless otherwise
   * indicated by the method definition or explicit cache controls (see
   * Section 4.2.2 of [RFC7234] https://datatracker.ietf.org/doc/html/rfc7234#section-4.2.2).

   * @returns 300
   * @see https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.1
   */
  MULTIPLE_CHOICES: 300,

  /**
   * The 301 (Moved Permanently) status code indicates that the target
   * resource has been assigned a new permanent URI and any future
   * references to this resource ought to use one of the enclosed URIs.
   * Clients with link-editing capabilities ought to automatically re-link
   * references to the effective request URI to one or more of the new
   * references sent by the server, where possible.
   *
   * The server SHOULD generate a Location header field in the response
   * containing a preferred URI reference for the new permanent URI.  The
   * user agent MAY use the Location field value for automatic
   * redirection.  The server's response payload usually contains a short
   * hypertext note with a hyperlink to the new URI(s).
   *
   *  Note: For historical reasons, a user agent MAY change the request
   *  method from POST to GET for the subsequent request.  If this
   *  behavior is undesired, the 307 (Temporary Redirect) status code
   *  can be used instead.
   *
   * A 301 response is cacheable by default; i.e., unless otherwise
   * indicated by the method definition or explicit cache controls (see
   * Section 4.2.2 of [RFC7234] https://datatracker.ietf.org/doc/html/rfc7234#section-4.2.2).
   * @returns 301
   * @see https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.2
   */
  MOVED_PERMANENTLY: 301,

  /**
   * The 302 (Found) status code indicates that the target resource
   * resides temporarily under a different URI.  Since the redirection
   * might be altered on occasion, the client ought to continue to use the
   * effective request URI for future requests.
   *
   * The server SHOULD generate a Location header field in the response
   * containing a URI reference for the different URI.  The user agent MAY
   * use the Location field value for automatic redirection.  The server's
   * response payload usually contains a short hypertext note with a
   * hyperlink to the different URI(s).
   *
   * Note: For historical reasons, a user agent MAY change the request
   * method from POST to GET for the subsequent request.  If this
   * behavior is undesired, the 307 (Temporary Redirect) status code
   * can be used instead.
   *
   * @returns 302
   * @see https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.3
   */
  FOUND: 302,

  /**
   *  The 303 (See Other) status code indicates that the server is
   * redirecting the user agent to a different resource, as indicated by a
   * URI in the Location header field, which is intended to provide an
   * indirect response to the original request.  A user agent can perform
   * a retrieval request targeting that URI (a GET or HEAD request if
   * using HTTP), which might also be redirected, and present the eventual
   * result as an answer to the original request.  Note that the new URI
   * in the Location header field is not considered equivalent to the
   * effective request URI.
   *
   * This status code is applicable to any HTTP method.  It is primarily
   * used to allow the output of a POST action to redirect the user agent
   * to a selected resource, since doing so provides the information
   * corresponding to the POST response in a form that can be separately
   * identified, bookmarked, and cached, independent of the original
   * request.
   *
   * A 303 response to a GET request indicates that the origin server does
   * not have a representation of the target resource that can be
   * transferred by the server over HTTP.  However, the Location field
   * value refers to a resource that is descriptive of the target
   * resource, such that making a retrieval request on that other resource
   * might result in a representation that is useful to recipients without
   * implying that it represents the original target resource.  Note that
   * answers to the questions of what can be represented, what
   * representations are adequate, and what might be a useful description
   * are outside the scope of HTTP.
   *
   * Except for responses to a HEAD request, the representation of a 303
   * response ought to contain a short hypertext note with a hyperlink to
   * the same URI reference provided in the Location header field.
   *
   * @returns 303
   * @see https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.4
   */
  SEE_OTHER: 303,

  /**
   * This is used for caching purposes. It tells the client that the response has
   * not been modified, so the client can continue to use the same cached version
   * of the response.
   *
   * @returns 304
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/304
   */
  NOT_MODIFIED: 304,

  /**
   * @deprecated
   * The 305 (Use Proxy) status code was defined in a previous version of
   * this specification and is now deprecated.
   * @returns 305
   */
  USE_PROXY: 305,

  /**
   * This response code is no longer used; it is just reserved. It was used
   * in a previous version of the HTTP/1.1 specification.
   * @reserved
   * @see https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.6
   */
  UNUSED: 306,

  /**
   * The 307 (Temporary Redirect) status code indicates that the target
   * resource resides temporarily under a different URI and the user agent
   * MUST NOT change the request method if it performs an automatic
   * redirection to that URI.  Since the redirection can change over time,
   * the client ought to continue using the original effective request URI
   * for future requests.
   *
   * The server SHOULD generate a Location header field in the response
   * containing a URI reference for the different URI.  The user agent MAY
   * use the Location field value for automatic redirection.  The server's
   * response payload usually contains a short hypertext note with a
   * hyperlink to the different URI(s).
   *
   * Note: This status code is similar to 302 (Found), except that it
   * does not allow changing the request method from POST to GET.  This
   * specification defines no equivalent counterpart for 301 (Moved
   * Permanently) ([RFC7238] https://datatracker.ietf.org/doc/html/rfc7238, however, defines the status code 308
   * (Permanent Redirect) for this purpose).
   *
   * @returns 307
   * @see https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.7
   */
  TEMPORARY_REDIRECT: 307,

  /**
   * The server sends this response to direct the client to get the requested
   * resource at another URI with same method that was used in the prior
   * request. This has the same semantics as the 302 Found HTTP response code,
   * with the exception that the user agent must not change the HTTP method used:
   * if a POST was used in the first request, a POST must be used in the second request.
   *
   * @returns 308
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/308
   */
  PERMANENT_REDIRECT: 308,

  /**
   * The 400 (Bad Request) status code indicates that the server cannot or
   * will not process the request due to something that is perceived to be
   * a client error (e.g., malformed request syntax, invalid request
   * message framing, or deceptive request routing).
   *
   * @returns 400
   * @see https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.1
   */
  BAD_REQUEST: 400,

  /**
   * Although the HTTP standard specifies "unauthorized", semantically this
   * response means "unauthenticated". That is, the client must authenticate
   * itself to get the requested response.
   *
   * @returns 401
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401
   */
  UNAUTHORIZED: 401,

  /**
   * The 402 (Payment Required) status code is reserved for future use.
   *
   * The initial aim for creating this code was using it for digital payment
   * systems, however this status code is used very rarely and no standard
   * convention exists. https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/402
   * @returns 402
   * @see https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.2
   */
  PAYMENT_REQUIRE: 402,

  /**
   * The 403 (Forbidden) status code indicates that the server understood
   * the request but refuses to authorize it.  A server that wishes to
   * make public why the request has been forbidden can describe that
   * reason in the response payload (if any).
   *
   * If authentication credentials were provided in the request, the
   * server considers them insufficient to grant access.  The client
   * SHOULD NOT automatically repeat the request with the same
   * credentials.  The client MAY repeat the request with new or different
   * credentials.  However, a request might be forbidden for reasons
   * unrelated to the credentials.
   *
   * An origin server that wishes to "hide" the current existence of a
   * forbidden target resource MAY instead respond with a status code of
   * 404 (Not Found).
   *
   * @returns 403
   * @see https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.3
   */
  FORBIDDEN: 403,

  /**
   * The 404 (Not Found) status code indicates that the origin server did
   * not find a current representation for the target resource or is not
   * willing to disclose that one exists.  A 404 status code does not
   * indicate whether this lack of representation is temporary or
   * permanent; the 410 (Gone) status code is preferred over 404 if the
   * origin server knows, presumably through some configurable means, that
   * the condition is likely to be permanent.
   *
   * A 404 response is cacheable by default; i.e., unless otherwise
   * indicated by the method definition or explicit cache controls
   * https://datatracker.ietf.org/doc/html/rfc7234#section-4.2.2
   *
   * @returns 404
   * @see https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.4
   */
  NOT_FOUND: 404,

  /**
   * The 405 (Method Not Allowed) status code indicates that the method
   * received in the request-line is known by the origin server but not
   * supported by the target resource.  The origin server MUST generate an
   * Allow header field in a 405 response containing a list of the target
   * resource's currently supported methods.
   *
   * A 405 response is cacheable by default; i.e., unless otherwise
   * indicated by the method definition or explicit cache controls (see
   * https://datatracker.ietf.org/doc/html/rfc7234#section-4.2.2).
   *
   * @returns 405
   * @see https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.5
   */
  METHOD_NOT_ALLOWED: 405,

  /**
   * The 406 (Not Acceptable) status code indicates that the target
   * resource does not have a current representation that would be
   * acceptable to the user agent, according to the proactive negotiation
   * header fields received in the request (Section 5.3)
   * https://datatracker.ietf.org/doc/html/rfc7231#section-5.3, and
   * the server is unwilling to supply a default representation.
   *
   * The server SHOULD generate a payload containing a list of available
   * representation characteristics and corresponding resource identifiers
   * from which the user or user agent can choose the one most
   * appropriate.  A user agent MAY automatically select the most
   * appropriate choice from that list.  However, this specification does
   * not define any standard for such automatic selection, as described in
   * Section 6.4.1. https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.1
   *
   * @returns 406
   * @see https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.6
   */
  NOT_ACCEPTED: 406,

  /**
   * This is similar to 401 Unauthorized but authentication is needed to be done by a proxy.
   * @returns 407
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/407
   */
  PROXY_AUTHENTICATION_REQUIRED: 407,

  /**
   * The 408 (Request Timeout) status code indicates that the server did
   * not receive a complete request message within the time that it was
   * prepared to wait.  A server SHOULD send the "close" connection option
   * (Section 6.1 of [RFC7230])https://datatracker.ietf.org/doc/html/rfc7230#section-6.1
   * in the response, since 408 implies that the server has decided to close the
   * connection rather than continue waiting.  If the client has an outstanding
   * request in transit, the client MAY repeat that request on a new connection.
   *
   * @returns 408
   * @see https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.7
   */
  REQUEST_TIMEOUT: 408,

  /**
   * The 409 (Conflict) status code indicates that the request could not
   * be completed due to a conflict with the current state of the target
   * resource.  This code is used in situations where the user might be
   * able to resolve the conflict and resubmit the request.  The server
   * SHOULD generate a payload that includes enough information for a user
   * to recognize the source of the conflict.
   *
   * Conflicts are most likely to occur in response to a PUT request.  For
   * example, if versioning were being used and the representation being
   * PUT included changes to a resource that conflict with those made by
   * an earlier (third-party) request, the origin server might use a 409
   * response to indicate that it can't complete the request.  In this
   * case, the response representation would likely contain information
   * useful for merging the differences based on the revision history.
   *
   * @returns 409
   * @see https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.8
   */
  CONFLICT: 409,

  /**
   * The 410 (Gone) status code indicates that access to the target
   * resource is no longer available at the origin server and that this
   * condition is likely to be permanent.  If the origin server does not
   * know, or has no facility to determine, whether or not the condition
   * is permanent, the status code 404 (Not Found) ought to be used instead.
   *
   * The 410 response is primarily intended to assist the task of web
   * maintenance by notifying the recipient that the resource is
   * intentionally unavailable and that the server owners desire that
   * remote links to that resource be removed.  Such an event is common
   * for limited-time, promotional services and for resources belonging to
   * individuals no longer associated with the origin server's site.  It
   * is not necessary to mark all permanently unavailable resources as
   * "gone" or to keep the mark for any length of time -- that is left to
   * the discretion of the server owner.
   *
   * A 410 response is cacheable by default; i.e., unless otherwise
   * indicated by the method definition or explicit cache controls (see
   * Section 4.2.2 of [RFC7234] https://datatracker.ietf.org/doc/html/rfc7234#section-4.2.2).
   *
   * @returns 410
   * @see https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.9
   */
  GONE: 410,

  /**
   * The 411 (Length Required) status code indicates that the server
   * refuses to accept the request without a defined Content-Length
   * (Section 3.3.2 of [RFC7230] https://datatracker.ietf.org/doc/html/rfc7230#section-3.3.2).
   * The client MAY repeat the request if
   * it adds a valid Content-Length header field containing the length of
   * the message body in the request message.
   *
   * @returns 411
   * @see https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.10
   */
  LENGTH_REQUIRED: 411,

  /**
   * The client has indicated preconditions in its headers which the server does not meet.
   * @returns 412
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/412
   */
  PRECONDITION_FAILED: 412,

  /**
   * The 413 (Payload Too Large) status code indicates that the server is
   * refusing to process a request because the request payload is larger
   * than the server is willing or able to process.  The server MAY close
   * the connection to prevent the client from continuing the request.
   *
   * If the condition is temporary, the server SHOULD generate a
   * Retry-After header field to indicate that it is temporary and after
   * what time the client MAY try again.
   *
   * @returns 413
   * @see https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.11
   */
  PAYLOAD_TOO_LARGE: 413,

  /**
   * The 414 (URI Too Long) status code indicates that the server is
   * refusing to service the request because the request-target (Section
   * 5.3 of [RFC7230] https://datatracker.ietf.org/doc/html/rfc7230#section-5.3) 
   * is longer than the server is willing to interpret.
   * This rare condition is only likely to occur when a client has
   * improperly converted a POST request to a GET request with long query
   * information, when the client has descended into a "black hole" of
   * redirection (e.g., a redirected URI prefix that points to a suffix of
   * itself) or when the server is under attack by a client attempting to
   * exploit potential security holes.
   * 
   * A 414 response is cacheable by default; i.e., unless otherwise
   * indicated by the method definition or explicit cache controls (see
   * Section 4.2.2 of [RFC7234] https://datatracker.ietf.org/doc/html/rfc7234#section-4.2.2).

   * @returns 414
   * @see https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.12
   */
  URI_TOO_LONG: 414,

  /**
   * The 415 (Unsupported Media Type) status code indicates that the
   * origin server is refusing to service the request because the payload
   * is in a format not supported by this method on the target resource.
   * The format problem might be due to the request's indicated
   * Content-Type or Content-Encoding, or as a result of inspecting the
   * data directly.
   *
   * @returns 415
   * @see https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.13
   */
  UNSUPPORTED_MEDIA_TYPE: 415,

  /**
   * The range specified by the Range header field in the request cannot be fulfilled.
   * It's possible that the range is outside the size of the target URI's data.
   * @returns 416
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/416
   */
  RANGE_NOT_SATISFIABLE: 416,

  /**
   * The 417 (Expectation Failed) status code indicates that the
   * expectation given in the request's Expect header field
   * (Section 5.1.1 https://datatracker.ietf.org/doc/html/rfc7231#section-5.1.1)
   * could not be met by at least one of the inbound servers.
   *
   * @returns 417
   * @see https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.14
   */
  EXPECTATION_FAILED: 417,

  /**
   * The server refuses the attempt to brew coffee with a teapot.
   * @returns 418
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/418
   */
  IM_A_TEAPOT: 418,

  /**
   * The 426 (Upgrade Required) status code indicates that the server
   * refuses to perform the request using the current protocol but might
   * be willing to do so after the client upgrades to a different
   * protocol.  The server MUST send an Upgrade header field in a 426
   * response to indicate the required protocol(s) (Section 6.7 of
   * [RFC7230] https://datatracker.ietf.org/doc/html/rfc7230#section-6.7).
   *
   * Example:
   *
   * - HTTP/1.1 426 Upgrade Required
   * - Upgrade: HTTP/3.0
   * - Connection: Upgrade
   * - Content-Length: 53
   * - Content-Type: text/plain
   *
   * This service requires use of the HTTP/3.0 protocol.
   *
   * @returns 426
   * @see https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.15
   */
  UPGRADE_REQUIRED: 426,

  /**
   * The 500 (Internal Server Error) status code indicates that the server
   * encountered an unexpected condition that prevented it from fulfilling
   * the request.
   * @returns 500
   * @see https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.1
   */
  INTERNAL_SERVER_ERROR: 500,

  /**
   * The 501 (Not Implemented) status code indicates that the server does
   * not support the functionality required to fulfill the request.  This
   * is the appropriate response when the server does not recognize the
   * request method and is not capable of supporting it for any resource.
   *
   * A 501 response is cacheable by default; i.e., unless otherwise
   * indicated by the method definition or explicit cache controls (see
   * Section 4.2.2 of [RFC7234] https://datatracker.ietf.org/doc/html/rfc7234#section-4.2.2).
   *
   * @returns 501
   * @see https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.2
   */
  NOT_IMPLEMENTED: 501,

  /**
   * The 502 (Bad Gateway) status code indicates that the server, while
   * acting as a gateway or proxy, received an invalid response from an
   * inbound server it accessed while attempting to fulfill the request.
   * @returns 502
   * @see https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.3
   */
  BAD_GATEWAY: 502,

  /**
   * The 503 (Service Unavailable) status code indicates that the server
   * is currently unable to handle the request due to a temporary overload
   * or scheduled maintenance, which will likely be alleviated after some
   * delay.  The server MAY send a Retry-After header field
   * (Section 7.1.3 https://datatracker.ietf.org/doc/html/rfc7231#section-7.1.3)
   * to suggest an appropriate amount of time for the client to wait before retrying
   * the request.
   *
   * - Note: The existence of the 503 status code does not imply that a
   * server has to use it when becoming overloaded.  Some servers might
   * simply refuse the connection.
   * @returns 503
   * @see https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.4
   */
  SERVICE_UNAVAILABLE: 503,

  /**
   * The 504 (Gateway Timeout) status code indicates that the server,
   * while acting as a gateway or proxy, did not receive a timely response
   * from an upstream server it needed to access in order to complete the
   * request.
   * @returns 504
   * @see https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.5
   */
  GATEWAY_TIMEOUT: 504,

  /**
   * The 505 (HTTP Version Not Supported) status code indicates that the
   * server does not support, or refuses to support, the major version of
   * HTTP that was used in the request message.  The server is indicating
   * that it is unable or unwilling to complete the request using the same
   * major version as the client, as described in Section 2.6 of
   * [RFC7230] https://datatracker.ietf.org/doc/html/rfc7230#section-2.6, 
   * other than with this error message.  The server SHOULD
   * generate a representation for the 505 response that describes why
   * that version is not supported and what other protocols are supported
   * by that server.
   * 
   * @returns 505
   * @see https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.6
   */
  HTTP_VERSION_NOT_SUPPORTED: 505,
};

const code = this.statusCode.SERVICE_UNAVAILABLE;