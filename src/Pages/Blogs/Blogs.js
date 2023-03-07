import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='m-4'>
            <h1 className='text-center'>Blogs</h1>
            <div className='m-4'>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>What is cors?</Accordion.Header>
                        <Accordion.Body>
                            Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.
                            <br></br><br></br>
                            An example of a cross-origin request: the front-end JavaScript code served from https://domain-a.com uses XMLHttpRequest to make a request for https://domain-b.com/data.json. (Source: Mozilla)
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>What do we use firebase? What are the other options for authentication?</Accordion.Header>
                        <Accordion.Body>
                        Google Firebase is a Google-backed application development software that enables developers to develop iOS, Android and Web apps. Firebase provides tools for tracking analytics, reporting and fixing app crashes, creating marketing and product experiment. (Source: techtarget.com) Firebase includes authentication for web development.
                        <br></br><br></br>
                        Alternatives for Firebase for authentication can be: Kinsta, Parse, Kuzzle, AWS Amiplify, etc.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>How does private routing works?</Accordion.Header>
                        <Accordion.Body>
                        The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property. (Source: jasonwatmore.com)
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>What is node? How does node work?</Accordion.Header>
                        <Accordion.Body>
                        Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. (Source: codeacademy.com)
                        <br></br><br></br>
                        Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request. Node.js basically works on two concept- 1. Asynchronous, 2. Non-blocking I/O(Source: geeksforgeeks.com)</Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default Blogs;