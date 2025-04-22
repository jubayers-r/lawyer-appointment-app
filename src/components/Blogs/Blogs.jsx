import { useLoaderData } from "react-router";
import Articles from "./Articles";

const Blogs = () => {
  const articles = useLoaderData();
  return (
    <div className="w-9/11 mx-auto ">
      <img
        src="https://i.ibb.co.com/q3kWrWGq/pasted-image-0.png"
        alt=""
        className=" sm:w-[60%] mx-auto mt-10 mb-2 rounded-2xl"
      />
      <div className="md:my-10">
      <h3 className="text-2xl font-semibold sm:text-4xl lg:text-6xl text-center md:pb-5 pb-9">
        Learn, Build, Optimize, React
      </h3>
      <p className="text-center pb-5 2xl:w-[50%] hidden md:block mx-auto">
        Your go-to hub to learn the core concepts, build powerful interfaces,
        optimize performance, and master the modern React.js ecosystem – all in
        one place – ReactRack.
      </p>
      </div>
      <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2  gap-4">
        {
          articles.map(article => <Articles key={article.id} article={article}/>)
        }
      </div>
      <p className="text-center py-8 font-black text-2xl">Frequently Asked Questions</p>
      <div className="space-y-4">
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title font-semibold">
            What is useState and how does it work in React?
          </div>
          <div className="collapse-content text-sm">
            useState is a React Hook that lets us add a state variable to our
            component. In React, the useState Hook allows us to add state to
            functional components. useState returns an array with two values:
            the current state and a function to update it.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            What is the purpose of useEffect in React?
          </div>
          <div className="collapse-content text-sm">
            The useEffect Hook allows us to perform common side effects in
            function components. These side effects are tasks outside the
            component scope, such as fetching data, interacting with the DOM, or
            managing subscriptions. The useEffect Hook takes two arguments: a
            callback function that contains the side effect logic and an
            optional array of dependencies that controls when the effect runs.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            What is a custom hook in React and when should you use one?
          </div>
          <div className="collapse-content text-sm">
            A custom hook in React is a way to make reusable hooks using React's
            built-in hooks like useState, useEffect, etc. It can be created for
            specific needs without modifying React itself. You should use a
            custom hook when you're repeating the same logic across components.
            Creating and reusing a custom hook keeps the code cleaner and more
            maintainable.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            Difference between controlled and uncontrolled components. Which one
            is better?
          </div>
          <div className="collapse-content text-sm">
            Controlled components are managed by React state, providing more
            control and synchronization, while uncontrolled components delegate
            control to the DOM, offering flexibility and performance benefits in
            certain scenarios. Controlled components are generally recommended
            for most React applications because they offer better control,
            easier debugging, and improved maintainability—especially for
            complex forms.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            Tell us something about useFormStatus() in React.
          </div>
          <div className="collapse-content text-sm">
            useFormStatus is a Hook that gives us status information about the
            last form submission. It does not take any parameters but returns
            important data such as whether a submission is pending. This is
            useful for showing loading indicators or disabling buttons during
            form submission using the pending property..
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
