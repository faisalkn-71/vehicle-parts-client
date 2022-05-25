import React from 'react';

const Blogs = () => {
    return (
        <div className='my-16'>
            <h1 className='text-2xl font-bold'>How will you improve the performance of a React Application?</h1>
            <br />
            <p>Here I described some ways to improve the performance of a React Application:
                <br />
                Keeping component state local where necessary. Memoizing React components to prevent unnecessary re-renders. Code-splitting in React using dynamic import(). Windowing or list virtualization in React. Lazy loading images in React. Using immutable data structures. Enable gzip compression on web server. Analyzing and optimizing your bebpack bundle bloat. Use CSS animations instead of JS animations</p>


                <br />
                <br />
                <br />


            <h1 className='text-2xl font-bold'>What are the different ways to manage a state in a React application?</h1>
            <br />
            <p>There are four main types of state manage in your React apps:

                <br />
                <br />

                <span className='font-bold'>Local state: </span>Local state is data we manage in one or another component.Local state is most often managed in React using the useState hook.

                <br />

                <span className='font-bold'>Global state: </span>Global state is data we manage across multiple components.Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.

                <br />

                <span className='font-bold'>Server state: </span>Data that comes from an external server that must be integrated with our UI state.Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.

                <br />

                <span className='font-bold'>URL state: </span>Data that exists on our URLs, including the pathname and query parameters.URL state is often missing as a category of state, but it is an important one.In many cases, a lot of major parts of our application rely upon accessing URL state. 
            </p>


            <br />
            <br />
            <br />


            <h1 className='text-2xl font-bold'>How does prototypical inheritance work?</h1>
            <br />
            <p>Every object with its methods and properties contains an internal and hidden property known as Prototype. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using proto.</p>

            <br />
            <br />
            <br />


            <h1 className='text-2xl font-bold'>What is a unit test? Why should write unit tests?</h1>
            <br />
            <p>Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.  The main objective of unit testing is to isolate written code to test and determine if it works as intended.

                <br />
                <br />

                Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>


                <br />
                <br />
                <br />


                <h1 className='text-2xl font-bold'>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h1>
                <br />
                <p>One should never set the state directly because of the following reasons:
                    <br />
                <br />
                1. If you update it directly, calling the setState() afterward may just replace the update you made.
                <br />
                2. When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.
                <br />
                3. You will lose control of the state across all components.</p>
            

        </div>
    );
};

export default Blogs;